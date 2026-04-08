'use client'
import React, {
    useEffect, useState, useCallback, useMemo, useRef
} from 'react'
import { supabase } from '../lib/supabase'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Seat {
    id: number
    table_number: number
    seat_number: number
    guest_name: string
}

type View = 'list' | 'table' | 'map'

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = '#b5813a'       // warm gold
const ACCENT_LIGHT = '#f5ecd7'
const BG = '#faf9f7'
const CARD = '#ffffff'
const BORDER = '#e8e2d9'
const TEXT = '#1a1714'
const MUTED = '#8a7f74'
const GREEN = '#2d6a4f'
const GREEN_LIGHT = '#d8f3dc'
const RED = '#9b2226'
const RED_LIGHT = '#ffe5e5'

// Table positions for the mini-map (normalized 0–1)
const TABLE_POSITIONS: Record<number, [number, number]> = {
    5: [0.05, 0.05], 4: [0.05, 0.10], 1: [0.05, 0.15],
    2: [0.05, 0.60], 3: [0.05, 0.70], 6: [0.20, 0.05],
    7: [0.30, 0.05], 9: [0.20, 0.15], 10: [0.30, 0.15],
    8: [0.55, 0.05], 11: [0.65, 0.05], 12: [0.75, 0.05],
    13: [0.85, 0.05], 15: [0.65, 0.15], 16: [0.75, 0.15],
    14: [0.85, 0.15], 18: [0.55, 0.20], 19: [0.65, 0.25],
    20: [0.75, 0.25], 17: [0.85, 0.25], 25: [0.55, 0.29],
    22: [0.65, 0.35], 23: [0.75, 0.35], 21: [0.85, 0.35],
    26: [0.65, 0.45], 27: [0.75, 0.45], 24: [0.85, 0.45],
    32: [0.55, 0.55], 29: [0.65, 0.55], 30: [0.75, 0.55],
    28: [0.85, 0.55], 33: [0.65, 0.65], 34: [0.75, 0.65],
    31: [0.85, 0.65], 36: [0.55, 0.75], 37: [0.65, 0.75],
    38: [0.75, 0.75], 35: [0.85, 0.75], 39: [0.65, 0.85],
    40: [0.75, 0.85], 41: [0.85, 0.85],
}

const ALL_TABLE_NUMBERS = Object.keys(TABLE_POSITIONS).map(Number).sort((a, b) => a - b)

// ─── Utilities ────────────────────────────────────────────────────────────────

function seats2occupancy(seats: Seat[]) {
    const filled = seats.filter(s => s.guest_name.trim()).length
    return { filled, total: seats.length }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// Pill tag
function Tag({ children, color = ACCENT }: { children: React.ReactNode; color?: string }) {
    return (
        <span style={{
            display: 'inline-flex', alignItems: 'center',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.05em',
            padding: '2px 7px', borderRadius: 20,
            background: color === ACCENT ? ACCENT_LIGHT : GREEN_LIGHT,
            color: color === ACCENT ? ACCENT : GREEN,
            textTransform: 'uppercase',
        }}>
            {children}
        </span>
    )
}

// Occupancy bar
function OccupancyBar({ filled, total }: { filled: number; total: number }) {
    const pct = total === 0 ? 0 : Math.round((filled / total) * 100)
    const full = filled === total && total > 0
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
                flex: 1, height: 4, borderRadius: 2,
                background: BORDER, overflow: 'hidden',
            }}>
                <div style={{
                    height: '100%', borderRadius: 2,
                    width: `${pct}%`,
                    background: full ? GREEN : ACCENT,
                    transition: 'width 0.4s ease',
                }} />
            </div>
            <span style={{ fontSize: 11, color: MUTED, minWidth: 32, textAlign: 'right' }}>
                {filled}/{total}
            </span>
        </div>
    )
}

// ─── Table List Card ──────────────────────────────────────────────────────────

const TableCard = React.memo(function TableCard({
    tableNumber, seats, onPress, swapSeat,
}: {
    tableNumber: number
    seats: Seat[]
    onPress: () => void
    swapSeat: Seat | null
}) {
    const { filled, total } = seats2occupancy(seats)
    const hasPendingSwap = swapSeat && seats.some(s => s.id === swapSeat.id)

    return (
        <button
            onClick={onPress}
            style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: hasPendingSwap ? ACCENT_LIGHT : CARD,
                border: `1.5px solid ${hasPendingSwap ? ACCENT : BORDER}`,
                borderRadius: 14, padding: '14px 16px',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'transform 0.1s, box-shadow 0.1s',
                boxShadow: hasPendingSwap ? `0 0 0 3px ${ACCENT}33` : 'none',
            }}
            onTouchStart={e => (e.currentTarget.style.transform = 'scale(0.985)')}
            onTouchEnd={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: TEXT, fontFamily: 'Georgia, serif' }}>
                        Маса {tableNumber}
                    </span>
                    {hasPendingSwap && <Tag>swap here</Tag>}
                    {filled === total && total > 0 && <Tag color={GREEN}>full</Tag>}
                </div>
                <span style={{ fontSize: 18, color: MUTED }}>›</span>
            </div>
            <OccupancyBar filled={filled} total={total} />
        </button>
    )
})

// ─── Seat Row (inside table detail) ──────────────────────────────────────────

function SeatRow({
    seat, onTap, onLongPress, isSwapSource, isSwapTarget, swapSeat,
}: {
    seat: Seat
    onTap: (s: Seat) => void
    onLongPress: (s: Seat) => void
    isSwapSource: boolean
    isSwapTarget: boolean
    swapSeat: Seat | null
}) {
    const longPressRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const hasSeat = seat.guest_name.trim().length > 0

    const startLP = useCallback(() => {
        longPressRef.current = setTimeout(() => onLongPress(seat), 550)
    }, [seat, onLongPress])
    const cancelLP = useCallback(() => {
        if (longPressRef.current) clearTimeout(longPressRef.current)
    }, [])

    let bg = hasSeat ? GREEN_LIGHT : '#f7f5f2'
    let border = hasSeat ? '#9dd4a8' : BORDER
    let textColor = hasSeat ? GREEN : MUTED

    if (isSwapSource) { bg = ACCENT_LIGHT; border = ACCENT; textColor = ACCENT }
    if (isSwapTarget) { bg = '#fff0e0'; border = '#e6a83a'; textColor = '#a0620a' }

    return (
        <button
            onClick={() => onTap(seat)}
            onTouchStart={startLP} onTouchEnd={cancelLP}
            onTouchCancel={cancelLP} onMouseDown={startLP}
            onMouseUp={cancelLP} onMouseLeave={cancelLP}
            style={{
                display: 'flex', alignItems: 'center',
                width: '100%', padding: '13px 14px',
                background: bg, border: `1.5px solid ${border}`,
                borderRadius: 12, cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'background 0.15s, border-color 0.15s',
                gap: 12,
            }}
            onTouchStartCapture={e => (e.currentTarget.style.opacity = '0.75')}
            onTouchEndCapture={e => (e.currentTarget.style.opacity = '1')}
        >
            {/* Seat number badge */}
            <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: isSwapSource ? ACCENT : isSwapTarget ? '#e6a83a' : hasSeat ? GREEN : BORDER,
                color: (isSwapSource || isSwapTarget || hasSeat) ? '#fff' : MUTED,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
            }}>
                {seat.seat_number}
            </div>

            {/* Guest name or placeholder */}
            <span style={{
                flex: 1, fontSize: 15, fontWeight: hasSeat ? 500 : 400,
                color: hasSeat ? TEXT : MUTED, textAlign: 'left',
                fontStyle: hasSeat ? 'normal' : 'italic',
            }}>
                {hasSeat ? seat.guest_name : 'Празно'}
            </span>

            {/* Status / action hint */}
            {isSwapSource && (
                <span style={{ fontSize: 11, color: ACCENT, fontWeight: 600 }}>SELECTED</span>
            )}
            {isSwapTarget && !isSwapSource && (
                <span style={{ fontSize: 11, color: '#a0620a', fontWeight: 600 }}>SWAP?</span>
            )}
            {!isSwapSource && !isSwapTarget && hasSeat && (
                <span style={{ fontSize: 18, color: BORDER }}>✎</span>
            )}
        </button>
    )
}

// ─── Mini Map ─────────────────────────────────────────────────────────────────

function MiniMap({
    tablesBySeat, onTablePress, activeTable,
}: {
    tablesBySeat: Record<number, Seat[]>
    onTablePress: (t: number) => void
    activeTable: number | null
}) {
    return (
        <div style={{
            position: 'relative', width: '100%', paddingBottom: '75%',
            background: '#eef7f1', borderRadius: 16,
            border: `1px solid ${BORDER}`, overflow: 'hidden',
        }}>
            <div style={{ position: 'absolute', inset: 0 }}>
                {/* Stage label */}
                <div style={{
                    position: 'absolute', bottom: '14%', left: '18%',
                    background: '#c8a8d4', borderRadius: 6,
                    fontSize: 9, padding: '3px 7px', fontWeight: 600,
                    color: '#5a2d7a', letterSpacing: '0.08em',
                }}>
                    МУЗИКА
                </div>
                <div style={{
                    position: 'absolute', bottom: '4%', left: '44%',
                    background: '#d5d0c8', borderRadius: 6,
                    fontSize: 9, padding: '3px 7px', fontWeight: 600,
                    color: '#555', letterSpacing: '0.08em',
                }}>
                    ВЛЕЗ
                </div>
                <div style={{
                    position: 'absolute', bottom: '54%', left: '5%',
                    background: '#d5d0c8', borderRadius: 6,
                    fontSize: 9, padding: '3px 7px', fontWeight: 600,
                    color: '#555', letterSpacing: '0.08em',
                }}>
                    КУМСКА
                </div>

                {ALL_TABLE_NUMBERS.map(t => {
                    const [lx, ly] = TABLE_POSITIONS[t]
                    const seats = tablesBySeat[t] || []
                    const { filled, total } = seats2occupancy(seats)
                    const full = filled === total && total > 0
                    const isActive = t === activeTable

                    return (
                        <button
                            key={t}
                            onClick={() => onTablePress(t)}
                            style={{
                                position: 'absolute',
                                left: `${lx * 100}%`,
                                top: `${ly * 100}%`,
                                width: 22, height: 22,
                                borderRadius: '50%',
                                border: `2px solid ${isActive ? ACCENT : full ? GREEN : BORDER}`,
                                background: isActive ? ACCENT : full ? GREEN_LIGHT : CARD,
                                color: isActive ? '#fff' : TEXT,
                                fontSize: 7, fontWeight: 700,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                WebkitTapHighlightColor: 'transparent',
                                zIndex: isActive ? 2 : 1,
                                transition: 'transform 0.1s',
                                transform: isActive ? 'scale(1.3)' : 'scale(1)',
                            }}
                        >
                            {t}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

// ─── Bottom Sheet ─────────────────────────────────────────────────────────────

function BottomSheet({
    children, onClose, title,
}: {
    children: React.ReactNode
    onClose: () => void
    title?: string
}) {
    return (
        <div
            style={{
                position: 'fixed', inset: 0, zIndex: 100,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}
            onClick={onClose}
        >
            <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(26,23,20,0.45)',
                animation: 'fadeIn 0.2s ease',
            }} />
            <div
                style={{
                    position: 'relative', background: CARD,
                    borderRadius: '20px 20px 0 0',
                    padding: '0 0 max(env(safe-area-inset-bottom), 24px)',
                    boxShadow: '0 -8px 40px rgba(0,0,0,0.15)',
                    animation: 'slideUp 0.25s cubic-bezier(0.32, 0.72, 0, 1)',
                    maxHeight: '85dvh', overflow: 'auto',
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Handle */}
                <div style={{
                    width: 36, height: 4, borderRadius: 2,
                    background: BORDER, margin: '12px auto 0',
                }} />
                {title && (
                    <div style={{
                        padding: '16px 20px 0',
                        fontSize: 17, fontWeight: 700,
                        color: TEXT, fontFamily: 'Georgia, serif',
                    }}>
                        {title}
                    </div>
                )}
                <div style={{ padding: '12px 20px 0' }}>
                    {children}
                </div>
            </div>
            <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
        </div>
    )
}

// ─── Rename Form ──────────────────────────────────────────────────────────────

function RenameForm({
    seat, onSave, onClear, onCancel,
}: {
    seat: Seat
    onSave: (name: string) => void
    onClear: () => void
    onCancel: () => void
}) {
    const [value, setValue] = useState(seat.guest_name)
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => { setTimeout(() => inputRef.current?.focus(), 120) }, [])

    return (
        <div style={{ paddingBottom: 8 }}>
            <p style={{ fontSize: 13, color: MUTED, marginBottom: 14 }}>
                Маса {seat.table_number} · Стол {seat.seat_number}
            </p>
            <input
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && onSave(value)}
                placeholder="Име на гостин…"
                style={{
                    width: '100%', boxSizing: 'border-box',
                    border: `1.5px solid ${BORDER}`, borderRadius: 12,
                    padding: '14px 16px', fontSize: 16,
                    background: BG, color: TEXT,
                    outline: 'none', marginBottom: 12,
                    fontFamily: 'inherit',
                }}
                onFocus={e => (e.target.style.borderColor = ACCENT)}
                onBlur={e => (e.target.style.borderColor = BORDER)}
            />
            <div style={{ display: 'flex', gap: 10 }}>
                <button
                    onClick={() => onSave(value)}
                    style={{
                        flex: 2, padding: '14px 0', borderRadius: 12,
                        background: ACCENT, color: '#fff',
                        border: 'none', fontSize: 15, fontWeight: 600, cursor: 'pointer',
                    }}
                >
                    Зачувај
                </button>
                {seat.guest_name && (
                    <button
                        onClick={onClear}
                        style={{
                            flex: 1, padding: '14px 0', borderRadius: 12,
                            background: RED_LIGHT, color: RED,
                            border: 'none', fontSize: 15, fontWeight: 600, cursor: 'pointer',
                        }}
                    >
                        Избриши
                    </button>
                )}
                <button
                    onClick={onCancel}
                    style={{
                        flex: 1, padding: '14px 0', borderRadius: 12,
                        background: '#f0ede8', color: MUTED,
                        border: 'none', fontSize: 15, fontWeight: 600, cursor: 'pointer',
                    }}
                >
                    Откажи
                </button>
            </div>
        </div>
    )
}

// ─── Swap Tray (floating bottom bar when swap is in progress) ─────────────────

function SwapTray({
    seat, onCancel,
}: {
    seat: Seat
    onCancel: () => void
}) {
    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            zIndex: 90,
            padding: '12px 16px max(env(safe-area-inset-bottom), 16px)',
            background: CARD,
            borderTop: `1.5px solid ${ACCENT}`,
            boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
            display: 'flex', alignItems: 'center', gap: 12,
            animation: 'slideUp 0.2s cubic-bezier(0.32, 0.72, 0, 1)',
        }}>
            <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: ACCENT_LIGHT, border: `2px solid ${ACCENT}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, color: ACCENT, flexShrink: 0,
            }}>
                {seat.seat_number}
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: 11, color: MUTED, marginBottom: 1 }}>Премести гостин</div>
                <div style={{
                    fontSize: 14, fontWeight: 600, color: TEXT,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                    {seat.guest_name || `Празно (T${seat.table_number}·S${seat.seat_number})`}
                </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ fontSize: 12, color: MUTED, alignSelf: 'center' }}>
                    Задржи на новото место
                </div>
                <button
                    onClick={onCancel}
                    style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: '#f0ede8', border: 'none',
                        color: MUTED, fontSize: 18, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    aria-label="Cancel swap"
                >
                    ×
                </button>
            </div>
        </div>
    )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function Home() {
    const [seats, setSeats] = useState<Seat[]>([])
    const [view, setView] = useState<View>('list')
    const [activeTable, setActiveTable] = useState<number | null>(null)
    const [search, setSearch] = useState('')
    const [swapSeat, setSwapSeat] = useState<Seat | null>(null)
    const [swapConfirm, setSwapConfirm] = useState<{ a: Seat; b: Seat } | null>(null)
    const [editSeat, setEditSeat] = useState<Seat | null>(null)
    const searchRef = useRef<HTMLInputElement>(null)

    // ── Data ────────────────────────────────────────────────────────────────────

    const fetchSeats = useCallback(async () => {
        const { data } = await supabase
            .from('seats').select('*')
            .order('table_number').order('seat_number')
        setSeats(data || [])
    }, [])

    useEffect(() => { fetchSeats() }, [fetchSeats])

    const updateSeat = useCallback(async (id: number, name: string) => {
        await supabase.from('seats').update({ guest_name: name }).eq('id', id)
        fetchSeats()
    }, [fetchSeats])

    const swapSeats = useCallback(async (a: Seat, b: Seat) => {
        await supabase.from('seats').update({ guest_name: b.guest_name }).eq('id', a.id)
        await supabase.from('seats').update({ guest_name: a.guest_name }).eq('id', b.id)
        fetchSeats()
    }, [fetchSeats])

    const clearAll = useCallback(async () => {
        if (!confirm('Избриши ги сите гости?')) return
        await supabase.from('seats').update({ guest_name: '' }).neq('id', -1)
        fetchSeats()
    }, [fetchSeats])

    // ── Derived ─────────────────────────────────────────────────────────────────

    const tablesBySeat = useMemo(() =>
        seats.reduce<Record<number, Seat[]>>((acc, s) => {
            if (!acc[s.table_number]) acc[s.table_number] = []
            acc[s.table_number].push(s)
            return acc
        }, {}), [seats])

    const totalFilled = useMemo(() =>
        seats.filter(s => s.guest_name.trim()).length, [seats])

    const searchResults = useMemo(() => {
        if (!search.trim()) return []
        const q = search.toLowerCase()
        return seats.filter(s => s.guest_name.toLowerCase().includes(q))
    }, [seats, search])

    const tableSeats = useMemo(() =>
        activeTable ? (tablesBySeat[activeTable] || []) : [],
        [tablesBySeat, activeTable])

    // Tables filtered by search (show tables containing matching guests)
    const visibleTableNumbers = useMemo(() => {
        if (!search.trim()) return ALL_TABLE_NUMBERS
        const matchingTables = new Set(searchResults.map(s => s.table_number))
        return ALL_TABLE_NUMBERS.filter(t => matchingTables.has(t))
    }, [search, searchResults])

    // ── Seat interaction ─────────────────────────────────────────────────────────

    const handleSeatTap = useCallback((seat: Seat) => {
        setEditSeat(seat)
    }, [])

    const handleSeatLongPress = useCallback((seat: Seat) => {
        setEditSeat(null)
        if (swapSeat) {
            if (swapSeat.id === seat.id) {
                setSwapSeat(null)
                return
            }
            setSwapConfirm({ a: swapSeat, b: seat })
            setSwapSeat(null)
            return
        }
        setSwapSeat(seat)
    }, [swapSeat])

    const confirmSwap = useCallback(async () => {
        if (!swapConfirm) return
        await swapSeats(swapConfirm.a, swapConfirm.b)
        setSwapConfirm(null)
    }, [swapConfirm, swapSeats])

    const openTable = useCallback((t: number) => {
        setActiveTable(t)
        setView('table')
        setSearch('')
    }, [])

    // ── Render helpers ───────────────────────────────────────────────────────────

    const globalOccupancy = `${totalFilled} / ${seats.length} сместени гости`

    // ── Views ────────────────────────────────────────────────────────────────────

    const renderList = () => (
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
            {/* Global stats */}
            <div style={{
                background: CARD, border: `1px solid ${BORDER}`,
                borderRadius: 14, padding: '12px 16px', marginBottom: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                <div>
                    <div style={{ fontSize: 11, color: MUTED, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Вкупно гости
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: TEXT, fontFamily: 'Georgia, serif' }}>
                        {globalOccupancy}
                    </div>
                </div>
                <OccupancyBar filled={totalFilled} total={seats.length} />
            </div>

            {/* Search results mode */}
            {search.trim() ? (
                <>
                    <div style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>
                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </div>
                    {searchResults.map(s => (
                        <button
                            key={s.id}
                            onClick={() => openTable(s.table_number)}
                            style={{
                                display: 'flex', width: '100%', alignItems: 'center',
                                background: CARD, border: `1.5px solid ${BORDER}`,
                                borderRadius: 12, padding: '12px 14px',
                                marginBottom: 8, gap: 12, cursor: 'pointer',
                                WebkitTapHighlightColor: 'transparent',
                            }}
                        >
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%',
                                background: GREEN_LIGHT, border: `1.5px solid #9dd4a8`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 11, fontWeight: 700, color: GREEN, flexShrink: 0,
                            }}>
                                T{s.table_number}
                            </div>
                            <div style={{ flex: 1, textAlign: 'left' }}>
                                <div style={{ fontSize: 15, fontWeight: 600, color: TEXT }}>
                                    {s.guest_name}
                                </div>
                                <div style={{ fontSize: 12, color: MUTED }}>
                                    Table {s.table_number} · Seat {s.seat_number}
                                </div>
                            </div>
                            <span style={{ color: MUTED, fontSize: 16 }}>›</span>
                        </button>
                    ))}
                </>
            ) : (
                // Full table list
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {visibleTableNumbers.map(t => (
                        <TableCard
                            key={t}
                            tableNumber={t}
                            seats={tablesBySeat[t] || []}
                            onPress={() => openTable(t)}
                            swapSeat={swapSeat}
                        />
                    ))}
                </div>
            )}
        </div>
    )

    const renderTableDetail = () => {
        if (!activeTable) return null
        const { filled, total } = seats2occupancy(tableSeats)
        return (
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
                {/* Table header */}
                <div style={{
                    background: CARD, border: `1px solid ${BORDER}`,
                    borderRadius: 14, padding: '14px 16px', marginBottom: 14,
                }}>
                    <div style={{
                        fontSize: 22, fontWeight: 700, color: TEXT,
                        fontFamily: 'Georgia, serif', marginBottom: 6,
                    }}>
                        Маса {activeTable}
                    </div>
                    <OccupancyBar filled={filled} total={total} />
                </div>

                {/* Swap context hint */}
                {swapSeat && swapSeat.table_number !== activeTable && (
                    <div style={{
                        background: ACCENT_LIGHT,
                        border: `1px solid ${ACCENT}`,
                        borderRadius: 10, padding: '10px 14px', marginBottom: 12,
                        fontSize: 13, color: ACCENT, fontWeight: 500,
                    }}>
                        Tap a seat here to swap with{' '}
                        <strong>{swapSeat.guest_name || `Seat ${swapSeat.seat_number}`}</strong>
                    </div>
                )}

                {/* Seat list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {tableSeats.map(seat => (
                        <SeatRow
                            key={seat.id}
                            seat={seat}
                            onTap={handleSeatTap}
                            onLongPress={handleSeatLongPress}
                            isSwapSource={swapSeat?.id === seat.id}
                            isSwapTarget={!!swapSeat && swapSeat.id !== seat.id}
                            swapSeat={swapSeat}
                        />
                    ))}
                </div>
            </div>
        )
    }

    const renderMap = () => (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            <p style={{ fontSize: 13, color: MUTED, marginBottom: 12 }}>
                Стисни на маса за да ги видиш гостите
            </p>
            <MiniMap
                tablesBySeat={tablesBySeat}
                onTablePress={openTable}
                activeTable={activeTable}
            />
            <div style={{ marginTop: 16, display: 'flex', gap: 16, justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: MUTED }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: GREEN_LIGHT, border: `1.5px solid ${GREEN}` }} />
                    Full
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: MUTED }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: CARD, border: `1.5px solid ${BORDER}` }} />
                    Open seats
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: MUTED }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: ACCENT }} />
                    Active
                </div>
            </div>
        </div>
    )

    // ── App shell ────────────────────────────────────────────────────────────────

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            height: '100dvh', background: BG, fontFamily: 'system-ui, -apple-system, sans-serif',
            color: TEXT, overflowY: 'hidden',
        }}>

            {/* ── Header ──────────────────────────────────────────────────────────── */}
            <header style={{
                background: CARD,
                borderBottom: `1px solid ${BORDER}`,
                padding: 'max(env(safe-area-inset-top), 0px) 0 0',
                zIndex: 20, flexShrink: 0,
            }}>
                {/* Title row */}
                <div style={{
                    display: 'flex', alignItems: 'center',
                    padding: '12px 16px 8px',
                    gap: 12,
                }}>
                    {(view === 'table') ? (
                        <button
                            onClick={() => { setView('list'); setActiveTable(null) }}
                            style={{
                                width: 36, height: 36, borderRadius: '50%',
                                background: BG, border: `1px solid ${BORDER}`,
                                fontSize: 18, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: TEXT, flexShrink: 0,
                                WebkitTapHighlightColor: 'transparent',
                            }}
                            aria-label="Back"
                        >
                            ‹
                        </button>
                    ) : (
                        <div style={{
                            width: 36, height: 36, borderRadius: '50%',
                            background: ACCENT_LIGHT, border: `1px solid ${ACCENT}44`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 18, flexShrink: 0,
                        }}>
                            💍
                        </div>
                    )}
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 17, fontWeight: 700, color: TEXT, fontFamily: 'Georgia, serif' }}>
                            {view === 'table' && activeTable
                                ? `Маса ${activeTable}`
                                : 'Wedding Seating'}
                        </div>
                        {view !== 'table' && (
                            <div style={{ fontSize: 12, color: MUTED }}>{globalOccupancy}</div>
                        )}
                    </div>
                    {view !== 'table' && (
                        <button
                            onClick={clearAll}
                            style={{
                                padding: '6px 12px', borderRadius: 20,
                                background: RED_LIGHT, color: RED,
                                border: 'none', fontSize: 12, fontWeight: 600,
                                cursor: 'pointer',
                                WebkitTapHighlightColor: 'transparent',
                            }}
                        >
                            Избриши се
                        </button>
                    )}
                </div>

                {/* Search bar (list + table views) */}
                {view !== 'map' && (
                    <div style={{ padding: '0 16px 12px', position: 'relative' }}>
                        <span style={{
                            position: 'absolute', left: 28, top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: 14, color: MUTED, pointerEvents: 'none',
                        }}>
                            🔍
                        </span>
                        <input
                            ref={searchRef}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder={view === 'table' ? 'Барај на оваа маса…' : 'Барај по име…'}
                            style={{
                                width: '100%', boxSizing: 'border-box',
                                padding: '10px 36px 10px 36px',
                                border: `1.5px solid ${BORDER}`,
                                borderRadius: 12, fontSize: 15,
                                background: BG, color: TEXT, outline: 'none',
                                WebkitAppearance: 'none',
                            }}
                            onFocus={e => (e.target.style.borderColor = ACCENT)}
                            onBlur={e => (e.target.style.borderColor = BORDER)}
                        />
                        {search && (
                            <button
                                onClick={() => { setSearch(''); searchRef.current?.focus() }}
                                style={{
                                    position: 'absolute', right: 28, top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 28, height: 28, borderRadius: '50%',
                                    background: BORDER, border: 'none',
                                    fontSize: 14, cursor: 'pointer', color: MUTED,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}
                                aria-label="Clear"
                            >
                                ×
                            </button>
                        )}
                    </div>
                )}
            </header>

            {/* ── Content ─────────────────────────────────────────────────────────── */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                {view === 'list' && renderList()}
                {view === 'table' && renderTableDetail()}
                {view === 'map' && renderMap()}
            </div>

            {/* ── Bottom Tab Bar ───────────────────────────────────────────────────── */}
            <nav style={{
                background: CARD, borderTop: `1px solid ${BORDER}`,
                display: 'flex', padding: '8px 0 max(env(safe-area-inset-bottom), 8px)',
                zIndex: 20, flexShrink: 0,
            }}>
                {([
                    { id: 'list', label: 'Tables', icon: '☰' },
                    { id: 'map', label: 'Map', icon: '⬡' },
                ] as { id: View; label: string; icon: string }[]).map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setView(tab.id)
                            if (tab.id === 'list') setActiveTable(null)
                        }}
                        style={{
                            flex: 1, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            gap: 3, padding: '4px 0',
                            background: 'none', border: 'none', cursor: 'pointer',
                            WebkitTapHighlightColor: 'transparent',
                            color: (view === tab.id || (tab.id === 'list' && view === 'table'))
                                ? ACCENT : MUTED,
                            transition: 'color 0.15s',
                        }}
                    >
                        <span style={{ fontSize: 20 }}>{tab.icon}</span>
                        <span style={{
                            fontSize: 10, fontWeight: 600,
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                        }}>
                            {tab.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* ── Swap tray (floating) ────────────────────────────────────────────── */}
            {swapSeat && !swapConfirm && !editSeat && (
                <SwapTray seat={swapSeat} onCancel={() => setSwapSeat(null)} />
            )}

            {/* ── Swap confirm sheet ──────────────────────────────────────────────── */}
            {swapConfirm && (
                <BottomSheet onClose={() => setSwapConfirm(null)} title="Смени им ги местата на овие гости?">
                    <div style={{
                        display: 'flex', gap: 10, marginBottom: 18, alignItems: 'stretch',
                    }}>
                        {[swapConfirm.a, swapConfirm.b].map((s, i) => (
                            <div key={s.id} style={{
                                flex: 1, background: i === 0 ? ACCENT_LIGHT : '#fff0e0',
                                border: `1.5px solid ${i === 0 ? ACCENT : '#e6a83a'}`,
                                borderRadius: 12, padding: '12px 14px',
                            }}>
                                <div style={{ fontSize: 10, color: MUTED, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                    T{s.table_number} · S{s.seat_number}
                                </div>
                                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT }}>
                                    {s.guest_name || <em style={{ color: MUTED, fontWeight: 400 }}>Празно</em>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <button
                            onClick={confirmSwap}
                            style={{
                                flex: 2, padding: '15px 0', borderRadius: 14,
                                background: ACCENT, color: '#fff',
                                border: 'none', fontSize: 16, fontWeight: 600, cursor: 'pointer',
                            }}
                        >
                            Смени ↔
                        </button>
                        <button
                            onClick={() => setSwapConfirm(null)}
                            style={{
                                flex: 1, padding: '15px 0', borderRadius: 14,
                                background: '#f0ede8', color: MUTED,
                                border: 'none', fontSize: 16, fontWeight: 600, cursor: 'pointer',
                            }}
                        >
                            Откажи
                        </button>
                    </div>
                    <div style={{ height: 4 }} />
                </BottomSheet>
            )}

            {/* ── Rename sheet ────────────────────────────────────────────────────── */}
            {editSeat && (
                <BottomSheet
                    onClose={() => setEditSeat(null)}
                    title={editSeat.guest_name ? 'Уреди гостин' : 'Смести гостин'}
                >
                    <RenameForm
                        seat={editSeat}
                        onSave={name => { updateSeat(editSeat.id, name); setEditSeat(null) }}
                        onClear={() => { updateSeat(editSeat.id, ''); setEditSeat(null) }}
                        onCancel={() => setEditSeat(null)}
                    />
                </BottomSheet>
            )}
        </div>
    )
}
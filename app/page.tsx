'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface Seat {
    id: number
    table_number: number
    seat_number: number
    guest_name: string
}

export default function Home() {
    const [seats, setSeats] = useState<Seat[]>([])
    const [selected, setSelected] = useState<Seat | null>(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchSeats()
    }, [])

    async function fetchSeats() {
        const { data } = await supabase
            .from('seats')
            .select('*')
            .order('table_number')
            .order('seat_number')

        setSeats(data || [])
    }

    async function updateSeat(id: number, name: string) {
        await supabase
            .from('seats')
            .update({ guest_name: name })
            .eq('id', id)

        fetchSeats()
    }

    async function clearAll() {
        if (!confirm('Clear all seats?')) return

        await supabase
            .from('seats')
            .update({ guest_name: '' })
            .neq('id', -1)

        fetchSeats()
    }

    // group seats by table
    const tables = seats.reduce((acc: any, seat) => {
        if (!acc[seat.table_number]) acc[seat.table_number] = []
        acc[seat.table_number].push(seat)
        return acc
    }, {})

    // 🗺️ POSITION YOUR TABLES HERE (adjust to match your hall)
    const tablePositions = [
        // LEFT SIDE (vertical)
        { table: 5, top: "5%", left: "5%" },
        { table: 4, top: "20%", left: "5%" },
        { table: 1, top: "35%", left: "5%" },

        { table: 2, top: "60%", left: "5%" },
        { table: 3, top: "75%", left: "5%" },

        // LEFT-MID small group
        { table: 6, top: "5%", left: "20%" },
        { table: 7, top: "5%", left: "30%" },
        { table: 9, top: "20%", left: "20%" },
        { table: 10, top: "15%", left: "30%" },

        // MAIN GRID RIGHT SIDE
        { table: 8, top: "5%", left: "55%" },
        { table: 11, top: "5%", left: "65%" },
        { table: 12, top: "5%", left: "75%" },
        { table: 13, top: "5%", left: "85%" },

        { table: 15, top: "15%", left: "65%" },
        { table: 16, top: "15%", left: "75%" },
        { table: 14, top: "15%", left: "85%" },

        { table: 18, top: "25%", left: "55%" },
        { table: 19, top: "25%", left: "65%" },
        { table: 20, top: "25%", left: "75%" },
        { table: 17, top: "25%", left: "85%" },

        { table: 25, top: "35%", left: "55%" },
        { table: 22, top: "35%", left: "65%" },
        { table: 23, top: "35%", left: "75%" },
        { table: 21, top: "35%", left: "85%" },

        { table: 26, top: "45%", left: "65%" },
        { table: 27, top: "45%", left: "75%" },
        { table: 24, top: "45%", left: "85%" },

        { table: 32, top: "55%", left: "55%" },
        { table: 29, top: "55%", left: "65%" },
        { table: 30, top: "55%", left: "75%" },
        { table: 28, top: "55%", left: "85%" },

        { table: 33, top: "65%", left: "65%" },
        { table: 34, top: "65%", left: "75%" },
        { table: 31, top: "65%", left: "85%" },

        { table: 36, top: "75%", left: "55%" },
        { table: 37, top: "75%", left: "65%" },
        { table: 38, top: "75%", left: "75%" },
        { table: 35, top: "75%", left: "85%" },

        { table: 39, top: "85%", left: "65%" },
        { table: 40, top: "85%", left: "75%" },
        { table: 41, top: "85%", left: "85%" },
    ]

    return (
        <div className="p-2">
            <h1 className="text-lg font-bold text-center mb-2">
                Wedding Seating
            </h1>

            <input
                placeholder="Search guest..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />

            <button onClick={clearAll} className="mb-2 text-sm text-red-500">
                Clear All
            </button>

            {/* 🟢 HALL MAP */}
            <div className="relative w-full h-[700px] bg-green-100 rounded-xl overflow-hidden">

                {/* 🎤 MUSIC */}
                <div className="absolute top-[95%] left-[20%] bg-purple-300 px-3 py-1 rounded text-xs">
                    МУЗИКА
                </div>

                {/* 🚪 ENTRANCE */}
                <div className="absolute top-[95%] left-1/2 -translate-x-1/2 bg-gray-300 px-3 py-1 rounded text-xs">
                    ВЛЕЗ
                </div>

                {/* 🍽 Tables */}
                {tablePositions.map((pos) => (
                    <div
                        key={pos.table}
                        className="absolute"
                        style={{ top: pos.top, left: pos.left }}
                    >
                        <Table
                            tableNumber={pos.table}
                            seats={tables[pos.table] || []}
                            setSelected={setSelected}
                            search={search}
                        />
                    </div>
                ))}
            </div>

            {/* ✏️ EDIT MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded">
                        <h2 className="mb-2">Seat {selected.seat_number}</h2>

                        <input
                            defaultValue={selected.guest_name}
                            onBlur={(e) => {
                                updateSeat(selected.id, e.target.value)
                                setSelected(null)
                            }}
                            className="border p-2"
                            autoFocus
                        />

                        <button onClick={() => setSelected(null)} className="ml-2">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

function Table({ tableNumber, seats, setSelected, search }: any) {
    return (
        <div className="relative w-20 h-20">

            {/* table center */}
            <div className="absolute inset-0 rounded-full bg-gray-300 flex items-center justify-center text-[10px] font-bold">
                бр.{tableNumber}
            </div>

            {/* seats */}
            {seats.map((seat: any, i: number) => {
                const angle = (i / seats.length) * 2 * Math.PI
                const radius = 40

                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                const match = seat.guest_name
                    .toLowerCase()
                    .includes(search.toLowerCase())

                return (
                    <div
                        key={seat.id}
                        onClick={() => setSelected(seat)}
                        className={`absolute w-6 h-6 rounded-full border text-[8px] flex items-center justify-center cursor-pointer
              ${seat.guest_name ? 'bg-green-200' : 'bg-white'}
              ${match && search ? 'ring-2 ring-yellow-400' : ''}
            `}
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                        }}
                    >
                        {seat.seat_number}
                    </div>
                )
            })}
        </div>
    )
}
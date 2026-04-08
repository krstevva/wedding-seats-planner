(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/wedding-planner/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/wedding-planner/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/wedding-planner/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://mtbautbkqadfturbyenj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YmF1dGJrcWFkZnR1cmJ5ZW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NjAzMjIsImV4cCI6MjA5MTIzNjMyMn0.8j3V0ik3thVesegnZBt5FQsNHEWqPO4qoDNHK4eZ7nU"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/wedding-planner/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wedding-planner/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wedding-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wedding-planner/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
const ACCENT = '#b5813a' // warm gold
;
const ACCENT_LIGHT = '#f5ecd7';
const BG = '#faf9f7';
const CARD = '#ffffff';
const BORDER = '#e8e2d9';
const TEXT = '#1a1714';
const MUTED = '#8a7f74';
const GREEN = '#2d6a4f';
const GREEN_LIGHT = '#d8f3dc';
const RED = '#9b2226';
const RED_LIGHT = '#ffe5e5';
// Table positions for the mini-map (normalized 0–1)
const TABLE_POSITIONS = {
    5: [
        0.05,
        0.05
    ],
    4: [
        0.05,
        0.10
    ],
    1: [
        0.05,
        0.15
    ],
    2: [
        0.05,
        0.60
    ],
    3: [
        0.05,
        0.70
    ],
    6: [
        0.20,
        0.05
    ],
    7: [
        0.30,
        0.05
    ],
    9: [
        0.20,
        0.15
    ],
    10: [
        0.30,
        0.15
    ],
    8: [
        0.55,
        0.05
    ],
    11: [
        0.65,
        0.05
    ],
    12: [
        0.75,
        0.05
    ],
    13: [
        0.85,
        0.05
    ],
    15: [
        0.65,
        0.15
    ],
    16: [
        0.75,
        0.15
    ],
    14: [
        0.85,
        0.15
    ],
    18: [
        0.55,
        0.20
    ],
    19: [
        0.65,
        0.25
    ],
    20: [
        0.75,
        0.25
    ],
    17: [
        0.85,
        0.25
    ],
    25: [
        0.55,
        0.29
    ],
    22: [
        0.65,
        0.35
    ],
    23: [
        0.75,
        0.35
    ],
    21: [
        0.85,
        0.35
    ],
    26: [
        0.65,
        0.45
    ],
    27: [
        0.75,
        0.45
    ],
    24: [
        0.85,
        0.45
    ],
    32: [
        0.55,
        0.55
    ],
    29: [
        0.65,
        0.55
    ],
    30: [
        0.75,
        0.55
    ],
    28: [
        0.85,
        0.55
    ],
    33: [
        0.65,
        0.65
    ],
    34: [
        0.75,
        0.65
    ],
    31: [
        0.85,
        0.65
    ],
    36: [
        0.55,
        0.75
    ],
    37: [
        0.65,
        0.75
    ],
    38: [
        0.75,
        0.75
    ],
    35: [
        0.85,
        0.75
    ],
    39: [
        0.65,
        0.85
    ],
    40: [
        0.75,
        0.85
    ],
    41: [
        0.85,
        0.85
    ]
};
const ALL_TABLE_NUMBERS = Object.keys(TABLE_POSITIONS).map(Number).sort(_c = (a, b)=>a - b);
_c1 = ALL_TABLE_NUMBERS;
// ─── Utilities ────────────────────────────────────────────────────────────────
function seats2occupancy(seats) {
    const filled = seats.filter((s)=>s.guest_name.trim()).length;
    return {
        filled,
        total: seats.length
    };
}
// ─── Sub-components ───────────────────────────────────────────────────────────
// Pill tag
function Tag({ children, color = ACCENT }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.05em',
            padding: '2px 7px',
            borderRadius: 20,
            background: color === ACCENT ? ACCENT_LIGHT : GREEN_LIGHT,
            color: color === ACCENT ? ACCENT : GREEN,
            textTransform: 'uppercase'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_c2 = Tag;
// Occupancy bar
function OccupancyBar({ filled, total }) {
    const pct = total === 0 ? 0 : Math.round(filled / total * 100);
    const full = filled === total && total > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background: BORDER,
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        borderRadius: 2,
                        width: `${pct}%`,
                        background: full ? GREEN : ACCENT,
                        transition: 'width 0.4s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11,
                    color: MUTED,
                    minWidth: 32,
                    textAlign: 'right'
                },
                children: [
                    filled,
                    "/",
                    total
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
_c3 = OccupancyBar;
// ─── Table List Card ──────────────────────────────────────────────────────────
const TableCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(function TableCard({ tableNumber, seats, onPress, swapSeat }) {
    const { filled, total } = seats2occupancy(seats);
    const hasPendingSwap = swapSeat && seats.some((s)=>s.id === swapSeat.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onPress,
        style: {
            display: 'block',
            width: '100%',
            textAlign: 'left',
            background: hasPendingSwap ? ACCENT_LIGHT : CARD,
            border: `1.5px solid ${hasPendingSwap ? ACCENT : BORDER}`,
            borderRadius: 14,
            padding: '14px 16px',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            transition: 'transform 0.1s, box-shadow 0.1s',
            boxShadow: hasPendingSwap ? `0 0 0 3px ${ACCENT}33` : 'none'
        },
        onTouchStart: (e)=>e.currentTarget.style.transform = 'scale(0.985)',
        onTouchEnd: (e)=>e.currentTarget.style.transform = 'scale(1)',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: TEXT,
                                    fontFamily: 'Georgia, serif'
                                },
                                children: [
                                    "Маса ",
                                    tableNumber
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 132,
                                columnNumber: 21
                            }, this),
                            hasPendingSwap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "swap here"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 40
                            }, this),
                            filled === total && total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                color: GREEN,
                                children: "full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 55
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 131,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 18,
                            color: MUTED
                        },
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OccupancyBar, {
                filled: filled,
                total: total
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
});
_c4 = TableCard;
// ─── Seat Row (inside table detail) ──────────────────────────────────────────
function SeatRow({ seat, onTap, onLongPress, isSwapSource, isSwapTarget, swapSeat }) {
    _s();
    const longPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasSeat = seat.guest_name.trim().length > 0;
    const startLP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeatRow.useCallback[startLP]": ()=>{
            longPressRef.current = setTimeout({
                "SeatRow.useCallback[startLP]": ()=>onLongPress(seat)
            }["SeatRow.useCallback[startLP]"], 550);
        }
    }["SeatRow.useCallback[startLP]"], [
        seat,
        onLongPress
    ]);
    const cancelLP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeatRow.useCallback[cancelLP]": ()=>{
            if (longPressRef.current) clearTimeout(longPressRef.current);
        }
    }["SeatRow.useCallback[cancelLP]"], []);
    let bg = hasSeat ? GREEN_LIGHT : '#f7f5f2';
    let border = hasSeat ? '#9dd4a8' : BORDER;
    let textColor = hasSeat ? GREEN : MUTED;
    if (isSwapSource) {
        bg = ACCENT_LIGHT;
        border = ACCENT;
        textColor = ACCENT;
    }
    if (isSwapTarget) {
        bg = '#fff0e0';
        border = '#e6a83a';
        textColor = '#a0620a';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onTap(seat),
        onTouchStart: startLP,
        onTouchEnd: cancelLP,
        onTouchCancel: cancelLP,
        onMouseDown: startLP,
        onMouseUp: cancelLP,
        onMouseLeave: cancelLP,
        style: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '13px 14px',
            background: bg,
            border: `1.5px solid ${border}`,
            borderRadius: 12,
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            transition: 'background 0.15s, border-color 0.15s',
            gap: 12
        },
        onTouchStartCapture: (e)=>e.currentTarget.style.opacity = '0.75',
        onTouchEndCapture: (e)=>e.currentTarget.style.opacity = '1',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: isSwapSource ? ACCENT : isSwapTarget ? '#e6a83a' : hasSeat ? GREEN : BORDER,
                    color: isSwapSource || isSwapTarget || hasSeat ? '#fff' : MUTED,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0
                },
                children: seat.seat_number
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    flex: 1,
                    fontSize: 15,
                    fontWeight: hasSeat ? 500 : 400,
                    color: hasSeat ? TEXT : MUTED,
                    textAlign: 'left',
                    fontStyle: hasSeat ? 'normal' : 'italic'
                },
                children: hasSeat ? seat.guest_name : 'Празно'
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 204,
                columnNumber: 13
            }, this),
            isSwapSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11,
                    color: ACCENT,
                    fontWeight: 600
                },
                children: "SELECTED"
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 214,
                columnNumber: 17
            }, this),
            isSwapTarget && !isSwapSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11,
                    color: '#a0620a',
                    fontWeight: 600
                },
                children: "SWAP?"
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 217,
                columnNumber: 17
            }, this),
            !isSwapSource && !isSwapTarget && hasSeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 18,
                    color: BORDER
                },
                children: "✎"
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 220,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 175,
        columnNumber: 9
    }, this);
}
_s(SeatRow, "1n1fa7kCv8HXl0GM+txM1Q2Az84=");
_c5 = SeatRow;
// ─── Mini Map ─────────────────────────────────────────────────────────────────
function MiniMap({ tablesBySeat, onTablePress, activeTable }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100%',
            paddingBottom: '75%',
            background: '#eef7f1',
            borderRadius: 16,
            border: `1px solid ${BORDER}`,
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'absolute',
                inset: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: '14%',
                        left: '18%',
                        background: '#c8a8d4',
                        borderRadius: 6,
                        fontSize: 9,
                        padding: '3px 7px',
                        fontWeight: 600,
                        color: '#5a2d7a',
                        letterSpacing: '0.08em'
                    },
                    children: "МУЗИКА"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 243,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: '4%',
                        left: '44%',
                        background: '#d5d0c8',
                        borderRadius: 6,
                        fontSize: 9,
                        padding: '3px 7px',
                        fontWeight: 600,
                        color: '#555',
                        letterSpacing: '0.08em'
                    },
                    children: "ВЛЕЗ"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 251,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: '54%',
                        left: '5%',
                        background: '#d5d0c8',
                        borderRadius: 6,
                        fontSize: 9,
                        padding: '3px 7px',
                        fontWeight: 600,
                        color: '#555',
                        letterSpacing: '0.08em'
                    },
                    children: "КУМСКА"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 259,
                    columnNumber: 17
                }, this),
                ALL_TABLE_NUMBERS.map((t)=>{
                    const [lx, ly] = TABLE_POSITIONS[t];
                    const seats = tablesBySeat[t] || [];
                    const { filled, total } = seats2occupancy(seats);
                    const full = filled === total && total > 0;
                    const isActive = t === activeTable;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTablePress(t),
                        style: {
                            position: 'absolute',
                            left: `${lx * 100}%`,
                            top: `${ly * 100}%`,
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            border: `2px solid ${isActive ? ACCENT : full ? GREEN : BORDER}`,
                            background: isActive ? ACCENT : full ? GREEN_LIGHT : CARD,
                            color: isActive ? '#fff' : TEXT,
                            fontSize: 7,
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            WebkitTapHighlightColor: 'transparent',
                            zIndex: isActive ? 2 : 1,
                            transition: 'transform 0.1s',
                            transform: isActive ? 'scale(1.3)' : 'scale(1)'
                        },
                        children: t
                    }, t, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 276,
                        columnNumber: 25
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
            lineNumber: 241,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 236,
        columnNumber: 9
    }, this);
}
_c6 = MiniMap;
// ─── Bottom Sheet ─────────────────────────────────────────────────────────────
function BottomSheet({ children, onClose, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
        },
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(26,23,20,0.45)',
                    animation: 'fadeIn 0.2s ease'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 323,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    background: CARD,
                    borderRadius: '20px 20px 0 0',
                    padding: '0 0 max(env(safe-area-inset-bottom), 24px)',
                    boxShadow: '0 -8px 40px rgba(0,0,0,0.15)',
                    animation: 'slideUp 0.25s cubic-bezier(0.32, 0.72, 0, 1)',
                    maxHeight: '85dvh',
                    overflow: 'auto'
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 36,
                            height: 4,
                            borderRadius: 2,
                            background: BORDER,
                            margin: '12px auto 0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 340,
                        columnNumber: 17
                    }, this),
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px 20px 0',
                            fontSize: 17,
                            fontWeight: 700,
                            color: TEXT,
                            fontFamily: 'Georgia, serif'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 20px 0'
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 353,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 328,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 357,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 316,
        columnNumber: 9
    }, this);
}
_c7 = BottomSheet;
// ─── Rename Form ──────────────────────────────────────────────────────────────
function RenameForm({ seat, onSave, onClear, onCancel }) {
    _s1();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seat.guest_name);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenameForm.useEffect": ()=>{
            setTimeout({
                "RenameForm.useEffect": ()=>inputRef.current?.focus()
            }["RenameForm.useEffect"], 120);
        }
    }["RenameForm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingBottom: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: MUTED,
                    marginBottom: 14
                },
                children: [
                    "Маса ",
                    seat.table_number,
                    " · Стол ",
                    seat.seat_number
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 381,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                value: value,
                onChange: (e)=>setValue(e.target.value),
                onKeyDown: (e)=>e.key === 'Enter' && onSave(value),
                placeholder: "Име на гостин…",
                style: {
                    width: '100%',
                    boxSizing: 'border-box',
                    border: `1.5px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: '14px 16px',
                    fontSize: 16,
                    background: BG,
                    color: TEXT,
                    outline: 'none',
                    marginBottom: 12,
                    fontFamily: 'inherit'
                },
                onFocus: (e)=>e.target.style.borderColor = ACCENT,
                onBlur: (e)=>e.target.style.borderColor = BORDER
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 384,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSave(value),
                        style: {
                            flex: 2,
                            padding: '14px 0',
                            borderRadius: 12,
                            background: ACCENT,
                            color: '#fff',
                            border: 'none',
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: 'pointer'
                        },
                        children: "Зачувај"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 402,
                        columnNumber: 17
                    }, this),
                    seat.guest_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClear,
                        style: {
                            flex: 1,
                            padding: '14px 0',
                            borderRadius: 12,
                            background: RED_LIGHT,
                            color: RED,
                            border: 'none',
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: 'pointer'
                        },
                        children: "Избриши"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 413,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        style: {
                            flex: 1,
                            padding: '14px 0',
                            borderRadius: 12,
                            background: '#f0ede8',
                            color: MUTED,
                            border: 'none',
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: 'pointer'
                        },
                        children: "Откажи"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 424,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 401,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 380,
        columnNumber: 9
    }, this);
}
_s1(RenameForm, "/s08eFeQ6nQjpVONiGLkH5gD4qE=");
_c8 = RenameForm;
// ─── Swap Tray (floating bottom bar when swap is in progress) ─────────────────
function SwapTray({ seat, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 90,
            padding: '12px 16px max(env(safe-area-inset-bottom), 16px)',
            background: CARD,
            borderTop: `1.5px solid ${ACCENT}`,
            boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            animation: 'slideUp 0.2s cubic-bezier(0.32, 0.72, 0, 1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: ACCENT_LIGHT,
                    border: `2px solid ${ACCENT}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: ACCENT,
                    flexShrink: 0
                },
                children: seat.seat_number
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 458,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            color: MUTED,
                            marginBottom: 1
                        },
                        children: "Премести гостин"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 467,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 14,
                            fontWeight: 600,
                            color: TEXT,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        },
                        children: seat.guest_name || `Празно (T${seat.table_number}·S${seat.seat_number})`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 468,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 466,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: MUTED,
                            alignSelf: 'center'
                        },
                        children: "Задржи на новото место"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 476,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        style: {
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: '#f0ede8',
                            border: 'none',
                            color: MUTED,
                            fontSize: 18,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        "aria-label": "Cancel swap",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 479,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 475,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 448,
        columnNumber: 9
    }, this);
}
_c9 = SwapTray;
function Home() {
    _s2();
    const [seats, setSeats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('list');
    const [activeTable, setActiveTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [swapSeat, setSwapSeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swapConfirm, setSwapConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editSeat, setEditSeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Data ────────────────────────────────────────────────────────────────────
    const fetchSeats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchSeats]": async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').select('*').order('table_number').order('seat_number');
            setSeats(data || []);
        }
    }["Home.useCallback[fetchSeats]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchSeats();
        }
    }["Home.useEffect"], [
        fetchSeats
    ]);
    const updateSeat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[updateSeat]": async (id, name)=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').update({
                guest_name: name
            }).eq('id', id);
            fetchSeats();
        }
    }["Home.useCallback[updateSeat]"], [
        fetchSeats
    ]);
    const swapSeats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[swapSeats]": async (a, b)=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').update({
                guest_name: b.guest_name
            }).eq('id', a.id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').update({
                guest_name: a.guest_name
            }).eq('id', b.id);
            fetchSeats();
        }
    }["Home.useCallback[swapSeats]"], [
        fetchSeats
    ]);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[clearAll]": async ()=>{
            if (!confirm('Избриши ги сите гости?')) return;
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').update({
                guest_name: ''
            }).neq('id', -1);
            fetchSeats();
        }
    }["Home.useCallback[clearAll]"], [
        fetchSeats
    ]);
    // ── Derived ─────────────────────────────────────────────────────────────────
    const tablesBySeat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[tablesBySeat]": ()=>seats.reduce({
                "Home.useMemo[tablesBySeat]": (acc, s)=>{
                    if (!acc[s.table_number]) acc[s.table_number] = [];
                    acc[s.table_number].push(s);
                    return acc;
                }
            }["Home.useMemo[tablesBySeat]"], {})
    }["Home.useMemo[tablesBySeat]"], [
        seats
    ]);
    const totalFilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[totalFilled]": ()=>seats.filter({
                "Home.useMemo[totalFilled]": (s)=>s.guest_name.trim()
            }["Home.useMemo[totalFilled]"]).length
    }["Home.useMemo[totalFilled]"], [
        seats
    ]);
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[searchResults]": ()=>{
            if (!search.trim()) return [];
            const q = search.toLowerCase();
            return seats.filter({
                "Home.useMemo[searchResults]": (s)=>s.guest_name.toLowerCase().includes(q)
            }["Home.useMemo[searchResults]"]);
        }
    }["Home.useMemo[searchResults]"], [
        seats,
        search
    ]);
    const tableSeats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[tableSeats]": ()=>activeTable ? tablesBySeat[activeTable] || [] : []
    }["Home.useMemo[tableSeats]"], [
        tablesBySeat,
        activeTable
    ]);
    // Tables filtered by search (show tables containing matching guests)
    const visibleTableNumbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[visibleTableNumbers]": ()=>{
            if (!search.trim()) return ALL_TABLE_NUMBERS;
            const matchingTables = new Set(searchResults.map({
                "Home.useMemo[visibleTableNumbers]": (s)=>s.table_number
            }["Home.useMemo[visibleTableNumbers]"]));
            return ALL_TABLE_NUMBERS.filter({
                "Home.useMemo[visibleTableNumbers]": (t)=>matchingTables.has(t)
            }["Home.useMemo[visibleTableNumbers]"]);
        }
    }["Home.useMemo[visibleTableNumbers]"], [
        search,
        searchResults
    ]);
    // ── Seat interaction ─────────────────────────────────────────────────────────
    const handleSeatTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSeatTap]": (seat)=>{
            setEditSeat(seat);
        }
    }["Home.useCallback[handleSeatTap]"], []);
    const handleSeatLongPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSeatLongPress]": (seat)=>{
            setEditSeat(null);
            if (swapSeat) {
                if (swapSeat.id === seat.id) {
                    setSwapSeat(null);
                    return;
                }
                setSwapConfirm({
                    a: swapSeat,
                    b: seat
                });
                setSwapSeat(null);
                return;
            }
            setSwapSeat(seat);
        }
    }["Home.useCallback[handleSeatLongPress]"], [
        swapSeat
    ]);
    const confirmSwap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[confirmSwap]": async ()=>{
            if (!swapConfirm) return;
            await swapSeats(swapConfirm.a, swapConfirm.b);
            setSwapConfirm(null);
        }
    }["Home.useCallback[confirmSwap]"], [
        swapConfirm,
        swapSeats
    ]);
    const openTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[openTable]": (t)=>{
            setActiveTable(t);
            setView('table');
            setSearch('');
        }
    }["Home.useCallback[openTable]"], []);
    // ── Render helpers ───────────────────────────────────────────────────────────
    const globalOccupancy = `${totalFilled} / ${seats.length} сместени гости`;
    // ── Views ────────────────────────────────────────────────────────────────────
    const renderList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                overflowY: 'auto',
                padding: '12px 16px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 14,
                        padding: '12px 16px',
                        marginBottom: 14,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: MUTED,
                                        marginBottom: 2,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em'
                                    },
                                    children: "Вкупно гости"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: TEXT,
                                        fontFamily: 'Georgia, serif'
                                    },
                                    children: globalOccupancy
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                    lineNumber: 615,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 611,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OccupancyBar, {
                            filled: totalFilled,
                            total: seats.length
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 619,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 606,
                    columnNumber: 13
                }, this),
                search.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: MUTED,
                                marginBottom: 10
                            },
                            children: [
                                searchResults.length,
                                " result",
                                searchResults.length !== 1 ? 's' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 625,
                            columnNumber: 21
                        }, this),
                        searchResults.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>openTable(s.table_number),
                                style: {
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    background: CARD,
                                    border: `1.5px solid ${BORDER}`,
                                    borderRadius: 12,
                                    padding: '12px 14px',
                                    marginBottom: 8,
                                    gap: 12,
                                    cursor: 'pointer',
                                    WebkitTapHighlightColor: 'transparent'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: '50%',
                                            background: GREEN_LIGHT,
                                            border: `1.5px solid #9dd4a8`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: GREEN,
                                            flexShrink: 0
                                        },
                                        children: [
                                            "T",
                                            s.table_number
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            textAlign: 'left'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 15,
                                                    fontWeight: 600,
                                                    color: TEXT
                                                },
                                                children: s.guest_name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: MUTED
                                                },
                                                children: [
                                                    "Table ",
                                                    s.table_number,
                                                    " · Seat ",
                                                    s.seat_number
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: MUTED,
                                            fontSize: 16
                                        },
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 629,
                                columnNumber: 25
                            }, this))
                    ]
                }, void 0, true) : // Full table list
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8
                    },
                    children: visibleTableNumbers.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCard, {
                            tableNumber: t,
                            seats: tablesBySeat[t] || [],
                            onPress: ()=>openTable(t),
                            swapSeat: swapSeat
                        }, t, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 664,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 662,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
            lineNumber: 604,
            columnNumber: 9
        }, this);
    const renderTableDetail = ()=>{
        if (!activeTable) return null;
        const { filled, total } = seats2occupancy(tableSeats);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                overflowY: 'auto',
                padding: '12px 16px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 14,
                        padding: '14px 16px',
                        marginBottom: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 22,
                                fontWeight: 700,
                                color: TEXT,
                                fontFamily: 'Georgia, serif',
                                marginBottom: 6
                            },
                            children: [
                                "Маса ",
                                activeTable
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 687,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OccupancyBar, {
                            filled: filled,
                            total: total
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 693,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 683,
                    columnNumber: 17
                }, this),
                swapSeat && swapSeat.table_number !== activeTable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: ACCENT_LIGHT,
                        border: `1px solid ${ACCENT}`,
                        borderRadius: 10,
                        padding: '10px 14px',
                        marginBottom: 12,
                        fontSize: 13,
                        color: ACCENT,
                        fontWeight: 500
                    },
                    children: [
                        "Tap a seat here to swap with",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: swapSeat.guest_name || `Seat ${swapSeat.seat_number}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 705,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 698,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8
                    },
                    children: tableSeats.map((seat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatRow, {
                            seat: seat,
                            onTap: handleSeatTap,
                            onLongPress: handleSeatLongPress,
                            isSwapSource: swapSeat?.id === seat.id,
                            isSwapTarget: !!swapSeat && swapSeat.id !== seat.id,
                            swapSeat: swapSeat
                        }, seat.id, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 712,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 710,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
            lineNumber: 681,
            columnNumber: 13
        }, this);
    };
    const renderMap = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                overflowY: 'auto',
                padding: '16px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: MUTED,
                        marginBottom: 12
                    },
                    children: "Стисни на маса за да ги видиш гостите"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 729,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniMap, {
                    tablesBySeat: tablesBySeat,
                    onTablePress: openTable,
                    activeTable: activeTable
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 732,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 16,
                        display: 'flex',
                        gap: 16,
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 12,
                                color: MUTED
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: GREEN_LIGHT,
                                        border: `1.5px solid ${GREEN}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                    lineNumber: 739,
                                    columnNumber: 21
                                }, this),
                                "Full"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 738,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 12,
                                color: MUTED
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: CARD,
                                        border: `1.5px solid ${BORDER}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                    lineNumber: 743,
                                    columnNumber: 21
                                }, this),
                                "Open seats"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 742,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 12,
                                color: MUTED
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: ACCENT
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                    lineNumber: 747,
                                    columnNumber: 21
                                }, this),
                                "Active"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 746,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 737,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
            lineNumber: 728,
            columnNumber: 9
        }, this);
    // ── App shell ────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100dvh',
            background: BG,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: TEXT,
            overflowY: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    background: CARD,
                    borderBottom: `1px solid ${BORDER}`,
                    padding: 'max(env(safe-area-inset-top), 0px) 0 0',
                    zIndex: 20,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 16px 8px',
                            gap: 12
                        },
                        children: [
                            view === 'table' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setView('list');
                                    setActiveTable(null);
                                },
                                style: {
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    background: BG,
                                    border: `1px solid ${BORDER}`,
                                    fontSize: 18,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: TEXT,
                                    flexShrink: 0,
                                    WebkitTapHighlightColor: 'transparent'
                                },
                                "aria-label": "Back",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 777,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    background: ACCENT_LIGHT,
                                    border: `1px solid ${ACCENT}44`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 18,
                                    flexShrink: 0
                                },
                                children: "💍"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 792,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 17,
                                            fontWeight: 700,
                                            color: TEXT,
                                            fontFamily: 'Georgia, serif'
                                        },
                                        children: view === 'table' && activeTable ? `Маса ${activeTable}` : 'Wedding Seating'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 802,
                                        columnNumber: 25
                                    }, this),
                                    view !== 'table' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: MUTED
                                        },
                                        children: globalOccupancy
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 808,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 801,
                                columnNumber: 21
                            }, this),
                            view !== 'table' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearAll,
                                style: {
                                    padding: '6px 12px',
                                    borderRadius: 20,
                                    background: RED_LIGHT,
                                    color: RED,
                                    border: 'none',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    WebkitTapHighlightColor: 'transparent'
                                },
                                children: "Избриши се"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 812,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 771,
                        columnNumber: 17
                    }, this),
                    view !== 'map' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '0 16px 12px',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: 'absolute',
                                    left: 28,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: 14,
                                    color: MUTED,
                                    pointerEvents: 'none'
                                },
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 830,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: searchRef,
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: view === 'table' ? 'Барај на оваа маса…' : 'Барај по име…',
                                style: {
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    padding: '10px 36px 10px 36px',
                                    border: `1.5px solid ${BORDER}`,
                                    borderRadius: 12,
                                    fontSize: 15,
                                    background: BG,
                                    color: TEXT,
                                    outline: 'none',
                                    WebkitAppearance: 'none'
                                },
                                onFocus: (e)=>e.target.style.borderColor = ACCENT,
                                onBlur: (e)=>e.target.style.borderColor = BORDER
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 837,
                                columnNumber: 25
                            }, this),
                            search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSearch('');
                                    searchRef.current?.focus();
                                },
                                style: {
                                    position: 'absolute',
                                    right: 28,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 28,
                                    height: 28,
                                    borderRadius: '50%',
                                    background: BORDER,
                                    border: 'none',
                                    fontSize: 14,
                                    cursor: 'pointer',
                                    color: MUTED,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                "aria-label": "Clear",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 854,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 829,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 764,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    view === 'list' && renderList(),
                    view === 'table' && renderTableDetail(),
                    view === 'map' && renderMap()
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 874,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    background: CARD,
                    borderTop: `1px solid ${BORDER}`,
                    display: 'flex',
                    padding: '8px 0 max(env(safe-area-inset-bottom), 8px)',
                    zIndex: 20,
                    flexShrink: 0
                },
                children: [
                    {
                        id: 'list',
                        label: 'Tables',
                        icon: '☰'
                    },
                    {
                        id: 'map',
                        label: 'Map',
                        icon: '⬡'
                    }
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setView(tab.id);
                            if (tab.id === 'list') setActiveTable(null);
                        },
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 3,
                            padding: '4px 0',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            WebkitTapHighlightColor: 'transparent',
                            color: view === tab.id || tab.id === 'list' && view === 'table' ? ACCENT : MUTED,
                            transition: 'color 0.15s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 20
                                },
                                children: tab.icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 907,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase'
                                },
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 908,
                                columnNumber: 25
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 890,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 881,
                columnNumber: 13
            }, this),
            swapSeat && !swapConfirm && !editSeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwapTray, {
                seat: swapSeat,
                onCancel: ()=>setSwapSeat(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 920,
                columnNumber: 17
            }, this),
            swapConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomSheet, {
                onClose: ()=>setSwapConfirm(null),
                title: "Смени им ги местата на овие гости?",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            marginBottom: 18,
                            alignItems: 'stretch'
                        },
                        children: [
                            swapConfirm.a,
                            swapConfirm.b
                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    background: i === 0 ? ACCENT_LIGHT : '#fff0e0',
                                    border: `1.5px solid ${i === 0 ? ACCENT : '#e6a83a'}`,
                                    borderRadius: 12,
                                    padding: '12px 14px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: MUTED,
                                            marginBottom: 4,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em'
                                        },
                                        children: [
                                            "T",
                                            s.table_number,
                                            " · S",
                                            s.seat_number
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: TEXT
                                        },
                                        children: s.guest_name || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            style: {
                                                color: MUTED,
                                                fontWeight: 400
                                            },
                                            children: "Празно"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 54
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                        lineNumber: 938,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 930,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 926,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: confirmSwap,
                                style: {
                                    flex: 2,
                                    padding: '15px 0',
                                    borderRadius: 14,
                                    background: ACCENT,
                                    color: '#fff',
                                    border: 'none',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                },
                                children: "Смени ↔"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 945,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSwapConfirm(null),
                                style: {
                                    flex: 1,
                                    padding: '15px 0',
                                    borderRadius: 14,
                                    background: '#f0ede8',
                                    color: MUTED,
                                    border: 'none',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                },
                                children: "Откажи"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 955,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 944,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 966,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 925,
                columnNumber: 17
            }, this),
            editSeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomSheet, {
                onClose: ()=>setEditSeat(null),
                title: editSeat.guest_name ? 'Уреди гостин' : 'Смести гостин',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenameForm, {
                    seat: editSeat,
                    onSave: (name)=>{
                        updateSeat(editSeat.id, name);
                        setEditSeat(null);
                    },
                    onClear: ()=>{
                        updateSeat(editSeat.id, '');
                        setEditSeat(null);
                    },
                    onCancel: ()=>setEditSeat(null)
                }, void 0, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 976,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 972,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 757,
        columnNumber: 9
    }, this);
}
_s2(Home, "oqJX8jHdmXY/V3cH8chBoKVaoXQ=");
_c10 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "ALL_TABLE_NUMBERS$Object.keys(TABLE_POSITIONS).map(Number).sort");
__turbopack_context__.k.register(_c1, "ALL_TABLE_NUMBERS");
__turbopack_context__.k.register(_c2, "Tag");
__turbopack_context__.k.register(_c3, "OccupancyBar");
__turbopack_context__.k.register(_c4, "TableCard");
__turbopack_context__.k.register(_c5, "SeatRow");
__turbopack_context__.k.register(_c6, "MiniMap");
__turbopack_context__.k.register(_c7, "BottomSheet");
__turbopack_context__.k.register(_c8, "RenameForm");
__turbopack_context__.k.register(_c9, "SwapTray");
__turbopack_context__.k.register(_c10, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_wedding-planner_01dwnk7._.js.map
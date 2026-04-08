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
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Home() {
    _s();
    const [seats, setSeats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchSeats();
        }
    }["Home.useEffect"], []);
    async function fetchSeats() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').select('*').order('table_number').order('seat_number');
        setSeats(data || []);
    }
    async function updateSeat(id, name) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').update({
            guest_name: name
        }).eq('id', id);
        fetchSeats();
    }
    async function clearAll() {
        if (!confirm('Clear all seats?')) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seats').update({
            guest_name: ''
        }).neq('id', -1);
        fetchSeats();
    }
    // group seats by table
    const tables = seats.reduce((acc, seat)=>{
        if (!acc[seat.table_number]) acc[seat.table_number] = [];
        acc[seat.table_number].push(seat);
        return acc;
    }, {});
    // 🗺️ POSITION YOUR TABLES HERE (adjust to match your hall)
    const tablePositions = [
        // LEFT SIDE (vertical)
        {
            table: 5,
            top: "5%",
            left: "5%"
        },
        {
            table: 4,
            top: "20%",
            left: "5%"
        },
        {
            table: 1,
            top: "35%",
            left: "5%"
        },
        {
            table: 2,
            top: "60%",
            left: "5%"
        },
        {
            table: 3,
            top: "75%",
            left: "5%"
        },
        // LEFT-MID small group
        {
            table: 6,
            top: "5%",
            left: "20%"
        },
        {
            table: 7,
            top: "5%",
            left: "30%"
        },
        {
            table: 9,
            top: "20%",
            left: "20%"
        },
        {
            table: 10,
            top: "20%",
            left: "30%"
        },
        // MAIN GRID RIGHT SIDE
        {
            table: 8,
            top: "5%",
            left: "55%"
        },
        {
            table: 11,
            top: "5%",
            left: "65%"
        },
        {
            table: 12,
            top: "5%",
            left: "75%"
        },
        {
            table: 13,
            top: "5%",
            left: "85%"
        },
        {
            table: 15,
            top: "15%",
            left: "65%"
        },
        {
            table: 16,
            top: "15%",
            left: "75%"
        },
        {
            table: 14,
            top: "15%",
            left: "85%"
        },
        {
            table: 18,
            top: "25%",
            left: "55%"
        },
        {
            table: 19,
            top: "25%",
            left: "65%"
        },
        {
            table: 20,
            top: "25%",
            left: "75%"
        },
        {
            table: 17,
            top: "25%",
            left: "85%"
        },
        {
            table: 25,
            top: "35%",
            left: "55%"
        },
        {
            table: 22,
            top: "35%",
            left: "65%"
        },
        {
            table: 23,
            top: "35%",
            left: "75%"
        },
        {
            table: 21,
            top: "35%",
            left: "85%"
        },
        {
            table: 26,
            top: "45%",
            left: "65%"
        },
        {
            table: 27,
            top: "45%",
            left: "75%"
        },
        {
            table: 24,
            top: "45%",
            left: "85%"
        },
        {
            table: 32,
            top: "55%",
            left: "55%"
        },
        {
            table: 29,
            top: "55%",
            left: "65%"
        },
        {
            table: 30,
            top: "55%",
            left: "75%"
        },
        {
            table: 28,
            top: "55%",
            left: "85%"
        },
        {
            table: 33,
            top: "65%",
            left: "65%"
        },
        {
            table: 34,
            top: "65%",
            left: "75%"
        },
        {
            table: 31,
            top: "65%",
            left: "85%"
        },
        {
            table: 36,
            top: "75%",
            left: "55%"
        },
        {
            table: 37,
            top: "75%",
            left: "65%"
        },
        {
            table: 38,
            top: "75%",
            left: "75%"
        },
        {
            table: 35,
            top: "75%",
            left: "85%"
        },
        {
            table: 39,
            top: "85%",
            left: "65%"
        },
        {
            table: 40,
            top: "85%",
            left: "75%"
        },
        {
            table: 41,
            top: "85%",
            left: "85%"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-bold text-center mb-2",
                children: "Wedding Seating"
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Search guest...",
                value: search,
                onChange: (e)=>setSearch(e.target.value),
                className: "w-full p-2 mb-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: clearAll,
                className: "mb-2 text-sm text-red-500",
                children: "Clear All"
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[700px] bg-green-100 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[95%] left-[20%] bg-purple-300 px-3 py-1 rounded text-xs",
                        children: "МУЗИКА"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[95%] left-1/2 -translate-x-1/2 bg-gray-300 px-3 py-1 rounded text-xs",
                        children: "ВЛЕЗ"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    tablePositions.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                top: pos.top,
                                left: pos.left
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                tableNumber: pos.table,
                                seats: tables[pos.table] || [],
                                setSelected: setSelected,
                                search: search
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 25
                            }, this)
                        }, pos.table, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2",
                            children: [
                                "Seat ",
                                selected.seat_number
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 168,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            defaultValue: selected.guest_name,
                            onBlur: (e)=>{
                                updateSeat(selected.id, e.target.value);
                                setSelected(null);
                            },
                            className: "border p-2",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelected(null),
                            className: "ml-2",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                            lineNumber: 180,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 167,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 166,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s(Home, "tI3IFpl/PQx+sqwlgu1n/8nHfwc=");
_c = Home;
function Table({ tableNumber, seats, setSelected, search }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-20 h-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full bg-gray-300 flex items-center justify-center text-[10px] font-bold",
                children: [
                    "бр.",
                    tableNumber
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this),
            seats.map((seat, i)=>{
                const angle = i / seats.length * 2 * Math.PI;
                const radius = 40;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const match = seat.guest_name.toLowerCase().includes(search.toLowerCase());
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wedding$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>setSelected(seat),
                    className: `absolute w-6 h-6 rounded-full border text-[8px] flex items-center justify-center cursor-pointer
              ${seat.guest_name ? 'bg-green-200' : 'bg-white'}
              ${match && search ? 'ring-2 ring-yellow-400' : ''}
            `,
                    style: {
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    },
                    children: seat.seat_number
                }, seat.id, false, {
                    fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
                    lineNumber: 212,
                    columnNumber: 21
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wedding-planner/app/page.tsx",
        lineNumber: 192,
        columnNumber: 9
    }, this);
}
_c1 = Table;
var _c, _c1;
__turbopack_context__.k.register(_c, "Home");
__turbopack_context__.k.register(_c1, "Table");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_wedding-planner_01dwnk7._.js.map
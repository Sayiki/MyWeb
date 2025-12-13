module.exports = [
"[externals]/react-scroll [external] (react-scroll, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-scroll", () => require("react-scroll"));

module.exports = mod;
}),
"[project]/Documents/GitHub/MyWeb/components/Navbar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-scroll [external] (react-scroll, cjs)");
;
;
function Navbar() {
    const navItems = [
        {
            label: "Home",
            target: "home"
        },
        {
            label: "Experience",
            target: "experience"
        },
        {
            label: "Projects",
            target: "projects"
        },
        {
            label: "Certificates",
            target: "blog"
        },
        {
            label: "Contact",
            target: "contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 z-50 w-full border-b border-[#E4E5E9] bg-[#E4E5E9]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
            className: "mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-4 md:px-10",
            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["Link"], {
                        to: item.target,
                        smooth: true,
                        duration: 500,
                        offset: -76,
                        className: "cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-black transition-all duration-150 hover:bg-[#C9CAD0] hover:text-black hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/MyWeb/components/Navbar.jsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this)
                }, item.target, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Navbar.jsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Navbar.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Navbar.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Hero.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative isolate overflow-hidden pt-32 pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-10 md:p-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-semibold text-slate-900 md:text-5xl",
                        children: "Hi, I'm Arzaq Ajradika"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-2xl text-base text-slate-500 md:text-lg",
                        children: "A passionate software engineer"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-wrap items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/resume.pdf",
                                download: true,
                                className: "inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
                                children: [
                                    "Download Resume",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                            d: "M12 3v12m0 0 4-4m-4 4-4-4M5 18h14",
                                            stroke: "currentColor",
                                            strokeWidth: "1.8",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/Sayiki",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] text-slate-600 transition-transform duration-150 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M12 2C6.477 2 2 6.523 2 12a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.035 1.532 1.035.892 1.534 2.341 1.09 2.91.834.091-.65.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.026a9.562 9.562 0 0 1 2.5-.336 9.54 9.54 0 0 1 2.5.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.477-4.477-10-10-10Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/arzaq-ajradika-5a8715232",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] text-slate-600 transition-transform duration-150 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.116 20.452H3.556V9h3.56v11.452Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/6281317130656",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] text-slate-600 transition-transform duration-150 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M20.52 3.48A11.787 11.787 0 0 0 12.004 0C5.375 0 .016 5.358.016 11.987a11.87 11.87 0 0 0 1.543 5.87L0 24l6.29-1.646a11.94 11.94 0 0 0 5.714 1.456h.005c6.63 0 11.989-5.358 11.99-11.989A11.874 11.874 0 0 0 20.52 3.48Zm-8.516 18.53h-.004a9.9 9.9 0 0 1-5.034-1.377l-.36-.214-3.733.977.998-3.637-.235-.374A9.86 9.86 0 0 1 2.02 11.99c0-5.473 4.456-9.926 9.989-9.926a9.87 9.87 0 0 1 9.94 9.926 9.87 9.87 0 0 1-9.945 9.92Zm5.455-7.41c-.297-.149-1.759-.868-2.031-.966-.273-.099-.472-.148-.67.149-.197.297-.77.967-.943 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.391-1.478-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.669-1.613-.916-2.21-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.215 3.074.148.198 2.096 3.2 5.084 4.487.711.307 1.264.49 1.695.63.712.227 1.36.195 1.873.118.572-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.41-.074-.123-.272-.198-.57-.348Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Hero.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Experience.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/Experience.jsx
__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Experience() {
    const experiences = [
        {
            year: "2024 - Present",
            title: "Software Engineer",
            company: "Freelance",
            description: "Delivering full-stack solutions with React, Node.js, and cloud-native services."
        },
        {
            year: "2022 - 2024",
            title: "Product Engineering Intern",
            company: "Startup Inc.",
            description: "Supported feature delivery, wrote API integrations, and tightened QA feedback loops."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-6 pb-24 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto w-full max-w-6xl space-y-12 text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",
                            children: "Career Timeline"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl",
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-2xl text-sm text-slate-500",
                            children: "Highlights from recent roles covering delivery, collaboration, and technical impact."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 md:grid-cols-2",
                    children: experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                            className: "group relative overflow-hidden rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-xs uppercase tracking-[0.35em] text-slate-400",
                                    children: exp.year
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-slate-900",
                                    children: exp.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm uppercase tracking-[0.18em] text-slate-500",
                                    children: exp.company
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-relaxed text-slate-500",
                                    children: exp.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Experience.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Projects.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/Projects.jsx
__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Projects() {
    const projects = [
        {
            title: "EduSkill",
            image: "/pictures/eduskill.png",
            link: "#"
        },
        {
            title: "Symptosense (Disease Prediction App)",
            image: "/pictures/symptosense.png",
            link: "https://symptosense.humicprototyping.com"
        },
        {
            title: "Caldera Insight",
            image: "https://via.placeholder.com/300",
            link: "#"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-6 pb-24 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto w-full max-w-6xl space-y-12 text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",
                            children: "Selected Work"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-2xl text-sm text-slate-500",
                            children: "A snapshot of recent builds covering education platforms, smart diagnostics, and real-time communication."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 sm:grid-cols-2 xl:grid-cols-3",
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: project.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative h-44 overflow-hidden rounded-2xl bg-[#EDEEF3]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: project.image,
                                        alt: project.title,
                                        className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-1 flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold uppercase tracking-[0.18em] text-slate-900",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 transition-colors duration-150 group-hover:text-sky-700",
                                            children: [
                                                "View project",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    className: "ml-2 h-4 w-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M7 17 17 7M9.5 7H17v7.5",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.6",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Projects.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Blog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/Blog.jsx
__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Blog() {
    const posts = [
        {
            title: "Framework Valley: React",
            date: "Oct 2025",
            link: "https://www.codedex.io/certificates/cc9ff1c7-3a48-4191-9f99-93f422c685e1"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-6 pb-24 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto w-full max-w-4xl space-y-10 text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",
                            children: "Certified Learning"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl",
                            children: "Certifications"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-2xl text-sm text-slate-500",
                            children: "Credentials that reinforce my commitment to modern web development and backend expertise."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: posts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "group rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: post.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex flex-col gap-3 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-[0.3em] text-slate-400",
                                        children: post.date
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold uppercase tracking-[0.24em] text-slate-900 transition-colors duration-150 group-hover:text-sky-600",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 transition-colors duration-150 group-hover:text-sky-700",
                                        children: [
                                            "View certificate",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "ml-2 h-3.5 w-3.5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M8 16 16 8M10.5 8H16v5.5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.6",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Blog.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Contact.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/Contact.jsx
__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-6 pb-24 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto w-full max-w-4xl space-y-8 text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",
                            children: "Let’s collaborate"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-xl text-sm text-slate-500",
                            children: "Share a quick note and I’ll get back to you about opportunities, collaborations, or questions."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    className: "grid gap-6 rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-8 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Name",
                            className: "md:col-span-1 w-full rounded-2xl border border-[#E4E5E9] bg-white px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Email",
                            className: "md:col-span-1 w-full rounded-2xl border border-[#E4E5E9] bg-white px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                            placeholder: "Message",
                            rows: "4",
                            className: "md:col-span-2 w-full rounded-2xl border border-[#E4E5E9] bg-white px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "md:col-span-2 inline-flex items-center justify-center rounded-full bg-black px-10 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
                            children: "Send Message"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Contact.jsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Footer.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-scroll [external] (react-scroll, cjs)");
;
;
function Footer() {
    const quickLinks = [
        {
            label: "Home",
            target: "home"
        },
        {
            label: "Experience",
            target: "experience"
        },
        {
            label: "Projects",
            target: "projects"
        },
        {
            label: "Certificates",
            target: "blog"
        },
        {
            label: "Contact",
            target: "contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "relative overflow-hidden border-t border-[#E4E5E9] bg-[#EDEEF3] text-slate-600",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid gap-10 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold text-slate-900",
                                    children: "Arzaq Ajradika"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-slate-500",
                                    children: "Software engineer crafting reliable, scalable products with modern web and cloud tooling."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 pt-2",
                                    children: [
                                        {
                                            href: "https://github.com/Sayiki",
                                            label: "GitHub",
                                            classes: "text-slate-600 hover:text-slate-900",
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M12 2C6.477 2 2 6.523 2 12a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.035 1.532 1.035.892 1.534 2.341 1.09 2.91.834.091-.65.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.026a9.562 9.562 0 0 1 2.5-.336 9.54 9.54 0 0 1 2.5.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.477-4.477-10-10-10Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                lineNumber: 28,
                                                columnNumber: 21
                                            }, this)
                                        },
                                        {
                                            href: "https://www.linkedin.com/in/arzaq-ajradika-5a8715232",
                                            label: "LinkedIn",
                                            classes: "text-slate-600 hover:text-slate-900",
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M20.452 20.452h-3.555v-5.569c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.412v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.116 20.452H3.556V9h3.56v11.452Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, this)
                                        },
                                        {
                                            href: "mailto:arzaq@example.com",
                                            label: "Email",
                                            classes: "text-slate-600 hover:text-slate-900",
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M4.5 6.75h14.75c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25H4.5c-.69 0-1.25-.56-1.25-1.25v-8c0-.69.56-1.25 1.25-1.25Zm.75 2.028v6.222h13.25V8.778l-6.46 4.04a1.5 1.5 0 0 1-1.547 0L5.25 8.778Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                lineNumber: 44,
                                                columnNumber: 21
                                            }, this)
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: `flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] transition-transform duration-150 hover:-translate-y-1 ${item.classes}`,
                                            "aria-label": item.label,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: item.svg
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        }, item.label, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-slate-900",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sm text-slate-500",
                                    children: quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["Link"], {
                                                to: link.target,
                                                smooth: true,
                                                duration: 500,
                                                offset: -76,
                                                className: "cursor-pointer transition-colors duration-150 hover:text-sky-600",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, link.target, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-slate-900",
                                    children: "Get in touch"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500",
                                    children: "Ready to collaborate on something meaningful? Let’s plan it together."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["Link"], {
                                    to: "contact",
                                    smooth: true,
                                    duration: 500,
                                    offset: -76,
                                    className: "inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            className: "h-4 w-4",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "5",
                                                    width: "18",
                                                    height: "14",
                                                    rx: "2",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "m5 7 7 5 7-5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.6",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        "Send me a message"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-emerald-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-pulse rounded-full bg-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        "Usually responds within 24 hours"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Arzaq Ajradika. Crafted with care."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2 text-slate-500",
                            children: [
                                "Made with",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4 text-rose-400",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "M12.1 21.35 10 19.24C5.4 14.36 2 11.27 2 7.5 2 5 4 3 6.5 3c1.74 0 3.41.99 4.22 2.47h.56C12.09 3.99 13.76 3 15.5 3 18 3 20 5 20 7.5c0 3.77-3.4 6.86-8 11.74l-1.9 2.11Z"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                "using Next.js"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "#home",
                            className: "inline-flex items-center gap-2 text-slate-500 transition-colors duration-150 hover:text-sky-600",
                            children: [
                                "Professional portfolio",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    className: "h-4 w-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        d: "m6 14 6-6 6 6",
                                        stroke: "currentColor",
                                        strokeWidth: "1.6",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Footer.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/components/Skills.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const MAX_RATING = 10;
const skillItems = [
    {
        name: "Python",
        rating: 6,
        column: "left"
    },
    {
        name: "React",
        rating: 7,
        column: "left"
    },
    {
        name: "Laravel",
        rating: 8,
        column: "left"
    },
    {
        name: "Node.js",
        rating: 7,
        column: "right"
    },
    {
        name: "SQL",
        rating: 6,
        column: "right"
    },
    {
        name: "Docker",
        rating: 7,
        column: "right"
    }
];
const columns = {
    left: skillItems.filter((item)=>item.column === "left"),
    right: skillItems.filter((item)=>item.column === "right")
};
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-6 pb-24 pt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative mx-auto w-full max-w-5xl space-y-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    className: "space-y-3 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",
                            children: "Core Toolkit"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl",
                            children: "My Skills"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-2xl text-sm text-slate-500",
                            children: "Proficiency expressed on a 1 – 10 scale across tools I use most often."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid gap-10 md:grid-cols-2",
                    children: Object.entries(columns).map(([columnKey, columnSkills])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            className: "space-y-6",
                            children: columnSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    className: "rounded-2xl border border-[#E4E5E9] bg-[#E4E5E9] px-6 py-5 transition-transform duration-150 hover:-translate-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold uppercase tracking-[0.18em] text-slate-800",
                                            children: skill.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm uppercase tracking-[0.16em] text-slate-500",
                                            children: [
                                                "Rating: ",
                                                skill.rating,
                                                "/",
                                                MAX_RATING
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, skill.name, true, {
                                    fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this))
                        }, columnKey, false, {
                            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/components/Skills.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/MyWeb/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Navbar.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Hero$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Hero.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Experience$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Experience.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Projects$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Projects.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Blog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Blog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Contact$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Contact.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Footer.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/components/Skills.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#EDEEF3] font-sans text-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Hero$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "experience",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Experience$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                    lineNumber: 18,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "projects",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Projects$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                    lineNumber: 19,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "blog",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Blog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                    lineNumber: 20,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Contact$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                    lineNumber: 21,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/MyWeb/pages/index.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a18f380._.js.map
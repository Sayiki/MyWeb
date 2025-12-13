module.exports = [
"[externals]/lightbox.js-react [external] (lightbox.js-react, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("lightbox.js-react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/Documents/GitHub/MyWeb/pages/_app.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$lightbox$2e$js$2d$react__$5b$external$5d$__$28$lightbox$2e$js$2d$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/lightbox.js-react [external] (lightbox.js-react, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$lightbox$2e$js$2d$react__$5b$external$5d$__$28$lightbox$2e$js$2d$react$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$lightbox$2e$js$2d$react__$5b$external$5d$__$28$lightbox$2e$js$2d$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function MyApp({ Component, pageProps }) {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const licenseKey = process.env.NEXT_PUBLIC_LIGHTBOX_LICENSE_KEY;
        const planType = process.env.NEXT_PUBLIC_LIGHTBOX_LICENSE_PLAN || "individual";
        if (licenseKey) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$lightbox$2e$js$2d$react__$5b$external$5d$__$28$lightbox$2e$js$2d$react$2c$__esm_import$29$__["initLightboxJS"])(licenseKey, planType);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/MyWeb/pages/_app.jsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06a8f3e5._.js.map
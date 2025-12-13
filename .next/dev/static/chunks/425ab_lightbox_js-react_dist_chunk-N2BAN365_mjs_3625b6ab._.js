(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/MyWeb/node_modules/lightbox.js-react/dist/chunk-N2BAN365.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconButton",
    ()=>IconButton,
    "SlideshowLightbox",
    ()=>SlideshowLightbox
]);
// lib/components/SlideshowLightbox/SlideshowLightbox.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/lightbox.js-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/lightbox.js-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$GlobalConfig$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/lightbox.js-react/node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
// lib/components/SlideshowLightbox/LightboxImage.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$exifr$2f$dist$2f$full$2e$esm$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/exifr/dist/full.esm.mjs [client] (ecmascript)");
// lib/components/SlideshowLightbox/LightboxImage.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/jsx-runtime.js [client] (ecmascript)");
// lib/components/SlideshowLightbox/SlideshowLightbox.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$arrow$2d$clockwise$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowClockwise$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/arrow-clockwise.js [client] (ecmascript) <export default as ArrowClockwise>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/download.js [client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fullscreen$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen.js [client] (ecmascript) <export default as Fullscreen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2d$exit$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FullscreenExit$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen-exit.js [client] (ecmascript) <export default as FullscreenExit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$grid$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GridFill$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/grid-fill.js [client] (ecmascript) <export default as GridFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$info$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoCircle$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/info-circle.js [client] (ecmascript) <export default as InfoCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pause$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircleFill$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/pause-circle-fill.js [client] (ecmascript) <export default as PauseCircleFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$play$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircleFill$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/play-circle-fill.js [client] (ecmascript) <export default as PlayCircleFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/search.js [client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$lg$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XLg$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/x-lg.js [client] (ecmascript) <export default as XLg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$in$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-in.js [client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-out.js [client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$PortalCompat$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Portal$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/PortalCompat.js [client] (ecmascript) <export default as Portal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$zoom$2d$pan$2d$pinch$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-zoom-pan-pinch/dist/index.esm.js [client] (ecmascript)");
// lib/components/SlideshowLightbox/SlideshowLightbox.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/lightbox.js-react/node_modules/@banzai-inc/react-key-handler/dist/esm/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f40$react$2d$hook$2f$resize$2d$observer$2f$dist$2f$module$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/@react-hook/resize-observer/dist/module/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$div$2d$100vh$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-div-100vh/dist/esm/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$youtube$2f$dist$2f$YouTube$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-youtube/dist/YouTube.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/usehooks-ts/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$js$2d$file$2d$downloader$2f$dist$2f$js$2d$file$2d$downloader$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/js-file-downloader/dist/js-file-downloader.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
// esbuild-css-modules-plugin-namespace:C:\Users\silvi\AppData\Local\Temp\tmp-17516-J88BUDmx6MLc\lightbox.js-react\lib\components\SlideshowLightbox\SlideshowLightbox.module.css.js
var digest = "f607797768045ad82cf5d34f54286dabf20555838c678c4c305d10e12a771e7d";
var css = `._lightboxjs_80tal_1 {
  margin: 0;
  padding: 0;
}

._lightboxjs_80tal_1 * {
  box-sizing: border-box;
}

/* .lightboxjs img,
.lightboxjs svg,
.lightboxjs video {
  display: block;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
} */

._slideshowBtn_80tal_37 {
  padding-bottom: 2px;
}

._closeIcon_80tal_45:hover,
._closeIcon_80tal_45:focus,
._iconsHeader_80tal_49 svg:hover,
._iconsHeader_80tal_49 svg:focus,
._prev1_80tal_53 span:hover,
._next1_80tal_55:hover,
._icon_80tal_49:hover {
  text-decoration: none;
  cursor: pointer;
  /* color: rgb(230, 230, 230); */
}

._prevIcon_80tal_69:hover,
._nextIcon_80tal_71:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(230, 230, 230);
}

._show_80tal_81 {
  display: flex;
}

._displayHidden_80tal_89 {
  display: none;
}

._thumbnail_80tal_97 {
  opacity: 1;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

._next1_80tal_55 {
  right: 1%;
  padding-left: 2vw;
  padding-right: 3vw;
}

._prev1_80tal_53 {
  left: 2%;
  padding-right: 2vw;
  padding-left: 3vw;
}

._thumbnails_80tal_135 {
  transition: border 0.3s;
}

._thumbnail_80tal_97 {
  display: inline;
}

._thumbnailsWithCaption_80tal_151 {
  width: 90%;
}

._thumbnailsOuterContainer_80tal_159 {
  position: absolute;
  bottom: 4%;
  height: 5vh;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

._navigationDots_80tal_183 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* Mobile screens */
@media screen and (min-width: 20em) {
  ._imageSlide_80tal_199 {
    height: 67vw;
    width: 60%;
  }

  ._thumbnailsOuterContainer_80tal_159 {
    position: absolute;
    bottom: 7%;
    width: 100vw;
    /* width: 100%; */
  }

  ._thumbnailsAndCaption_80tal_223 {
    height: 23vh;
    bottom: 2%;

  }

  ._hideControlsBar_80tal_235 ._slideshowImg_80tal_235 {
    /* height: 100vh; */
  }

  ._rotateImgInnerContainer_80tal_243 {
    top: 8%;
  }

  ._hideControlsBar_80tal_235 ._slideshowInnerContainer_80tal_251 {
    top: 0;
  }

  ._thumbnail_80tal_97 {
    width: 80px;
    max-width: 80px;
    height: 7vh;
  }

  ._videoThumbnailsOuterContainer_80tal_271 {
    bottom: 2%;
  }

  ._imgTitleContainer_80tal_279 {
    padding-bottom: 16px;
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
  }

  ._thumbnails_80tal_135 {
    margin-left: auto;
    margin-right: auto;
  }

  ._next1_80tal_55 {
    right: 0.9%;
  }

  ._prev1_80tal_53 {
    left: 1.5%;
  }
}

._thumbnail_80tal_97 {
  height: 5vh;
  border-radius: 6px;
  margin-right: 7px;
  object-fit: cover;
}



._thumbnailsOuterContainerMetadata_80tal_339 {
  width: 78vw;
}

._videoThumbnailsOuterContainer_80tal_271 {
  bottom: 5%;
}

._thumbnailsAndCaption_80tal_223 {
  height: 19vh;
}

._htmlVideoOuterContainer_80tal_363 video {
  height: 100%;
  max-height: 70vh;
  width: 100%;
}

._caption_80tal_375 {
  position: absolute;
  bottom: 14%;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

._galleryImg_80tal_395 {
  cursor: pointer;
  margin: 0.2em;
}

._modalContainer_80tal_405 {
  width: 100vw;
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
}

._slideshowAnimContainer_80tal_443 {
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000000;
}

._fullScreenContainer_80tal_479 img {
  height: 100vh;
  max-width: 100%;
  /* max-height: 100vh; */
}

._imageInnerContainer_80tal_491 img {
  height: 80vh;
  max-width: 100%;
  max-height: 100%;
}

._imageInnerContainer_80tal_491 {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._magnifyWrapper_80tal_529 {
  margin-bottom: 3em;
  margin-left: auto;
  margin-right: auto;
}

._slideshowInnerContainer_80tal_251 {
  position: fixed; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: top 0.2s ease-in-out 0s;
  top: 12%;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._slideshowInnerVideoContainer_80tal_569 {
  top: 6%;
}

._slideshowInnerContainerThumbnails_80tal_577 {
  top: 12%;
}

._hideControlsBar_80tal_235  {
  top: 0;
}

._fullScreenContainer_80tal_479 {
  top: 0;
}

._lightboxContainer_80tal_601 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

._next1_80tal_55,
._prev1_80tal_53 {
  top: calc(50% - 20px);
  position: absolute;
  display: flex;
  transition: color 0.2s;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  padding-top: 2vh;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  /* border-radius: 30px; */
  width: 40px;
  height: 40px;
  font-size: 18px;
  z-index: 10000000;
  
  background: none !important;
  border: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}



._next1_80tal_55:hover,
._prev1_80tal_53:hover {
  color: rgb(230, 230, 230);
}

._slideshowAnimImg_80tal_683 {
  position: absolute;
  max-width: 100vw;
}

._controls_80tal_693 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

._iconsHeader_80tal_49 {
  color: white;
  display: flex;
  flex-direction: row;
  /* align-items: center;
    justify-content: center; */
  cursor: pointer;
  z-index: 999999999;
  /* padding: 0.14vw; */
}

._iconHeaderDefault_80tal_727 {
  position: absolute;
  top: 10px;
  right: 45px;
}

._ytVideo_80tal_739 {
  aspect-ratio: 16 / 9;
  height: 65vh;
  width: 100%;
}

._videoOuterContainer_80tal_751 {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  height: 60vh;
  max-height: 65vh;
}

._htmlVideoOuterContainer_80tal_363 {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._customVideoContainer_80tal_779, ._customEmbedContainer_80tal_779 {
  margin-left: auto;
  margin-right: auto;
}

._videoIconsHeader_80tal_789 {
  position: fixed;
  top: 4%;
  right: 3%;
}

._lightbox_80tal_1 ._iconsHeader_80tal_49 svg {
  transition: 0.3s all;
}

._iconsHeader_80tal_49 svg:active {
  transform: scale(0.97);
}

._imgTitle_80tal_279 {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._iconsHeader_80tal_49 svg {
  margin-left: 0.6em;
  padding: 0.2em;
  transition: all 0.1s;
  /* width: 32px;  */
  /* font-size: 18px; */
  line-height: 16px;
  vertical-align: baseline;
}

._icon_80tal_49 {
  /* width: 32px;  */
}

@media screen and (min-width: 6em) {
  ._iconsHeader_80tal_49 {
    top: 3%;
  }

  ._slideshowAnimContainer_80tal_443 {
    width: 100vw;
  }

  ._iconsHeader_80tal_49 svg {
    /* width: 34px;  */
    padding-right: 0.3em;
  }

  ._lightboxjs_80tal_1 img {
    cursor: pointer;
  }

  ._thumbnail_80tal_97 {
    height: 9vh;
    /* width: 22vw; */
  }

  ._next1_80tal_55 {
    top: calc(48% - 20px);
  }

  ._prev1_80tal_53 {
    top: calc(48% - 20px);

  }

  ._iconHeaderCenter_80tal_923 {
    width: 100vw; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;
  }

}

@media screen and (min-width: 39em) {
  ._slideshowAnimContainer_80tal_443 {
    width: 100vw;
  }

  ._slideshowInnerContainer_80tal_251 {
    /* width: 100vw;
    height: 95vh;
    position: absolute; */
  }

  ._imgTitleContainer_80tal_279 {
    padding-bottom: 0px;
  }
  

  ._next1_80tal_55 {
    right: 0.7%;
  }

  ._iconHeaderCenter_80tal_923 {
    width: 100%; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;

  
  }

  /* .thumbnailsOuterContainer {
    bottom: 10%;
  } */

  /* .hideControlsBar .slideshow_img {
    height: 70vh;

  }

  .hideControlsBar {
    top: 10%;
  } */

  ._fullScreenContainer_80tal_479 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._fullScreenContainer_80tal_479 img {
    height: 100vh;
  }

  ._thumbnails_80tal_135 {
    margin-top: 0.6em;
  }

  ._thumbnail_80tal_97 {
    /* height: 8vh; */
    width: 80px;
    max-width: 80px;
  }

  ._iconsHeader_80tal_49 svg {
    /* width: 32px; 
      font-size: 32px; */
  }

  ._prev1_80tal_53 {
    left: 2.7%;
    padding-right: 2vw;
  }
}

/* Desktop screens */
@media screen and (min-width: 42em) {
  ._imageSlide_80tal_199 {
    height: 70vh;
    width: 80vw;
  }

  ._innerContainerWithTopCaption_80tal_1115 {
    top: 8%;
  }

  ._slideshowImgFullscreen_80tal_1123 {
    display: grid;
    width: 92vw;
    place-items: start;
    margin-left: auto;
    margin-right: auto;
    scrollbar-gutter: stable both-edges;
  }

  ._thumbnailsAndCaption_80tal_223 {
    bottom: 0%;
  }
  
  ._rotateImgInnerContainer_80tal_243 {
    top: 2%;
  }

  ._slideshowInnerContainer_80tal_251 img {
    margin-top: 0vh;
    /* width: 70vw; */
  }

  ._fullScreenContainer_80tal_479 img {
    width: 80vw;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 {
    top: 0%;
  }

  ._fullScreenLightboxImg_80tal_1183 {
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }

  ._slideshowInnerContainerImgMetadata_80tal_1195 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 img {
    object-fit: contain;
  }

  ._thumbnails_80tal_135 {
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 1.1em;
  }

  ._thumbnails_80tal_135::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ._opacity-fade_80tal_1249 {
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    opacity: 1;
  }

  ._thumbnailsOuterContainer_80tal_159 {
    margin-top: 0.1em;
    padding-top: 0.3em;
    height: 5vh;
    bottom: 11%;
  }

  ._thumbnailsAndCaption_80tal_223 {
    bottom: 0%;
  }

  ._thumbnail_80tal_97,
  ._imageSliderThumbnails_80tal_1285 img {
    height: 10vh;
    /* width: 7em; */
  }

  ._slideshowAnimContainer_80tal_443 {
    width: 100vw;
  }

  /* .slideshowInnerContainer {
    width: 100vw;
    height: 95vh;
  } */

  ._hideControlsBar_80tal_235 {
    /* height: 100vh; */
  }

  ._fullScreenContainer_80tal_479 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._iconsHeader_80tal_49 svg {
    /* width: 37px;
      font-size: 34px; */
  }

  ._prev1_80tal_53 {
    left: 2%;
    padding-right: 2vw;
  }

  ._next1_80tal_55 {
    right: 2.4%;
  }

  
  ._slideshowImgMetadata_80tal_1361 {
    width: 78vw;
  }

  ._prev1Metadata_80tal_1369 {
    left: 1%;
  }

  ._navigationDots_80tal_183 {
    gap: 8px;
  }

 
}

@media screen and (min-width: 53em) {
  
  ._slideshowImg_80tal_235 {
    display: grid;
    width: 100vw;
    height: 70vh;
    place-items: start;
    /* margin-top: 7vh; */
  }

  ._slideshowImgWithCaption_80tal_1411 {
    height: 68vh;
  }

  ._hideControlsBar_80tal_235 ._slideshowImg_80tal_235, ._hideControlsBarAndCaption_80tal_1419 ._slideshowImg_80tal_235  {
    padding-top: 12vh;
  }

  ._fullScreenContainer_80tal_479 ._slideshowImg_80tal_235 {
    padding-top: 0vh;
  }


  ._lightboxImg_80tal_1437 {
      /* height: 70vh; */
  }

  ._thumbnail_80tal_97 {
    width: 95px;
    max-width: 80px;
  } 

  ._slideshowImgMetadata_80tal_1361 {
    width: 78vw;
  }
}
  

@media screen and (min-width: 80em) {
  ._slideshowInnerContainer_80tal_251 img {
    /* width: 60vw; */
  }

  ._fullScreenContainer_80tal_479 img {
    width: 80vw;
  }
}

._lightIcon_80tal_1487,
._lightIcon_80tal_1487 svg {
  background-color: white;
  color: black;
}

._lightIcon_80tal_1487:hover,
._lightIcon_80tal_1487 svg:hover {
  background-color: white;
  color: black;
  fill: black;
}

._darkIcon_80tal_1513,
._darkIcon_80tal_1513 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: silver;
  fill: silver;
}

._darkIcon_80tal_1513:hover,
._darkIcon_80tal_1513 svg:hover {
  color: rgba(107, 107, 107, 0.8);
  fill: rgba(107, 107, 107, 0.8);
}

/* Header icons  */
._lightHeaderIcon_80tal_1543 svg {
  background-color: white;
  color: black;
  fill: black;
}

._lightHeaderIcon_80tal_1543 svg:hover {
  background-color: white;
  color: rgb(24, 24, 24, 0.8);
  fill: rgb(24, 24, 24, 0.8);

}

._darkHeaderIcon_80tal_1569 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: #626b77;
  fill: #626b77;
}

._darkHeaderIcon_80tal_1569 svg:hover {
  color: rgba(99, 99, 99, 0.8);
  fill: rgba(99, 99, 99, 0.8);
}

._magnifierImage_80tal_1593 {
  object-fit: contain;
}

._thumbnails_80tal_135 ._active_80tal_1601 {
  border: solid rgb(107, 133, 206) 2px;
}

._inactiveThumbnailBorder_80tal_1609 {
  border: solid transparent 2px;
}

._thumbnails_80tal_135 {
  width: 95%;
}

._emblaThumbs_80tal_1625 {
  --thumbs-slide-spacing: 2px; 
  /* --thumbs-slide-height: 9rem; */
  margin-top: var(--thumbs-slide-spacing);
}

@media screen and (max-width: 40em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  ._imgTitleContainer_80tal_279 {
    /* position: absolute;
    top: 12%; */
  }

  ._slideshowImg_80tal_235 {
    height: 100vh;
  }
}

@media screen and (max-width: 53em) {
  ._fullScreenSlideshowImg_80tal_1671 {
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 44em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */
  ._thumbnailsOuterContainer_80tal_159 {
    bottom: 11%;
  }

  ._thumbnailsAndCaption_80tal_223 {
    bottom: 4%;
  }
  
  ._imgTitleContainer_80tal_279 {
    /* position: absolute;
    top: 5%; */
  }
}

@media screen and (max-width: 46em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */

  /* .imgTitleContainer {
    position: absolute;
    top: 7%;
  } */
}

@media screen and (max-width: 49em) and (min-width: 45em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  /* .imgTitleContainer {
    position: absolute;
    top: 5%;
  } */
}

@media screen and (max-width: 29em) {
  ._fullScreenContainer_80tal_479 img {
    object-fit: cover;
  }

  ._emblaThumbs_80tal_1625 {
    --thumbs-slide-spacing: 3px; 
    /* --thumbs-slide-height: 9rem; */
    margin-top: var(--thumbs-slide-spacing);
  }



  ._htmlVideo_80tal_363 {
    margin-top: 5vh;
  }

  ._thumbnails_80tal_135 {
    width: 98%;
  }

  ._thumbnail_80tal_97 {
    width: 80px;
    max-width: 80px;
  }

  ._htmlVideoOuterContainer_80tal_363 video {
    max-height: 65vh;
  }

  ._videoIconsHeader_80tal_789 {
    position: fixed;
    top: 2%;
    right: 15px;
  }

  ._videoOuterContainer_80tal_751 {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    max-height: 65vh;
  }

  ._htmlVideoOuterContainer_80tal_363 {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
  }

  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 115px;
  }

  ._slideshowInnerVideoContainer_80tal_569 {
    top: 3%;
  }

  ._next1_80tal_55,
  ._prev1_80tal_53 {
    padding-bottom: 2vh;
    padding-top: 2vh;
  }

  ._next1_80tal_55 {
    padding-left: 4vw;
  }

  ._prev1_80tal_53 {
    padding-right: 4vw;
  }

  ._iconsHeader_80tal_49 {
    /* font-size: 28px; */
  }

}

@media screen and (max-width: 53em) {
  ._slideshowImg_80tal_235 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 70vh;
  }

  ._slideshowImg_80tal_235 img {
    margin-left: auto;
    margin-right: auto;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: top 0.2s ease-in-out 0s;
    top: 10%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1000000;
  }

  ._containImg_80tal_1981 {
    object-fit: contain;
  }
}

._fullScreenContainer_80tal_479 img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

._thumbnails_80tal_135 {
  text-align: center;
  white-space: nowrap;
}

._reactTransformComponent_80tal_2013 {
  margin-left: auto;
  margin-right: auto;
}

._magnifierImage_80tal_1593 {
  margin-left: auto;
  margin-right: auto;
}

/* CSS loader  */
._loader_80tal_2035 {
  width: 44px;
  height: 44px;
  box-sizing: border-box;

  border-radius: 50%;

  display: inline-block;
  position: fixed;
  top: 35%;
  left: 50%;
  animation: _rotation_80tal_1 1s linear infinite;
}

@keyframes _rotation_80tal_1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._dayLoader_80tal_2081 {
  border: 5px solid #626b77;
  border-bottom-color: transparent;
}

._nightLoader_80tal_2091 {
  border: 5px solid #fff;
  border-bottom-color: transparent;
}

._lightboxImg_80tal_1437 {
  max-height: 70vh;
  margin-left: auto;
  margin-right: auto;
}

._controls_80tal_693 button, ._closeButton_80tal_2113, ._closeButtonRounded_80tal_2113 {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
}

._controls_80tal_693 svg {
  box-sizing: border-box;
}

._closeButton_80tal_2113 svg, ._closeButtonRounded_80tal_2113 svg {
  box-sizing: border-box;
  font-size: 16px;
  padding-top: 0.5px;
}

._closeButton_80tal_2113 {
  padding-top: 3px;
}

._closeButtonRounded_80tal_2113 {
  cursor: pointer;

}

._closeButtonRounded_80tal_2113 svg {
  margin: 0;
  padding: 5px;
  background-color: black;
  border-color: transparent;
  border-radius: 28px;

}

._thumbnailsAndCaption_80tal_223 {
  height: 19vh;
  margin-top: 0em;
  width: 100vw;
}

._thumbnailsWithCaption_80tal_151 {
  margin-top: 0em;
}

._slideImageAndCaption_80tal_2205 {
  top: 9%;
}

._slideImageAndCaption_80tal_2205._hideControlsBar_80tal_235 {
  top: 0;
}

._slideshowAnimContainer_80tal_443 {
  -ms-overflow-style: none;
  /* scrollbar-width: none;   */
}
._thumbnails_80tal_135::-webkit-scrollbar {
  display: none;
}

._roundedBorder_80tal_2237 {
  border-radius: 20px;
}

._maxWidthFull_80tal_2245 {
  max-width: 100%;
}

._maxWidthWithoutMagnifier_80tal_2253 {
  max-width: 80%;
}

@media screen and (max-width: 880px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    right: 5%;
  }
}

@media screen and (max-width: 480px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 180px;
  }
  
}

@media screen and (max-width: 440px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 160px;
  }
}

@media screen and (max-width: 410px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 140px;
  }
}

@media screen and (max-width: 385px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 135px;
    /* top: 24px; */
  }
}

@media screen and (max-width: 365px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 90px;
  }
}

@media screen and (max-width: 345px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 94px;
  }
}

@media screen and (max-width: 325px) {
  ._iconsHeader_80tal_49 {
    position: fixed;
    left: 60px;
  }
}

@media screen and (max-width: 300px) {
  ._iconsHeader_80tal_49 {
    position: fixed;
    left: 30px;
  }
}

._lightboxVideo_80tal_2391 {
  margin-left: auto;
  margin-right: auto;
}

._navigation-wrapper_80tal_2401 {
  position: relative;
}

._dots_80tal_2409 {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}

._dot_80tal_2409 {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

._dot_80tal_2409:focus {
  outline: none;
}

._dot_80tal_2409._active_80tal_1601 {
  background: #000;
}

._arrow_80tal_2459 {
  position: absolute;
  top: 50%;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.2s;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: sans-serif;
}

._leftArrow_80tal_2489 {
  left: 8px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._rightArrow_80tal_2503 {
  left: auto;
  right: 8px;
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._arrow_80tal_2459:hover {
  color: rgb(230, 230, 230);
}

._arrow--disabled_80tal_2527,
._arrow--disabled_80tal_2527:hover {
  color: rgba(255, 255, 255, 0.5);
}

._navDotsMargin_80tal_2537 {
  margin-top: 12px;
}

._inactiveThumbnailBorderImgSlider_80tal_2545 {
  border: 'solid transparent 2px';
}

._ytVideoImgSlider_80tal_2553 {
  width: 100%;
  height: 100%;
}

._ytVideoImgSlider_80tal_2553 iframe {
  width: 100%;
  height: 100%;
}

._outerYTVideoImgSlider_80tal_2573 {
  height: 100%;
}

._lightboxjs_80tal_1 iframe {
  margin: none;
  padding: none;
  border: none;
}

._imgSliderArrow_80tal_2593 {
  z-index: 100000;
  background-color: transparent;
  border: none;
}

._thumbnails_80tal_135 {
  margin-left: auto;
  margin-right: auto;
}

._cursorPointer_80tal_2615 {
  cursor: pointer;
}

._lightboxjsIcon_80tal_2623 > * { color: inherit; fill: inherit }

._embla_80tal_1625 {
  margin-left: auto;
  margin-right: auto;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
}

._emblaViewport_80tal_2643 {
  overflow: hidden;
  width: 100vw;
}

._emblaContainer_80tal_2653 {
  backface-visibility: hidden; 
  touch-action: pan-y;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
  display: grid;  
  grid-auto-flow: column;  
  grid-auto-columns: 100%; 
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto; 
  /* width: 80%;
*/
}

._emblaContainerImgMetadata_80tal_2683 {
  width: 78vw;
  max-width: 78vw;
  height: 80vh;
}

._imgdrag_80tal_2695 ._emblaSlide_80tal_2695 {
  flex: 0 0 80%;
  min-width: 0;
  max-width: 100%;
  padding-left: 12px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

._emblaThumbsViewport_80tal_2715 {
  overflow: hidden;
}

._emblaThumbsContainer_80tal_2723 {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--thumbs-slide-spacing) * -1);
  width: 100%;
  /* align-items: center;
  text-align: center;
  width: fit-content; */
  /* justify-content: center; */
  
}

._emblaThumbsContainer_80tal_2723::before, ._emblaThumbsContainer_80tal_2723::after {
  content: '';  /* Insert pseudo-element */
  margin: auto; /* Make it push flex items to the center */
}


._emblaThumbsSlide_80tal_2759 {
  /* min-width: 0; */
  padding-left: var(--thumbs-slide-spacing);
  /* position: relative; */
  /* width: 140px; */
}

._emblaThumbsSlideImg_80tal_2773 {
  /* display: block; */
  height: var(--thumbs-slide-height);
  width: 100%;
  object-fit: cover;
}

._mlAuto_80tal_2787 {
  margin-left: auto;
}

._metadata_80tal_2795 {
  color: white;
}

._emblaSlideGrid_80tal_2803 {
  display: flex;
}

._metadata_80tal_2795 {
  text-align: left;
  min-width: 17vw;
  max-width: 17vw;
  padding-top: 5vw;
}

._metadataPanel_80tal_2825 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

._metadataInnerContainer_80tal_2837 {
  padding-left: 7vw;
}

._metadataInnerContainer_80tal_2837 span {
  display: block;
}


._imgMetadataCloseBtn_80tal_2855 {
  position: absolute;
  top: 1%;
  right: 2%;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

/* Styling from react-zoom-pan-pinch library */
._reactTransformWrapper_80tal_2877 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -khtml-user-select: none; /* Konqueror HTML */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
}

._reactTransformComponent_80tal_2013 {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}

._reactTransformComponent_80tal_2013 img {
  pointer-events: none;
}

._navigationDot_80tal_183 {
  height: 10px;
  width: 10px;
  background-color: silver;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

._navigationDotContainer_80tal_2961 {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 12px;
  padding-right: 12px;
}

._imgfade_80tal_2975._emblaContainer_80tal_2653 {
  transform: none !important; /* override Embla */
  display: flex;
  /* height: 250px; */
}

._notFullScreen_80tal_2987 {
  top: 0;
}

._imgfade_80tal_2975._emblaSlide_80tal_2695 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 0; */
  left: 0 !important; /* override Embla */
  right: 0 !important; /* override Embla */
  opacity: 0;
  transition: opacity 0.5s;
  counter-increment: embla;
  border-radius: 0.5rem;
}

._imgFadeWithTopCaption_80tal_3023 {
  top: 16%;
  position: fixed;
}

._imgfade_80tal_2975._emblaSlideSelected_80tal_3033 {
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 1;
}

._imgfade_80tal_2975._emblaSlide_80tal_2695:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._fullImg_80tal_3059 {
  height: 84vh;
  max-height: 84vh;
  object-fit: contain;
}

._rotateImg90Deg_80tal_3071{
transform: rotate(90deg);
transition: transform 1s linear;
}  

._rotate_img_80tal_3081 {
transition: transform 0.7s linear;
}

._fullScreenContainer_80tal_479 img {
/* max-height: 100vh; */
}

._slideshowImg_80tal_235 img {
height: 100%;
}

._zoomInCursor_80tal_3105 {
  cursor: zoom-in;
}

._zoomOutCursor_80tal_3113 {
  cursor: zoom-out;
}

._lightboxjsBtn_80tal_3121:focus {
  outline: none;
}

._lightboxjsBtn_showOutline_80tal_3129:focus-visible {
  outline: 2px solid #00aaff;
  outline-offset: 2px;
}

._lightboxjsBtn_80tal_3121::-webkit-focus-inner {
  border: 0;
}

._lightboxjsBtn_80tal_3121 {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
}
`;
(function() {
    if (typeof document === "undefined") {
        return;
    }
    if (!document.getElementById(digest)) {
        var el = document.createElement("style");
        el.id = digest;
        el.textContent = css;
        document.head.appendChild(el);
    }
})();
var SlideshowLightbox_module_css_default = {
    "lightboxjs": "_lightboxjs_80tal_1",
    "slideshowBtn": "_slideshowBtn_80tal_37",
    "closeIcon": "_closeIcon_80tal_45",
    "iconsHeader": "_iconsHeader_80tal_49",
    "prev1": "_prev1_80tal_53",
    "next1": "_next1_80tal_55",
    "icon": "_icon_80tal_49",
    "prevIcon": "_prevIcon_80tal_69",
    "nextIcon": "_nextIcon_80tal_71",
    "show": "_show_80tal_81",
    "displayHidden": "_displayHidden_80tal_89",
    "thumbnail": "_thumbnail_80tal_97",
    "thumbnails": "_thumbnails_80tal_135",
    "thumbnailsWithCaption": "_thumbnailsWithCaption_80tal_151",
    "thumbnailsOuterContainer": "_thumbnailsOuterContainer_80tal_159",
    "navigationDots": "_navigationDots_80tal_183",
    "imageSlide": "_imageSlide_80tal_199",
    "thumbnailsAndCaption": "_thumbnailsAndCaption_80tal_223",
    "hideControlsBar": "_hideControlsBar_80tal_235",
    "slideshowImg": "_slideshowImg_80tal_235",
    "rotateImgInnerContainer": "_rotateImgInnerContainer_80tal_243",
    "slideshowInnerContainer": "_slideshowInnerContainer_80tal_251",
    "videoThumbnailsOuterContainer": "_videoThumbnailsOuterContainer_80tal_271",
    "imgTitleContainer": "_imgTitleContainer_80tal_279",
    "thumbnailsOuterContainerMetadata": "_thumbnailsOuterContainerMetadata_80tal_339",
    "htmlVideoOuterContainer": "_htmlVideoOuterContainer_80tal_363",
    "caption": "_caption_80tal_375",
    "galleryImg": "_galleryImg_80tal_395",
    "modalContainer": "_modalContainer_80tal_405",
    "slideshowAnimContainer": "_slideshowAnimContainer_80tal_443",
    "fullScreenContainer": "_fullScreenContainer_80tal_479",
    "imageInnerContainer": "_imageInnerContainer_80tal_491",
    "magnifyWrapper": "_magnifyWrapper_80tal_529",
    "slideshowInnerVideoContainer": "_slideshowInnerVideoContainer_80tal_569",
    "slideshowInnerContainerThumbnails": "_slideshowInnerContainerThumbnails_80tal_577",
    "lightboxContainer": "_lightboxContainer_80tal_601",
    "slideshowAnimImg": "_slideshowAnimImg_80tal_683",
    "controls": "_controls_80tal_693",
    "iconHeaderDefault": "_iconHeaderDefault_80tal_727",
    "ytVideo": "_ytVideo_80tal_739",
    "videoOuterContainer": "_videoOuterContainer_80tal_751",
    "customVideoContainer": "_customVideoContainer_80tal_779",
    "customEmbedContainer": "_customEmbedContainer_80tal_779",
    "videoIconsHeader": "_videoIconsHeader_80tal_789",
    "lightbox": "_lightbox_80tal_1",
    "imgTitle": "_imgTitle_80tal_279",
    "iconHeaderCenter": "_iconHeaderCenter_80tal_923",
    "innerContainerWithTopCaption": "_innerContainerWithTopCaption_80tal_1115",
    "slideshowImgFullscreen": "_slideshowImgFullscreen_80tal_1123",
    "slideshowInnerContainerFullScreen": "_slideshowInnerContainerFullScreen_80tal_1175",
    "fullScreenLightboxImg": "_fullScreenLightboxImg_80tal_1183",
    "slideshowInnerContainerImgMetadata": "_slideshowInnerContainerImgMetadata_80tal_1195",
    "opacityFade": "_opacity-fade_80tal_1249",
    "imageSliderThumbnails": "_imageSliderThumbnails_80tal_1285",
    "slideshowImgMetadata": "_slideshowImgMetadata_80tal_1361",
    "prev1Metadata": "_prev1Metadata_80tal_1369",
    "slideshowImgWithCaption": "_slideshowImgWithCaption_80tal_1411",
    "hideControlsBarAndCaption": "_hideControlsBarAndCaption_80tal_1419",
    "lightboxImg": "_lightboxImg_80tal_1437",
    "lightIcon": "_lightIcon_80tal_1487",
    "darkIcon": "_darkIcon_80tal_1513",
    "lightHeaderIcon": "_lightHeaderIcon_80tal_1543",
    "darkHeaderIcon": "_darkHeaderIcon_80tal_1569",
    "magnifierImage": "_magnifierImage_80tal_1593",
    "active": "_active_80tal_1601",
    "inactiveThumbnailBorder": "_inactiveThumbnailBorder_80tal_1609",
    "emblaThumbs": "_emblaThumbs_80tal_1625",
    "fullScreenSlideshowImg": "_fullScreenSlideshowImg_80tal_1671",
    "htmlVideo": "_htmlVideo_80tal_363",
    "containImg": "_containImg_80tal_1981",
    "reactTransformComponent": "_reactTransformComponent_80tal_2013",
    "loader": "_loader_80tal_2035",
    "rotation": "_rotation_80tal_1",
    "dayLoader": "_dayLoader_80tal_2081",
    "nightLoader": "_nightLoader_80tal_2091",
    "closeButton": "_closeButton_80tal_2113",
    "closeButtonRounded": "_closeButtonRounded_80tal_2113",
    "slideImageAndCaption": "_slideImageAndCaption_80tal_2205",
    "roundedBorder": "_roundedBorder_80tal_2237",
    "maxWidthFull": "_maxWidthFull_80tal_2245",
    "maxWidthWithoutMagnifier": "_maxWidthWithoutMagnifier_80tal_2253",
    "lightboxVideo": "_lightboxVideo_80tal_2391",
    "navigationWrapper": "_navigation-wrapper_80tal_2401",
    "dots": "_dots_80tal_2409",
    "dot": "_dot_80tal_2409",
    "arrow": "_arrow_80tal_2459",
    "leftArrow": "_leftArrow_80tal_2489",
    "rightArrow": "_rightArrow_80tal_2503",
    "arrowDisabled": "_arrow--disabled_80tal_2527",
    "navDotsMargin": "_navDotsMargin_80tal_2537",
    "inactiveThumbnailBorderImgSlider": "_inactiveThumbnailBorderImgSlider_80tal_2545",
    "ytVideoImgSlider": "_ytVideoImgSlider_80tal_2553",
    "outerYtVideoImgSlider": "_outerYTVideoImgSlider_80tal_2573",
    "imgSliderArrow": "_imgSliderArrow_80tal_2593",
    "cursorPointer": "_cursorPointer_80tal_2615",
    "lightboxjsIcon": "_lightboxjsIcon_80tal_2623",
    "embla": "_embla_80tal_1625",
    "emblaViewport": "_emblaViewport_80tal_2643",
    "emblaContainer": "_emblaContainer_80tal_2653",
    "emblaContainerImgMetadata": "_emblaContainerImgMetadata_80tal_2683",
    "imgdrag": "_imgdrag_80tal_2695",
    "emblaSlide": "_emblaSlide_80tal_2695",
    "emblaThumbsViewport": "_emblaThumbsViewport_80tal_2715",
    "emblaThumbsContainer": "_emblaThumbsContainer_80tal_2723",
    "emblaThumbsSlide": "_emblaThumbsSlide_80tal_2759",
    "emblaThumbsSlideImg": "_emblaThumbsSlideImg_80tal_2773",
    "mlAuto": "_mlAuto_80tal_2787",
    "metadata": "_metadata_80tal_2795",
    "emblaSlideGrid": "_emblaSlideGrid_80tal_2803",
    "metadataPanel": "_metadataPanel_80tal_2825",
    "metadataInnerContainer": "_metadataInnerContainer_80tal_2837",
    "imgMetadataCloseBtn": "_imgMetadataCloseBtn_80tal_2855",
    "reactTransformWrapper": "_reactTransformWrapper_80tal_2877",
    "navigationDot": "_navigationDot_80tal_183",
    "navigationDotContainer": "_navigationDotContainer_80tal_2961",
    "imgfade": "_imgfade_80tal_2975",
    "notFullScreen": "_notFullScreen_80tal_2987",
    "imgFadeWithTopCaption": "_imgFadeWithTopCaption_80tal_3023",
    "emblaSlideSelected": "_emblaSlideSelected_80tal_3033",
    "fullImg": "_fullImg_80tal_3059",
    "rotateImg90Deg": "_rotateImg90Deg_80tal_3071",
    "rotateImg": "_rotate_img_80tal_3081",
    "zoomInCursor": "_zoomInCursor_80tal_3105",
    "zoomOutCursor": "_zoomOutCursor_80tal_3113",
    "lightboxjsBtn": "_lightboxjsBtn_80tal_3121",
    "lightboxjsBtnShowOutline": "_lightboxjsBtn_showOutline_80tal_3129"
};
;
function LightboxImage({ props, imgRef, fullImg, imgStyle, imgSrc, index, displayImgMetadata, enableMagnifyingGlass, onImgError, onUpdateImgMetadata }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const getImageFilename = (img_src)=>{
        let img_src_split = img_src.split("/");
        let name = img_src_split[img_src_split.length - 1];
        return name;
    };
    const handleError = (event, index2)=>{
        if (onImgError) {
            onImgError(event, index2);
        }
    };
    const getLoaderThemeClass = ()=>{
        if (props.theme) {
            if (props.theme == "night" || props.theme == "lightbox") {
                return SlideshowLightbox_module_css_default.nightLoader;
            } else if (props.theme == "day") {
                return SlideshowLightbox_module_css_default.dayLoader;
            }
        }
        return SlideshowLightbox_module_css_default.nightLoader;
    };
    const parseCreateDate = (js_date)=>{
        if (js_date) {
            let date = js_date.getDate();
            let month = js_date.getMonth() + 1;
            let year = js_date.getFullYear();
            let time = js_date.toLocaleTimeString(metadataLocale);
            return "" + year + "-" + (month <= 9 ? "0" + month : month) + "-" + (date <= 9 ? "0" + date : date) + ` ${time}`;
        }
        return "";
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLoading ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${SlideshowLightbox_module_css_default.loader} ${getLoaderThemeClass()}`
            }, "loader") : null,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                className: `imageModal ${fullImg && props.thumbnailImgAnim ? SlideshowLightbox_module_css_default.fullImg : false}  
            ${props.imgElemClassname ? props.imgElemClassname : ""}
            ${props.isZoomCursor ? SlideshowLightbox_module_css_default.zoomInCursor : ""}
          ${SlideshowLightbox_module_css_default.lightboxImg} ${SlideshowLightbox_module_css_default.rotate_img}
          ${enableMagnifyingGlass ? SlideshowLightbox_module_css_default.maxWidthFull : SlideshowLightbox_module_css_default.maxWidthWithoutMagnifier}  ${SlideshowLightbox_module_css_default.containImg} `,
                style: imgStyle,
                ref: imgRef,
                loading: "lazy",
                src: imgSrc,
                onError: (event)=>{
                    setIsLoading(false);
                    handleError(event, index);
                },
                onLoad: (img)=>{
                    setIsLoading(false);
                    if (displayImgMetadata) {
                        if (img) {
                            let img_target = img.target;
                            let individual_image_metadata = {};
                            let name = getImageFilename(img_target.src);
                            individual_image_metadata["name"] = name;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$exifr$2f$dist$2f$full$2e$esm$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].parse(img_target, true).then((exif)=>{
                                if (exif) {
                                    let keys = [
                                        "isoData",
                                        "createDate",
                                        "height",
                                        "width",
                                        "shutterSpeed",
                                        "fNumber"
                                    ];
                                    for(let i = 0; i < keys.length; i++){
                                        let keyName = keys[i];
                                        switch(keyName){
                                            case "isoData":
                                                if (exif.ISO) {
                                                    individual_image_metadata["isoData"] = exif.ISO;
                                                }
                                                break;
                                            case "createDate":
                                                if (exif.CreateDate) {
                                                    individual_image_metadata["createDate"] = parseCreateDate(exif.CreateDate);
                                                }
                                                break;
                                            case "height":
                                                if (exif.ExifImageHeight) {
                                                    individual_image_metadata["height"] = exif.ExifImageHeight;
                                                }
                                                break;
                                            case "width":
                                                if (exif.ExifImageWidth) {
                                                    individual_image_metadata["width"] = exif.ExifImageWidth;
                                                }
                                                break;
                                            case "fNumber":
                                                if (exif.fNumber) {
                                                    individual_image_metadata["fNumber"] = exif.fNumber;
                                                }
                                                break;
                                            case "shutterSpeed":
                                                if (exif.ShutterSpeedValue) {
                                                    individual_image_metadata["shutterSpeed"] = exif.ShutterSpeedValue;
                                                }
                                                break;
                                        }
                                    }
                                    let imgMetadataItems = imgMetadata;
                                    imgMetadataItems[index] = individual_image_metadata;
                                    onUpdateImgMetadata(imgMetadataItems);
                                }
                            });
                        }
                    }
                },
                id: "img"
            })
        ]
    });
}
// esbuild-css-modules-plugin-namespace:C:\Users\silvi\AppData\Local\Temp\tmp-17516-ydI8UBg67iue\lightbox.js-react\lib\components\SlideshowLightbox\SlideshowLightbox.module.css.js
var digest2 = "8e372a2462ab4d701b608162b9ccdcc90f856a8573e2c0a559f4e62bfd6f9e3e";
var css2 = `._lightboxjs_80tal_1 {
  margin: 0;
  padding: 0;
}

._lightboxjs_80tal_1 * {
  box-sizing: border-box;
}

/* .lightboxjs img,
.lightboxjs svg,
.lightboxjs video {
  display: block;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
} */

._slideshowBtn_80tal_37 {
  padding-bottom: 2px;
}

._closeIcon_80tal_45:hover,
._closeIcon_80tal_45:focus,
._iconsHeader_80tal_49 svg:hover,
._iconsHeader_80tal_49 svg:focus,
._prev1_80tal_53 span:hover,
._next1_80tal_55:hover,
._icon_80tal_49:hover {
  text-decoration: none;
  cursor: pointer;
  /* color: rgb(230, 230, 230); */
}

._prevIcon_80tal_69:hover,
._nextIcon_80tal_71:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(230, 230, 230);
}

._show_80tal_81 {
  display: flex;
}

._displayHidden_80tal_89 {
  display: none;
}

._thumbnail_80tal_97 {
  opacity: 1;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

._next1_80tal_55 {
  right: 1%;
  padding-left: 2vw;
  padding-right: 3vw;
}

._prev1_80tal_53 {
  left: 2%;
  padding-right: 2vw;
  padding-left: 3vw;
}

._thumbnails_80tal_135 {
  transition: border 0.3s;
}

._thumbnail_80tal_97 {
  display: inline;
}

._thumbnailsWithCaption_80tal_151 {
  width: 90%;
}

._thumbnailsOuterContainer_80tal_159 {
  position: absolute;
  bottom: 4%;
  height: 5vh;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

._navigationDots_80tal_183 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* Mobile screens */
@media screen and (min-width: 20em) {
  ._imageSlide_80tal_199 {
    height: 67vw;
    width: 60%;
  }

  ._thumbnailsOuterContainer_80tal_159 {
    position: absolute;
    bottom: 7%;
    width: 100vw;
    /* width: 100%; */
  }

  ._thumbnailsAndCaption_80tal_223 {
    height: 23vh;
    bottom: 2%;

  }

  ._hideControlsBar_80tal_235 ._slideshowImg_80tal_235 {
    /* height: 100vh; */
  }

  ._rotateImgInnerContainer_80tal_243 {
    top: 8%;
  }

  ._hideControlsBar_80tal_235 ._slideshowInnerContainer_80tal_251 {
    top: 0;
  }

  ._thumbnail_80tal_97 {
    width: 80px;
    max-width: 80px;
    height: 7vh;
  }

  ._videoThumbnailsOuterContainer_80tal_271 {
    bottom: 2%;
  }

  ._imgTitleContainer_80tal_279 {
    padding-bottom: 16px;
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
  }

  ._thumbnails_80tal_135 {
    margin-left: auto;
    margin-right: auto;
  }

  ._next1_80tal_55 {
    right: 0.9%;
  }

  ._prev1_80tal_53 {
    left: 1.5%;
  }
}

._thumbnail_80tal_97 {
  height: 5vh;
  border-radius: 6px;
  margin-right: 7px;
  object-fit: cover;
}



._thumbnailsOuterContainerMetadata_80tal_339 {
  width: 78vw;
}

._videoThumbnailsOuterContainer_80tal_271 {
  bottom: 5%;
}

._thumbnailsAndCaption_80tal_223 {
  height: 19vh;
}

._htmlVideoOuterContainer_80tal_363 video {
  height: 100%;
  max-height: 70vh;
  width: 100%;
}

._caption_80tal_375 {
  position: absolute;
  bottom: 14%;
  width: 100vw;
  z-index: 10000000;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

._galleryImg_80tal_395 {
  cursor: pointer;
  margin: 0.2em;
}

._modalContainer_80tal_405 {
  width: 100vw;
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
}

._slideshowAnimContainer_80tal_443 {
  /* height: 100%;
  max-height: 100%; */
  direction: ltr;
  overflow: hidden;
  touch-action: none;
  padding: 0;
  overflow-y: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000000;
}

._fullScreenContainer_80tal_479 img {
  height: 100vh;
  max-width: 100%;
  /* max-height: 100vh; */
}

._imageInnerContainer_80tal_491 img {
  height: 80vh;
  max-width: 100%;
  max-height: 100%;
}

._imageInnerContainer_80tal_491 {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._magnifyWrapper_80tal_529 {
  margin-bottom: 3em;
  margin-left: auto;
  margin-right: auto;
}

._slideshowInnerContainer_80tal_251 {
  position: fixed; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: top 0.2s ease-in-out 0s;
  top: 12%;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1000000;
}

._slideshowInnerVideoContainer_80tal_569 {
  top: 6%;
}

._slideshowInnerContainerThumbnails_80tal_577 {
  top: 12%;
}

._hideControlsBar_80tal_235  {
  top: 0;
}

._fullScreenContainer_80tal_479 {
  top: 0;
}

._lightboxContainer_80tal_601 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

._next1_80tal_55,
._prev1_80tal_53 {
  top: calc(50% - 20px);
  position: absolute;
  display: flex;
  transition: color 0.2s;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  padding-top: 2vh;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  /* border-radius: 30px; */
  width: 40px;
  height: 40px;
  font-size: 18px;
  z-index: 10000000;
  
  background: none !important;
  border: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}



._next1_80tal_55:hover,
._prev1_80tal_53:hover {
  color: rgb(230, 230, 230);
}

._slideshowAnimImg_80tal_683 {
  position: absolute;
  max-width: 100vw;
}

._controls_80tal_693 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

._iconsHeader_80tal_49 {
  color: white;
  display: flex;
  flex-direction: row;
  /* align-items: center;
    justify-content: center; */
  cursor: pointer;
  z-index: 999999999;
  /* padding: 0.14vw; */
}

._iconHeaderDefault_80tal_727 {
  position: absolute;
  top: 10px;
  right: 45px;
}

._ytVideo_80tal_739 {
  aspect-ratio: 16 / 9;
  height: 65vh;
  width: 100%;
}

._videoOuterContainer_80tal_751 {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  height: 60vh;
  max-height: 65vh;
}

._htmlVideoOuterContainer_80tal_363 {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._customVideoContainer_80tal_779, ._customEmbedContainer_80tal_779 {
  margin-left: auto;
  margin-right: auto;
}

._videoIconsHeader_80tal_789 {
  position: fixed;
  top: 4%;
  right: 3%;
}

._lightbox_80tal_1 ._iconsHeader_80tal_49 svg {
  transition: 0.3s all;
}

._iconsHeader_80tal_49 svg:active {
  transform: scale(0.97);
}

._imgTitle_80tal_279 {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

._iconsHeader_80tal_49 svg {
  margin-left: 0.6em;
  padding: 0.2em;
  transition: all 0.1s;
  /* width: 32px;  */
  /* font-size: 18px; */
  line-height: 16px;
  vertical-align: baseline;
}

._icon_80tal_49 {
  /* width: 32px;  */
}

@media screen and (min-width: 6em) {
  ._iconsHeader_80tal_49 {
    top: 3%;
  }

  ._slideshowAnimContainer_80tal_443 {
    width: 100vw;
  }

  ._iconsHeader_80tal_49 svg {
    /* width: 34px;  */
    padding-right: 0.3em;
  }

  ._lightboxjs_80tal_1 img {
    cursor: pointer;
  }

  ._thumbnail_80tal_97 {
    height: 9vh;
    /* width: 22vw; */
  }

  ._next1_80tal_55 {
    top: calc(48% - 20px);
  }

  ._prev1_80tal_53 {
    top: calc(48% - 20px);

  }

  ._iconHeaderCenter_80tal_923 {
    width: 100vw; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;
  }

}

@media screen and (min-width: 39em) {
  ._slideshowAnimContainer_80tal_443 {
    width: 100vw;
  }

  ._slideshowInnerContainer_80tal_251 {
    /* width: 100vw;
    height: 95vh;
    position: absolute; */
  }

  ._imgTitleContainer_80tal_279 {
    padding-bottom: 0px;
  }
  

  ._next1_80tal_55 {
    right: 0.7%;
  }

  ._iconHeaderCenter_80tal_923 {
    width: 100%; 
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: fixed;
    top: 10px;
    justify-content: center;
    left: 0;

  
  }

  /* .thumbnailsOuterContainer {
    bottom: 10%;
  } */

  /* .hideControlsBar .slideshow_img {
    height: 70vh;

  }

  .hideControlsBar {
    top: 10%;
  } */

  ._fullScreenContainer_80tal_479 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._fullScreenContainer_80tal_479 img {
    height: 100vh;
  }

  ._thumbnails_80tal_135 {
    margin-top: 0.6em;
  }

  ._thumbnail_80tal_97 {
    /* height: 8vh; */
    width: 80px;
    max-width: 80px;
  }

  ._iconsHeader_80tal_49 svg {
    /* width: 32px; 
      font-size: 32px; */
  }

  ._prev1_80tal_53 {
    left: 2.7%;
    padding-right: 2vw;
  }
}

/* Desktop screens */
@media screen and (min-width: 42em) {
  ._imageSlide_80tal_199 {
    height: 70vh;
    width: 80vw;
  }

  ._innerContainerWithTopCaption_80tal_1115 {
    top: 8%;
  }

  ._slideshowImgFullscreen_80tal_1123 {
    display: grid;
    width: 92vw;
    place-items: start;
    margin-left: auto;
    margin-right: auto;
    scrollbar-gutter: stable both-edges;
  }

  ._thumbnailsAndCaption_80tal_223 {
    bottom: 0%;
  }
  
  ._rotateImgInnerContainer_80tal_243 {
    top: 2%;
  }

  ._slideshowInnerContainer_80tal_251 img {
    margin-top: 0vh;
    /* width: 70vw; */
  }

  ._fullScreenContainer_80tal_479 img {
    width: 80vw;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 {
    top: 0%;
  }

  ._fullScreenLightboxImg_80tal_1183 {
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  }

  ._slideshowInnerContainerImgMetadata_80tal_1195 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 img {
    object-fit: contain;
  }

  ._thumbnails_80tal_135 {
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 1.1em;
  }

  ._thumbnails_80tal_135::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ._opacity-fade_80tal_1249 {
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    opacity: 1;
  }

  ._thumbnailsOuterContainer_80tal_159 {
    margin-top: 0.1em;
    padding-top: 0.3em;
    height: 5vh;
    bottom: 11%;
  }

  ._thumbnailsAndCaption_80tal_223 {
    bottom: 0%;
  }

  ._thumbnail_80tal_97,
  ._imageSliderThumbnails_80tal_1285 img {
    height: 10vh;
    /* width: 7em; */
  }

  ._slideshowAnimContainer_80tal_443 {
    width: 100vw;
  }

  /* .slideshowInnerContainer {
    width: 100vw;
    height: 95vh;
  } */

  ._hideControlsBar_80tal_235 {
    /* height: 100vh; */
  }

  ._fullScreenContainer_80tal_479 {
    width: 100vw;
    /* height: 100vh; */
  }

  ._iconsHeader_80tal_49 svg {
    /* width: 37px;
      font-size: 34px; */
  }

  ._prev1_80tal_53 {
    left: 2%;
    padding-right: 2vw;
  }

  ._next1_80tal_55 {
    right: 2.4%;
  }

  
  ._slideshowImgMetadata_80tal_1361 {
    width: 78vw;
  }

  ._prev1Metadata_80tal_1369 {
    left: 1%;
  }

  ._navigationDots_80tal_183 {
    gap: 8px;
  }

 
}

@media screen and (min-width: 53em) {
  
  ._slideshowImg_80tal_235 {
    display: grid;
    width: 100vw;
    height: 70vh;
    place-items: start;
    /* margin-top: 7vh; */
  }

  ._slideshowImgWithCaption_80tal_1411 {
    height: 68vh;
  }

  ._hideControlsBar_80tal_235 ._slideshowImg_80tal_235, ._hideControlsBarAndCaption_80tal_1419 ._slideshowImg_80tal_235  {
    padding-top: 12vh;
  }

  ._fullScreenContainer_80tal_479 ._slideshowImg_80tal_235 {
    padding-top: 0vh;
  }


  ._lightboxImg_80tal_1437 {
      /* height: 70vh; */
  }

  ._thumbnail_80tal_97 {
    width: 95px;
    max-width: 80px;
  } 

  ._slideshowImgMetadata_80tal_1361 {
    width: 78vw;
  }
}
  

@media screen and (min-width: 80em) {
  ._slideshowInnerContainer_80tal_251 img {
    /* width: 60vw; */
  }

  ._fullScreenContainer_80tal_479 img {
    width: 80vw;
  }
}

._lightIcon_80tal_1487,
._lightIcon_80tal_1487 svg {
  background-color: white;
  color: black;
}

._lightIcon_80tal_1487:hover,
._lightIcon_80tal_1487 svg:hover {
  background-color: white;
  color: black;
  fill: black;
}

._darkIcon_80tal_1513,
._darkIcon_80tal_1513 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: silver;
  fill: silver;
}

._darkIcon_80tal_1513:hover,
._darkIcon_80tal_1513 svg:hover {
  color: rgba(107, 107, 107, 0.8);
  fill: rgba(107, 107, 107, 0.8);
}

/* Header icons  */
._lightHeaderIcon_80tal_1543 svg {
  background-color: white;
  color: black;
  fill: black;
}

._lightHeaderIcon_80tal_1543 svg:hover {
  background-color: white;
  color: rgb(24, 24, 24, 0.8);
  fill: rgb(24, 24, 24, 0.8);

}

._darkHeaderIcon_80tal_1569 svg {
  background-color: transparent;
  /* background-color: #151515; */
  color: #626b77;
  fill: #626b77;
}

._darkHeaderIcon_80tal_1569 svg:hover {
  color: rgba(99, 99, 99, 0.8);
  fill: rgba(99, 99, 99, 0.8);
}

._magnifierImage_80tal_1593 {
  object-fit: contain;
}

._thumbnails_80tal_135 ._active_80tal_1601 {
  border: solid rgb(107, 133, 206) 2px;
}

._inactiveThumbnailBorder_80tal_1609 {
  border: solid transparent 2px;
}

._thumbnails_80tal_135 {
  width: 95%;
}

._emblaThumbs_80tal_1625 {
  --thumbs-slide-spacing: 2px; 
  /* --thumbs-slide-height: 9rem; */
  margin-top: var(--thumbs-slide-spacing);
}

@media screen and (max-width: 40em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  ._imgTitleContainer_80tal_279 {
    /* position: absolute;
    top: 12%; */
  }

  ._slideshowImg_80tal_235 {
    height: 100vh;
  }
}

@media screen and (max-width: 53em) {
  ._fullScreenSlideshowImg_80tal_1671 {
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 44em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */
  ._thumbnailsOuterContainer_80tal_159 {
    bottom: 11%;
  }

  ._thumbnailsAndCaption_80tal_223 {
    bottom: 4%;
  }
  
  ._imgTitleContainer_80tal_279 {
    /* position: absolute;
    top: 5%; */
  }
}

@media screen and (max-width: 46em) and (min-width: 30em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */

  /* .imgTitleContainer {
    position: absolute;
    top: 7%;
  } */
}

@media screen and (max-width: 49em) and (min-width: 45em) {
  /* .innerContainerWithTopCaption {
    position: relative;
  } */


  /* .imgTitleContainer {
    position: absolute;
    top: 5%;
  } */
}

@media screen and (max-width: 29em) {
  ._fullScreenContainer_80tal_479 img {
    object-fit: cover;
  }

  ._emblaThumbs_80tal_1625 {
    --thumbs-slide-spacing: 3px; 
    /* --thumbs-slide-height: 9rem; */
    margin-top: var(--thumbs-slide-spacing);
  }



  ._htmlVideo_80tal_363 {
    margin-top: 5vh;
  }

  ._thumbnails_80tal_135 {
    width: 98%;
  }

  ._thumbnail_80tal_97 {
    width: 80px;
    max-width: 80px;
  }

  ._htmlVideoOuterContainer_80tal_363 video {
    max-height: 65vh;
  }

  ._videoIconsHeader_80tal_789 {
    position: fixed;
    top: 2%;
    right: 15px;
  }

  ._videoOuterContainer_80tal_751 {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    max-height: 65vh;
  }

  ._htmlVideoOuterContainer_80tal_363 {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
  }

  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 115px;
  }

  ._slideshowInnerVideoContainer_80tal_569 {
    top: 3%;
  }

  ._next1_80tal_55,
  ._prev1_80tal_53 {
    padding-bottom: 2vh;
    padding-top: 2vh;
  }

  ._next1_80tal_55 {
    padding-left: 4vw;
  }

  ._prev1_80tal_53 {
    padding-right: 4vw;
  }

  ._iconsHeader_80tal_49 {
    /* font-size: 28px; */
  }

}

@media screen and (max-width: 53em) {
  ._slideshowImg_80tal_235 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 70vh;
  }

  ._slideshowImg_80tal_235 img {
    margin-left: auto;
    margin-right: auto;
  }

  ._slideshowInnerContainerFullScreen_80tal_1175 {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: top 0.2s ease-in-out 0s;
    top: 10%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 1000000;
  }

  ._containImg_80tal_1981 {
    object-fit: contain;
  }
}

._fullScreenContainer_80tal_479 img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

._thumbnails_80tal_135 {
  text-align: center;
  white-space: nowrap;
}

._reactTransformComponent_80tal_2013 {
  margin-left: auto;
  margin-right: auto;
}

._magnifierImage_80tal_1593 {
  margin-left: auto;
  margin-right: auto;
}

/* CSS loader  */
._loader_80tal_2035 {
  width: 44px;
  height: 44px;
  box-sizing: border-box;

  border-radius: 50%;

  display: inline-block;
  position: fixed;
  top: 35%;
  left: 50%;
  animation: _rotation_80tal_1 1s linear infinite;
}

@keyframes _rotation_80tal_1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

._dayLoader_80tal_2081 {
  border: 5px solid #626b77;
  border-bottom-color: transparent;
}

._nightLoader_80tal_2091 {
  border: 5px solid #fff;
  border-bottom-color: transparent;
}

._lightboxImg_80tal_1437 {
  max-height: 70vh;
  margin-left: auto;
  margin-right: auto;
}

._controls_80tal_693 button, ._closeButton_80tal_2113, ._closeButtonRounded_80tal_2113 {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
}

._controls_80tal_693 svg {
  box-sizing: border-box;
}

._closeButton_80tal_2113 svg, ._closeButtonRounded_80tal_2113 svg {
  box-sizing: border-box;
  font-size: 16px;
  padding-top: 0.5px;
}

._closeButton_80tal_2113 {
  padding-top: 3px;
}

._closeButtonRounded_80tal_2113 {
  cursor: pointer;

}

._closeButtonRounded_80tal_2113 svg {
  margin: 0;
  padding: 5px;
  background-color: black;
  border-color: transparent;
  border-radius: 28px;

}

._thumbnailsAndCaption_80tal_223 {
  height: 19vh;
  margin-top: 0em;
  width: 100vw;
}

._thumbnailsWithCaption_80tal_151 {
  margin-top: 0em;
}

._slideImageAndCaption_80tal_2205 {
  top: 9%;
}

._slideImageAndCaption_80tal_2205._hideControlsBar_80tal_235 {
  top: 0;
}

._slideshowAnimContainer_80tal_443 {
  -ms-overflow-style: none;
  /* scrollbar-width: none;   */
}
._thumbnails_80tal_135::-webkit-scrollbar {
  display: none;
}

._roundedBorder_80tal_2237 {
  border-radius: 20px;
}

._maxWidthFull_80tal_2245 {
  max-width: 100%;
}

._maxWidthWithoutMagnifier_80tal_2253 {
  max-width: 80%;
}

@media screen and (max-width: 880px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    right: 5%;
  }
}

@media screen and (max-width: 480px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 180px;
  }
  
}

@media screen and (max-width: 440px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 160px;
  }
}

@media screen and (max-width: 410px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 140px;
  }
}

@media screen and (max-width: 385px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 135px;
    /* top: 24px; */
  }
}

@media screen and (max-width: 365px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 90px;
  }
}

@media screen and (max-width: 345px) {
  ._iconHeaderDefault_80tal_727 {
    position: fixed;
    left: 94px;
  }
}

@media screen and (max-width: 325px) {
  ._iconsHeader_80tal_49 {
    position: fixed;
    left: 60px;
  }
}

@media screen and (max-width: 300px) {
  ._iconsHeader_80tal_49 {
    position: fixed;
    left: 30px;
  }
}

._lightboxVideo_80tal_2391 {
  margin-left: auto;
  margin-right: auto;
}

._navigation-wrapper_80tal_2401 {
  position: relative;
}

._dots_80tal_2409 {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}

._dot_80tal_2409 {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

._dot_80tal_2409:focus {
  outline: none;
}

._dot_80tal_2409._active_80tal_1601 {
  background: #000;
}

._arrow_80tal_2459 {
  position: absolute;
  top: 50%;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.2s;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: sans-serif;
}

._leftArrow_80tal_2489 {
  left: 8px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._rightArrow_80tal_2503 {
  left: auto;
  right: 8px;
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
}

._arrow_80tal_2459:hover {
  color: rgb(230, 230, 230);
}

._arrow--disabled_80tal_2527,
._arrow--disabled_80tal_2527:hover {
  color: rgba(255, 255, 255, 0.5);
}

._navDotsMargin_80tal_2537 {
  margin-top: 12px;
}

._inactiveThumbnailBorderImgSlider_80tal_2545 {
  border: 'solid transparent 2px';
}

._ytVideoImgSlider_80tal_2553 {
  width: 100%;
  height: 100%;
}

._ytVideoImgSlider_80tal_2553 iframe {
  width: 100%;
  height: 100%;
}

._outerYTVideoImgSlider_80tal_2573 {
  height: 100%;
}

._lightboxjs_80tal_1 iframe {
  margin: none;
  padding: none;
  border: none;
}

._imgSliderArrow_80tal_2593 {
  z-index: 100000;
  background-color: transparent;
  border: none;
}

._thumbnails_80tal_135 {
  margin-left: auto;
  margin-right: auto;
}

._cursorPointer_80tal_2615 {
  cursor: pointer;
}

._lightboxjsIcon_80tal_2623 > * { color: inherit; fill: inherit }

._embla_80tal_1625 {
  margin-left: auto;
  margin-right: auto;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
}

._emblaViewport_80tal_2643 {
  overflow: hidden;
  width: 100vw;
}

._emblaContainer_80tal_2653 {
  backface-visibility: hidden; 
  touch-action: pan-y;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
  display: grid;  
  grid-auto-flow: column;  
  grid-auto-columns: 100%; 
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto; 
  /* width: 80%;
*/
}

._emblaContainerImgMetadata_80tal_2683 {
  width: 78vw;
  max-width: 78vw;
  height: 80vh;
}

._imgdrag_80tal_2695 ._emblaSlide_80tal_2695 {
  flex: 0 0 80%;
  min-width: 0;
  max-width: 100%;
  padding-left: 12px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

._emblaThumbsViewport_80tal_2715 {
  overflow: hidden;
}

._emblaThumbsContainer_80tal_2723 {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--thumbs-slide-spacing) * -1);
  width: 100%;
  /* align-items: center;
  text-align: center;
  width: fit-content; */
  /* justify-content: center; */
  
}

._emblaThumbsContainer_80tal_2723::before, ._emblaThumbsContainer_80tal_2723::after {
  content: '';  /* Insert pseudo-element */
  margin: auto; /* Make it push flex items to the center */
}


._emblaThumbsSlide_80tal_2759 {
  /* min-width: 0; */
  padding-left: var(--thumbs-slide-spacing);
  /* position: relative; */
  /* width: 140px; */
}

._emblaThumbsSlideImg_80tal_2773 {
  /* display: block; */
  height: var(--thumbs-slide-height);
  width: 100%;
  object-fit: cover;
}

._mlAuto_80tal_2787 {
  margin-left: auto;
}

._metadata_80tal_2795 {
  color: white;
}

._emblaSlideGrid_80tal_2803 {
  display: flex;
}

._metadata_80tal_2795 {
  text-align: left;
  min-width: 17vw;
  max-width: 17vw;
  padding-top: 5vw;
}

._metadataPanel_80tal_2825 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

._metadataInnerContainer_80tal_2837 {
  padding-left: 7vw;
}

._metadataInnerContainer_80tal_2837 span {
  display: block;
}


._imgMetadataCloseBtn_80tal_2855 {
  position: absolute;
  top: 1%;
  right: 2%;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

/* Styling from react-zoom-pan-pinch library */
._reactTransformWrapper_80tal_2877 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -khtml-user-select: none; /* Konqueror HTML */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
}

._reactTransformComponent_80tal_2013 {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}

._reactTransformComponent_80tal_2013 img {
  pointer-events: none;
}

._navigationDot_80tal_183 {
  height: 10px;
  width: 10px;
  background-color: silver;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

._navigationDotContainer_80tal_2961 {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 12px;
  padding-right: 12px;
}

._imgfade_80tal_2975._emblaContainer_80tal_2653 {
  transform: none !important; /* override Embla */
  display: flex;
  /* height: 250px; */
}

._notFullScreen_80tal_2987 {
  top: 0;
}

._imgfade_80tal_2975._emblaSlide_80tal_2695 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 0; */
  left: 0 !important; /* override Embla */
  right: 0 !important; /* override Embla */
  opacity: 0;
  transition: opacity 0.5s;
  counter-increment: embla;
  border-radius: 0.5rem;
}

._imgFadeWithTopCaption_80tal_3023 {
  top: 16%;
  position: fixed;
}

._imgfade_80tal_2975._emblaSlideSelected_80tal_3033 {
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 1;
}

._imgfade_80tal_2975._emblaSlide_80tal_2695:before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

._fullImg_80tal_3059 {
  height: 84vh;
  max-height: 84vh;
  object-fit: contain;
}

._rotateImg90Deg_80tal_3071{
transform: rotate(90deg);
transition: transform 1s linear;
}  

._rotate_img_80tal_3081 {
transition: transform 0.7s linear;
}

._fullScreenContainer_80tal_479 img {
/* max-height: 100vh; */
}

._slideshowImg_80tal_235 img {
height: 100%;
}

._zoomInCursor_80tal_3105 {
  cursor: zoom-in;
}

._zoomOutCursor_80tal_3113 {
  cursor: zoom-out;
}

._lightboxjsBtn_80tal_3121:focus {
  outline: none;
}

._lightboxjsBtn_showOutline_80tal_3129:focus-visible {
  outline: 2px solid #00aaff;
  outline-offset: 2px;
}

._lightboxjsBtn_80tal_3121::-webkit-focus-inner {
  border: 0;
}

._lightboxjsBtn_80tal_3121 {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
}
`;
(function() {
    if (typeof document === "undefined") {
        return;
    }
    if (!document.getElementById(digest2)) {
        var el = document.createElement("style");
        el.id = digest2;
        el.textContent = css2;
        document.head.appendChild(el);
    }
})();
var SlideshowLightbox_module_css_default2 = {
    "lightboxjs": "_lightboxjs_80tal_1",
    "slideshowBtn": "_slideshowBtn_80tal_37",
    "closeIcon": "_closeIcon_80tal_45",
    "iconsHeader": "_iconsHeader_80tal_49",
    "prev1": "_prev1_80tal_53",
    "next1": "_next1_80tal_55",
    "icon": "_icon_80tal_49",
    "prevIcon": "_prevIcon_80tal_69",
    "nextIcon": "_nextIcon_80tal_71",
    "show": "_show_80tal_81",
    "displayHidden": "_displayHidden_80tal_89",
    "thumbnail": "_thumbnail_80tal_97",
    "thumbnails": "_thumbnails_80tal_135",
    "thumbnailsWithCaption": "_thumbnailsWithCaption_80tal_151",
    "thumbnailsOuterContainer": "_thumbnailsOuterContainer_80tal_159",
    "navigationDots": "_navigationDots_80tal_183",
    "imageSlide": "_imageSlide_80tal_199",
    "thumbnailsAndCaption": "_thumbnailsAndCaption_80tal_223",
    "hideControlsBar": "_hideControlsBar_80tal_235",
    "slideshowImg": "_slideshowImg_80tal_235",
    "rotateImgInnerContainer": "_rotateImgInnerContainer_80tal_243",
    "slideshowInnerContainer": "_slideshowInnerContainer_80tal_251",
    "videoThumbnailsOuterContainer": "_videoThumbnailsOuterContainer_80tal_271",
    "imgTitleContainer": "_imgTitleContainer_80tal_279",
    "thumbnailsOuterContainerMetadata": "_thumbnailsOuterContainerMetadata_80tal_339",
    "htmlVideoOuterContainer": "_htmlVideoOuterContainer_80tal_363",
    "caption": "_caption_80tal_375",
    "galleryImg": "_galleryImg_80tal_395",
    "modalContainer": "_modalContainer_80tal_405",
    "slideshowAnimContainer": "_slideshowAnimContainer_80tal_443",
    "fullScreenContainer": "_fullScreenContainer_80tal_479",
    "imageInnerContainer": "_imageInnerContainer_80tal_491",
    "magnifyWrapper": "_magnifyWrapper_80tal_529",
    "slideshowInnerVideoContainer": "_slideshowInnerVideoContainer_80tal_569",
    "slideshowInnerContainerThumbnails": "_slideshowInnerContainerThumbnails_80tal_577",
    "lightboxContainer": "_lightboxContainer_80tal_601",
    "slideshowAnimImg": "_slideshowAnimImg_80tal_683",
    "controls": "_controls_80tal_693",
    "iconHeaderDefault": "_iconHeaderDefault_80tal_727",
    "ytVideo": "_ytVideo_80tal_739",
    "videoOuterContainer": "_videoOuterContainer_80tal_751",
    "customVideoContainer": "_customVideoContainer_80tal_779",
    "customEmbedContainer": "_customEmbedContainer_80tal_779",
    "videoIconsHeader": "_videoIconsHeader_80tal_789",
    "lightbox": "_lightbox_80tal_1",
    "imgTitle": "_imgTitle_80tal_279",
    "iconHeaderCenter": "_iconHeaderCenter_80tal_923",
    "innerContainerWithTopCaption": "_innerContainerWithTopCaption_80tal_1115",
    "slideshowImgFullscreen": "_slideshowImgFullscreen_80tal_1123",
    "slideshowInnerContainerFullScreen": "_slideshowInnerContainerFullScreen_80tal_1175",
    "fullScreenLightboxImg": "_fullScreenLightboxImg_80tal_1183",
    "slideshowInnerContainerImgMetadata": "_slideshowInnerContainerImgMetadata_80tal_1195",
    "opacityFade": "_opacity-fade_80tal_1249",
    "imageSliderThumbnails": "_imageSliderThumbnails_80tal_1285",
    "slideshowImgMetadata": "_slideshowImgMetadata_80tal_1361",
    "prev1Metadata": "_prev1Metadata_80tal_1369",
    "slideshowImgWithCaption": "_slideshowImgWithCaption_80tal_1411",
    "hideControlsBarAndCaption": "_hideControlsBarAndCaption_80tal_1419",
    "lightboxImg": "_lightboxImg_80tal_1437",
    "lightIcon": "_lightIcon_80tal_1487",
    "darkIcon": "_darkIcon_80tal_1513",
    "lightHeaderIcon": "_lightHeaderIcon_80tal_1543",
    "darkHeaderIcon": "_darkHeaderIcon_80tal_1569",
    "magnifierImage": "_magnifierImage_80tal_1593",
    "active": "_active_80tal_1601",
    "inactiveThumbnailBorder": "_inactiveThumbnailBorder_80tal_1609",
    "emblaThumbs": "_emblaThumbs_80tal_1625",
    "fullScreenSlideshowImg": "_fullScreenSlideshowImg_80tal_1671",
    "htmlVideo": "_htmlVideo_80tal_363",
    "containImg": "_containImg_80tal_1981",
    "reactTransformComponent": "_reactTransformComponent_80tal_2013",
    "loader": "_loader_80tal_2035",
    "rotation": "_rotation_80tal_1",
    "dayLoader": "_dayLoader_80tal_2081",
    "nightLoader": "_nightLoader_80tal_2091",
    "closeButton": "_closeButton_80tal_2113",
    "closeButtonRounded": "_closeButtonRounded_80tal_2113",
    "slideImageAndCaption": "_slideImageAndCaption_80tal_2205",
    "roundedBorder": "_roundedBorder_80tal_2237",
    "maxWidthFull": "_maxWidthFull_80tal_2245",
    "maxWidthWithoutMagnifier": "_maxWidthWithoutMagnifier_80tal_2253",
    "lightboxVideo": "_lightboxVideo_80tal_2391",
    "navigationWrapper": "_navigation-wrapper_80tal_2401",
    "dots": "_dots_80tal_2409",
    "dot": "_dot_80tal_2409",
    "arrow": "_arrow_80tal_2459",
    "leftArrow": "_leftArrow_80tal_2489",
    "rightArrow": "_rightArrow_80tal_2503",
    "arrowDisabled": "_arrow--disabled_80tal_2527",
    "navDotsMargin": "_navDotsMargin_80tal_2537",
    "inactiveThumbnailBorderImgSlider": "_inactiveThumbnailBorderImgSlider_80tal_2545",
    "ytVideoImgSlider": "_ytVideoImgSlider_80tal_2553",
    "outerYtVideoImgSlider": "_outerYTVideoImgSlider_80tal_2573",
    "imgSliderArrow": "_imgSliderArrow_80tal_2593",
    "cursorPointer": "_cursorPointer_80tal_2615",
    "lightboxjsIcon": "_lightboxjsIcon_80tal_2623",
    "embla": "_embla_80tal_1625",
    "emblaViewport": "_emblaViewport_80tal_2643",
    "emblaContainer": "_emblaContainer_80tal_2653",
    "emblaContainerImgMetadata": "_emblaContainerImgMetadata_80tal_2683",
    "imgdrag": "_imgdrag_80tal_2695",
    "emblaSlide": "_emblaSlide_80tal_2695",
    "emblaThumbsViewport": "_emblaThumbsViewport_80tal_2715",
    "emblaThumbsContainer": "_emblaThumbsContainer_80tal_2723",
    "emblaThumbsSlide": "_emblaThumbsSlide_80tal_2759",
    "emblaThumbsSlideImg": "_emblaThumbsSlideImg_80tal_2773",
    "mlAuto": "_mlAuto_80tal_2787",
    "metadata": "_metadata_80tal_2795",
    "emblaSlideGrid": "_emblaSlideGrid_80tal_2803",
    "metadataPanel": "_metadataPanel_80tal_2825",
    "metadataInnerContainer": "_metadataInnerContainer_80tal_2837",
    "imgMetadataCloseBtn": "_imgMetadataCloseBtn_80tal_2855",
    "reactTransformWrapper": "_reactTransformWrapper_80tal_2877",
    "navigationDot": "_navigationDot_80tal_183",
    "navigationDotContainer": "_navigationDotContainer_80tal_2961",
    "imgfade": "_imgfade_80tal_2975",
    "notFullScreen": "_notFullScreen_80tal_2987",
    "imgFadeWithTopCaption": "_imgFadeWithTopCaption_80tal_3023",
    "emblaSlideSelected": "_emblaSlideSelected_80tal_3033",
    "fullImg": "_fullImg_80tal_3059",
    "rotateImg90Deg": "_rotateImg90Deg_80tal_3071",
    "rotateImg": "_rotate_img_80tal_3081",
    "zoomInCursor": "_zoomInCursor_80tal_3105",
    "zoomOutCursor": "_zoomOutCursor_80tal_3113",
    "lightboxjsBtn": "_lightboxjsBtn_80tal_3121",
    "lightboxjsBtnShowOutline": "_lightboxjsBtn_showOutline_80tal_3129"
};
;
;
;
;
var wrapNums = (minNum, maxNum, v)=>{
    if (minNum == maxNum) {
        return minNum;
    }
    let rangeSize = maxNum - minNum;
    return ((v - minNum) % rangeSize + rangeSize) % rangeSize + minNum;
};
var shouldAutoplay = (elem)=>{
    if (elem.type == "yt" && elem.autoPlay != true && elem.autoPlay != "true") {
        return false;
    } else if (elem.autoPlay == false || elem.autoPlay == "false") {
        return false;
    }
    return true;
};
var getVideoHeight = (elem)=>{
    if (elem.videoHeight) {
        return elem.videoHeight;
    }
    return "200";
};
var getVideoWidth = (elem)=>{
    if (elem.videoWidth) {
        return elem.videoWidth;
    }
    return "900";
};
var getScale = (num, maxScale)=>{
    if (num < 1) {
        return 1;
    } else if (num > maxScale) {
        return maxScale;
    }
    return num;
};
var closeFullScreen = (document2)=>{
    if (document2.exitFullscreen) {
        document2.exitFullscreen();
    } else if (document2.webkitExitFullscreen) {
        document2.webkitExitFullscreen();
    } else if (document2.msExitFullscreen) {
        document2.msExitFullscreen();
    }
};
var createCustomThumbnailBorder = (thumbnailBorder)=>{
    if (thumbnailBorder) {
        return `solid ${thumbnailBorder} 2px`;
    }
};
var areObjectsEqual = (object1, object2)=>typeof object1 === "object" && object1 != null && typeof object2 === "object" && object2 != null && Object.keys(object1).length > 0 ? Object.keys(object1).length === Object.keys(object2).length && Object.keys(object1).every((p)=>areObjectsEqual(object1[p], object2[p])) : object1 === object2;
var usePrevious = (value)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrevious.useEffect": ()=>{
            ref.current = value;
        }
    }["usePrevious.useEffect"]);
    return ref.current;
};
;
;
;
;
;
;
;
;
;
;
var thumbnailVariants = {
    visible: {
        opacity: 1,
        y: 0
    },
    hidden: {
        opacity: 0,
        y: 100
    }
};
var themes = {
    day: {
        background: "white",
        iconColor: "black",
        thumbnailBorder: "solid transparent 2px",
        textColor: "black",
        metadataTextColor: "black"
    },
    night: {
        background: "#151515",
        iconColor: "#626b77",
        thumbnailBorder: "solid rgb(107, 133, 206)  2px",
        textColor: "silver",
        metadataTextColor: "white"
    },
    lightbox: {
        background: "rgba(12, 12, 12, 0.93)",
        iconColor: "#626b77",
        thumbnailBorder: "solid rgb(107, 133, 206) 2px",
        textColor: "silver",
        metadataTextColor: "white"
    }
};
var inactiveThumbnailBorder = "solid transparent 2px";
var delta = 6;
var defaultTheme = "night";
var mobileWidth = 768;
var tabletWidth = 1100;
function PictureElem({ elem_metadata, enableMagnifyingGlass, onHandleError, index }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("picture", {
        className: `imageModal 
      ${SlideshowLightbox_module_css_default2.lightboxImg} 
      ${enableMagnifyingGlass ? SlideshowLightbox_module_css_default2.maxWidthFull : SlideshowLightbox_module_css_default2.maxWidthWithoutMagnifier} `,
        children: [
            Object.keys(elem_metadata).map((format)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("source", {
                    type: format,
                    srcSet: elem_metadata[format].srcSet
                }, format)),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                src: elem_metadata["fallback"],
                onError: (error)=>{
                    onHandleError(error, index);
                }
            })
        ]
    });
}
function IconButton({ onClick, children, label, id, showOutline = true, disabled = false, className = "", style = {} }) {
    function handleKeyDown(e) {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.(e);
        }
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        onClick,
        id,
        onKeyDown: handleKeyDown,
        className: `${SlideshowLightbox_module_css_default2.lightboxjsBtn} ${className} ${showOutline ? SlideshowLightbox_module_css_default2.lightboxjsBtn_showOutline : ""}`,
        style,
        tabIndex: 0,
        "aria-label": label,
        disabled,
        children
    });
}
var SlideshowLightbox = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "SlideshowLightbox.useImperativeHandle": ()=>({
                reset () {
                    initImages(true, true);
                }
            })
    }["SlideshowLightbox.useImperativeHandle"]);
    const [[imgSlideIndex, direction], setImgSlideIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slideAnimDuration, setSlideAnimDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.slideDuration ? props.slideDuration : 25);
    const [toggleThumbnails, setToggleThumbnails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.toggleThumbnailDisplay ? props.toggleThumbnailDisplay : false);
    const [controlsPlacement, setControlsPlacement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.controlsPlacement ? props.controlsPlacement : "default");
    const [isSlideshowPlaying, setIsSlideshowPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customIconStyle, setCustomIconStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.iconStyle ? props.iconStyle : null);
    const [emblaReinitialized, setEmblaReinitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewImageElems, setPreviewImageElems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const slideIndex = wrapNums(0, images.length, imgSlideIndex);
    const [reactSwipeOptions, setReactSwipeOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        loop: true,
        startIndex: 0,
        active: true,
        duration: slideAnimDuration,
        dragThreshold: 10,
        skipSnaps: true
    });
    let initialThumbnailOptions = {
        startIndex: 0,
        containScroll: "keepSnaps",
        dragFree: true
    };
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isMobile = width <= mobileWidth;
    const isTablet = width <= tabletWidth;
    const [thumbnailSwipeOptions, setThumbnailSwipeOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialThumbnailOptions);
    const [carouselReady, setCarouselReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTabletUserAgent, setIsTabletUserAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoomedIn, setZoomedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDisplay, setIsDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullImg, setFullImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prevFocusedElem, setPrevFocusedElem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [animationEntered, setAnimationEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightboxModalWidth, setLightboxModalWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.lightboxWidth ? props.lightboxWidth : "100vw");
    const [lightboxModalHeight, setLightboxModalHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.lightboxHeight ? props.lightboxHeight : "100vh");
    const [magnifyingGlassFeature, _setMagnifyingGlassFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.magnifyingGlass ? props.magnifyingGlass : false);
    const [disableZoom, setDisableZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.disableImageZoom ? props.disableImageZoom : false);
    const [slideshowInterval, setSlideshowInterval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.slideshowInterval ? props.slideshowInterval : 1700);
    const [rightArrowStyle, setRightArrowStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.rightArrowStyle ? props.rightArrowStyle : {});
    const [leftArrowStyle, setLeftArrowStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.leftArrowStyle ? props.leftArrowStyle : {});
    const [maxScale, setMaxScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.maxZoomScale ? getScale(props.maxZoomScale, 24) : 8);
    const [isRounded, setIsRounded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.roundedImages ? props.roundedImages : false);
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showControls ? props.showControls : true);
    const [displayFullScreenIcon, setDisplayFullScreenIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showFullScreenIcon ? props.showFullScreenIcon : true);
    const [displayThumbnailIcon, setDisplayThumbnailIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showThumbnailIcon ? props.showThumbnailIcon : true);
    const [displaySlideshowIcon, setDisplaySlideshowIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showSlideshowIcon ? props.showSlideshowIcon : true);
    const [rotateImgIcon, setRotateImgIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.rotateIcon ? props.rotateIcon : false);
    const [displayMagnificationIcons, setDisplayMagnificationIcons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showMagnificationIcons ? props.showMagnificationIcons : true);
    const [nextArrowElem, setNextArrowElem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.nextArrow ? props.nextArrow : null);
    const [isImageComponent, setImageComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.imageComponent ? props.imageComponent : null);
    const [prevArrowElem, setPrevArrowElem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.prevArrow ? props.prevArrow : null);
    const [modalCloseOption, setModalCloseOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.modalClose ? props.modalClose : "default");
    const [showDownloadBtn, setShowDownloadBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.downloadImages ? props.downloadImages : false);
    const [navigationDots, setNavigationDots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showNavigationDots ? props.showNavigationDots : false);
    const [metadataLocale2, setMetadataLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.metadataTimeLocale ? props.metadataTimeLocale : "en-US");
    const [isRTL, setIsRTL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.rtl ? props.rtl : false);
    const [frameworkID, setFrameworkID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.framework ? props.framework : "");
    const [lightboxIdentifier, setLightboxIdentifier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.lightboxIdentifier ? props.lightboxIdentifier : false);
    const [imageFullScreen, setImageFullScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.fullScreen ? props.fullScreen : false);
    const [licenseKey, setLicenseKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.licenseKey ? props.licenseKey : "");
    const [displayLoader, setDisplayLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showLoader ? props.showLoader : false);
    const [pinch, setPinch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentZoomScale, setCurrentZoomScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [startingIndex, setStartingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.startingSlideIndex ? props.startingSlideIndex : 0);
    const [showZoomCursor, setShowZoomCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.zoomCursor ? props.zoomCursor : false);
    const [zoomCursor, setZoomCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("zoom-in");
    const [singleClickZoom, setSingleClickZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.singleClickZoom ? props.singleClickZoom : false);
    const [backgroundColor, setBackgroundColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.backgroundColor ? props.backgroundColor : themes[defaultTheme].background);
    const [iconColor, setIconColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.iconColor ? props.iconColor : null);
    const [textColor, setTextColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.textColor ? props.textColor : themes[defaultTheme].textColor);
    const [showControlsBar, setShowControlsBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showControlsBar ? props.showControlsBar : true);
    const [imgCaptionPlacement, setImgCaptionPlacement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.captionPlacement ? props.captionPlacement : "below");
    const [coverMode, setCoverMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.useCoverMode ? props.useCoverMode : false);
    const [displayImgMetadata, setDisplayImgMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.displayMetadata ? props.displayMetadata : false);
    const [showImgMetadataPanel, setShowImgMetadataPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imgMetadata2, setImgMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showThumbnails, setShowThumbnails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.showThumbnails ? props.showThumbnails : false);
    const [animatedThumbnails, setAnimatedThumbnails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.animateThumbnails ? props.animateThumbnails : true);
    const [imgAnimation, setImgAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.imgAnimation ? props.imgAnimation : "imgDrag");
    const [arrowStyle, setArrowStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.arrowStyle ? props.arrowStyle : "dark");
    const div100vhHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$div$2d$100vh$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["use100vh"])();
    const lboxHeight = lightboxModalHeight == "100vh" ? div100vhHeight : lightboxModalHeight;
    const [YTVideoCurrentlyPlaying, setYTVideoCurrentlyPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reachedMaxScale, setReachedMaxScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBrowserFullScreen, setIsBrowserFullScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [enableMagnifyingGlass, setMagnifyingGlass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resolvedSrcs, setResolvedSrcs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        full: {},
        thumbnail: {}
    });
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [zoomIdx, setZoomIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imgContainHeight, setImgContainHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [imgContainWidth, setImgContainWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(426);
    const [isInit, setIsInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentRotation, setCurrentRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { open } = props;
    const previousValues = usePrevious({
        open
    });
    const zoomReferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const videoReferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const imageRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [videoElements, setVideoElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [noWindow, setNoWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.noWindow ? props.noWindow : false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mouseStartX, setMouseStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mouseStartY, setMouseStartY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const minimumSwipeDistance = 50;
    const lightboxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    const zoomImage = ()=>{
        if (imgAnimation == "fade") {
            if (currentZoomScale <= 1 && !reachedMaxScale) {
                zoomIntoImage();
            } else {
                zoomOutImage();
            }
        } else {
            if (currentZoomScale >= 1 && currentZoomScale < maxScale && !reachedMaxScale) {
                zoomIntoImage();
            } else {
                zoomOutImage();
            }
        }
        if (currentZoomScale == maxScale) {
            setReachedMaxScale(true);
        } else if (currentZoomScale == 1.08 && reachedMaxScale) {
            setReachedMaxScale(false);
        }
    };
    const zoomOutImage = ()=>{
        if (zoomReferences.current[zoomIdx] != null) {
            zoomReferences.current[zoomIdx].zoomOut();
        }
        setZoomedIn(false);
    };
    const zoomIntoImage = ()=>{
        if (zoomReferences.current[zoomIdx] != null) {
            zoomReferences.current[zoomIdx].zoomIn();
        }
        setZoomedIn(true);
    };
    const onTouchStart = (e)=>{
        if (e.targetTouches && e.targetTouches.length == 1) {
            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);
        }
        if (e.targetTouches && e.targetTouches.length == 2) {
            setPinch(true);
        }
    };
    const onTouchMove = (e)=>setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = (e)=>{
        if (touchStart != null && touchEnd != null && imgAnimation == "fade" && zoomedIn == false && pinch == false) {
            const distance = touchStart - touchEnd;
            if (distance != null) {
                const isLeftSwipe = distance > minimumSwipeDistance;
                const isRightSwipe = distance < -minimumSwipeDistance;
                if (isLeftSwipe) {
                    nextSlide();
                } else if (isRightSwipe) {
                    prevSlide();
                }
            }
        } else if (touchStart != null && touchEnd != null && zoomedIn == false && pinch == false) {
            if (toggleThumbnails) {
                setShowThumbnails(!showThumbnails);
            }
        }
        setPinch(false);
        setTouchStart(null);
    };
    const onMouseDown = (event)=>{
        setMouseStartX(event.pageX);
        setMouseStartY(event.pageY);
    };
    const onMouseUp = (event)=>{
        const differenceX = Math.abs(event.pageX - mouseStartX);
        const isLeftDragMotion = mouseStartX - event.pageX > delta;
        const isRightDragMotion = mouseStartX - event.pageX < -delta;
        if (differenceX > delta) {
            if (isLeftDragMotion && imgAnimation == "fade" && zoomedIn == false) {
                nextSlide();
            } else if (isRightDragMotion && imgAnimation == "fade" && zoomedIn == false) {
                prevSlide();
            }
        } else {
            if (toggleThumbnails) {
                setShowThumbnails(!showThumbnails);
            }
        }
    };
    const [thumbnailBorder, setThumbnailBorder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(props.thumbnailBorder ? createCustomThumbnailBorder(props.thumbnailBorder) : themes[defaultTheme].thumbnailBorder);
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(reactSwipeOptions);
    const [emblaThumbsRef, emblaThumbsApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(thumbnailSwipeOptions);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlideshowLightbox.useCallback2[scrollPrev]": ()=>{
            if (emblaApi) {
                emblaApi.scrollPrev();
            }
        }
    }["SlideshowLightbox.useCallback2[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlideshowLightbox.useCallback2[scrollNext]": ()=>{
            if (emblaApi) {
                emblaApi.scrollNext();
            }
        }
    }["SlideshowLightbox.useCallback2[scrollNext]"], [
        emblaApi
    ]);
    const variants = {
        active: {
            opacity: 1
        },
        inactive: {
            opacity: 0
        }
    };
    const isImageCaption = (placement)=>{
        if (placement != imgCaptionPlacement) {
            return false;
        }
        if (props.images && props.images.length > 0) {
            if (props.images[slideIndex]?.caption) {
                return true;
            }
        }
        return false;
    };
    const getContainerStyles = ()=>{
        if (props.showControlsBar == false || props.fullScreen) {
            return {
                height: lboxHeight
            };
        } else if (isBrowserFullScreen) {} else {
            return {};
        }
    };
    const getInnerContainerStyles = ()=>{
        if (isImageCaption("above")) {
            return SlideshowLightbox_module_css_default2.innerContainerWithTopCaption;
        }
        if (rotateImgIcon) {
            return SlideshowLightbox_module_css_default2.rotateImgInnerContainer;
        }
        return SlideshowLightbox_module_css_default2.slideshowInnerContainerThumbnails;
    };
    const displayDownloadBtn = ()=>{
        if (isVideo(slideIndex)) {
            return false;
        } else {
            return showDownloadBtn;
        }
    };
    function handleWindowResize() {
        if (!noWindow) {
            setWidth(window.innerWidth);
        }
    }
    const shouldDisplayMagnifyingGlassIcon = ()=>{
        if (isVideo(slideIndex)) {
            return false;
        }
        if (isMobile == true) {
            return false;
        }
        if (imageFullScreen == true) {
            return false;
        }
        if (magnifyingGlassFeature == true) {
            return true;
        }
        return false;
    };
    const getImageStyle = ()=>{
        let styleObject = {};
        styleObject["objectFit"] = "contain";
        if (imageFullScreen) {
            if (props.fullScreenFillMode) {
                styleObject["objectFit"] = props.fullScreenFillMode;
                if (props.fullScreenFillMode == "cover") {
                    styleObject["maxHeight"] = "94vh";
                    styleObject["maxWidth"] = "70vw";
                    styleObject["marginTop"] = "auto";
                    styleObject["marginBottom"] = "auto";
                }
            } else {
                styleObject["objectFit"] = "contain";
                styleObject["height"] = lboxHeight;
                styleObject["maxHeight"] = lboxHeight;
            }
        }
        if (!imageFullScreen && !rotateImgIcon) {
            if (isImageCaption(imgCaptionPlacement) && showThumbnails == false) {}
            if (isImageCaption(imgCaptionPlacement) && showThumbnails) {}
            if (props.thumbnailImgAnim && showThumbnails == false) {
                styleObject["height"] = "87vh";
            } else if (isImageCaption(imgCaptionPlacement) != true) {}
            if (props.thumbnailImgAnim && showThumbnails) {
                styleObject["height"] = "67vh";
            }
        }
        if (rotateImgIcon && showThumbnails) {
            styleObject["width"] = "57vw";
            styleObject["marginTop"] = "10vh";
        } else if (rotateImgIcon && showThumbnails == false) {
            styleObject["width"] = "57vw";
            styleObject["marginTop"] = "15vh";
        }
        if (isRounded) {
            styleObject["borderRadius"] = "20px";
        }
        if (modalCloseOption == "clickOutside") {
            styleObject["pointerEvents"] = "auto";
        }
        if (isImageComponent && showThumbnails == false && !isMobile) {
            styleObject["height"] = "85vh";
        }
        return styleObject;
    };
    const shouldDisplaySlideshowIcon = ()=>{
        if (props.showSlideshowIcon != void 0) {
            return props.showSlideshowIcon;
        }
        if (images) {
            if (images.length == 1) {
                return false;
            }
        } else if (props.images) {
            if (props.images.length == 1) {
                return false;
            }
        }
        return true;
    };
    const navigationClick = (index)=>{
        initLoader(index);
        setCurrentSlide(index);
    };
    const checkModalClick = (e)=>{
        const modals = document.getElementsByClassName("imageModal");
        let arr_modals = Array.from(modals);
        for(let i = 0; i < arr_modals.length; i++){
            let elem = arr_modals[i];
            let clickInside = elem.contains(e.target);
            if (clickInside) {
                return;
            }
        }
        closeModal();
    };
    const isZoomEnabled = ()=>{
        if (disableZoom == true) {
            return false;
        }
    };
    const getRTLIndex = (img_gallery_length, i)=>{
        let index;
        if (i == 0) {
            index = img_gallery_length - 1;
        } else if (i == img_gallery_length - 1) {
            index = 0;
        } else {
            index = img_gallery_length - i - 1;
        }
        return index;
    };
    const getMetadataTextColor = ()=>{
        if (props.theme) {
            if (themes[props.theme]) {
                return themes[props.theme].metadataTextColor;
            }
        } else {
            return themes[defaultTheme].metadataTextColor;
        }
    };
    const getImgSrc = async (images2, index)=>{
        if (images2) {
            let image = images2[index];
            if (image.original) {
                return image.original;
            }
            const resolved = await resolveSlideSrc(image);
            return resolved.src;
        }
    };
    const getThumbSrc = async (images2, index)=>{
        const image = images2[index];
        if (image.thumbnail) {
            if (typeof image.thumbnail === "function") {
                return await image.thumbnail();
            }
            return image.thumbnail;
        }
        let src = await getImgSrc(images2, index);
    };
    const resolveSource = async (source)=>{
        if (typeof source === "function") {
            return await source();
        }
        return source;
    };
    const resolveSlideSrc = async (slide)=>({
            src: await resolveSource(slide.src),
            thumbnail: slide.thumbnail ? await resolveSource(slide.thumbnail) : null
        });
    const fullScreen = ()=>{
        let lightbox = document.getElementById("slideshowAnim");
        openFullScreen(lightbox);
        initFullScreenChangeEventListeners();
    };
    const fullScreenHandler = ()=>{
        if (document["webkitIsFullScreen"] || document["mozFullScreen"] || document["msFullscreenElement"]) {
            setIsBrowserFullScreen(true);
            setLightboxModalHeight("100vh");
        } else {
            if (isBrowserFullScreen) {
                closeFullScreen(document);
            }
            removeFullScreenChangeEventListeners();
            setIsBrowserFullScreen(false);
            setLightboxModalHeight(props.lightboxHeight ? props.lightboxHeight : "100vh");
        }
    };
    const exitFullScreen = ()=>{
        closeFullScreen(document);
        removeFullScreenChangeEventListeners();
    };
    const emblaSlideSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlideshowLightbox.useCallback2[emblaSlideSelect]": (emblaApi2)=>{}
    }["SlideshowLightbox.useCallback2[emblaSlideSelect]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (emblaApi) emblaApi.on("slidesInView", emblaSlideSelect);
        }
    }["SlideshowLightbox.useEffect2"], [
        emblaApi,
        emblaSlideSelect
    ]);
    const updateImageSlideshow = (newDirection)=>{
        if (isRTL) {
            scrollPrev();
        } else {
            scrollNext();
        }
        setImgSlideIndex([
            imgSlideIndex + newDirection,
            newDirection
        ]);
        if (isRTL) {
            setZoomIdx(zoomIdx - 1 < 0 ? images.length - 1 : zoomIdx - 1);
        } else {
            setZoomIdx(zoomIdx + 1 >= images.length ? 0 : zoomIdx + 1);
        }
    };
    const displayArrows = ()=>{
        if (props.showArrows == false) {
            return false;
        }
        if (props.images) {
            if (props.images.length == 1) {
                return false;
            }
        } else if (images.length == 1) {
            return false;
        }
        return true;
    };
    const initLoader = (newIndex)=>{
        if (props.showLoader && props.images) {
            if (!isVideo(newIndex) && imagesLoadedDict && imagesLoadedDict[newIndex].loaded != true) {
                setDisplayLoader(true);
            } else if (props.showLoader && props.images && imagesLoadedDict && imagesLoadedDict[newIndex]["loaded"]) {
                setDisplayLoader(false);
            }
        }
    };
    const getImageCaption = ()=>{
        if (props.images && props.images.length > 0) {
            return props.images[slideIndex].caption;
        }
        return "";
    };
    const getArrowStyle = ()=>{
        if (arrowStyle == "dark") {
            return SlideshowLightbox_module_css_default2.darkIcon;
        } else if (arrowStyle == "light") {
            return SlideshowLightbox_module_css_default2.lightIcon;
        }
    };
    const getIconClasses = ()=>{
        if (arrowStyle == "dark") {
            return SlideshowLightbox_module_css_default2.darkHeaderIcon;
        } else if (arrowStyle == "light") {
            return SlideshowLightbox_module_css_default2.lightHeaderIcon;
        }
    };
    const setCurrentSlide = (newIndex)=>{
        let newDirection;
        if (newIndex > imgSlideIndex) {
            newDirection = 1;
        } else {
            newDirection = -1;
        }
        setZoomIdx(newIndex);
        setImgSlideIndex([
            newIndex,
            newDirection
        ]);
        if (emblaApi) {
            emblaApi.scrollTo(newIndex);
        }
    };
    const dispatchOpenEvent = ()=>{
        if (props.onOpen) {
            props.onOpen(slideIndex, images[slideIndex]);
        }
        if (props.onSelect) {
            props.onSelect(slideIndex, images[slideIndex]);
        }
    };
    const dispatchCloseEvent = ()=>{
        if (props.onClose) {
            props.onClose(slideIndex);
        }
    };
    const dispatchNextImgEvent = (newIndex)=>{
        if (props.onNext) {
            props.onNext(newIndex, images[newIndex]);
        }
    };
    const dispatchPrevImgEvent = (newIndex)=>{
        if (props.onPrev) {
            props.onPrev(newIndex, images[newIndex]);
        }
    };
    const closeModal = ()=>{
        setZoomIdx(0);
        if (isBrowserFullScreen) {
            exitFullScreen();
        }
        if (isSlideshowPlaying) {
            setIsSlideshowPlaying(false);
        }
        setShowModal(false);
        setIsOpen(false);
        setCarouselReady(false);
        setEmblaReinitialized(false);
        setCurrentRotation(0);
        if (prevFocusedElem) prevFocusedElem?.focus();
    };
    const getCursor = ()=>{
        if (showZoomCursor) {
            if (zoomCursor == "zoom-in") {
                return SlideshowLightbox_module_css_default2.zoomInCursor;
            } else if (zoomCursor == "zoom-out") {
                return SlideshowLightbox_module_css_default2.zoomOutCursor;
            }
        }
        return "";
    };
    const openModal = (num)=>{
        if (emblaApi) {
            emblaApi.reInit();
            if (emblaThumbsApi) {
                emblaThumbsApi?.scrollTo(emblaApi.selectedScrollSnap());
            }
        }
        setImgSlideIndex([
            num,
            1
        ]);
        setShowModal(true);
        setIsOpen(true);
    };
    var imagesLoadedDict;
    const setItemLoaded = (index)=>{
        setDisplayLoader(false);
        if (props.images) {
            let imgs;
            if (imagesLoadedDict) {
                imgs = imagesLoadedDict;
            } else {
                imgs = images;
            }
            let newImages = imgs.map((img, i)=>index === i ? {
                    ...img,
                    loaded: true
                } : img);
            setImages((images2)=>newImages);
            imagesLoadedDict = newImages;
        }
    };
    const getContainerHeight = ()=>{
        if (props.lightboxHeight && isBrowserFullScreen) {
            return "100vh";
        } else if (props.lightboxHeight && !isBrowserFullScreen) {
            return props.lightboxHeight;
        }
        return "";
    };
    const getContainerWidth = ()=>{
        if (props.lightboxWidth && !isBrowserFullScreen) {
            return props.lightboxWidth;
        } else if (props.lightboxWidth && isBrowserFullScreen) {
            return "";
        }
        return "";
    };
    const setImagesItemLoaded = (index)=>{
        setImages((images2)=>images2.map((img, i)=>index === i ? {
                    ...img,
                    loaded: true
                } : img));
    };
    const resetMedia = (slide_index)=>{
        resetVideo(slide_index);
        resetImage();
    };
    const initImgMetadataPanel = ()=>{
        if (isMobile && showImgMetadataPanel) {
            setShowImgMetadataPanel(false);
        }
    };
    const initSlide = (newSlideIndex)=>{
        setImgSlideIndex([
            newSlideIndex,
            1
        ]);
        setReachedMaxScale(false);
        let wrap_slide_index = wrapNums(0, images.length, newSlideIndex);
        setZoomIdx(wrap_slide_index);
        initLoader(wrap_slide_index);
        if (imageRefs.current[wrap_slide_index]) {
            imageRefs.current[wrap_slide_index].classList.add(`${SlideshowLightbox_module_css_default2.rotate_img}`);
        }
        if (displayImgMetadata) {
            initImgMetadataPanel();
            if (!imgMetadata2[wrap_slide_index]) {
                setIsLoading(true);
            }
        }
    };
    const nextSlide = ()=>{
        scrollNext();
        initSlide(imgSlideIndex + 1);
        if (imgAnimation == "fade") {
            dispatchNextImgEvent((imgSlideIndex + 1) % images.length);
        }
    };
    const prevSlide = ()=>{
        scrollPrev();
        initSlide(imgSlideIndex - 1);
        if (imgAnimation == "fade") {
            dispatchPrevImgEvent((imgSlideIndex - 1) % images.length);
        }
    };
    const setThumbnailStartIndex = (index)=>{
        let thumbnailSwipeOptionConfig = thumbnailSwipeOptions;
        thumbnailSwipeOptionConfig.startIndex = index;
        setThumbnailSwipeOptions(thumbnailSwipeOptionConfig);
    };
    const openModalWithSlideNum = (index)=>{
        let reactSwipeOptionConfig = reactSwipeOptions;
        reactSwipeOptionConfig.startIndex = index;
        setReactSwipeOptions(reactSwipeOptionConfig);
        setThumbnailStartIndex(index);
        setZoomIdx(index);
        openModal(index);
    };
    const saveImage = ()=>{
        let img_url;
        if (props.images.length > 0) {
            if (props.images[slideIndex].original) {
                img_url = props.images[slideIndex].original;
            } else {
                img_url = props.images[slideIndex]["src"];
            }
        } else {
            if (images[slideIndex].src) {
                img_url = images[slideIndex].src;
            }
        }
        new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$js$2d$file$2d$downloader$2f$dist$2f$js$2d$file$2d$downloader$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]({
            url: img_url,
            filename: "image.jpg"
        }).then(function() {}).catch(function(error) {});
    };
    const playSlideshow = ()=>{
        setMagnifyingGlass(false);
        if (isRTL) {
            updateImageSlideshow(-1);
        } else {
            updateImageSlideshow(1);
        }
        setIsSlideshowPlaying(true);
    };
    const stopSlideshow = ()=>{
        setIsSlideshowPlaying(false);
    };
    const getEmbedIndex = (slide_index, elems)=>{
        if (props.images) {
            let iframe_index = 0;
            for(let i = 0; i < props.images.length; i++){
                let item = props.images[i];
                if (item.type == "customVideoEmbed" || item.type == "yt") {
                    if (i == slide_index) {
                        iframe_index++;
                        break;
                    } else {
                        iframe_index++;
                    }
                }
            }
            return iframe_index - 1;
        }
    };
    const getEmblaClass = (index)=>{
        if (displayImgMetadata) {
            return SlideshowLightbox_module_css_default2.emblaSlideGrid;
        }
        if (imgAnimation == "fade") {
            let styles_str = "";
            if (props.fullScreen != true) {
                styles_str += `${SlideshowLightbox_module_css_default2.notFullScreen} `;
            }
            styles_str += ` ${SlideshowLightbox_module_css_default2.imgfade} ${SlideshowLightbox_module_css_default2.emblaSlide} `;
            if (slideIndex == index) {
                styles_str += `${SlideshowLightbox_module_css_default2.emblaSlideSelected} `;
            }
            return styles_str;
        } else {
            return SlideshowLightbox_module_css_default2.emblaSlide;
        }
    };
    const resetVideo = (slide_index)=>{
        if (props.images) {
            let elem = props.images[slide_index];
            if (elem) {
                if (elem.type == "htmlVideo") {
                    videoReferences.current[slide_index].pause();
                } else if (elem.type == "yt") {
                    if (videoElements[slide_index]) {
                        videoElements[slide_index].target.pauseVideo();
                    }
                } else if (elem.type == "customVideoEmbed") {
                    let lightboxjs_elem = document.getElementById("lightboxContainer");
                    let elems = lightboxjs_elem?.querySelectorAll("iframe");
                    if (elems) {
                        let iframe_elem_index = getEmbedIndex(slide_index, elems);
                        if (iframe_elem_index != void 0 && iframe_elem_index >= 0) {
                            let iframe = elems[iframe_elem_index];
                            let iframe_src = iframe.src;
                            iframe.src = iframe_src;
                        }
                    }
                }
            }
        }
    };
    const getNavigationDot = (index)=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
            style: slideIndex === index ? {
                backgroundColor: "cornflowerblue"
            } : {},
            className: `${SlideshowLightbox_module_css_default2.navigationDot} imageModal`,
            onClick: ()=>{
                navigationClick(index);
            }
        });
    };
    const getThumbnailsOuterContainerStyle = ()=>{
        let style = {};
        if (isImageCaption("below")) {
            if (showThumbnails) {
                style["height"] = "21vh";
            } else {
                style["height"] = "12vh";
            }
            style["backgroundColor"] = backgroundColor;
        }
        return style;
    };
    const getImageThumbnail = (img, index, isNextJS, props2)=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: `${SlideshowLightbox_module_css_default2.emblaThumbsSlide}`,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                className: `${SlideshowLightbox_module_css_default2.thumbnail} imageModal ${props2.thumbnailImgClass ? props2.thumbnailImgClass : ""}  `,
                src: isNextJS == true ? getThumbnailImgSrcNext(img, index) : getThumbnailImgSrc(img, index),
                alt: img.alt,
                onLoad: ()=>setImagesLoaded(true),
                style: slideIndex === index ? {
                    border: thumbnailBorder
                } : {
                    border: inactiveThumbnailBorder
                },
                onClick: (event)=>{
                    if (props2.onThumbnailClick) {
                        props2.onThumbnailClick(index, img);
                    }
                    navigationClick(index);
                }
            }, "thumbnail_" + index)
        }, "thumbnail_slide_" + index);
    };
    const handleError = (event, index)=>{
        if (props.onImgError) {
            props.onImgError(event, images[slideIndex], index);
        }
    };
    const rotateImage = ()=>{
        let img_elem = imageRefs.current[zoomIdx];
        let transform_val = img_elem.style.transform;
        let current_rotation = 0;
        if (transform_val) {
            var reg = /rotate\(([0-9.]+)deg\)/;
            current_rotation = parseFloat(transform_val.match(reg)[1]);
        }
        let newRotation = current_rotation + 90;
        let res = newRotation / 90;
        img_elem.style.transform = `rotate(${newRotation}deg)`;
        setCurrentRotation(newRotation);
        if (props.onRotate) {
            let rotationVal = newRotation;
            if (newRotation > 360) {
                rotationVal = newRotation % 360;
            }
            props.onRotate(rotationVal);
        }
    };
    const resetRotation = ()=>{
        imageRefs.current[zoomIdx].classList.remove(`${SlideshowLightbox_module_css_default2.rotate_img}`);
        imageRefs.current[zoomIdx].style.transform = "";
        setCurrentRotation(0);
    };
    const resetImage = ()=>{
        if (enableMagnifyingGlass) {
            initMagnifyingGlass();
        } else {
            if (zoomReferences.current[zoomIdx] != null) {
                zoomReferences.current[zoomIdx].resetTransform();
            }
        }
    };
    const getThumbnailImgSrc = (img, index)=>{
        if (!img) return null;
        const image = props.images?.[index] || img;
        if (image?.thumbnailSrc) {
            return image.thumbnailSrc;
        }
        if (resolvedSrcs?.thumbnail?.[index]) {
            return resolvedSrcs.thumbnail[index];
        }
        if (isVideo(index) && image.thumbnail) {
            return image.thumbnail;
        }
        if (typeof image?.thumbnail === "string") {
            return image.thumbnail;
        }
        if (resolvedSrcs?.full?.[index]) {
            return resolvedSrcs.full[index];
        }
        if (typeof image?.src === "string") {
            return image.src;
        }
        if (image?.original) {
            return image.original;
        }
        return "";
    };
    const getImgFadeClass = ()=>{
        if (imgAnimation == "fade") {
            if (isImageCaption("above")) {
                return ` ${SlideshowLightbox_module_css_default2.imgfade} ${SlideshowLightbox_module_css_default2.imgFadeWithTopCaption}`;
            } else {
                return ` ${SlideshowLightbox_module_css_default2.imgfade}`;
            }
        }
    };
    const getThumbnailImgSrcNext = (img, index)=>{
        if (img.thumbnailSrc) {
            return img.thumbnailSrc;
        } else if (isVideo(index)) {
            return img.thumbnail;
        } else {
            let img_src = img.src;
            if (typeof img_src === "object" && !Array.isArray(img_src) && img_src !== null) {
                return img_src.src;
            } else {
                return img_src;
            }
        }
    };
    const isAnimImageComponent = ()=>{
        if (images) {
            if (images.length == 1) {
                return true;
            }
        }
        return false;
    };
    const initWrapperClassname = ()=>{
        let classNameStr = "";
        if (props.className) {
            classNameStr += `${props.className} `;
        }
        if (isAnimImageComponent()) {
            if (props.imgWrapperClassName) {
                classNameStr += `${props.imgWrapperClassName} `;
            }
        }
        classNameStr += `${SlideshowLightbox_module_css_default2.lightboxjs}`;
        return classNameStr;
    };
    const initStyling = ()=>{
        if (props.theme) {
            if (themes[props.theme]) {
                setBackgroundColor(themes[props.theme].background);
                setTextColor(themes[props.theme].textColor);
            }
        }
        if (props.fullScreen) {
            if (props.fullScreen == true) {
                setImgAnimation(props.imgAnimation && props.imgAnimation == "imgDrag" ? props.imgAnimation : "fade");
                setIsRounded(false);
            }
        }
    };
    const getMetadataPanel = ()=>{
        let imgMetadataItem = imgMetadata2[slideIndex];
        if (imgMetadataItem) {
            let element = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: SlideshowLightbox_module_css_default2.metadataPanel,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("b", {
                        children: "Filename"
                    }),
                    imgMetadataItem.name ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        children: imgMetadataItem.name
                    }) : null,
                    imgMetadataItem.createDate ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("b", {
                                children: "Captured Time"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                children: imgMetadataItem.createDate.toString()
                            })
                        ]
                    }) : null,
                    imgMetadataItem.width && imgMetadataItem.height ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("b", {
                                children: "Resolution"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                                children: [
                                    imgMetadataItem.width,
                                    "*",
                                    imgMetadataItem.height
                                ]
                            })
                        ]
                    }) : null,
                    imgMetadataItem.isoData || imgMetadataItem.fNumber || imgMetadataItem.shutterSpeed ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("b", {
                                children: "Image Details"
                            }),
                            imgMetadataItem.isoData ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                children: [
                                    "ISO ",
                                    imgMetadataItem.isoData
                                ]
                            }) : null,
                            imgMetadataItem.fNumber ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                children: [
                                    "f",
                                    imgMetadataItem.fNumber
                                ]
                            }) : null,
                            imgMetadataItem.shutterSpeed ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                children: [
                                    "Shutter speed: ",
                                    imgMetadataItem.shutterSpeed
                                ]
                            }) : null
                        ]
                    }) : null
                ]
            });
            return element;
        }
    };
    const imageSlideElement = (index)=>{
        let imageElem;
        if (!props.images) {
            imageElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(LightboxImage, {
                onImgError: (e, index2)=>handleError(e, index2),
                props,
                imgStyle: getImageStyle(),
                imgRef: (el)=>imageRefs.current[index] = el,
                imgSrc: images[index].original ? images[index].original : images[index].src,
                displayImgMetadata,
                enableMagnifyingGlass,
                index,
                onUpdateImgMetadata: (newImgMetadata)=>setImgMetadata(newImgMetadata)
            });
        } else if (props.images && props.render) {
            imageElem = props.render.imgSlide(props.images[index]);
        } else {
            let img_link;
            if (props.images) {
                if (typeof images[index].src === "object" && !Array.isArray(images[index].src) && images[index].src !== null) {
                    img_link = images[index].src?.src;
                } else if (props.coverImageInLightbox == true) {
                    img_link = images[index].src;
                } else {
                    img_link = images[index].src;
                }
            }
            imageElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(LightboxImage, {
                onImgError: (e, index2)=>handleError(e, index2),
                props,
                imgStyle: getImageStyle(),
                imgRef: (el)=>imageRefs.current[index] = el,
                imgSrc: images[index].original ? images[index].original : img_link,
                displayImgMetadata,
                enableMagnifyingGlass,
                index,
                onUpdateImgMetadata: (newImgMetadata)=>setImgMetadata(newImgMetadata)
            });
        }
        return imageElem;
    };
    const getCloseIconBtnStyle = ()=>{
        let style_object = {};
        if (iconColor) {
            style_object = {
                color: iconColor
            };
        }
        if (props.closeIconBtnStyle) {
            let closeIconBtnStyleKeys = Object.keys(props.closeIconBtnStyle);
            for(let i = 0; i < closeIconBtnStyleKeys.length; i++){
                let keyName = closeIconBtnStyleKeys[i];
                let style_obj = props.closeIconBtnStyle[keyName];
                style_object[keyName] = style_obj;
            }
        }
        if (customIconStyle) {
            style_object = customIconStyle;
        }
        return style_object;
    };
    const isPanningDisabled = ()=>{
        if ((isMobile || isTablet || isTabletUserAgent) && zoomedIn == false) {
            return true;
        }
        if ((isMobile || isTablet || isTabletUserAgent) && zoomedIn) {
            return false;
        }
        return false;
    };
    const getLightboxElem = (index)=>{
        if (isCustomEmbed(index)) {
            return customEmbedElement(index);
        } else if (isVideo(index)) {
            return videoSlideElement(index);
        } else if (isPictureElement(index)) {
            let elem_metadata = props.images[index]["picture"];
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(PictureElem, {
                elem_metadata,
                enableMagnifyingGlass,
                onHandleError: (error, index2)=>{
                    handleError(error, index2);
                },
                index
            });
        } else {
            if (images && props.render || frameworkID == "next") {
                return imageSlideElement(index);
            } else {
                const src = resolvedSrcs.full[index];
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(LightboxImage, {
                    onImgError: (e, index2)=>handleError(e, index2),
                    props,
                    imgStyle: getImageStyle(),
                    imgRef: (el)=>imageRefs.current[index] = el,
                    imgSrc: src,
                    displayImgMetadata,
                    enableMagnifyingGlass,
                    index,
                    onUpdateImgMetadata: (newImgMetadata)=>setImgMetadata(newImgMetadata)
                });
            }
        }
    };
    const isCustomEmbed = (index)=>{
        if (props.images) {
            let elem = props.images[index];
            if (elem) {
                if (elem.type == "customEmbed") {
                    return true;
                }
            }
        }
        return false;
    };
    const isVideo = (index)=>{
        if (props.images) {
            let elem = props.images[index];
            if (elem) {
                if (elem.type == "yt" || elem.type == "htmlVideo" || elem.type == "customVideoEmbed") {
                    return true;
                }
            }
        }
        return false;
    };
    const shouldDisplayMetadataPanel = ()=>{
        if (isMobile) {
            if (showImgMetadataPanel) {
                return true;
            } else {
                return false;
            }
        } else {
            return displayImgMetadata;
        }
    };
    const isPictureElement = (index)=>{
        if (props.images) {
            let elem = props.images[index];
            if (elem) {
                if (elem.picture) {
                    return true;
                }
            }
        }
        return false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (!emblaApi) return;
            if (imgAnimation == "fade") {
                emblaApi.internalEngine().translate.toggleActive(false);
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        carouselReady,
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (!images || !images[imgSlideIndex]) return;
            const loadFullSrc = {
                "SlideshowLightbox.useEffect2.loadFullSrc": async ()=>{
                    const resolved = await getImgSrc(images, imgSlideIndex);
                    setResolvedSrcs({
                        "SlideshowLightbox.useEffect2.loadFullSrc": (prev)=>({
                                ...prev,
                                full: {
                                    ...prev.full,
                                    [imgSlideIndex]: resolved
                                }
                            })
                    }["SlideshowLightbox.useEffect2.loadFullSrc"]);
                }
            }["SlideshowLightbox.useEffect2.loadFullSrc"];
            if (!resolvedSrcs.full[imgSlideIndex]) {
                loadFullSrc();
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        images,
        imgSlideIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (!images) return;
            const loadThumbSrc = {
                "SlideshowLightbox.useEffect2.loadThumbSrc": async (i)=>{
                    const resolved = await getThumbSrc(images, i);
                    setResolvedSrcs({
                        "SlideshowLightbox.useEffect2.loadThumbSrc": (prev)=>({
                                ...prev,
                                thumbnail: {
                                    ...prev.thumbnail,
                                    [i]: resolved
                                }
                            })
                    }["SlideshowLightbox.useEffect2.loadThumbSrc"]);
                }
            }["SlideshowLightbox.useEffect2.loadThumbSrc"];
            images.forEach({
                "SlideshowLightbox.useEffect2": (_, i)=>{
                    if (!resolvedSrcs?.thumbnail[i]) {
                        loadThumbSrc(i);
                    }
                }
            }["SlideshowLightbox.useEffect2"]);
        }
    }["SlideshowLightbox.useEffect2"], [
        images
    ]);
    const getIconStyle = ()=>{
        if (iconColor) {
            return {
                color: iconColor
            };
        } else if (customIconStyle) {
            return customIconStyle;
        } else {
            return {};
        }
    };
    const isHTMLVideo = (index)=>{
        if (props.images) {
            if (props.images && props.images[index].type == "htmlVideo") {
                return true;
            }
        }
        return false;
    };
    const videoSlideElement = (index)=>{
        let elem = props.images[index];
        let videoElem;
        if (elem.type == "yt") {
            videoElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${SlideshowLightbox_module_css_default2.videoOuterContainer} imageModal`,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$youtube$2f$dist$2f$YouTube$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    videoId: elem.videoID,
                    ref: (el)=>videoReferences.current[index] = el,
                    iframeClassName: `${SlideshowLightbox_module_css_default2.ytVideo}`,
                    title: "YouTube video player",
                    opts: {
                        height: getVideoHeight(elem),
                        width: getVideoWidth(elem),
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: shouldAutoplay(elem) ? 1 : 0
                        }
                    },
                    onReady: (event)=>{
                        let videoElems = videoElements;
                        videoElems[index] = event;
                        setVideoElements(videoElems);
                        if (index == slideIndex) {
                            setDisplayLoader(false);
                        }
                        setItemLoaded(index);
                    },
                    onPlay: (event)=>{
                        setYTVideoCurrentlyPlaying(true);
                    },
                    onPause: (event)=>{
                        setYTVideoCurrentlyPlaying(false);
                    },
                    onEnd: (event)=>{
                        setYTVideoCurrentlyPlaying(false);
                    },
                    onError: (event)=>{
                        handleError(event, index);
                    },
                    onStateChange: (event)=>{},
                    onPlaybackRateChange: (event)=>{},
                    onPlaybackQualityChange: (event)=>{}
                })
            });
        } else if (elem.type == "htmlVideo") {
            videoElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${SlideshowLightbox_module_css_default2.htmlVideo} ${SlideshowLightbox_module_css_default2.htmlVideoOuterContainer} imageModal`,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("video", {
                    className: `${SlideshowLightbox_module_css_default2.cursorPointer} ${SlideshowLightbox_module_css_default2.lightboxVideo}`,
                    width: getVideoWidth(elem),
                    ref: (el)=>videoReferences.current[index] = el,
                    onPlay: ()=>{},
                    onError: (event)=>{
                        handleError(event, index);
                    },
                    height: getVideoHeight(elem),
                    autoPlay: index == imgSlideIndex ? shouldAutoplay(elem) : false,
                    controls: true,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("source", {
                        src: elem.videoSrc,
                        type: "video/mp4",
                        onLoad: ()=>{
                            setItemLoaded(index);
                        }
                    })
                })
            });
        } else if (elem.type == "customVideoEmbed") {
            videoElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${SlideshowLightbox_module_css_default2.customVideoContainer} imageModal`,
                children: elem.embed
            });
        }
        return videoElem;
    };
    const customEmbedElement = (index)=>{
        let elem = props.images[index];
        let customElem;
        if (elem.type == "customEmbed") {
            customElem = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${SlideshowLightbox_module_css_default2.customEmbedContainer} imageModal`,
                children: elem.embed
            });
        }
        return customElem;
    };
    const initZoom = (ref2)=>{
        if (imgAnimation == "fade") {
            if (ref2.state.scale <= 1) {
                setZoomedIn(false);
            } else {
                setZoomedIn(true);
            }
        } else {
            if (ref2.state.scale <= 1.65) {
                setZoomedIn(false);
            } else {
                setZoomedIn(true);
            }
        }
        if (showZoomCursor == true) {
            if (ref2.state.scale >= maxScale) {
                setZoomCursor("zoom-out");
            } else if (ref2.state.scale <= 1) {
                setZoomCursor("zoom-in");
            }
        }
        setCurrentZoomScale(ref2.state.scale);
    };
    const regularImgPaneNodes = Array.apply(null, Array(images.length)).map((_, index)=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: `${props.fullScreen ? SlideshowLightbox_module_css_default2.fullScreenContainer : null}`,
            style: {
                height: lboxHeight
            },
            children: enableMagnifyingGlass == true ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {}) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: getEmblaClass(index),
                onTouchStart,
                onTouchMove,
                onTouchEnd,
                onMouseDown,
                onMouseUp,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$zoom$2d$pan$2d$pinch$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TransformWrapper"], {
                    ref: (el)=>zoomReferences.current[index] = el,
                    onWheel: (ref2, wheelEvent)=>{
                        initZoom(ref2);
                    },
                    disabled: disableZoom,
                    panning: {
                        disabled: isPanningDisabled()
                    },
                    doubleClick: {
                        disabled: singleClickZoom == true ? true : false
                    },
                    onZoom: (ref2, event)=>{
                        initZoom(ref2);
                    },
                    onZoomStop: (ref2, event)=>{
                        initZoom(ref2);
                    },
                    onTransformed: (ref2, event)=>{
                        initZoom(ref2);
                    },
                    onPinchingStop: (ref2, event)=>{
                        initZoom(ref2);
                    },
                    centerZoomedOut: true,
                    initialScale: 1,
                    maxScale,
                    alignmentAnimation: {
                        sizeX: 0,
                        sizeY: 0
                    },
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$zoom$2d$pan$2d$pinch$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TransformComponent"], {
                        wrapperClass: SlideshowLightbox_module_css_default2.reactTransformWrapper,
                        contentClass: SlideshowLightbox_module_css_default2.reactTransformComponent,
                        wrapperStyle: {
                            maxWidth: "100vw",
                            height: "100vh",
                            margin: "auto"
                        },
                        contentStyle: {
                            maxWidth: "100vw",
                            height: "100vh",
                            margin: "auto",
                            display: "grid"
                        },
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            onMouseDown,
                            onClick: (e)=>{
                                const differenceX = Math.abs(e.pageX - mouseStartX);
                                const isLeftDragMotion = mouseStartX - e.pageX > delta;
                                const isRightDragMotion = mouseStartX - e.pageX < -delta;
                                if (differenceX > delta) {} else {
                                    e.stopPropagation();
                                    if (singleClickZoom) {
                                        zoomImage();
                                    }
                                }
                            },
                            className: `${SlideshowLightbox_module_css_default2.slideshowImg}
                        ${props.fullScreen ? SlideshowLightbox_module_css_default2.fullScreenSlideshowImg : ""}
                        ${props.lightboxImgClass ? props.lightboxImgClass : ""}
                      ${displayImgMetadata ? SlideshowLightbox_module_css_default2.slideshowImgMetadata : ""} 
                      ${getCursor()}

                      ${isImageCaption(imgCaptionPlacement) ? SlideshowLightbox_module_css_default2.slideshowImgWithCaption : ""}
                      `,
                            style: {
                                width: getContainerWidth(),
                                height: getContainerHeight()
                            },
                            children: getLightboxElem(index)
                        })
                    }, index)
                }, index)
            })
        }, index);
    });
    const initMagnifyingGlass = ()=>{
        if (!enableMagnifyingGlass) {
            initImageDimensions();
        } else {
            setImgAnimation("imgDrag");
        }
        setMagnifyingGlass(!enableMagnifyingGlass);
    };
    const getMetadataPanelStyle = ()=>{
        let style_object = {};
        if (isMobile && showImgMetadataPanel) {
            style_object = {
                height: "100vh"
            };
        }
        style_object["color"] = getMetadataTextColor();
        return style_object;
    };
    const initImageDimensions = ()=>{
        let img;
        if (imgSlideIndex == 0 || imgSlideIndex % images.length == 0) {
            img = document.getElementById("img");
        } else {
            img = imageRef.current;
        }
        var ratio = img.naturalWidth / img.naturalHeight;
        var width2 = img.height * ratio;
        var height = img.height;
        if (width2 > img.width) {
            width2 = img.width;
            height = img.width / ratio;
        }
        setImgContainHeight(height);
        setImgContainWidth(width2);
    };
    const initFullScreenChangeEventListeners = ()=>{
        document.addEventListener("fullscreenchange", fullScreenHandler);
        document.addEventListener("webkitfullscreenchange", fullScreenHandler);
        document.addEventListener("MSFullscreenChange", fullScreenHandler);
        document.addEventListener("mozfullscreenchange", fullScreenHandler);
    };
    const removeFullScreenChangeEventListeners = ()=>{
        document.removeEventListener("fullscreenchange", fullScreenHandler);
        document.removeEventListener("webkitfullscreenchange", fullScreenHandler);
        document.removeEventListener("MSFullscreenChange", fullScreenHandler);
        document.removeEventListener("mozfullscreenchange", fullScreenHandler);
    };
    const initEventListeners = ()=>{
        if (isBrowser() && !noWindow) {
            window.addEventListener("resize", handleWindowResize);
        }
    };
    const removeEventListeners = ()=>{
        removeOnSelectListener();
        if (isBrowser() && !noWindow) {
            window.removeEventListener("resize", handleWindowResize);
        }
    };
    const setReducedMotion = (mediaQuery)=>{
        if (mediaQuery.matches) {
            setImgAnimation("fade");
        }
    };
    const checkAndInitReducedMotion = ()=>{
        let reducedMotionMediaQuery = "";
        if (isBrowser() && !noWindow) {
            reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            if (!reducedMotionMediaQuery || reducedMotionMediaQuery.matches) {
                setImgAnimation("fade");
            }
            if (reducedMotionMediaQuery?.addEventListener) {
                reducedMotionMediaQuery.addEventListener("change", setReducedMotion(reducedMotionMediaQuery));
            } else {
                reducedMotionMediaQuery.addListener(setReducedMotion(reducedMotionMediaQuery));
            }
        }
        return reducedMotionMediaQuery;
    };
    const initPropsForControlIcons = ()=>{
        if (props.showFullScreenIcon != void 0) {
            setDisplayFullScreenIcon(props.showFullScreenIcon);
        }
        if (props.showThumbnailIcon != void 0) {
            setDisplayThumbnailIcon(props.showThumbnailIcon);
        }
        if (props.showSlideshowIcon != void 0) {
            setDisplaySlideshowIcon(props.showSlideshowIcon);
        }
        if (props.showMagnificationIcons != void 0) {
            setDisplayMagnificationIcons(props.showMagnificationIcons);
        }
    };
    const initProps = ()=>{
        if (props.showControls != void 0) {
            setShowControls(props.showControls);
            if (props.showControls == false) {
                setDisplayMagnificationIcons(false);
            }
        }
        if (props.disableAnim == true) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$GlobalConfig$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].skipAnimations = true;
        }
        initPropsForControlIcons();
        if (props.disableImageZoom) {
            setDisableZoom(props.disableImageZoom);
        }
        if (isBrowser() && !noWindow) {
            setWidth(window.innerWidth);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useInterval"])({
        "SlideshowLightbox.useInterval": ()=>{
            if (isRTL) {
                updateImageSlideshow(-1);
            } else {
                updateImageSlideshow(1);
            }
        }
    }["SlideshowLightbox.useInterval"], // Delay in milliseconds or null to stop it
    isSlideshowPlaying ? slideshowInterval : null);
    const openFullScreen = (lightbox_elem)=>{
        if (lightbox_elem.requestFullscreen) {
            lightbox_elem.requestFullscreen();
        } else if (lightbox_elem.webkitRequestFullscreen) {
            lightbox_elem.webkitRequestFullscreen();
        } else if (lightbox_elem.msRequestFullscreen) {
            lightbox_elem.msRequestFullscreen();
        }
    };
    const isBrowser = ()=>{
        if (!noWindow) {
            return typeof window !== "undefined";
        }
        return false;
    };
    const initRTLImages = ()=>{
        let imagesMetadataCopy = props.images;
        imagesMetadataCopy.reverse();
        setImages(imagesMetadataCopy);
        if (images.length > 0) {
            let imagesRTLCopy = images;
            imagesRTLCopy.reverse();
            setImages(imagesRTLCopy);
        }
    };
    const initAndOpenLightbox = (i, img_gallery, isMounted)=>{
        let index;
        if (isRTL) {
            index = getRTLIndex(img_gallery.length, i);
        } else {
            index = i;
        }
        let reactSwipeOptionConfig = reactSwipeOptions;
        reactSwipeOptionConfig.startIndex = index;
        if (isMounted) setReactSwipeOptions(reactSwipeOptionConfig);
        setZoomIdx(index);
        openModal(index);
    };
    const initImages = (isMounted, updateImages)=>{
        if (coverMode && props.images) {
            if (props.coverImageInLightbox == false) {
                let filterImages = props.images.filter((img)=>img.cover != true);
                setImages(filterImages);
            } else {
                setImages(props.images);
            }
        }
        if (updateImages || !isInit) {
            if (lightboxIdentifier && props.children) {
                if (props.queryElems) {
                    let img_gallery = [];
                    for(let k = 0; k < props.queryElems.length; k++){
                        let elemSelector = props.queryElems[k];
                        let queryElems = document.querySelectorAll(`${elemSelector}`);
                        queryElems.forEach((element)=>{
                            img_gallery.push(element);
                        });
                    }
                    let img_elements = [];
                    if (img_gallery.length > 0) {
                        for(let i = 0; i <= img_gallery.length - 1; i++){
                            let img = img_gallery[i];
                            img.addEventListener("click", ()=>{
                                initAndOpenLightbox(i, img_gallery, isMounted);
                            }, false);
                            img.classList.add("cursor-pointer");
                            if (img.src) {
                                img_elements.push({
                                    src: img.src,
                                    alt: img.alt,
                                    loaded: false
                                });
                            } else if (img.href) {
                                img_elements.push({
                                    src: img.href,
                                    alt: img.alt,
                                    loaded: false
                                });
                            }
                        }
                        if (isMounted && !coverMode) {
                            if (props.framework != "next") {
                                setImages(img_elements);
                            } else if (props.framework == "next") {
                                setImages(props.images);
                            }
                        }
                    }
                } else {
                    let img_gallery = document.querySelectorAll(`[data-lightboxjs=${lightboxIdentifier}]`);
                    let originalImageAttr = false;
                    let img_elements = [];
                    if (img_gallery.length > 0) {
                        for(let i = 0; i <= img_gallery.length - 1; i++){
                            let img = img_gallery[i];
                            let attr_val = img.getAttribute("data-lightboxjs");
                            if (attr_val == lightboxIdentifier) {
                                img.addEventListener("click", ()=>{
                                    initAndOpenLightbox(i, img_gallery, isMounted);
                                }, false);
                                img.classList.add("cursor-pointer");
                                let original_img_src = img.getAttribute("data-lightboxjs-original");
                                if (original_img_src) {
                                    img_elements.push({
                                        src: original_img_src,
                                        alt: img.alt,
                                        loaded: false
                                    });
                                    originalImageAttr = true;
                                } else if (props.images && props.images[i] && props.images[i].original) {
                                    img_elements.push({
                                        src: props.images[i].original,
                                        alt: props.images[i].alt,
                                        loaded: false
                                    });
                                } else if (img.src) {
                                    img_elements.push({
                                        src: img.src,
                                        alt: img.alt,
                                        loaded: false
                                    });
                                } else if (img.tagName == "DIV") {
                                    let corresponding_img_item = props.images[i];
                                    let img_src = corresponding_img_item.src;
                                    let img_alt = corresponding_img_item.alt;
                                    img_elements.push({
                                        src: img_src,
                                        alt: img_alt,
                                        loaded: false
                                    });
                                }
                            }
                        }
                        if (isMounted && !coverMode) {
                            if (originalImageAttr) {
                                setImages(img_elements);
                            } else if (props.showAllImages != true && props.framework != "next") {
                                setImages(img_elements);
                            } else if (props.framework == "next" && !originalImageAttr) {
                                setImages(props.images);
                            } else {
                                setImages(props.images);
                            }
                        }
                    } else {
                        if (props.images) {
                            setImages(props.images);
                        }
                    }
                }
            } else if (lightboxIdentifier && props.images && !props.children) {
                setImages(props.images);
            } else if (!lightboxIdentifier && props.images && !props.children) {
                setImages(props.images);
            } else if (!props.render) {
                let imgArray = [];
                if (!Array.isArray(props.children)) {
                    imgArray.push(props.children);
                } else {
                    imgArray = props.children;
                }
                let imgs = [];
                for(let k = 0; k < imgArray.length; k++){
                    let img_elem = imgArray[k];
                    let img_obj = {
                        src: img_elem.props.src,
                        alt: img_elem.props.alt,
                        loaded: false
                    };
                    imgs.push(img_obj);
                }
                if (isRTL) {
                    imgs.reverse();
                }
                if (isMounted) {
                    setImages(imgs);
                }
                setPreviewImageElems(imgArray);
            } else {
                if (isMounted) {
                    setImages(props.images);
                }
            }
            if (isMounted) setIsInit(true);
        }
    };
    const useForceUpdate = ()=>{
        let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
        return ()=>setValue(!value);
    };
    const forceUpdate = useForceUpdate();
    const dispatchSlideSelectEvents = (newIndex, prevIndex)=>{
        if (props.onSelect) {
            props.onSelect(newIndex, images[newIndex]);
            forceUpdate();
        }
        if (newIndex == 0 && prevIndex == images.length - 1) {
            dispatchNextImgEvent(newIndex);
        } else if (newIndex == images.length - 1 && prevIndex == 0) {
            dispatchPrevImgEvent(newIndex);
        } else if (newIndex > prevIndex) {
            dispatchNextImgEvent(newIndex);
        } else if (newIndex < prevIndex) {
            dispatchPrevImgEvent(newIndex);
        }
    };
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlideshowLightbox.useCallback2[onSelect]": ()=>{
            if (!emblaApi) return;
            let newSlideIndex = emblaApi.selectedScrollSnap();
            let prevSlideIndex = emblaApi.previousScrollSnap();
            if (newSlideIndex != prevSlideIndex) {
                initSlide(newSlideIndex);
                resetMedia(prevSlideIndex);
                dispatchSlideSelectEvents(newSlideIndex, prevSlideIndex);
            }
            if (emblaThumbsApi) {
                emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
            }
        }
    }["SlideshowLightbox.useCallback2[onSelect]"], [
        emblaApi,
        emblaThumbsApi
    ]);
    const onReinit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlideshowLightbox.useCallback2[onReinit]": ()=>{
            if (!emblaApi) return;
            setEmblaReinitialized(true);
        }
    }["SlideshowLightbox.useCallback2[onReinit]"], [
        emblaApi,
        emblaReinitialized
    ]);
    const handleResize = (entry)=>{
        emblaApi?.reInit();
    };
    const rootNode = emblaApi?.rootNode() || null;
    if (isBrowser() && !noWindow) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f40$react$2d$hook$2f$resize$2d$observer$2f$dist$2f$module$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(rootNode, handleResize);
    }
    const removeOnSelectListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlideshowLightbox.useCallback2[removeOnSelectListener]": ()=>{
            if (emblaApi) emblaApi.off("select", onSelect);
        }
    }["SlideshowLightbox.useCallback2[removeOnSelectListener]"], [
        emblaApi,
        onSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (emblaApi) {
                if (zoomedIn) {
                    emblaApi.reInit({
                        watchDrag: false
                    });
                } else {
                    emblaApi.reInit({
                        watchDrag: true
                    });
                }
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        zoomedIn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (displayImgMetadata) {
                if (width != 0 && isMobile) {
                    setShowImgMetadataPanel(false);
                } else {
                    setShowImgMetadataPanel(true);
                }
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        width
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (!emblaApi) return;
            if (showModal) emblaApi.reInit();
        }
    }["SlideshowLightbox.useEffect2"], [
        showModal,
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (emblaApi) emblaApi.on("select", onSelect);
            if (emblaApi) {}
        }
    }["SlideshowLightbox.useEffect2"], [
        emblaApi,
        onSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (emblaApi) emblaApi.on("reInit", onReinit);
        }
    }["SlideshowLightbox.useEffect2"], [
        emblaApi,
        onReinit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            initStyling();
            if (props.iconColor) {
                setIconColor(props.iconColor);
            }
            if (props.backgroundColor) {
                setBackgroundColor(props.backgroundColor);
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        props.theme,
        props.iconColor,
        props.backgroundColor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            initImages(true, true);
        }
    }["SlideshowLightbox.useEffect2"], [
        props.images,
        props.displayedImages
    ]);
    const prevValue = usePrevious(open);
    const prevImages = usePrevious(images);
    const imagesEqualToPrevious = (images2)=>{
        if (images2 && prevImages) {
            if ((images2 && images2?.length) != (prevImages && prevImages?.length)) {
                return false;
            }
            let imgArray;
            if (images2.length > prevImages) {
                imgArray = images2;
            } else {
                imgArray = prevImages;
            }
            for(let i = 0; i < imgArray.length; i++){
                let images_copy = images2.slice(0);
                let prevImages_copy = prevImages.slice(0);
                let image = images_copy[i];
                let prevImage = prevImages_copy[i];
                if (image["loaded"]) {
                    delete image["loaded"];
                }
                if (prevImage["loaded"]) {
                    delete prevImage["loaded"];
                }
                if (!areObjectsEqual(image, prevImage)) {
                    return false;
                }
            }
        }
        return true;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            let starting_index = 0;
            if (props.startingSlideIndex) {
                starting_index = wrapNums(0, images.length, props.startingSlideIndex);
                setStartingIndex(starting_index);
            }
            if (props.open == true && imagesEqualToPrevious(images) == false && props.startingSlideIndex) {
                if (props.images) {
                    setImages(props.images);
                }
                openModalWithSlideNum(starting_index);
            } else if (props.open && prevValue != true) {
                if (props.images) {
                    setImages(props.images);
                }
                setIsDisplay(true);
                openModalWithSlideNum(starting_index);
            } else if (props.open == false) {
                setIsDisplay(false);
                closeModal();
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        props.open,
        props.startingSlideIndex,
        images
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (isOpen == true) {
                dispatchOpenEvent();
            } else {
                dispatchCloseEvent();
            }
        }
    }["SlideshowLightbox.useEffect2"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (props.render) {
                if (!props.images) {
                    console.error("Array of images must be passed to `SlideshowLightbox` (with the `images` prop) if using custom render method. ");
                }
            }
            let isMounted = true;
            if (isMounted) initProps();
            if (window) {
                const userAgent = window.navigator.userAgent.toLowerCase();
                let is_tablet_useragent = /(ipad|iphone|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
                let is_ipad_useragent = /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
                setIsTabletUserAgent(is_tablet_useragent || is_ipad_useragent);
            }
            if (coverMode && props.images) {
                if (props.coverImageInLightbox == false) {
                    let filterImages = props.images.filter({
                        "SlideshowLightbox.useEffect2.filterImages": (img)=>img.cover != true
                    }["SlideshowLightbox.useEffect2.filterImages"]);
                    setImages(filterImages);
                } else {
                    setImages(props.images);
                }
            }
            if (isMounted) {
                initEventListeners();
            }
            let reducedMotionMediaQuery = checkAndInitReducedMotion();
            if (displayImgMetadata) {
                setImgAnimation("fade");
            }
            if (!isInit) {
                initImages(isMounted, false);
                if (props.images && isRTL == true) {
                    initRTLImages();
                }
            }
            if (isMounted) initStyling();
            return ({
                "SlideshowLightbox.useEffect2": ()=>{
                    isMounted = false;
                    removeEventListeners();
                    if (reducedMotionMediaQuery) {
                        reducedMotionMediaQuery.removeEventListener("change", reducedMotionMediaQuery);
                    }
                }
            })["SlideshowLightbox.useEffect2"];
        }
    }["SlideshowLightbox.useEffect2"], []);
    const renderPreviewImages = ()=>{
        let image_elems;
        if (props.images && props.children && lightboxIdentifier == false) {
            image_elems = props.children;
        } else if (props.images && lightboxIdentifier == false) {
            image_elems = props.images.map((elem, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                    className: `${props.imgClassName ? props.imgClassName : ""} ${SlideshowLightbox_module_css_default2.cursorPointer}`,
                    src: !isVideo(index) ? elem.src : elem.thumbnail,
                    onClick: ()=>{
                        let img_index;
                        if (isRTL) {
                            img_index = getRTLIndex(props.images.length, index);
                        } else {
                            img_index = index;
                        }
                        openModalWithSlideNum(img_index);
                    }
                }, index));
        } else if (lightboxIdentifier != false && props.children && coverMode == false) {
            {}
            image_elems = props.children;
        } else if (!(lightboxIdentifier == false && props.images || coverMode == true)) {
            image_elems = previewImageElems.filter((elem)=>elem.type == "img").map((elem, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"])("img", {
                    ...elem.props,
                    className: `${elem.props.className ? elem.props.className : ""} ${SlideshowLightbox_module_css_default2.cursorPointer}`,
                    onClick: ()=>{
                        let img_index;
                        if (isRTL) {
                            img_index = getRTLIndex(previewImageElems.length, index);
                        } else {
                            img_index = index;
                        }
                        openModalWithSlideNum(img_index);
                    },
                    key: index
                }));
        } else if (coverMode) {
            image_elems = props.children;
        }
        return image_elems;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            const modal = document.getElementById("lightboxContainer");
            if (!showModal || !modal) return;
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElem = focusableElements[0];
            const lastElem = focusableElements[focusableElements.length - 1];
            const handleTab = {
                "SlideshowLightbox.useEffect2.handleTab": (e)=>{
                    if (e.key === "Tab") {
                        if (e.shiftKey) {
                            if (document.activeElement === firstElem) {
                                e.preventDefault();
                                lastElem.focus();
                            }
                        } else {
                            if (document.activeElement === lastElem) {
                                e.preventDefault();
                                firstElem.focus();
                            }
                        }
                    }
                }
            }["SlideshowLightbox.useEffect2.handleTab"];
            modal.addEventListener("keydown", handleTab);
            return ({
                "SlideshowLightbox.useEffect2": ()=>modal.removeEventListener("keydown", handleTab)
            })["SlideshowLightbox.useEffect2"];
        }
    }["SlideshowLightbox.useEffect2"], [
        showModal
    ]);
    const scrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlideshowLightbox.useEffect2": ()=>{
            if (showModal) {
                scrollYRef.current = window.scrollY;
                document.body.style.position = "fixed";
                document.body.style.top = `-${scrollYRef.current}px`;
                document.body.style.width = "100%";
            } else {
                const y = scrollYRef.current;
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, y);
            }
            return ({
                "SlideshowLightbox.useEffect2": ()=>{
                    document.body.style.position = "";
                    document.body.style.top = "";
                    document.body.style.width = "";
                }
            })["SlideshowLightbox.useEffect2"];
        }
    }["SlideshowLightbox.useEffect2"], [
        showModal
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${initWrapperClassname()}`,
        children: [
            renderPreviewImages(),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                mode: "wait",
                children: showModal !== false && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$PortalCompat$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Portal$3e$__["Portal"], {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$div$2d$100vh$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            style: {
                                height: lboxHeight
                            },
                            ref: lightboxRef,
                            tabIndex: -1,
                            className: "lightboxContainer",
                            id: "lightboxContainer",
                            "aria-modal": "true",
                            role: "dialog",
                            children: [
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `${SlideshowLightbox_module_css_default2.modalContainer}`,
                                    style: {
                                        height: lboxHeight
                                    },
                                    initial: "inactive",
                                    variants,
                                    animate: showModal ? "active" : "inactive",
                                    exit: "inactive",
                                    transition: {
                                        duration: "0.3"
                                    },
                                    onAnimationComplete: ()=>{
                                        let animEntered = !animationEntered;
                                        setAnimationEntered(animEntered);
                                        if (animEntered == true) {
                                            let prevFocusedElement = document.activeElement;
                                            setPrevFocusedElem(prevFocusedElement);
                                            const firstButton = document.querySelector(".lightboxContainer button, .lightboxContainer [tabindex='0']");
                                            if (firstButton) {
                                                firstButton.focus();
                                            }
                                            document.getElementById("lightboxContainer")?.focus();
                                        } else {
                                            prevFocusedElem?.focus();
                                        }
                                        if (emblaApi) emblaApi.reInit();
                                    },
                                    children: [
                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `${SlideshowLightbox_module_css_default2.slideshowAnimContainer} `,
                                            id: "slideshowAnim",
                                            style: {
                                                backgroundColor,
                                                width: lightboxModalWidth,
                                                height: lboxHeight
                                            },
                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: `${SlideshowLightbox_module_css_default2.lightboxContainer} `,
                                                id: "lightboxContent",
                                                tabIndex: -1,
                                                role: "dialog",
                                                onClick: (e)=>{
                                                    if (modalCloseOption == "clickOutside") {
                                                        checkModalClick(e);
                                                    }
                                                },
                                                children: [
                                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("section", {
                                                        className: ` ${SlideshowLightbox_module_css_default2.iconsHeader} 
                      ${controlsPlacement == "default" ? SlideshowLightbox_module_css_default2.iconHeaderDefault : SlideshowLightbox_module_css_default2.iconHeaderCenter} 
                      
                      ${iconColor ? "" : getIconClasses()} imageModal`,
                                                        style: {
                                                            color: iconColor
                                                        },
                                                        children: [
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                keyValue: "ArrowLeft",
                                                                code: "37",
                                                                onKeyHandle: ()=>{
                                                                    prevSlide();
                                                                }
                                                            }),
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                keyValue: "ArrowRight",
                                                                code: "39",
                                                                onKeyHandle: ()=>{
                                                                    nextSlide();
                                                                }
                                                            }),
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                keyValue: "Escape",
                                                                code: "27",
                                                                onKeyHandle: (event)=>{
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    if (!isBrowserFullScreen) {
                                                                        closeModal();
                                                                    }
                                                                }
                                                            }),
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                keyValue: "Left",
                                                                code: "37",
                                                                onKeyHandle: ()=>{
                                                                    prevSlide();
                                                                }
                                                            }),
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                keyValue: "Right",
                                                                code: "39",
                                                                onKeyHandle: ()=>{
                                                                    nextSlide();
                                                                }
                                                            }),
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f40$banzai$2d$inc$2f$react$2d$key$2d$handler$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                keyValue: "Esc",
                                                                code: "27",
                                                                onKeyHandle: (event)=>{
                                                                    event.preventDefault();
                                                                    event.stopPropagation();
                                                                    if (!isBrowserFullScreen) {
                                                                        closeModal();
                                                                    }
                                                                }
                                                            }),
                                                            showControls == true && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                                className: `${SlideshowLightbox_module_css_default2.controls}`,
                                                                children: [
                                                                    disableZoom || displayMagnificationIcons == false ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            onClick: ()=>{
                                                                                if (enableMagnifyingGlass) initMagnifyingGlass();
                                                                                zoomIntoImage();
                                                                            },
                                                                            label: "Zoom in",
                                                                            style: getIconStyle(),
                                                                            children: props.zoomInComponent ? props.zoomInComponent : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$in$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                                                size: 24,
                                                                                color: iconColor || void 0,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`
                                                                            })
                                                                        })
                                                                    }),
                                                                    disableZoom || displayMagnificationIcons == false ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Zoom out",
                                                                            onClick: ()=>{
                                                                                zoomReferences.current[zoomIdx].zoomOut();
                                                                                let scale = zoomReferences.current[zoomIdx].state.scale;
                                                                                if (scale == 1 || scale == 1.65) {
                                                                                    setZoomedIn(false);
                                                                                }
                                                                            },
                                                                            children: props.zoomOutComponent ? props.zoomOutComponent : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }),
                                                                    displayDownloadBtn() ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                        label: "Download",
                                                                        onClick: ()=>{
                                                                            saveImage();
                                                                        },
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            size: 24,
                                                                            className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                            style: getIconStyle(),
                                                                            color: iconColor ? iconColor : void 0
                                                                        })
                                                                    }) : null,
                                                                    displayFullScreenIcon ? isBrowserFullScreen ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Exit full screen",
                                                                            onClick: ()=>{
                                                                                isBrowserFullScreen ? exitFullScreen() : fullScreen();
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2d$exit$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FullscreenExit$3e$__["FullscreenExit"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Make lightbox full screen",
                                                                            onClick: ()=>{
                                                                                isBrowserFullScreen ? exitFullScreen() : fullScreen();
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fullscreen$3e$__["Fullscreen"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : null,
                                                                    isMobile && displayImgMetadata ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Show image metadata",
                                                                            onClick: ()=>{
                                                                                setShowImgMetadataPanel(!showImgMetadataPanel);
                                                                                setDisplayLoader(false);
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$info$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoCircle$3e$__["InfoCircle"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : null,
                                                                    rotateImgIcon ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Rotate image",
                                                                            onClick: ()=>{
                                                                                rotateImage();
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$arrow$2d$clockwise$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowClockwise$3e$__["ArrowClockwise"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : null,
                                                                    displayThumbnailIcon ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Show thumbnails",
                                                                            onClick: ()=>{
                                                                                setShowThumbnails(!showThumbnails);
                                                                                setFullImg(!fullImg);
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$grid$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GridFill$3e$__["GridFill"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : null,
                                                                    shouldDisplayMagnifyingGlassIcon() ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Show magnifying glass",
                                                                            onClick: ()=>initMagnifyingGlass(),
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : null,
                                                                    shouldDisplaySlideshowIcon() ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: SlideshowLightbox_module_css_default2.slideshowPlayBtn,
                                                                        children: isSlideshowPlaying ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Pause slideshow",
                                                                            onClick: ()=>{
                                                                                isSlideshowPlaying ? stopSlideshow() : playSlideshow();
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pause$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircleFill$3e$__["PauseCircleFill"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            label: "Play slideshow",
                                                                            onClick: ()=>{
                                                                                isSlideshowPlaying ? stopSlideshow() : playSlideshow();
                                                                            },
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$play$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircleFill$3e$__["PlayCircleFill"], {
                                                                                size: 24,
                                                                                className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                style: getIconStyle(),
                                                                                color: iconColor ? iconColor : void 0
                                                                            })
                                                                        })
                                                                    }) : null,
                                                                    props.controlComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                            children: props.controlComponent
                                                                        })
                                                                    }) : null
                                                                ]
                                                            }),
                                                            props.closeComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                onClick: ()=>{
                                                                    closeModal();
                                                                },
                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                    label: "Close",
                                                                    id: "closeBtn",
                                                                    onClick: ()=>{
                                                                        closeModal();
                                                                    },
                                                                    children: props.closeComponent
                                                                })
                                                            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: `${SlideshowLightbox_module_css_default2.closeIcon} ${props.showControls == false ? SlideshowLightbox_module_css_default2.mlAuto : ""}`,
                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                    label: "Close",
                                                                    id: "closeBtn",
                                                                    className: `${props.showControlsBar == false && props.showControls == false ? SlideshowLightbox_module_css_default2.closeButtonRounded : SlideshowLightbox_module_css_default2.closeButton}`,
                                                                    onClick: ()=>{
                                                                        closeModal();
                                                                    },
                                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$lg$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XLg$3e$__["XLg"], {
                                                                        id: "closeIcon",
                                                                        size: 24,
                                                                        className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                        color: iconColor ? iconColor : void 0,
                                                                        style: getCloseIconBtnStyle()
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    displayArrows() ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        children: [
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                label: "Left arrow",
                                                                className: leftArrowStyle ? `${SlideshowLightbox_module_css_default2.prev1} ${getArrowStyle()} imageModal ${displayImgMetadata ? SlideshowLightbox_module_css_default2.prev1Metadata : ""}` : "imageModal",
                                                                style: leftArrowStyle,
                                                                onClick: ()=>{
                                                                    prevSlide();
                                                                },
                                                                children: prevArrowElem ? prevArrowElem : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                    className: `${props.leftArrowClassname ? props.leftArrowClassname : ""}`,
                                                                    children: "\u276E"
                                                                })
                                                            }),
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                label: "Right arrow",
                                                                className: rightArrowStyle ? `${SlideshowLightbox_module_css_default2.next1} ${getArrowStyle()} imageModal` : "imageModal",
                                                                style: rightArrowStyle,
                                                                onClick: ()=>{
                                                                    nextSlide();
                                                                },
                                                                children: nextArrowElem ? nextArrowElem : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                    className: `${props.rightArrowClassname ? props.rightArrowClassname : ""}`,
                                                                    children: "\u276F"
                                                                })
                                                            })
                                                        ]
                                                    }) : null,
                                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        initial: false,
                                                        custom: direction,
                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: `${getInnerContainerStyles()} ${SlideshowLightbox_module_css_default2.embla} 
                        ${isImageCaption("below") && showControlsBar == true ? SlideshowLightbox_module_css_default2.slideImageAndCaption : ""} 
                          ${props.fullScreen ? "" : SlideshowLightbox_module_css_default2.slideshowInnerContainer} 
                          ${props.showControlsBar == false || props.fullScreen ? SlideshowLightbox_module_css_default2.hideControlsBar : ""}
                          ${displayImgMetadata ? SlideshowLightbox_module_css_default2.slideshowInnerContainerImgMetadata : ""}  `,
                                                            style: getContainerStyles(),
                                                            children: [
                                                                shouldDisplayMetadataPanel() ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: SlideshowLightbox_module_css_default2.metadata,
                                                                    style: getMetadataPanelStyle(),
                                                                    children: isLoading ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                                        className: SlideshowLightbox_module_css_default2.metadataInnerContainer,
                                                                        children: [
                                                                            getMetadataPanel(),
                                                                            isMobile && showImgMetadataPanel ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(IconButton, {
                                                                                className: SlideshowLightbox_module_css_default2.imgMetadataCloseBtn,
                                                                                onClick: ()=>{
                                                                                    setShowImgMetadataPanel(false);
                                                                                },
                                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$lg$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XLg$3e$__["XLg"], {
                                                                                    size: 24,
                                                                                    className: `${SlideshowLightbox_module_css_default2.lightboxjsIcon} ${iconColor ? "" : getIconClasses()}`,
                                                                                    color: iconColor ? iconColor : void 0,
                                                                                    style: getIconStyle()
                                                                                })
                                                                            }) : null
                                                                        ]
                                                                    })
                                                                }) : null,
                                                                isImageCaption("above") ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: `${SlideshowLightbox_module_css_default2.imgTitleContainer} imageModal`,
                                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                                        className: `${SlideshowLightbox_module_css_default2.imgTitle}`,
                                                                        style: props.captionStyle ? props.captionStyle : {
                                                                            color: textColor
                                                                        },
                                                                        children: getImageCaption()
                                                                    }, "imgCaption" + slideIndex)
                                                                }) : null,
                                                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: `${SlideshowLightbox_module_css_default2.emblaViewport} 
                            ${displayImgMetadata ? SlideshowLightbox_module_css_default2.emblaContainerImgMetadata : ""}`,
                                                                    style: props.fullScreen == true ? {
                                                                        height: lightboxModalHeight
                                                                    } : {},
                                                                    ref: showModal ? emblaRef : null,
                                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                        className: `
                          ${getImgFadeClass()}
                          ${SlideshowLightbox_module_css_default2.emblaContainer}
                            ${displayImgMetadata ? SlideshowLightbox_module_css_default2.emblaContainerImgMetadata : ""}`,
                                                                        children: regularImgPaneNodes
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: `${SlideshowLightbox_module_css_default2.thumbnailsOuterContainer} ${isImageCaption("below") ? SlideshowLightbox_module_css_default2.thumbnailsAndCaption : ""}
                      ${displayImgMetadata ? SlideshowLightbox_module_css_default2.thumbnailsOuterContainerMetadata : ""} `,
                                                        style: getThumbnailsOuterContainerStyle(),
                                                        children: [
                                                            isImageCaption("below") ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: `${SlideshowLightbox_module_css_default2.imgTitleContainer} imageModal`,
                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                                    className: `${SlideshowLightbox_module_css_default2.imgTitle}`,
                                                                    style: props.captionStyle ? props.captionStyle : {
                                                                        color: textColor
                                                                    },
                                                                    children: getImageCaption()
                                                                }, "imgCaption" + slideIndex)
                                                            }) : null,
                                                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                initial: animatedThumbnails,
                                                                children: [
                                                                    showThumbnails !== false && navigationDots !== true && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        initial: "hidden",
                                                                        exit: "hidden",
                                                                        animate: "visible",
                                                                        style: imagesLoaded ? {} : {
                                                                            display: "displayHidden"
                                                                        },
                                                                        transition: {
                                                                            type: "spring",
                                                                            duration: 0.75
                                                                        },
                                                                        variants: thumbnailVariants,
                                                                        className: `${SlideshowLightbox_module_css_default2.thumbnails} ${isImageCaption("below") ? SlideshowLightbox_module_css_default2.thumbnailsWithCaption : ""}`,
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                            className: `${SlideshowLightbox_module_css_default2.emblaThumbs} ${SlideshowLightbox_module_css_default2.thumbnails}`,
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                                className: SlideshowLightbox_module_css_default2.emblaThumbsViewport,
                                                                                ref: emblaThumbsRef,
                                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                                    className: SlideshowLightbox_module_css_default2.emblaThumbsContainer,
                                                                                    children: frameworkID == "next" && props.images ? props.images.map((img, index)=>getImageThumbnail(img, index, true, props)) : // Not Next.js
                                                                                    images.map((img, index)=>getImageThumbnail(img, index, false, props))
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    showThumbnails !== true && navigationDots !== false && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lightbox$2e$js$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        initial: "hidden",
                                                                        exit: "hidden",
                                                                        animate: "visible",
                                                                        style: imagesLoaded ? {} : {
                                                                            display: "displayHidden"
                                                                        },
                                                                        transition: {
                                                                            type: "spring",
                                                                            duration: 0.75
                                                                        },
                                                                        variants: thumbnailVariants,
                                                                        className: `${SlideshowLightbox_module_css_default2.thumbnails} ${isImageCaption("below") ? SlideshowLightbox_module_css_default2.thumbnailsWithCaption : ""}`,
                                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                            className: `${SlideshowLightbox_module_css_default2.emblathumbs} ${SlideshowLightbox_module_css_default2.thumbnails}`,
                                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                                className: SlideshowLightbox_module_css_default2.emblaThumbsViewport,
                                                                                ref: emblaThumbsRef,
                                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                                    className: `${SlideshowLightbox_module_css_default2.navigationDots} ${SlideshowLightbox_module_css_default2.emblaThumbsContainer} imageModal
                                `,
                                                                                    children: frameworkID == "next" && props.images ? props.images.map((img, index)=>getNavigationDot(index)) : // Not Next.js
                                                                                    images.map((img, index)=>getNavigationDot(index))
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, "slideshowAnimContainer"),
                                        props.rightSidebarComponent ? props.rightSidebarComponent : null
                                    ]
                                }),
                                props.lightboxFooterComponent ? props.lightboxFooterComponent : null
                            ]
                        })
                    })
                })
            })
        ]
    });
});
;
 //# sourceMappingURL=chunk-N2BAN365.mjs.map
}),
]);

//# sourceMappingURL=425ab_lightbox_js-react_dist_chunk-N2BAN365_mjs_3625b6ab._.js.map
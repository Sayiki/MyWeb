// src/components/Blog.jsx
import { useState, useRef, useCallback, useEffect } from "react";

export default function Blog() {
  const posts = [
    {
      title: "Framework Valley: React",
      date: "Oct 2025",
      image: "/pictures/reactcodedex.png"
    },
    {
      title: "Intellectual Property – Symptosense Project",
      date: "Sept 2024",
      image: "/pictures/HKI.png"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Lightbox state
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastTouchDistance = useRef(0);

  const isLightboxOpen = activeIndex !== null;
  const currentPost = activeIndex !== null ? posts[activeIndex] : null;

  // Reset lightbox state when opening
  useEffect(() => {
    if (isLightboxOpen) {
      setZoom(1);
      setRotation(0);
      setTranslate({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Keyboard controls
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") handleZoom(0.25);
      if (e.key === "-") handleZoom(-0.25);
      if (e.key === "ArrowLeft") navigateImage(-1);
      if (e.key === "ArrowRight") navigateImage(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, activeIndex]);

  const closeLightbox = () => setActiveIndex(null);

  const handleZoom = useCallback((delta) => {
    setZoom((prev) => Math.max(0.5, Math.min(5, prev + delta)));
  }, []);

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const navigateImage = (direction) => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const newIndex = prev + direction;
      if (newIndex < 0 || newIndex >= posts.length) return prev;
      setZoom(1);
      setRotation(0);
      setTranslate({ x: 0, y: 0 });
      return newIndex;
    });
  };

  const handleDownload = () => {
    if (!currentPost) return;
    const link = document.createElement("a");
    link.href = currentPost.image;
    link.download = currentPost.image.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    const lightbox = document.getElementById("cert-lightbox");
    if (!document.fullscreenElement) {
      lightbox?.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    handleZoom(delta);
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      setZoom(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      setZoom(2);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - translate.x, y: e.clientY - translate.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const maxPan = (zoom - 1) * 300 + 50;
    const newX = Math.max(-maxPan, Math.min(maxPan, e.clientX - dragStart.current.x));
    const newY = Math.max(-maxPan, Math.min(maxPan, e.clientY - dragStart.current.y));
    setTranslate({ x: newX, y: newY });
  };

  const handleMouseUp = () => setIsDragging(false);

  const getTouchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX - translate.x, y: e.touches[0].clientY - translate.y };
    } else if (e.touches.length === 2) {
      lastTouchDistance.current = getTouchDistance(e.touches);
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) {
      const maxPan = (zoom - 1) * 300 + 50;
      const newX = Math.max(-maxPan, Math.min(maxPan, e.touches[0].clientX - dragStart.current.x));
      const newY = Math.max(-maxPan, Math.min(maxPan, e.touches[0].clientY - dragStart.current.y));
      setTranslate({ x: newX, y: newY });
    } else if (e.touches.length === 2) {
      const distance = getTouchDistance(e.touches);
      if (lastTouchDistance.current > 0) {
        const delta = (distance - lastTouchDistance.current) / 200;
        handleZoom(delta);
      }
      lastTouchDistance.current = distance;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    lastTouchDistance.current = 0;
  };

  const imageTransform = `scale(${zoom}) rotate(${rotation}deg) translate(${translate.x / zoom}px, ${translate.y / zoom}px)`;

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-4xl space-y-10 text-slate-800">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Certified Learning
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            Credentials that reinforce my commitment to modern web development and backend expertise.
          </p>
        </header>
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <li
              key={index}
              className="group cursor-pointer rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex w-full cursor-pointer flex-col gap-3 text-left"
              >
                <div className="relative h-40 overflow-hidden rounded-2xl bg-[#EDEEF3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {post.date}
                </span>
                <span className="text-lg font-semibold uppercase tracking-[0.24em] text-slate-900 transition-colors duration-150 group-hover:text-sky-600">
                  {post.title}
                </span>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 transition-colors duration-150 group-hover:text-sky-700">
                  View certificate
                  <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 16 16 8M10.5 8H16v5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Custom Lightbox */}
      {isLightboxOpen && currentPost && (
        <div
          id="cert-lightbox"
          className="fixed inset-0 z-[10000] animate-fadeIn"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col">
            {/* Controls */}
            <div className="absolute right-5 top-5 z-[10001] flex gap-2.5">
              <button
                onClick={() => handleZoom(0.25)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
                title="Zoom In"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </button>
              <button
                onClick={() => handleZoom(-0.25)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
                title="Zoom Out"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6" />
                </svg>
              </button>
              <button
                onClick={handleRotate}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
                title="Rotate"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={handleDownload}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
                title="Download"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button
                onClick={toggleFullscreen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
                title="Fullscreen"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button
                onClick={closeLightbox}
                className="flex h-10 w-10 items-center justify-center rounded-full border-red-500 bg-red-600/80 text-white transition-all hover:scale-110 hover:bg-red-600"
                title="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Arrows */}
            {activeIndex > 0 && (
              <button
                onClick={() => navigateImage(-1)}
                className="absolute left-5 top-1/2 z-[10001] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {activeIndex < posts.length - 1 && (
              <button
                onClick={() => navigateImage(1)}
                className="absolute right-5 top-1/2 z-[10001] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Media Container */}
            <div
              className={`flex flex-1 select-none items-center justify-center overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onWheel={handleWheel}
              onDoubleClick={handleDoubleClick}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="max-h-[90vh] max-w-[90vw] select-none object-contain transition-transform duration-100"
                style={{ transform: imageTransform }}
                draggable={false}
              />
            </div>

            {/* Info Bar */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
              {Math.round(zoom * 100)}%
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

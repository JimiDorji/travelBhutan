"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const BACKGROUNDS = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1605559424843-9d8a3b41c0b4",
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const intervalRef = useRef(null);

    /* ----------------------------- Auto Slideshow ----------------------------- */

    const startAutoSlide = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
        }, 5000);
    }, []);

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, [startAutoSlide]);

    /* ----------------------------- Body Lock ---------------------------------- */

    useEffect(() => {
        document.body.style.overflow = isVideoOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [isVideoOpen]);

    /* -------------------------------------------------------------------------- */

    return (
        <section className="relative min-h-[85vh] sm:min-h-screen overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                {BACKGROUNDS.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-indigo-900/70" />
                        <img
                            src={src}
                            alt={`Bhutan landscape ${index + 1}`}
                            className="h-full w-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-cyan-900/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-[85vh] sm:min-h-screen items-center">
                    <div className="max-w-2xl py-20">
                        {/* Eyebrow */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                            <span className="text-xs sm:text-sm font-medium tracking-wider text-cyan-100">
                                THE LAST HIMALAYAN KINGDOM
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="mb-6">
                            <span className="block text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                                Discover
                            </span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl lg:text-8xl">
                                Bhutan&apos;s Soul
                            </span>
                        </h1>

                        {/* Copy */}
                        <p className="mb-8 max-w-xl text-base leading-relaxed text-blue-100/90 sm:text-2xl">
                            Journey through ancient monasteries, mist-draped valleys,
                            and vibrant festivals. Experience sustainable travel that
                            honors tradition and connects you with the heart of the
                            Himalayas.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl transition hover:scale-105">
                                Start Your Journey →
                            </button>

                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
                            >
                                Watch Story ▶
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Stats Only */}
            <div className="relative mx-auto hidden max-w-7xl px-6 sm:block">
                <div className="grid gap-8 rounded-2xl bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-4">
                    {[
                        ["15+", "Years Experience"],
                        ["98%", "Satisfaction Rate"],
                        ["50+", "Cultural Tours"],
                        ["4.9★", "Guest Rating"],
                    ].map(([value, label]) => (
                        <div key={label} className="text-center">
                            <div className="mb-2 text-3xl font-bold text-white">
                                {value}
                            </div>
                            <p className="text-sm font-medium text-blue-100">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsVideoOpen(false)}
                    />

                    <div className="relative z-10 w-full sm:max-w-4xl rounded-t-3xl sm:rounded-3xl bg-black p-4 sm:p-6 shadow-2xl mb-safe">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            aria-label="Close video"
                            className="absolute right-4 top-4 z-20 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white hover:bg-black"
                        >
                            ✕
                        </button>

                        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                            <iframe
                                src="https://player.vimeo.com/video/VIMEO_ID?autoplay=1&title=0&byline=0&playsinline=1"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

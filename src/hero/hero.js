"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const BACKGROUNDS = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1605559424843-9d8a3b41c0b4",
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
        }, 5000);
    }, []);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startAutoSlide]);

    return (
        <section
            id="home"
            className="relative min-h-[100svh] overflow-hidden bg-[#070b14]"
        >
            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0">
                {BACKGROUNDS.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-cover 
              transition-opacity duration-1000 
              ${currentSlide === index
                                ? "opacity-100 scale-105"
                                : "opacity-0 scale-100"
                            }`}
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="100vw"
                        style={{
                            transition: "opacity 1s ease, transform 6s ease-in-out",
                        }}
                    />
                ))}

                {/* Softer glassy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-indigo-900/60 backdrop-blur-[2px]" />
            </div>

            {/* CONTENT */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex min-h-[100svh] items-center">
                    <div className="max-w-xl py-16 sm:max-w-3xl sm:py-24">
                        {/* EYEBROW */}
                        <div
                            className="mb-6 inline-flex items-center gap-2 rounded-full 
              bg-white/10 border border-white/20 shadow-lg backdrop-blur-md 
              px-4 py-2 animate-slide-down"
                        >
                            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-flicker" />
                            <span className="text-xs tracking-widest text-cyan-100">
                                THE LAST HIMALAYAN KINGDOM
                            </span>
                        </div>

                        {/* HEADING */}
                        <h1 className="mb-6">
                            <span
                                className="block text-4xl font-bold text-white sm:text-5xl lg:text-7xl 
                animate-slide-right"
                            >
                                Discover
                            </span>
                            <span
                                className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 
                bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-8xl 
                animate-slide-left"
                            >
                                Bhutan&apos;s Soul
                            </span>
                        </h1>

                        {/* COPY */}
                        <p
                            className="mb-8 max-w-xl text-base leading-relaxed text-blue-100 
              sm:text-xl animate-fade-in"
                            style={{ animationDelay: "150ms" }}
                        >
                            Journey through ancient monasteries, mist-draped valleys, and vibrant
                            festivals. Experience sustainable travel that honors tradition and
                            connects you with the heart of the Himalayas.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                            <button
                                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 
                px-8 py-4 text-base font-semibold text-white transition 
                hover:scale-105 animate-zoom-in"
                                style={{ animationDelay: "250ms" }}
                            >
                                Start Your Journey →
                            </button>

                            <button
                                className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 
                text-base font-semibold text-white backdrop-blur-md 
                transition hover:bg-white/10 hover:scale-105 animate-zoom-in"
                                style={{ animationDelay: "300ms" }}
                            >
                                Watch Story ▶
                            </button>
                        </div>

                        {/* STATS PANEL (Glass + staggered animation) */}
                        <div
                            className="mt-12 grid grid-cols-2 gap-6 rounded-2xl 
              bg-white/5 border border-white/20 p-6 backdrop-blur-md 
              shadow-xl sm:grid-cols-4 sm:p-8 animate-slide-up-fade"
                            style={{ animationDelay: "350ms" }}
                        >
                            {[
                                ["15+", "Years"],
                                ["98%", "Satisfaction"],
                                ["50+", "Tours"],
                                ["4.9★", "Rating"],
                            ].map(([value, label], i) => (
                                <div
                                    key={label}
                                    className="text-center animate-pop-in"
                                    style={{ animationDelay: `${400 + i * 150}ms` }}
                                >
                                    <div className="text-2xl font-bold text-white sm:text-3xl">
                                        {value}
                                    </div>
                                    <p className="text-xs text-blue-100 sm:text-sm">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, [startAutoSlide]);

    const goToSlide = (index) => {
        stopAutoSlide();
        setCurrentSlide(index);
        startAutoSlide();
    };

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                {BACKGROUNDS.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
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

            {/* Floating Particles (deterministic) */}
            <div className="pointer-events-none absolute inset-0">
                {Array.from({ length: 18 }).map((_, i) => (
                    <span
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-white/20 animate-float"
                        style={{
                            left: `${(i * 37) % 100}%`,
                            top: `${(i * 53) % 100}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${6 + (i % 6)}s`,
                        }}
                    />
                ))}
            </div>

            {/* Mountain Silhouette */}
            <svg
                className="absolute bottom-0 left-0 right-0 w-full text-slate-900/20"
                viewBox="0 0 1440 120"
                fill="currentColor"
            >
                <path d="M0 120L60 90C120 60 240 0 360 0C480 0 600 60 720 75C840 90 960 60 1080 45C1200 30 1320 30 1380 30L1440 30V120H0Z" />
            </svg>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-screen items-center">
                    <div className="max-w-3xl py-20">
                        {/* Eyebrow */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                            <span className="text-sm font-medium tracking-wider text-cyan-100">
                                THE LAST HIMALAYAN KINGDOM
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="mb-6">
                            <span className="block text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                                Discover
                            </span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl lg:text-8xl">
                                Bhutan&apos;s Soul
                            </span>
                        </h1>

                        {/* Copy */}
                        <p className="mb-10 max-w-2xl text-xl leading-relaxed text-blue-100/90 sm:text-2xl">
                            Journey through ancient monasteries, mist-draped valleys, and
                            vibrant festivals. Experience sustainable travel that honors
                            tradition and connects you with the heart of the Himalayas.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-6">
                            <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-xl transition hover:scale-105">
                                Start Your Journey →
                            </button>

                            <button className="rounded-2xl border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20">
                                Watch Story ▶
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-20 grid gap-8 rounded-2xl bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-4">
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
                                    <p className="text-sm font-medium text-blue-100">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-20 right-8 hidden lg:flex flex-col gap-3">
                {BACKGROUNDS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`rounded-full transition ${currentSlide === index
                            ? "h-3 w-3 bg-white"
                            : "h-2 w-2 bg-white/30 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 232999dc85f76724436ae052037d2baadcd3de6e

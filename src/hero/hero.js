"use client";

import { useState, useEffect } from "react";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const backgrounds = [
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        "https://images.unsplash.com/photo-1605559424843-9d8a3b41c0b4",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                {backgrounds.map((bg, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-indigo-900/70" />
                        <img
                            src={bg}
                            alt={`Bhutan Landscape ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-cyan-900/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-white/20 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
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

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-screen items-center">
                    <div className="max-w-3xl py-20">
                        {/* Eyebrow */}
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 px-6 py-3 backdrop-blur-md">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                                <span className="text-sm font-medium tracking-wider text-cyan-100">
                                    THE LAST HIMALAYAN KINGDOM
                                </span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="mb-6">
                            <span className="block text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                                Discover
                            </span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-6xl font-bold leading-tight text-transparent sm:text-7xl lg:text-8xl xl:text-9xl">
                                Bhutan's Soul
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mb-10 max-w-2xl text-xl leading-relaxed text-blue-100/90 sm:text-2xl">
                            Journey through ancient monasteries, mist‑draped valleys, and
                            vibrant festivals. Experience sustainable travel that honors
                            tradition and connects you with the heart of the Himalayas.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-6">
                            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Your Journey
                                    <svg className="h-5 w-5 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
                            </button>

                            <button className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20">
                                <span className="relative z-10 flex items-center gap-3">
                                    Watch Story
                                    <svg className="h-5 w-5 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Stats Bar */}
                        <div className="mt-20 grid gap-8 rounded-2xl bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-4">
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                                    15<span className="text-cyan-300">+</span>
                                </div>
                                <p className="text-sm font-medium text-blue-100">
                                    Years Experience
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                                    98<span className="text-cyan-300">%</span>
                                </div>
                                <p className="text-sm font-medium text-blue-100">
                                    Satisfaction Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                                    50<span className="text-cyan-300">+</span>
                                </div>
                                <p className="text-sm font-medium text-blue-100">
                                    Cultural Tours
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                                    ⭐<span className="text-cyan-300">4.9</span>
                                </div>
                                <p className="text-sm font-medium text-blue-100">
                                    Guest Rating
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-medium tracking-wider text-blue-200">
                        SCROLL TO EXPLORE
                    </span>
                    <div className="h-8 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-20 right-8 hidden lg:flex flex-col gap-3">
                {backgrounds.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${currentSlide === index
                            ? "h-3 w-3 bg-white scale-125"
                            : "bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Social Proof */}
            <div className="absolute top-10 right-10 hidden lg:block">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-cyan-400 to-blue-500"
                                />
                            ))}
                        </div>
                        <div>
                            <p className="text-xs font-medium text-white">
                                Join 2,500+ travelers
                            </p>
                            <p className="text-xs text-blue-200">
                                Who explored with us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
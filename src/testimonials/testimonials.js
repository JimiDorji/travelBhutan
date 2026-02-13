"use client";

import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [particles, setParticles] = useState([]);
    const sectionRef = useRef(null);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 12 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${6 + Math.random() * 4}s`,
            delay: `${i * 0.3}s`,
        }));
        setParticles(generated);
    }, []);

    const testimonials = [
        {
            name: "Sarah Thompson",
            country: "United Kingdom",
            quote:
                "Travel Bhutan exceeded every expectation. The guides were incredibly knowledgeable, and every detail was handled with care.",
            avatar:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
            stay: "12-Day Cultural Journey",
            rating: 5,
            highlight: "Exceptional Guide",
            color: "from-cyan-500 to-blue-500",
        },
        {
            name: "Daniel Müller",
            country: "Germany",
            quote:
                "From monasteries to mountain passes, the experience felt deeply personal and profoundly authentic.",
            avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            stay: "Himalayan Trek Adventure",
            rating: 5,
            highlight: "Life-Changing Trek",
            color: "from-emerald-500 to-green-500",
        },
        {
            name: "Aiko Tanaka",
            country: "Japan",
            quote:
                "Every moment was calm, respectful, and beautifully paced. Bhutan felt sacred, not touristic.",
            avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            stay: "Spiritual Retreat",
            rating: 5,
            highlight: "Deeply Spiritual",
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Michael Carter",
            country: "United States",
            quote:
                "An extraordinary journey. Impeccable service, genuine warmth, and unforgettable landscapes.",
            avatar:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            stay: "Luxury Heritage Tour",
            rating: 5,
            highlight: "Unforgettable Luxury",
            color: "from-amber-500 to-orange-500",
        },
    ];

    const stats = [
        { value: "500+", label: "Happy Travelers", icon: "✨" },
        { value: "4.9★", label: "Average Rating", icon: "⭐" },
        { value: "98%", label: "Would Recommend", icon: "💯" },
        { value: "15+", label: "Years of Service", icon: "🌟" },
    ];

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 py-32"
        >
            {/* Ambient particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-cyan-400/20 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-widest text-cyan-200 backdrop-blur-sm">
                        ✦ VOICES FROM THE HIMALAYAS
                    </span>

                    <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                        <span className="text-white">Traveler </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        Reflections from guests who explored Bhutan through meaningful,
                        carefully curated journeys.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-xl font-bold text-white">
                                {stat.value}
                            </div>
                            <p className="text-xs text-white/60">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t) => (
                        <article
                            key={t.name}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            onMouseEnter={() => setHoveredCard(t.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Hover gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                            />

                            <div className="relative z-10 p-8">
                                {/* Quote */}
                                <p className="text-base leading-relaxed text-slate-200 mb-6">
                                    “{t.quote}”
                                </p>

                                {/* Highlight badge */}
                                <div
                                    className={`mb-6 inline-block rounded-full bg-gradient-to-r ${t.color} px-3 py-1 text-xs font-medium text-white`}
                                >
                                    {t.highlight}
                                </div>

                                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-base font-semibold text-white">
                                            {t.name}
                                        </h4>
                                        <p className="text-xs text-slate-400">
                                            {t.country} •{" "}
                                            <span className="text-cyan-300">{t.stay}</span>
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: t.rating }).map((_, idx) => (
                                            <svg
                                                key={idx}
                                                className="h-4 w-4 fill-amber-400"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white to-white/90 px-12 py-6 text-lg font-semibold text-slate-900 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
                        <span className="relative z-10 bg-gradient-to-r from-slate-900 to-slate-900 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                            Read More Stories
                        </span>
                        <span className="ml-3 relative z-10 inline-block transition-all duration-500 group-hover:translate-x-2 group-hover:text-cyan-600">
                            →
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

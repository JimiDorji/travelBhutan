"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
    const [particles, setParticles] = useState([]);
    const sectionRef = useRef(null);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 10 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${6 + Math.random() * 4}s`,
            delay: `${i * 0.3}s`,
        }));
        setParticles(generated);
    }, []);

    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge.",
            stat: "15+ Years",
            color: "from-cyan-500 to-blue-500",
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-neutral journeys that protect Bhutan's pristine environment and traditions.",
            stat: "100% Offset",
            color: "from-emerald-500 to-green-500",
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your interests and travel pace.",
            stat: "Personalized",
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities beyond typical tourist paths.",
            stat: "25+ Villages",
            color: "from-amber-500 to-orange-500",
        },
    ];

    const stats = [
        { value: "98%", label: "Guest Satisfaction" },
        { value: "2,500+", label: "Travelers Guided" },
        { value: "50+", label: "Local Partnerships" },
        { value: "10", label: "Awards Won" },
    ];

    const team = [
        {
            name: "Jigme Dorji",
            role: "Founder & CEO",
            bio: "Expert in Bhutanese culture with extensive guiding experience.",
        },
        {
            name: "Dechen Dorji",
            role: "Cultural Specialist",
            bio: "Preserving and sharing Bhutan's rich cultural heritage.",
        },
        {
            name: "Pema Cheki",
            role: "Manager & Sustainability Lead",
            bio: "Ensuring responsible and sustainable travel practices.",
        },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
        >
            {/* Ambient Particles */}
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

            <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs tracking-widest text-cyan-200">
                        OUR STORY & MISSION
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="text-white">Crafting Himalayan </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Journeys
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-blue-100/80">
                        We are Bhutan’s premier travel curator, revealing the kingdom’s soul
                        through authentic, sustainable, and transformative experiences.
                    </p>
                </div>

                {/* Story + Highlights */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Story */}
                    <div className="space-y-6 text-blue-100/90">
                        <p className="text-lg leading-relaxed">
                            Founded in the heart of the Himalayas,{" "}
                            <span className="font-semibold text-white">Alpine Odyssey</span>{" "}
                            emerged from a passion to share Bhutan’s extraordinary beauty while
                            preserving its timeless traditions.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Our locally-born guides and travel experts have explored every valley,
                            monastery, and mountain pass, creating journeys that reveal Bhutan’s
                            living culture with authenticity and respect.
                        </p>

                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm">
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Our Philosophy
                            </h3>
                            <p className="text-blue-100/90">
                                Travel should enrich both visitor and host. Through responsible
                                tourism, we support local communities, preserve cultural heritage,
                                and maintain Bhutan’s carbon-negative legacy.
                            </p>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/90 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition`}
                                />
                                <div className="relative z-10">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <span
                                            className={`rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-semibold text-white`}
                                        >
                                            {item.stat}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-24 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                                {stat.value}
                            </div>
                            <p className="mt-2 text-sm text-blue-100/80">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Team */}
                <div className="mt-24">
                    <h3 className="mb-12 text-center text-3xl font-bold text-white">
                        Meet Our Experts
                    </h3>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm transition hover:scale-[1.02] hover:shadow-xl"
                            >
                                <div className="relative z-10">
                                    <h4 className="text-xl font-semibold text-white">
                                        {member.name}
                                    </h4>
                                    <p className="mt-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                                        {member.role}
                                    </p>
                                    <p className="mt-3 text-sm text-blue-200/70">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState(null);
    const [particles, setParticles] = useState([]);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 10 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${5 + Math.random() * 5}s`,
            delay: `${i * 0.4}s`,
        }));
        setParticles(generated);
    }, []);

    const handleNewsletter = (e) => {
        e.preventDefault();
        if (!email) return;
        setNewsletterStatus("success");
        setEmail("");
        setTimeout(() => setNewsletterStatus(null), 3000);
    };

    const companyLinks = ["About", "Our Story", "Team", "Careers", "Press"];
    const experienceLinks = [
        "Cultural Tours",
        "Trekking",
        "Festivals",
        "Wellness",
        "Custom Travel",
    ];
    const supportLinks = [
        "Contact",
        "FAQ",
        "Booking Guide",
        "Privacy Policy",
        "Terms",
    ];

    const socialLinks = [
        { name: "Instagram", icon: "📷" },
        { name: "Facebook", icon: "📘" },
        { name: "YouTube", icon: "▶️" },
        { name: "LinkedIn", icon: "💼" },
        { name: "Twitter", icon: "🐦" },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
            {/* Background Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400/30 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20">
                {/* Top Grid */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                            Alpine Odyssey
                        </h2>

                        <p className="max-w-md leading-relaxed text-slate-300">
                            We design immersive and responsible travel experiences in Bhutan,
                            blending cultural depth, natural beauty, and sustainable tourism
                            aligned with the Royal Government of Bhutan.
                        </p>

                        {/* Newsletter */}
                        <form onSubmit={handleNewsletter} className="max-w-md">
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Subscribe to updates
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg"
                                >
                                    Subscribe
                                </button>
                            </div>
                            {newsletterStatus === "success" && (
                                <p className="mt-2 text-xs text-emerald-400">
                                    ✓ Thanks for subscribing!
                                </p>
                            )}
                            <p className="mt-2 text-xs text-slate-400">
                                Occasional insights. No spam.
                            </p>
                        </form>
                    </div>

                    {/* Links */}
                    <div className="grid gap-10 sm:grid-cols-3">
                        <FooterColumn title="Company" links={companyLinks} />
                        <FooterColumn title="Experiences" links={experienceLinks} />
                        <FooterColumn title="Support" links={supportLinks} />
                    </div>
                </div>

                {/* Divider */}
                <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

                {/* Bottom Section */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Copyright */}
                    <div>
                        <p className="text-sm">
                            © {currentYear} Alpine Odyssey — Licensed Bhutan Tour Operator
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                aria-label={social.name}
                                className="rounded-lg border border-slate-700 px-3 py-2 transition hover:scale-110 hover:border-indigo-500"
                            >
                                <span className="flex items-center gap-1 text-sm">
                                    <span>{social.icon}</span>
                                    <span className="hidden sm:inline">{social.name}</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="mt-12 grid gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm sm:grid-cols-3 text-sm">
                    <ContactCard
                        icon="✉️"
                        label="Email"
                        value="alpineodyssey.bt@gmail.com"
                        href="mailto:alpineodyssey.bt@gmail.com"
                    />
                    <ContactCard
                        icon="📞"
                        label="Phone"
                        value="+975 77652012"
                        href="tel:+97577652012"
                    />
                    <ContactCard
                        icon="🏢"
                        label="Office"
                        value="Thimphu, Bhutan"
                        sub="Mon–Fri, 9AM–5PM"
                    />
                </div>

                {/* Compliance */}
                <p className="mt-8 text-center text-xs text-slate-500">
                    All travel operations comply with Bhutan’s Sustainable Tourism Policy
                    and cultural preservation standards.
                </p>
            </div>
        </footer>
    );
}

/* ---------- Reusable Components ---------- */

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">
                {title}
            </h3>
            <ul className="space-y-2 text-sm">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href="#"
                            className="text-slate-400 transition hover:text-white hover:translate-x-1 inline-block"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ContactCard({ icon, label, value, href, sub }) {
    const content = (
        <>
            <div className="mb-2 text-xl">{icon}</div>
            <div className="text-xs text-slate-400">{label}</div>
            <div className="font-semibold text-white">{value}</div>
            {sub && <div className="text-xs text-slate-400">{sub}</div>}
        </>
    );

    return href ? (
        <a
            href={href}
            className="rounded-lg bg-slate-800/50 p-4 text-center transition hover:scale-105 hover:bg-slate-800"
        >
            {content}
        </a>
    ) : (
        <div className="rounded-lg bg-slate-800/50 p-4 text-center">
            {content}
        </div>
    );
}

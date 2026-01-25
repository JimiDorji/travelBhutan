"use client";

export default function About() {
    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge.",
            icon: "🏔️",
            stat: "15+ Years"
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-neutral journeys that protect Bhutan's pristine environment and traditions.",
            icon: "🌱",
            stat: "100% Offset"
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your specific interests and pace.",
            icon: "📋",
            stat: "Personalized"
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities beyond typical tourist paths.",
            icon: "🤝",
            stat: "25+ Villages"
        },
    ];

    const stats = [
        { value: "98%", label: "Guest Satisfaction" },
        { value: "2,500+", label: "Travelers Guided" },
        { value: "50+", label: "Local Partnerships" },
        { value: "10", label: "Awards Won" },
    ];

    return (
        <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-500/10 to-transparent blur-3xl" />

                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/3 right-10 h-4 w-4 rounded-full bg-cyan-400/30 animate-pulse" />
                <div className="absolute bottom-1/3 left-10 h-3 w-3 rounded-full bg-blue-400/20 animate-pulse delay-700" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
                {/* Enhanced Header */}
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 backdrop-blur-md">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                        <span className="text-sm font-medium tracking-wider text-cyan-100">
                            OUR STORY & MISSION
                        </span>
                    </div>

                    <h1 className="mb-6 bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                        Crafting Himalayan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Journeys</span>
                    </h1>

                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100/80">
                        We are Bhutan's premier travel curator, dedicated to revealing the kingdom's
                        soul through authentic, sustainable, and transformative experiences.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
                    {/* Left Column - Story */}
                    <div className="space-y-8">
                        <div className="relative">
                            {/* Quote Decoration */}
                            <div className="absolute -top-6 -left-6 text-6xl text-blue-500/20">
                                "
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-blue-100/90">
                                    Founded in the heart of the Himalayas, <span className="font-semibold text-white">Travel Bhutan</span> emerged
                                    from a passion to share our kingdom's extraordinary beauty while preserving its
                                    timeless traditions. We are more than a travel company—we are cultural ambassadors.
                                </p>

                                <p className="text-lg leading-relaxed text-blue-100/90">
                                    Our team of <span className="font-semibold text-white">locally-born guides</span> and travel experts have
                                    spent decades exploring every valley, monastery, and mountain pass. We combine
                                    this deep local knowledge with international standards of service to create
                                    journeys that are both authentic and comfortable.
                                </p>

                                <p className="text-lg leading-relaxed text-blue-100/90">
                                    Every itinerary we craft is designed to create <span className="font-semibold text-white">meaningful connections</span>—between
                                    travelers and local communities, between cultures, and between people and the
                                    pristine natural environment we're committed to protecting.
                                </p>
                            </div>
                        </div>

                        {/* Philosophy */}
                        <div className="rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/20 p-8 backdrop-blur-sm">
                            <h3 className="mb-4 text-xl font-semibold text-white">Our Philosophy</h3>
                            <p className="text-blue-100/90">
                                We believe travel should enrich both visitor and host. Through
                                <span className="font-semibold text-white"> responsible tourism</span>, we support local economies,
                                preserve cultural heritage, and maintain Bhutan's carbon-negative status.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights Grid */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/95 to-white/90 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl" />

                                <div className="relative z-10">
                                    {/* Icon & Stat */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-3xl">{item.icon}</span>
                                        <span className="rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                            {item.stat}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                        >
                                            Learn more
                                            <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mt-24">
                    <div className="mb-8 text-center">
                        <h3 className="text-3xl font-bold text-white">Our Impact</h3>
                        <p className="mt-2 text-blue-100/80">Numbers that tell our story</p>
                    </div>

                    <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 p-10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                                    {stat.value}
                                </div>
                                <p className="text-sm font-medium text-blue-100">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team & Certification */}
                <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-8 backdrop-blur-sm">
                        <h3 className="mb-4 text-xl font-semibold text-white">Our Team</h3>
                        <p className="text-blue-100/90">
                            Local guides, cultural experts, and hospitality professionals dedicated to
                            creating unforgettable Bhutanese experiences.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-500/10 p-8 backdrop-blur-sm">
                        <h3 className="mb-4 text-xl font-semibold text-white">Certifications</h3>
                        <div className="space-y-2">
                            <p className="text-blue-100/90 flex items-center gap-2">
                                <span className="text-green-400">✓</span> Licensed Bhutan Tourism Operator
                            </p>
                            <p className="text-blue-100/90 flex items-center gap-2">
                                <span className="text-green-400">✓</span> Sustainable Tourism Certified
                            </p>
                            <p className="text-blue-100/90 flex items-center gap-2">
                                <span className="text-green-400">✓</span> Local Community Partner
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-500/10 p-8 backdrop-blur-sm">
                        <h3 className="mb-4 text-xl font-semibold text-white">Awards</h3>
                        <p className="text-blue-100/90">
                            Recognized for excellence in cultural preservation and sustainable
                            tourism by international travel authorities.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-white to-white/90 px-10 py-5 text-lg font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                        <span className="relative z-10">Meet Our Team</span>
                        <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </section>
    );
}
export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Thompson",
            country: "United Kingdom",
            quote: "Travel Bhutan exceeded every expectation. The guides were incredibly knowledgeable, and every detail was handled with care. It felt authentic and deeply meaningful.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
            stay: "12-Day Cultural Tour",
            rating: 5
        },
        {
            name: "Daniel Müller",
            country: "Germany",
            quote: "From monasteries to mountain views, the journey was unforgettable. The cultural depth and personal attention were outstanding.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            stay: "Himalayan Trek Adventure",
            rating: 5
        },
        {
            name: "Aiko Tanaka",
            country: "Japan",
            quote: "Bhutan felt magical, and Travel Bhutan made it effortless. Everything was respectful, calm, and beautifully paced.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            stay: "Spiritual Retreat",
            rating: 5
        },
        {
            name: "Michael Carter",
            country: "United States",
            quote: "An extraordinary experience from start to finish. Professional, thoughtful, and truly special.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            stay: "Luxury Heritage Tour",
            rating: 5
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 py-32">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/5 blur-3xl animate-pulse delay-1000" />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Mountain silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900/30 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 90C120 60 240 0 360 0C480 0 600 60 720 75C840 90 960 60 1080 45C1200 30 1320 30 1380 30L1440 30V120H0Z"
                            fill="url(#mountain-gradient)" />
                        <defs>
                            <linearGradient id="mountain-gradient" x1="720" y1="0" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1E293B" stopOpacity="0.2" />
                                <stop offset="1" stopColor="#1E293B" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Enhanced Header */}
                <div className="mx-auto mb-24 max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 backdrop-blur-md">
                        <div className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
                        <span className="text-sm font-medium tracking-wider text-cyan-100">
                            VOICES FROM THE HIMALAYAS
                        </span>
                    </div>

                    <h2 className="mb-6 bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                        Traveler Experiences
                    </h2>

                    <p className="mx-auto max-w-2xl text-xl leading-relaxed text-blue-100/80">
                        Discover why travelers from around the world choose us for their
                        journey to the last Himalayan kingdom
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t, index) => (
                        <div
                            key={t.name}
                            className="group relative overflow-hidden rounded-3xl"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-indigo-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />

                            {/* Main Card */}
                            <div className="relative rounded-3xl bg-gradient-to-b from-white/95 to-white/90 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl">
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <svg className="h-10 w-10 text-blue-500/20" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
                                    </svg>
                                </div>

                                {/* Quote */}
                                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                                    "{t.quote}"
                                </p>

                                {/* Divider with gradient */}
                                <div className="relative my-8">
                                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1">
                                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="relative">
                                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="relative h-14 w-14 rounded-full object-cover ring-2 ring-white"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900">
                                            {t.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {t.country}
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-blue-600">
                                            {t.stay}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <span key={i} className="text-amber-500">
                                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Country Flag Badge */}
                                <div className="absolute right-6 top-6">
                                    <div className="rounded-full bg-gradient-to-br from-white/80 to-white/60 p-2 backdrop-blur-sm">
                                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">
                                                {t.country.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-24 grid gap-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 p-8 backdrop-blur-xl sm:grid-cols-3">
                    <div className="text-center">
                        <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                            98<span className="text-cyan-300">%</span>
                        </div>
                        <p className="text-sm font-medium text-blue-100">
                            Satisfaction Rate
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                            2.5<span className="text-cyan-300">k+</span>
                        </div>
                        <p className="text-sm font-medium text-blue-100">
                            Travelers Served
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                            4.9<span className="text-cyan-300">/5</span>
                        </div>
                        <p className="text-sm font-medium text-blue-100">
                            Average Rating
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-white to-white/90 px-10 py-5 text-lg font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                        <span className="relative z-10">Read More Stories</span>
                        <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </button>
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-40 left-10 animate-float">
                <div className="h-3 w-3 rounded-full bg-cyan-400/30" />
            </div>
            <div className="absolute bottom-40 right-20 animate-float delay-1000">
                <div className="h-4 w-4 rounded-full bg-blue-400/20" />
            </div>
        </section>
    );
}
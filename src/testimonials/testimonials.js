export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Thompson",
            country: "United Kingdom",
            quote:
                "Travel Bhutan exceeded every expectation. The guides were incredibly knowledgeable, and every detail was handled with care.",
            avatar:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786",
            stay: "12-Day Cultural Journey",
            rating: 5,
        },
        {
            name: "Daniel Müller",
            country: "Germany",
            quote:
                "From monasteries to mountain passes, the experience felt deeply personal and profoundly authentic.",
            avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            stay: "Himalayan Trek Adventure",
            rating: 5,
        },
        {
            name: "Aiko Tanaka",
            country: "Japan",
            quote:
                "Every moment was calm, respectful, and beautifully paced. Bhutan felt sacred, not touristic.",
            avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            stay: "Spiritual Retreat",
            rating: 5,
        },
        {
            name: "Michael Carter",
            country: "United States",
            quote:
                "An extraordinary journey. Impeccable service, genuine warmth, and unforgettable landscapes.",
            avatar:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            stay: "Luxury Heritage Tour",
            rating: 5,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#070b14] py-32">
            {/* Aurora background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-24 max-w-3xl text-center">
                    <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-widest text-cyan-200 backdrop-blur">
                        VOICES FROM THE HIMALAYAS
                    </span>

                    <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                        Traveler Experiences
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        Reflections from guests who explored Bhutan through meaningful,
                        unhurried journeys.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                            style={{ animationDelay: `${i * 120}ms` }}
                        >
                            {/* Quote */}
                            <p className="text-base leading-relaxed text-slate-200">
                                “{t.quote}”
                            </p>

                            {/* Divider */}
                            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
                                />

                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-white">
                                        {t.name}
                                    </h4>
                                    <p className="text-xs text-slate-400">{t.country}</p>
                                    <p className="mt-1 text-xs font-medium text-cyan-300">
                                        {t.stay}
                                    </p>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-0.5">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className="h-4 w-4 fill-amber-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <button className="rounded-2xl bg-white px-10 py-5 text-base font-semibold text-slate-900 shadow-xl transition hover:scale-105">
                        Read More Stories →
                    </button>
                </div>
            </div>
        </section>
    );
}

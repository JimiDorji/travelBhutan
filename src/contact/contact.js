export default function Contact() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 py-28 text-white">

            {/* Background Glow (Hero-style) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-300" />
                        We're Here to Help
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Plan Your Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
                        Have questions about tours, itineraries, or custom travel plans?
                        Our dedicated team is ready to help you craft the perfect Bhutanese experience.
                    </p>
                </div>

                {/* Content */}
                <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

                    {/* Contact Form */}
                    <form className="relative rounded-3xl bg-white/10 p-10 shadow-2xl backdrop-blur-md transition-all hover:bg-white/15">

                        <div className="absolute -top-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300" />

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-semibold text-white">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="mt-2 w-full rounded-xl bg-white/90 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="mt-2 w-full rounded-xl bg-white/90 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-semibold text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-xl bg-white/90 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-semibold text-white">
                                Your Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Tell us about your travel dreams and preferences..."
                                className="mt-2 w-full rounded-xl bg-white/90 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-10 w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl"
                        >
                            Send Message ↗
                        </button>
                    </form>

                    {/* Map */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <iframe
                            title="Travel Bhutan Location"
                            src="https://www.google.com/maps?q=Olakha,Thimphu,Bhutan&output=embed"
                            className="h-[26rem] w-full border-0"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

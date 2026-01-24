"use client";

export default function About() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 text-white">

            {/* Background Glow (matches Hero) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto mb-20 max-w-3xl text-center animate-fade-in">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        About Travel Bhutan
                    </h2>
                    <p className="mt-4 text-blue-100">
                        Crafting authentic Himalayan journeys with heart, culture, and care.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Text Content */}
                    <div className="space-y-6 text-blue-100 leading-relaxed animate-fade-in">
                        <p>
                            Travel Bhutan is a locally rooted travel company dedicated to
                            creating meaningful and responsible journeys across the Kingdom of
                            Bhutan. From sacred monasteries to untouched mountain trails, we
                            connect travelers with the soul of the Himalayas.
                        </p>

                        <p>
                            Our team of experienced local guides ensures every journey is
                            culturally immersive, environmentally conscious, and deeply
                            personal. We believe travel should enrich both visitors and the
                            communities they encounter.
                        </p>

                        <p>
                            Whether you are seeking spiritual discovery, adventure, or cultural
                            exploration, Travel Bhutan is your trusted partner for an
                            unforgettable experience.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-6 sm:grid-cols-2 animate-fade-in">
                        {[
                            {
                                title: "Local Expertise",
                                text: "Guided by Bhutanese professionals with deep cultural knowledge.",
                            },
                            {
                                title: "Sustainable Travel",
                                text: "Responsible tourism that protects nature and traditions.",
                            },
                            {
                                title: "Custom Journeys",
                                text: "Tailor-made itineraries crafted around your interests.",
                            },
                            {
                                title: "Authentic Experiences",
                                text: "Genuine encounters beyond typical tourist paths.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl bg-white/10 backdrop-blur-md p-6 transition hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl"
                            >
                                <h3 className="text-lg font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-blue-100">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

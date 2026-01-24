export default function Tours() {
    const tours = [
        {
            title: "Bhutan Cultural Discovery",
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
            duration: "7 Days",
            price: "$2,800",
            tag: "Most Popular",
        },
        {
            title: "Festival & Heritage Tour",
            image: "https://images.unsplash.com/photo-1605559424843-9d8a3b41c0b4",
            duration: "10 Days",
            price: "$3,500",
            tag: "Limited Seats",
        },
        {
            title: "Himalayan Nature Escape",
            image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
            duration: "8 Days",
            price: "$3,200",
            tag: "Private Trip",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 py-28 text-white">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in">

                {/* Heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide animate-slide-down">
                        Curated Experiences
                    </p>
                    <h2 className="text-4xl font-bold sm:text-5xl animate-slide-up-fade">
                        Our Signature{" "}
                        <span className="text-blue-200">Tours</span>
                    </h2>
                    <p className="mt-4 text-lg text-blue-100 animate-slide-up-fade">
                        Handcrafted journeys designed to reveal Bhutan’s culture,
                        spirituality, and natural beauty.
                    </p>
                </div>

                {/* Tours Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {tours.map((tour, index) => (
                        <div
                            key={tour.title}
                            style={{ animationDelay: `${index * 120}ms` }}
                            className="group relative overflow-hidden rounded-3xl bg-white/10 p-3 backdrop-blur transition-all hover:-translate-y-2 hover:shadow-2xl animate-slide-up-fade"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="mt-4 rounded-2xl bg-black/40 p-5 backdrop-blur">
                                <div className="mb-2 flex items-center justify-between">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${tour.tag === "Most Popular"
                                            ? "bg-amber-500/90 animate-pulse"
                                            : "bg-blue-500/80"
                                            }`}
                                    >
                                        {tour.tag}
                                    </span>
                                    <span className="text-sm text-blue-100">
                                        {tour.duration}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold">
                                    {tour.title}
                                </h3>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold">
                                        {tour.price}
                                    </span>
                                    <button className="rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold transition-all hover:bg-white/30 hover:translate-x-1">
                                        Explore →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

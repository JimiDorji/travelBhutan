"use client";

import { useState, useMemo } from "react";
import { Star, Users, Calendar, ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
    { id: "all", label: "All Journeys" },
    { id: "cultural", label: "Cultural" },
    { id: "nature", label: "Nature" },
    { id: "luxury", label: "Luxury" },
    { id: "adventure", label: "Adventure" },
    { id: "spiritual", label: "Spiritual" },
    { id: "festival", label: "Festival" },
];

const TOURS = [
    {
        title: "Bhutan Cultural Discovery",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
        duration: "7 Days",
        rating: 4.9,
        travelers: "12 Guests",
        category: "cultural",
        tag: "Signature Journey",
        highlights: ["Tiger’s Nest", "Punakha Dzong", "Village Life"],
        description:
            "A refined introduction to Bhutan’s living heritage through monasteries, villages, and timeless traditions.",
    },
    {
        title: "Festival & Heritage Immersion",
        image: "https://images.unsplash.com/photo-1605559424843-9d8a3b41c0b4",
        duration: "10 Days",
        rating: 4.8,
        travelers: "8 Guests",
        category: "festival",
        tag: "Limited Access",
        highlights: ["Paro Tshechu", "Sacred Mask Dances", "Cultural Walks"],
        description:
            "Witness Bhutan’s most revered festivals with rare access and expert cultural interpretation.",
    },
    {
        title: "Himalayan Nature Escape",
        image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
        duration: "8 Days",
        rating: 4.7,
        travelers: "6 Guests",
        category: "nature",
        tag: "Nature Focused",
        highlights: ["Forest Trails", "Wildlife", "Hot Stone Baths"],
        description:
            "An unhurried journey through pristine valleys, forests, and highland landscapes.",
    },
    {
        title: "Sacred Monasteries Trail",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        duration: "6 Days",
        rating: 4.9,
        travelers: "10 Guests",
        category: "spiritual",
        tag: "Spiritual Path",
        highlights: ["Gangtey", "Chimi Lhakhang", "Meditation"],
        description:
            "A contemplative journey guided by Bhutanese monastic traditions and sacred sites.",
    },
    {
        title: "Luxury Bhutan Retreat",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        duration: "9 Days",
        rating: 5.0,
        travelers: "4 Guests",
        category: "luxury",
        tag: "Ultra Luxury",
        highlights: ["Private Lodges", "Helicopter Views", "Personal Hosts"],
        description:
            "An exclusive retreat combining Bhutan’s finest lodges with complete privacy and care.",
    },
    {
        title: "Himalayan Adventure Trek",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        duration: "14 Days",
        rating: 4.8,
        travelers: "8 Guests",
        category: "adventure",
        tag: "Expedition",
        highlights: ["High Passes", "Remote Camps", "Expert Guides"],
        description:
            "A demanding yet deeply rewarding expedition across Bhutan’s remote Himalayan terrain.",
    },
];

/* -------------------------------------------------------------------------- */
/*                               HELPER METHODS                               */
/* -------------------------------------------------------------------------- */

function getTagStyle(tag) {
    switch (tag) {
        case "Ultra Luxury":
            return "from-purple-500 to-pink-500";
        case "Limited Access":
            return "from-red-500 to-rose-500";
        case "Signature Journey":
            return "from-amber-400 to-orange-500";
        default:
            return "from-cyan-500 to-indigo-500";
    }
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function Tours() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredTours = useMemo(() => {
        return activeCategory === "all"
            ? TOURS
            : TOURS.filter((tour) => tour.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="tours" className="relative overflow-hidden bg-[#070b14] py-32">
            {/* Aurora Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <header className="mx-auto mb-24 max-w-3xl text-center">
                    <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-widest text-cyan-200 backdrop-blur">
                        CURATED JOURNEYS
                    </span>

                    <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                        Explore Bhutan
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        Thoughtfully designed journeys shaped by culture, nature,
                        spirituality, and time.
                    </p>
                </header>

                {/* Filters */}
                <div className="mb-16 flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setActiveCategory(id)}
                            className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${activeCategory === id
                                ? "bg-white text-slate-900 shadow-lg"
                                : "bg-white/5 text-slate-300 hover:bg-white/10"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Tours Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredTours.map((tour) => (
                        <article
                            key={tour.title}
                            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden rounded-t-3xl">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                {/* Tag */}
                                <span
                                    className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${getTagStyle(
                                        tour.tag
                                    )} px-4 py-1.5 text-xs font-semibold text-white`}
                                >
                                    {tour.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="mb-3 text-xl font-semibold text-white">
                                    {tour.title}
                                </h3>

                                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                                    {tour.description}
                                </p>

                                {/* Meta */}
                                <div className="mb-6 flex items-center gap-6 text-xs text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {tour.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        {tour.travelers}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        {tour.rating}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                                    View Journey
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

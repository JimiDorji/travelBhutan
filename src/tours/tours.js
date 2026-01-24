"use client";

import { useState } from "react";
import { Star, Users, Calendar, ChevronRight } from "lucide-react";

export default function Tours() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [isHovered, setIsHovered] = useState(null);

    const tours = [
        {
            title: "Bhutan Cultural Discovery",
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
            duration: "7 Days",
            price: "$2,800",
            rating: 4.9,
            travelers: "12 max",
            category: "cultural",
            tag: "Most Popular",
            highlights: ["Tigers Nest Monastery", "Punakha Dzong", "Traditional Farm Stay"],
            description: "Immerse yourself in Bhutan's rich cultural heritage with exclusive monastery visits and authentic local experiences."
        },
        {
            title: "Festival & Heritage Tour",
            image: "https://images.unsplash.com/photo-1605559424843-9d8a3b41c0b4",
            duration: "10 Days",
            price: "$3,500",
            rating: 4.8,
            travelers: "8 max",
            category: "festival",
            tag: "Limited Seats",
            highlights: ["Paro Tshechu", "Mask Dance Performances", "Heritage Walks"],
            description: "Experience Bhutan's vibrant festivals with front-row access and cultural insights from local experts."
        },
        {
            title: "Himalayan Nature Escape",
            image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
            duration: "8 Days",
            price: "$3,200",
            rating: 4.7,
            travelers: "6 max",
            category: "nature",
            tag: "Private Trip",
            highlights: ["Rhododendron Trek", "Wildlife Safari", "Hot Stone Bath"],
            description: "Connect with Bhutan's pristine natural landscapes through guided treks and eco-conscious accommodations."
        },
        {
            title: "Sacred Monasteries Trail",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            duration: "6 Days",
            price: "$2,400",
            rating: 4.9,
            travelers: "10 max",
            category: "spiritual",
            tag: "Spiritual",
            highlights: ["Gangtey Monastery", "Chimi Lhakhang", "Meditation Sessions"],
            description: "A spiritual journey through Bhutan's most sacred monasteries with monastic guidance."
        },
        {
            title: "Luxury Bhutan Retreat",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            duration: "9 Days",
            price: "$5,500",
            rating: 5.0,
            travelers: "4 max",
            category: "luxury",
            tag: "Premium",
            highlights: ["5-Star Resorts", "Private Helicopter", "Butler Service"],
            description: "Ultimate luxury experience with exclusive access and premium amenities throughout Bhutan."
        },
        {
            title: "Himalayan Adventure Trek",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            duration: "14 Days",
            price: "$4,800",
            rating: 4.8,
            travelers: "8 max",
            category: "adventure",
            tag: "Challenging",
            highlights: ["Snowman Trek", "High Altitude Passes", "Camping"],
            description: "For seasoned adventurers seeking the ultimate Himalayan trekking challenge."
        },
    ];

    const categories = [
        { id: "all", label: "All Tours" },
        { id: "cultural", label: "Cultural" },
        { id: "nature", label: "Nature" },
        { id: "luxury", label: "Luxury" },
        { id: "adventure", label: "Adventure" },
        { id: "spiritual", label: "Spiritual" },
        { id: "festival", label: "Festival" },
    ];

    const filteredTours = activeFilter === "all"
        ? tours
        : tours.filter(tour => tour.category === activeFilter);

    // Inline SVG as JSX component for the pattern
    const PatternSVG = () => (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="diamond-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M30 0L60 30L30 60L0 30Z" fill="#f1f5f9" fillOpacity="0.1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
    );

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-gradient-to-r from-blue-100/60 to-cyan-100/40 blur-3xl" />
                <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-100/40 to-purple-100/30 blur-3xl" />

                {/* Diamond Pattern */}
                <PatternSVG />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Enhanced Header */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                        <span className="text-sm font-semibold text-blue-700">
                            IMMERSIVE EXPERIENCES
                        </span>
                    </div>

                    <h2 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                        Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Himalayan</span> Journeys
                    </h2>

                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                        Each tour is carefully designed to reveal Bhutan's authentic beauty—from sacred
                        monasteries perched on cliffs to vibrant festivals and serene Himalayan landscapes.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`group relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${activeFilter === category.id
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                                : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                                }`}
                        >
                            <span className="relative z-10">{category.label}</span>
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100 ${activeFilter === category.id ? "opacity-100" : ""
                                }`} />
                        </button>
                    ))}
                </div>

                {/* Tours Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredTours.map((tour, index) => (
                        <div
                            key={tour.title}
                            className="group relative"
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-indigo-500/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Main Card */}
                            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Tag Badge */}
                                    <div className="absolute left-4 top-4">
                                        <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-lg ${tour.tag === "Most Popular"
                                            ? "bg-gradient-to-r from-amber-500 to-orange-500"
                                            : tour.tag === "Premium"
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                                : tour.tag === "Limited Seats"
                                                    ? "bg-gradient-to-r from-red-500 to-rose-500"
                                                    : "bg-gradient-to-r from-blue-500 to-cyan-500"
                                            }`}>
                                            {tour.tag}
                                        </span>
                                    </div>

                                    {/* Quick Info Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-current text-amber-400" />
                                                <span className="text-sm font-semibold">{tour.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4" />
                                                <span className="text-sm">{tour.travelers}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span className="text-sm font-semibold">{tour.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        {tour.title}
                                    </h3>

                                    <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                                        {tour.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {tour.highlights.map((highlight, idx) => (
                                            <span
                                                key={idx}
                                                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div>
                                            <p className="text-sm text-gray-500">Starting from</p>
                                            <p className="text-2xl font-bold text-gray-900">{tour.price}</p>
                                            <p className="text-xs text-gray-500">per person</p>
                                        </div>

                                        <button className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Explore Tour
                                                <ChevronRight className="h-4 w-4 transform transition-transform group-hover/btn:translate-x-1" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Details Panel */}
                                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-b from-white/95 to-white p-6 transform transition-transform duration-500 ${isHovered === index ? "translate-y-0" : "translate-y-full"
                                    }`}>
                                    <h4 className="mb-3 font-semibold text-gray-900">Tour Includes:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="h-2 w-2 rounded-full bg-green-500" />
                                            Professional English-speaking guide
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="h-2 w-2 rounded-full bg-green-500" />
                                            4-star accommodations
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="h-2 w-2 rounded-full bg-green-500" />
                                            All meals included
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="h-2 w-2 rounded-full bg-green-500" />
                                            Private transportation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-block rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-1">
                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Can't Find Your Perfect Tour?
                            </h3>
                            <p className="mb-6 text-gray-600">
                                Contact our travel specialists to create a custom itinerary tailored to your interests.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                                    Customize Your Journey
                                </button>
                                <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-700 shadow-lg transition-all hover:bg-gray-50">
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
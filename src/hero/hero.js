"use client";

import { useState } from "react";
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 text-white">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl">

                    {/* Eyebrow */}
                    <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide">
                        Discover the Last Himalayan Kingdom
                    </p>

                    {/* Headline */}
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        Explore the Beauty of{" "}
                        <span className="text-blue-200">Bhutan</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-base text-blue-100 sm:text-lg">
                        Experience untouched landscapes, ancient monasteries, and rich
                        cultural traditions. Travel Bhutan brings you authentic journeys
                        into the heart of the Himalayas.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:scale-105 hover:bg-blue-100"
                        >
                            View Tours
                        </a>

                        <a
                            href="#"
                            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

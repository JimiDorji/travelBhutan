"use client";

import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-blue-600/90 backdrop-blur text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Brand */}
                    <h1 className="text-lg font-semibold tracking-wide sm:text-xl">
                        Travel Bhutan
                    </h1>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {["Home", "Tours", "About", "Contact"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`h-0.5 w-6 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col gap-4 py-4 text-sm font-medium">
                        {["Home", "Tours", "About", "Contact"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-blue-200 transition"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

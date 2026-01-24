"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, Phone } from "lucide-react";
import Image from "next/image";
import logo from "../assets/img/logo.png";


const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Tours", href: "#tours" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Gallery", href: "#gallery" },
    { label: "Blog", href: "#blog" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 20);

        for (const item of NAV_ITEMS) {
            const id = item.href.slice(1);
            const el = document.getElementById(id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
                setActiveSection(id);
                break;
            }
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const linkBase =
        "relative px-1 py-2 text-sm font-medium transition-colors";

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-900/10"
                : "bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-md"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="group flex items-center gap-3">
                        <div className="group relative h-10 w-10 rounded-lg shadow-md backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            <Image
                                src={logo}
                                alt="TravelBhutan Logo"
                                fill
                                className="object-contain p-1.5 transition-transform duration-200 group-hover:scale-105"
                                priority
                            />
                        </div>


                        <div>
                            <h1
                                className={`text-xl font-bold transition-colors ${isScrolled ? "text-slate-900" : "text-white"
                                    }`}
                            >
                                Travel Bhutan
                            </h1>
                            <p
                                className={`text-xs font-medium ${isScrolled ? "text-slate-600" : "text-blue-100"
                                    }`}
                            >
                                Himalayan Journeys
                            </p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map(({ label, href }) => {
                            const id = href.slice(1);
                            const active = activeSection === id;

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    className={`${linkBase} ${isScrolled
                                        ? "text-slate-700 hover:text-blue-600"
                                        : "text-white/90 hover:text-white"
                                        } ${active ? "font-semibold" : ""}`}
                                >
                                    {label}
                                    {active && (
                                        <span
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isScrolled
                                                ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                                                : "bg-white"
                                                }`}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button
                            aria-label="Search"
                            className={`rounded-xl p-2 transition ${isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
                                }`}
                        >
                            <Search
                                className={`h-5 w-5 ${isScrolled ? "text-slate-600" : "text-white"
                                    }`}
                            />
                        </button>

                        <div
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 ${isScrolled ? "bg-blue-50" : "bg-white/10"
                                }`}
                        >
                            <Phone
                                className={`h-4 w-4 ${isScrolled ? "text-blue-600" : "text-white"
                                    }`}
                            />
                            <span
                                className={`text-sm font-medium ${isScrolled ? "text-blue-700" : "text-white"
                                    }`}
                            >
                                +975 17 123 456
                            </span>
                        </div>

                        <button className="relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
                            Book Now →
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setIsOpen((v) => !v)}
                        className="lg:hidden rounded-xl p-3"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`h-0.5 w-6 transition ${isOpen ? "rotate-45 translate-y-1.5" : ""
                                    } ${isScrolled ? "bg-slate-700" : "bg-white"}`}
                            />
                            <span
                                className={`h-0.5 w-6 transition ${isOpen ? "opacity-0" : ""
                                    } ${isScrolled ? "bg-slate-700" : "bg-white"}`}
                            />
                            <span
                                className={`h-0.5 w-6 transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                                    } ${isScrolled ? "bg-slate-700" : "bg-white"}`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <nav className="space-y-1 py-6">
                        {NAV_ITEMS.map(({ label, href }) => {
                            const id = href.slice(1);
                            const active = activeSection === id;

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${isScrolled
                                        ? "text-slate-700 hover:bg-slate-50"
                                        : "text-white hover:bg-white/10"
                                        } ${active
                                            ? isScrolled
                                                ? "bg-blue-50 text-blue-600"
                                                : "bg-white/20"
                                            : ""
                                        }`}
                                >
                                    {label}
                                    {active && (
                                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                                    )}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}

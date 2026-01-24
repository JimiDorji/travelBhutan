"use client";

import { useState, useEffect } from "react";
import { Search, User, Phone } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Tours", href: "#tours" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Gallery", href: "#gallery" },
        { label: "Blog", href: "#blog" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10" : "bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-md"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Brand Logo */}
                    <a href="#home" className="group flex items-center gap-3">
                        <div className="relative">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg" />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                            <h1 className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}>
                                Travel Bhutan
                            </h1>
                            <p className={`text-xs font-medium transition-colors ${isScrolled ? "text-slate-600" : "text-blue-100"}`}>
                                Himalayan Journeys
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`relative px-1 py-2 text-sm font-medium transition-colors ${isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"}
                                    ${activeSection === item.href.substring(1) ? "font-semibold" : ""}`}
                                onClick={() => setActiveSection(item.href.substring(1))}
                            >
                                {item.label}
                                {activeSection === item.href.substring(1) && (
                                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isScrolled ? "bg-gradient-to-r from-blue-600 to-cyan-500" : "bg-white"}`} />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Search */}
                        <button className={`p-2 rounded-xl transition-all ${isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"}`}>
                            <Search className={`h-5 w-5 ${isScrolled ? "text-slate-600" : "text-white"}`} />
                        </button>

                        {/* Phone */}
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${isScrolled ? "bg-blue-50" : "bg-white/10"}`}>
                            <Phone className={`h-4 w-4 ${isScrolled ? "text-blue-600" : "text-white"}`} />
                            <span className={`text-sm font-medium ${isScrolled ? "text-blue-700" : "text-white"}`}>
                                +975 17 123 456
                            </span>
                        </div>

                        {/* CTA Button */}
                        <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                            <span className="relative z-10 flex items-center gap-2">
                                Book Now
                                <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:animate-shimmer" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl transition-all hover:scale-105"
                        aria-label="Toggle menu"
                    >
                        <span className={`h-0.5 w-6 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""} ${isScrolled ? "bg-slate-700" : "bg-white"}`} />
                        <span className={`h-0.5 w-6 transition-all ${isOpen ? "opacity-0" : ""} ${isScrolled ? "bg-slate-700" : "bg-white"}`} />
                        <span className={`h-0.5 w-6 transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""} ${isScrolled ? "bg-slate-700" : "bg-white"}`} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className={`py-6 border-t ${isScrolled ? "border-slate-200" : "border-white/20"}`}>
                        {/* Mobile Navigation */}
                        <nav className="space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${isScrolled ? "text-slate-700 hover:bg-slate-50" : "text-white hover:bg-white/10"} ${activeSection === item.href.substring(1) ? (isScrolled ? "bg-blue-50 text-blue-600" : "bg-white/20") : ""}`}
                                    onClick={() => {
                                        setActiveSection(item.href.substring(1));
                                        setIsOpen(false);
                                    }}
                                >
                                    {item.label}
                                    {activeSection === item.href.substring(1) && (
                                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                                    )}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Actions */}
                        <div className="mt-8 grid gap-3">
                            <button className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium ${isScrolled ? "bg-slate-100 text-slate-700" : "bg-white/10 text-white"}`}>
                                <Phone className="h-4 w-4" />
                                Call: +975 17 123 456
                            </button>
                            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105">
                                Start Your Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Emergency Banner */}
            <div className={`absolute top-full left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4 transform transition-transform duration-300 ${isScrolled ? "-translate-y-full" : "translate-y-0"}`}>
                <div className="mx-auto max-w-7xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Phone className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Emergency Travel Support</p>
                            <p className="text-xs opacity-90">24/7 Assistance</p>
                        </div>
                    </div>
                    <a href="tel:+97577123456" className="text-sm font-medium hover:underline">
                        +975 77 123 456
                    </a>
                </div>
            </div>
        </header>
    );
}
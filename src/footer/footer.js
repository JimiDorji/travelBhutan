export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Mesh */}
                <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/5 blur-3xl" />
                <div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-500/5 blur-3xl" />

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                {/* Main Content Grid */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Column - Brand & Description */}
                    <div className="space-y-8">
                        {/* Logo/Brand */}
                        <div className="inline-flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Travel Bhutan
                                </h2>
                                <p className="mt-1 text-sm font-medium text-blue-300">
                                    The Last Himalayan Kingdom
                                </p>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <p className="max-w-md text-lg leading-relaxed text-blue-100/90">
                            We craft authentic journeys through Bhutan's sacred landscapes,
                            connecting travelers with profound cultural experiences and
                            sustainable adventures.
                        </p>

                        {/* Newsletter Subscription */}
                        <div className="max-w-md">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                                Join Our Journey
                            </h3>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 rounded-xl border border-blue-700/50 bg-blue-900/30 px-4 py-3 text-white placeholder-blue-400/60 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-3 text-xs text-blue-300/70">
                                Receive seasonal insights and exclusive tour updates.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Links Grid */}
                    <div className="grid gap-8 sm:grid-cols-3">
                        {/* Company */}
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {['About Us', 'Our Story', 'Team', 'Careers', 'Press'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="group flex items-center gap-2 text-sm text-blue-100 transition-colors hover:text-white"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-blue-500/0 transition-all group-hover:bg-blue-400" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Experiences */}
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
                                Experiences
                            </h3>
                            <ul className="space-y-3">
                                {['Cultural Tours', 'Trekking', 'Festivals', 'Wellness', 'Custom Journeys'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="group flex items-center gap-2 text-sm text-blue-100 transition-colors hover:text-white"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-blue-500/0 transition-all group-hover:bg-blue-400" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
                                Support
                            </h3>
                            <ul className="space-y-3">
                                {['Contact Us', 'FAQ', 'Booking Guide', 'Privacy Policy', 'Terms'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="group flex items-center gap-2 text-sm text-blue-100 transition-colors hover:text-white"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-blue-500/0 transition-all group-hover:bg-blue-400" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 p-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-blue-300/80">
                            © {currentYear} Travel Bhutan. All rights reserved.
                        </p>
                        <p className="mt-1 text-xs text-blue-400/60">
                            Registered with Bhutan Tourism Council • GST: BT-2024-001
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {[
                            { name: 'Instagram', icon: '📷' },
                            { name: 'Facebook', icon: '📘' },
                            { name: 'YouTube', icon: '▶️' },
                            { name: 'LinkedIn', icon: '💼' },
                            { name: 'Twitter', icon: '🐦' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="group relative rounded-xl bg-blue-900/30 p-3 backdrop-blur-sm transition-all hover:scale-110 hover:bg-blue-800/40"
                                aria-label={social.name}
                            >
                                <span className="text-lg">{social.icon}</span>
                                <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-blue-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:block">
                                    {social.name}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg border border-blue-700/30 bg-blue-900/20 px-3 py-2">
                            <span className="text-xs font-medium text-blue-300">🌱 Sustainable</span>
                        </div>
                        <div className="rounded-lg border border-blue-700/30 bg-blue-900/20 px-3 py-2">
                            <span className="text-xs font-medium text-blue-300">✅ Certified</span>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-12 grid gap-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-6 backdrop-blur-sm sm:grid-cols-3">
                    <div className="text-center">
                        <div className="mb-2 text-sm font-medium text-blue-300">Email</div>
                        <a href="mailto:info@travelbhutan.com" className="text-white hover:text-cyan-300 transition-colors">
                            info@travelbhutan.com
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="mb-2 text-sm font-medium text-blue-300">Phone</div>
                        <a href="tel:+97517123456" className="text-white hover:text-cyan-300 transition-colors">
                            +975 17 123 456
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="mb-2 text-sm font-medium text-blue-300">Office</div>
                        <div className="text-white">
                            Thimphu, Bhutan
                        </div>
                    </div>
                </div>

                {/* Additional Legal */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-blue-400/60">
                        Travel Bhutan is a registered tour operator under the Royal Government of Bhutan's
                        Department of Tourism. All tours comply with the kingdom's sustainable tourism policies.
                    </p>
                </div>
            </div>
        </footer>
    );
}
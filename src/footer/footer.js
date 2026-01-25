export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-slate-950 text-slate-300">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                {/* Top grid */}
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">
                                Travel Bhutan
                            </h2>
                            <p className="mt-1 text-sm text-indigo-300">
                                Curated journeys through the Himalayan Kingdom
                            </p>
                        </div>

                        <p className="max-w-md leading-relaxed text-slate-300">
                            We design responsible and immersive travel experiences in Bhutan,
                            combining cultural depth, natural beauty, and sustainable tourism
                            practices approved by the Royal Government of Bhutan.
                        </p>

                        {/* Newsletter */}
                        <div className="max-w-md">
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Subscribe to updates
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                />
                                <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-slate-400">
                                Occasional insights. No spam.
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid gap-10 sm:grid-cols-3">
                        {[
                            {
                                title: 'Company',
                                links: ['About', 'Our Story', 'Team', 'Careers', 'Press'],
                            },
                            {
                                title: 'Experiences',
                                links: ['Cultural Tours', 'Trekking', 'Festivals', 'Wellness', 'Custom Travel'],
                            },
                            {
                                title: 'Support',
                                links: ['Contact', 'FAQ', 'Booking Guide', 'Privacy Policy', 'Terms'],
                            },
                        ].map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-200">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    {section.links.map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                                className="transition hover:text-white"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="my-14 h-px bg-slate-800" />

                {/* Bottom */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Legal */}
                    <div className="text-sm">
                        <p>
                            © {currentYear} Travel Bhutan. All rights reserved.
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                            Licensed tour operator • Department of Tourism, Bhutan
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'Twitter'].map(
                            (name) => (
                                <a
                                    key={name}
                                    href="#"
                                    aria-label={name}
                                    className="rounded-lg border border-slate-700 px-3 py-2 text-xs transition hover:border-indigo-500 hover:text-white"
                                >
                                    {name}
                                </a>
                            )
                        )}
                    </div>

                    {/* Trust */}
                    <div className="flex gap-3">
                        <span className="rounded-md border border-slate-700 px-3 py-1.5 text-xs">
                            Sustainable Tourism
                        </span>
                        <span className="rounded-md border border-slate-700 px-3 py-1.5 text-xs">
                            Government Certified
                        </span>
                    </div>
                </div>

                {/* Contact */}
                <div className="mt-12 grid gap-6 rounded-xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-3 text-sm">
                    <div className="text-center">
                        <div className="mb-1 font-medium text-slate-400">Email</div>
                        <a
                            href="mailto:info@travelbhutan.com"
                            className="text-white hover:text-indigo-300"
                        >
                            jigmed774@gmail.com
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="mb-1 font-medium text-slate-400">Phone</div>
                        <a
                            href="tel:+97517123456"
                            className="text-white hover:text-indigo-300"
                        >
                            +975 77652012
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="mb-1 font-medium text-slate-400">Office</div>
                        <span className="text-white">Thimphu, Bhutan</span>
                    </div>
                </div>

                {/* Compliance */}
                <p className="mt-8 text-center text-xs text-slate-500">
                    All travel operations comply with Bhutan’s Sustainable Tourism Policy
                    and cultural preservation standards.
                </p>
            </div>
        </footer>
    )
}

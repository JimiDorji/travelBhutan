export default function Footer() {
    return (
        <footer className="bg-blue-800 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <h2 className="text-lg font-semibold tracking-wide">
                            Travel Bhutan
                        </h2>
                        <p className="mt-4 text-sm text-blue-200">
                            Discover authentic journeys through Bhutan’s breathtaking
                            landscapes, culture, and traditions. Travel with purpose.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12">
                        <div>
                            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
                                Company
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Tours
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300">
                                Support
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-blue-700" />

                {/* Bottom Section */}
                <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
                    <p className="text-blue-200">
                        © {new Date().getFullYear()} Travel Bhutan. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Instagram
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Twitter
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

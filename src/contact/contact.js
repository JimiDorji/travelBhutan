'use client';

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        // Or for specific format: return date.toISOString().split('T')[0];
    };


    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        try {
            // Create form data manually to control values
            const formData = new FormData(formRef.current);
            const data = {
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                start_date: formatDate(formData.get('start_date')),
                end_date: formatDate(formData.get('end_date')),
                message: formData.get('message'),
                time: new Date().toLocaleString(),
                name: `${formData.get('first_name')} ${formData.get('last_name')}`
            };

            console.log('Sending data:', data);

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )

            setStatus('success')
            formRef.current.reset()
        } catch (error) {
            console.error('EmailJS error:', error)
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-32">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-500/10 to-transparent blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <h2 className="mb-6 bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-5xl font-bold text-transparent">
                        Start Your Journey
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-blue-100/80">
                        Connect with our Bhutan travel specialists for bespoke itineraries.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* FORM */}
                    <div className="relative">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="relative rounded-3xl bg-gradient-to-b from-white/95 to-white/90 p-10 shadow-2xl backdrop-blur-md"
                        >
                            <div className="mb-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Send Inquiry
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Typically respond within 4 business hours
                                </p>
                            </div>

                            {/* Names */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <input
                                    type="text"
                                    name="first_name"
                                    required
                                    placeholder="First Name *"
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    required
                                    placeholder="Last Name *"
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                            </div>

                            {/* Email */}
                            <div className="mt-6">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email Address *"
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                            </div>

                            {/* Phone */}
                            <div className="mt-6">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                            </div>

                            {/* Dates */}
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <input
                                    type="date"
                                    name="start_date"
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                                <input
                                    type="date"
                                    name="end_date"
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                            </div>

                            {/* Message */}
                            <div className="mt-6">
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    placeholder="Your message..."
                                    className="w-full rounded-xl border px-4 py-3.5"
                                />
                            </div>
                            {/* time */}
                            <input
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString()}
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 text-white font-semibold"
                            >
                                {loading ? 'Sending…' : 'Send Inquiry'}
                            </button>

                            {/* Status */}
                            {status === 'success' && (
                                <p className="mt-4 text-center text-sm text-green-600">
                                    ✅ Inquiry sent successfully.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 text-center text-sm text-red-600">
                                    ❌ Failed to send. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Information & Map */}
                    <div className="space-y-8">
                        {/* Interactive Map */}
                        <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative z-10 overflow-hidden rounded-3xl">
                                <div className="absolute top-6 left-6 z-20 rounded-xl bg-white/90 px-4 py-2 backdrop-blur-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                                        <span className="text-sm font-semibold text-gray-900">Our Headquarters</span>
                                    </div>
                                </div>
                                <iframe
                                    title="Travel Bhutan Headquarters"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113481.5291374787!2d89.60089467499865!3d27.471197800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1941926a060cd%3A0x5f9c0b4e9a4a5b6c!2sThimphu%2C%20Bhutan!5e0!3m2!1sen!2s!4v1647782345678!5m2!1sen!2s"
                                    className="h-80 w-full border-0 transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Contact Details Card */}
                        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl">
                            <h3 className="mb-6 text-xl font-bold text-white">
                                Contact Details
                            </h3>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-white/10 p-3">
                                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-blue-100">Address</p>
                                        <p className="mt-1 text-white">
                                            Olakha, Thimphu<br />
                                            Kingdom of Bhutan
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-white/10 p-3">
                                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-blue-100">Email</p>
                                        <a href="mailto:jigmed774@gmail.com" className="mt-1 text-white hover:text-cyan-200 transition-colors">
                                            jigmed774@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-white/10 p-3">
                                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-blue-100">Phone</p>
                                        <a href="tel:+97577652012" className="mt-1 text-white hover:text-cyan-200 transition-colors">
                                            +975 77652012
                                        </a>
                                        <p className="mt-1 text-xs text-blue-200">Mon-Sun, 9AM-5PM BST</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-white/10 p-3">
                                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-blue-100">Office Hours</p>
                                        <p className="mt-1 text-white">
                                            9:00 AM - 5:00 PM (BST)<br />
                                            <span className="text-xs text-blue-200">7 days a week</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="mt-8 rounded-xl bg-white/10 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Emergency Contact</p>
                                        <p className="text-xs text-blue-200">+975 77 123 456 (24/7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
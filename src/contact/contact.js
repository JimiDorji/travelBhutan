'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        try {
            const formData = new FormData(formRef.current)

            const data = {
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                start_date: formatDate(formData.get('start_date')),
                end_date: formatDate(formData.get('end_date')),
                message: formData.get('message'),
                time: new Date().toLocaleString(),
                name: `${formData.get('first_name')} ${formData.get('last_name')}`,
            }

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
        <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-32">
            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <h2 className="text-5xl font-bold text-white">
                        Plan Your Bhutan Journey
                    </h2>
                    <p className="mt-6 text-lg text-slate-300">
                        Speak directly with our destination specialists.
                    </p>
                </div>

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* FORM */}
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="rounded-3xl bg-white p-10 shadow-2xl"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Inquiry Form
                        </h3>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <input
                                name="first_name"
                                required
                                placeholder="First name"
                                className="w-full rounded-xl border px-4 py-3"
                            />
                            <input
                                name="last_name"
                                required
                                placeholder="Last name"
                                className="w-full rounded-xl border px-4 py-3"
                            />
                        </div>

                        <div className="mt-6">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email address"
                                className="w-full rounded-xl border px-4 py-3"
                            />
                        </div>

                        <div className="mt-6">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                className="w-full rounded-xl border px-4 py-3"
                            />
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <input type="date" name="start_date" className="w-full rounded-xl border px-4 py-3" />
                            <input type="date" name="end_date" className="w-full rounded-xl border px-4 py-3" />
                        </div>

                        <div className="mt-6">
                            <textarea
                                rows={4}
                                name="message"
                                required
                                placeholder="Tell us about your travel plans"
                                className="w-full rounded-xl border px-4 py-3"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full rounded-xl bg-indigo-600 py-4 text-white font-semibold disabled:opacity-60"
                        >
                            {loading ? 'Sending…' : 'Submit Inquiry'}
                        </button>

                        {status === 'success' && (
                            <p className="mt-4 text-center text-sm text-green-600">
                                Inquiry sent successfully.
                            </p>
                        )}

                        {status === 'error' && (
                            <p className="mt-4 text-center text-sm text-red-600">
                                Failed to send. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

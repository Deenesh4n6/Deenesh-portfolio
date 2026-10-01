import { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { siteConfig } from '../data/config.js'

const contactCards = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: siteConfig.linkedin },
  { icon: Github, label: 'GitHub', value: 'View my repositories', href: siteConfig.github },
]

// ─────────────────────────────────────────────────────────────
// This function is intentionally separated from the UI so it can be
// wired up later to a real email service (Formspree, EmailJS, etc.)
// or a backend API, without touching the form markup.
// ─────────────────────────────────────────────────────────────
async function submitContactForm(formData) {
  if (!siteConfig.formEndpoint) {
    // No backend/email service is configured yet.
    // TODO: set `formEndpoint` in src/data/config.js, then replace this
    // block with a real fetch() call to that endpoint.
    console.log('Contact form submitted (no endpoint configured yet):', formData)
    return { ok: true }
  }

  const res = await fetch(siteConfig.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  return { ok: res.ok }
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await submitContactForm(form)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('idle')
      setErrors({ form: 'Something went wrong. Please try again or email me directly.' })
    }
  }

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-base-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Let's Connect"
          subtitle="I'm open to networking, cybersecurity, technology projects, internships, collaborations, and professional opportunities."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-border transition-shadow"
              >
                <span className="w-11 h-11 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-ink-500">{label}</p>
                  <p className="text-ink-100 font-medium truncate">{value}</p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="glass-card glow-border rounded-2xl p-8 space-y-5">
              {status === 'sent' ? (
                <div className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-accent-green mb-4" />
                  <p className="text-ink-100 font-semibold">Message sent</p>
                  <p className="text-ink-300 text-sm mt-1">Thanks for reaching out — I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-300 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-ink-100 placeholder:text-ink-500 focus:border-accent-cyan/50 outline-none"
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-red-400 mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-300 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-ink-100 placeholder:text-ink-500 focus:border-accent-cyan/50 outline-none"
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-400 mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-ink-100 placeholder:text-ink-500 focus:border-accent-cyan/50 outline-none resize-none"
                      placeholder="What would you like to talk about?"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-400 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.form && <p className="text-sm text-red-400">{errors.form}</p>}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-base-900 font-semibold px-6 py-3 hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

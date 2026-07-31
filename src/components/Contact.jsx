import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from './Products.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    // In production, POST this to your backend / form service here.
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="section-pad max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's talk about your walls"
        subtitle="Visit the store, call us, or send a message — we'll help you pick the right shade and finish."
      />

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        {/* Info */}
        <div className="lg:col-span-2 space-y-5">
          <InfoCard icon={Phone} title="Call Us" lines={['+91 788 954 6427', 'Mon–Sat, 9am – 8pm']} />
          <InfoCard icon={MapPin} title="Visit Our Store" lines={['HR Enterprises, Udhampur', 'birmapul near toyota showroom, 182101']} />
          <InfoCard icon={Mail} title="Email" lines={['HRenterprises@gmail.com']} />
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-2xl glass p-7 sm:p-8 shadow-card"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="block text-xs text-muted mb-1.5">Your name</span>
              <input
                required
                value={form.name}
                onChange={update('name')}
                placeholder="enter your name"
                className="w-full bg-charcoal-lighter border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-cream focus:outline-none focus:border-opus-orange"
              />
            </label>
            <label className="block">
              <span className="block text-xs text-muted mb-1.5">Phone number</span>
              <input
                required
                value={form.phone}
                onChange={update('phone')}
                placeholder="enter your phone number"
                className="w-full bg-charcoal-lighter border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-cream focus:outline-none focus:border-opus-orange"
              />
            </label>
          </div>

          <label className="block mt-5">
            <span className="block text-xs text-muted mb-1.5">What do you need?</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell us about your space, preferred shade, or quantity needed..."
              className="w-full bg-charcoal-lighter border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-cream focus:outline-none focus:border-opus-orange resize-none"
            />
          </label>

          <button type="submit" className="btn-primary mt-6 !py-3 !px-7 text-sm w-full sm:w-auto justify-center">
            {sent ? <CheckCircle2 size={18} /> : <Send size={16} />}
            {sent ? 'Message sent' : 'Send Message'}
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-sm text-emerald-400"
            >
              Thanks — we'll get back to you within a business day.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function InfoCard({ icon: Icon, title, lines }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl glass p-6 shadow-card flex items-start gap-4"
    >
      <div className="w-11 h-11 rounded-xl bg-opus-gradient text-charcoal grid place-items-center shrink-0">
        <Icon size={19} />
      </div>
      <div>
        <p className="font-display font-semibold">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted mt-0.5">{l}</p>
        ))}
      </div>
    </motion.div>
  )
}

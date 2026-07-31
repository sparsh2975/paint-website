import { motion } from 'framer-motion'
import { ShieldCheck, Wand2, CloudRain, Leaf } from 'lucide-react'
import { SectionHeading } from './Products.jsx'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'High Durability',
    desc: 'Engineered to resist chipping, cracking and fading for years of wear, even in high-traffic spaces.',
  },
  {
    icon: Wand2,
    title: 'Smooth Finish',
    desc: 'A refined, brush-mark-free surface with the kind of depth and richness that catches natural light.',
  },
  {
    icon: CloudRain,
    title: 'Weather Resistant',
    desc: 'Built for Indian climates — from monsoon humidity to peak summer heat, without losing its color.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Low-VOC formulations that are safer for your family and gentler on the environment.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-pad max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Why HR Enterprises"
        title="Quality you can feel on the wall"
        subtitle="Every can we sell carries the Birla Opus promise — and our word behind it."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl glass p-7 shadow-card transition-shadow duration-300 hover:shadow-glow"
          >
            <div className="w-12 h-12 rounded-xl bg-opus-gradient text-charcoal grid place-items-center mb-5">
              <f.icon size={22} strokeWidth={2.2} />
            </div>
            <h3 className="font-display font-semibold text-lg">{f.title}</h3>
            <p className="mt-2.5 text-sm text-muted leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

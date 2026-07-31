import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// The signature visual: a wall of tilted paint-chip swatches, like the ones
// you'd pick up off a rack in-store. Each carries a real shade name.
const SWATCHES = [
  { name: 'Sunrise Amber', hex: '#FFB343', tilt: -6 },
  { name: 'Terracotta Bloom', hex: '#C2410C', tilt: 4 },
  { name: 'Midnight Sage', hex: '#4B5D4A', tilt: -3 },
  { name: 'Stone Grey', hex: '#8A8580', tilt: 7 },
  { name: 'Ivory Cloud', hex: '#F5EFE6', tilt: -8 },
  { name: 'Deep Teal', hex: '#1F5C5C', tilt: 5 },
  { name: 'Rust Ember', hex: '#B84A1E', tilt: -4 },
  { name: 'Clay Dust', hex: '#B08968', tilt: 6 },
  { name: 'Charcoal Bark', hex: '#3A322B', tilt: -5 },
  { name: 'Golden Wheat', hex: '#E0A94D', tilt: 3 },
  { name: 'Blush Coral', hex: '#E8846B', tilt: -7 },
  { name: 'Olive Field', hex: '#6B7A4F', tilt: 4 },
]

export default function Hero() {
  const scrollToProducts = (e) => {
    e.preventDefault()
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient gradient wash */}
      <div className="absolute inset-0 bg-opus-radial pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-opus-orange/10 blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 eyebrow mb-6"
          >
            <Sparkles size={14} /> Authorized Birla Opus Paint Dealer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.03] tracking-tight"
          >
            Transform Your{' '}
            <span className="bg-opus-gradient bg-clip-text text-transparent">
              Space
            </span>{' '}
            with Premium Colors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
          >
            HR Enterprises brings you the full Birla Opus range — durable,
            weather-resistant, beautifully finished paints for homes and
            businesses that don't settle for ordinary walls.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#products" onClick={scrollToProducts} className="btn-primary">
              Explore Products <ArrowRight size={18} />
            </a>
            <a href="#dashboard" className="btn-ghost">
              View Inventory
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              ['12+', 'Yrs Trusted'],
              ['60+', 'Opus Shades'],
              ['4.9★', 'Customer Rated'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display font-bold text-2xl text-opus-amber">{num}</p>
                <p className="text-xs text-muted mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature swatch wall */}
        <div className="relative h-[26rem] sm:h-[32rem] hidden sm:block" aria-hidden="true">
          <div className="absolute inset-0 grid grid-cols-4 gap-4">
            {SWATCHES.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: 'easeOut' }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
                style={{ '--tilt': `${s.tilt}deg`, transform: `rotate(${s.tilt}deg)` }}
                className="group relative self-center rounded-2xl p-3 shadow-card animate-float cursor-default"
              >
                <div
                  className="w-full aspect-[3/4] rounded-xl shadow-inner"
                  style={{ backgroundColor: s.hex }}
                />
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-charcoal/90 backdrop-blur px-2 py-1.5 text-center">
                  <p className="text-[10px] font-medium text-cream truncate">{s.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplet } from 'lucide-react'
import { categories, colorFamilies, stockStatus } from '../data/products.js'

const STATUS_STYLES = {
  in: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  low: 'bg-opus-amber/15 text-opus-amber border-opus-amber/30',
  out: 'bg-red-500/15 text-red-400 border-red-500/30',
}

export default function Products({ products }) {
  const [type, setType] = useState('All')
  const [family, setFamily] = useState('All')

  const filtered = useMemo(() => {
    return products.filter(
      (p) => (type === 'All' || p.type === type) && (family === 'All' || p.family === family)
    )
  }, [products, type, family])

  return (
    <section id="products" className="section-pad max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Our Range"
        title="Paints built for every wall"
        subtitle="Filter by usage and color mood to find the right Birla Opus shade for your space."
      />

      {/* Filters */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <FilterGroup label="Usage" options={categories} value={type} onChange={setType} />
        <FilterGroup label="Color" options={colorFamilies} value={family} onChange={setFamily} />
      </div>

      {/* Grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted mt-16">No shades match these filters yet — try a different combination.</p>
      )}
    </section>
  )
}

function SectionHeading({ eyebrow, title, subtitle, light }) {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display font-bold text-3xl sm:text-4xl tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-4 ${light ? 'text-cream/80' : 'text-muted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-wider text-muted">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              value === opt
                ? 'bg-opus-gradient text-charcoal border-transparent'
                : 'border-white/10 text-muted hover:text-cream hover:border-white/25'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, index }) {
  const [activeSize, setActiveSize] = useState(0)
  const size = product.sizes[activeSize]
  const status = stockStatus(size.stock)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl glass overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-glow"
    >
      <div
        className="h-36 relative flex items-end p-4"
        style={{ backgroundColor: product.hex }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="relative text-charcoal/90 font-display font-bold text-sm bg-white/70 backdrop-blur px-3 py-1 rounded-full">
          {product.shade}
        </span>
        <Droplet
          className="absolute top-4 right-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity"
          size={20}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display font-semibold text-base leading-snug">{product.name}</h3>
            <p className="text-xs text-muted mt-1">{product.finish} · {product.type}</p>
          </div>
          <span className={`shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${STATUS_STYLES[status.tone]}`}>
            {status.label}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          {product.sizes.map((s, i) => (
            <button
              key={s.size}
              onClick={() => setActiveSize(i)}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                i === activeSize
                  ? 'border-opus-orange bg-opus-orange/15 text-opus-amber'
                  : 'border-white/10 text-muted hover:text-cream'
              }`}
            >
              {s.size}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-display font-bold text-2xl">
            ₹{size.price.toLocaleString('en-IN')}
          </p>
          <button className="text-sm font-medium text-opus-amber hover:text-opus-orange transition-colors">
            Enquire →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export { SectionHeading }

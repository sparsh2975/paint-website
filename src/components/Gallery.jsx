import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { SectionHeading } from './Products.jsx'

// Placeholder gallery images (seeded via picsum.photos so the project runs instantly).
// Swap the `img` values for your own project photos in /public/gallery — see README.
const GALLERY = [
  { img: 'https://picsum.photos/seed/opus-living/700/900', title: 'Living Room', shade: 'Sunrise Amber' },
  { img: 'https://picsum.photos/seed/opus-facade/700/500', title: 'Villa Exterior', shade: 'Terracotta Bloom' },
  { img: 'https://picsum.photos/seed/opus-bedroom/700/500', title: 'Master Bedroom', shade: 'Midnight Sage' },
  { img: 'https://picsum.photos/seed/opus-cafe/700/900', title: 'Café Interior', shade: 'Stone Grey' },
  { img: 'https://picsum.photos/seed/opus-hallway/700/900', title: 'Entrance Hallway', shade: 'Ivory Cloud' },
  { img: 'https://picsum.photos/seed/opus-office/700/500', title: 'Office Space', shade: 'Deep Teal' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Portfolio"
        title="Walls we've brought to life"
        subtitle="A look at real spaces finished with Birla Opus paints from HR Enterprises."
      />

      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-card cursor-pointer"
          >
            <img
              src={item.img}
              alt={`${item.title} finished in ${item.shade}`}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-display font-semibold text-lg text-cream">{item.title}</p>
              <p className="text-xs text-opus-amber mt-1">Finished in {item.shade}</p>
            </div>
            <span className="absolute top-4 right-4 w-9 h-9 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Expand size={15} className="text-cream" />
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

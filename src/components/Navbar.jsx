import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, PaintBucket } from 'lucide-react'

const LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Buy List', href: '#buylist' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass shadow-card' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16">
        <a
          href="#top"
          onClick={(e) => handleNav(e, '#top')}
          className="flex items-center gap-2 font-display font-bold text-lg text-cream"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-opus-gradient text-charcoal">
            <PaintBucket size={18} strokeWidth={2.4} />
          </span>
          HR Enterprises
        </a>

        <ul className="hidden md:flex items-center gap-9 font-medium text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="relative transition-colors hover:text-cream group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-opus-orange transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="hidden md:inline-flex btn-ghost text-sm !py-2.5 !px-5"
        >
          Get a Quote
        </a>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden flex flex-col gap-1 px-6 pt-4 pb-2"
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block py-3 text-cream/90 border-b border-white/5 text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}

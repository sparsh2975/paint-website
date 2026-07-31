import { PaintBucket, Instagram, Facebook, Youtube } from 'lucide-react'

const LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Buy List', href: '#buylist' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#top" onClick={(e) => handleNav(e, '#top')} className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-opus-gradient text-charcoal">
              <PaintBucket size={18} strokeWidth={2.4} />
            </span>
            HR Enterprises
          </a>
          <p className="text-sm text-muted mt-4 leading-relaxed max-w-xs">
            Authorized Birla Opus Paint Dealer, serving udhampur with premium
            interior and exterior finishes since 2025.
          </p>
        </div>

        <div>
          <p className="font-display font-semibold text-sm mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNav(e, l.href)} className="text-sm text-muted hover:text-cream transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-sm mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>+91 788 954 6427</li> 
            <li>Hrenterprises@gmail.com</li>
            <li>Hrenterprises birmapul near toyota showroom,182101</li>
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-sm mb-4">Follow Us</p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full glass grid place-items-center text-muted hover:text-opus-amber hover:border-opus-orange/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} HR Enterprises. All rights reserved.</p>
        <p>Authorized Birla Opus Dealer · Not affiliated with Birla Opus Paints brand ownership.</p>
      </div>
    </footer>
  )
}

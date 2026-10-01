import { useEffect, useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base-900/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#home" className="flex items-center gap-2 font-bold text-ink-100 tracking-tight">
          <ShieldCheck className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
          DEENESH A.
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.href ? 'text-accent-cyan' : 'text-ink-300 hover:text-ink-100'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-accent-cyan rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan px-4 py-2 text-sm font-semibold hover:bg-accent-cyan/20 transition-colors"
        >
          Let's Connect
        </a>

        <button
          className="lg:hidden text-ink-100 p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-base-900/98 border-b border-white/5 px-5 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 text-sm font-medium ${
                    active === link.href ? 'text-accent-cyan' : 'text-ink-300'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center rounded-full bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan px-4 py-2 text-sm font-semibold"
          >
            Let's Connect
          </a>
        </div>
      )}
    </header>
  )
}

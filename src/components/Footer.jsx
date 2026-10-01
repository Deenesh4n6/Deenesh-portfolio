import { Linkedin, Github, Mail } from 'lucide-react'
import { siteConfig } from '../data/config.js'

const links = [
  { label: 'LinkedIn', icon: Linkedin, href: siteConfig.linkedin },
  { label: 'GitHub', icon: Github, href: siteConfig.github },
  { label: 'Email', icon: Mail, href: `mailto:${siteConfig.email}` },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-ink-500">© 2026 Deenesh A. All rights reserved.</p>

        <div className="flex items-center gap-5">
          {links.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-ink-500 hover:text-accent-cyan transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-ink-500">Built with React</p>
      </div>
    </footer>
  )
}

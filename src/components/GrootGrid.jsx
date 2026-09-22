import { Network, Wrench, ShieldCheck, Wifi, Instagram, ArrowRight, Leaf } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { siteConfig } from '../data/config.js'

const services = [
  {
    icon: Network,
    title: 'Network Installation',
    items: ['LAN installation', 'Router configuration', 'Switch configuration', 'Structured cabling', 'Device connectivity'],
  },
  {
    icon: Wrench,
    title: 'Network Maintenance',
    items: ['Troubleshooting', 'Network monitoring', 'Connectivity diagnosis', 'Performance optimization'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    items: ['Firewall setup', 'Endpoint security', 'Basic security audits', 'Network security configuration'],
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Solutions',
    items: ['Home Wi-Fi', 'Office Wi-Fi', 'College Wi-Fi', 'Hotel Wi-Fi', 'Shop/business Wi-Fi', 'Wi-Fi optimization'],
  },
]

const workflow = [
  'Consultation',
  'Site Survey',
  'Network Assessment',
  'Solution Design',
  'Installation',
  'Configuration',
  'Testing',
  'Maintenance & Support',
]

const whyPoints = [
  'Practical networking solutions',
  'Security-conscious infrastructure',
  'Customized solutions',
  'Installation + maintenance support',
  'Focus on reliable connectivity',
  'Designed for homes and businesses',
]

export default function GrootGrid() {
  return (
    <section id="groot-grid" className="py-24 px-5 sm:px-8 relative overflow-hidden">
      {/* visually distinct backdrop for the startup section */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-green/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm text-accent-green mb-4">
            <Leaf className="w-4 h-4" /> Networking startup concept
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-100">Groot Grid</h2>
          <p className="text-accent-green font-medium mt-2">Networking Infrastructure. Connectivity. Security.</p>
          <p className="text-ink-300 max-w-2xl mx-auto mt-4">
            Groot Grid is a networking services startup concept focused on delivering reliable
            networking infrastructure and basic cybersecurity solutions for homes, offices, colleges,
            hotels, shops, and small businesses.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map(({ icon: Icon, title, items }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-6 h-full border border-accent-green/10 hover:border-accent-green/30 transition-colors">
                <span className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent-green" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-ink-100 mb-3">{title}</h3>
                <ul className="space-y-1.5 text-sm text-ink-300">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-16">
          <h3 className="text-center font-semibold text-ink-100 mb-8">How it works</h3>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="glass-card rounded-full px-4 py-2 text-sm text-ink-100">{step}</span>
                {i < workflow.length - 1 && <ArrowRight className="w-4 h-4 text-accent-green shrink-0" />}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h3 className="font-semibold text-ink-100 mb-5">Why Groot Grid?</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-ink-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="glass-card rounded-2xl p-8 text-center border border-accent-green/20">
            <p className="text-ink-300 mb-5">Follow the build-out and get in touch.</p>
            <a
              href={siteConfig.grootGrid.instagramUrl}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-green/10 border border-accent-green/40 text-accent-green font-semibold px-5 py-3 hover:bg-accent-green/20 transition-colors"
            >
              <Instagram className="w-4 h-4" /> Explore Groot Grid — {siteConfig.grootGrid.instagram}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

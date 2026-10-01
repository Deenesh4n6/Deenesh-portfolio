import { Globe, Router, ShieldCheck, Network, Wifi, Server } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const topology = [
  { icon: Globe, label: 'Internet' },
  { icon: Router, label: 'Router' },
  { icon: ShieldCheck, label: 'Firewall' },
  { icon: Network, label: 'Core Switch' },
  { icon: Wifi, label: 'Access Points' },
  { icon: Server, label: 'PCs / Servers / IoT' },
]

const knowledge = [
  'TCP/IP', 'OSI Model', 'IPv4', 'Subnetting', 'DHCP', 'DNS',
  'Routing', 'Switching', 'VLAN', 'LAN/WAN', 'Wi-Fi', 'Firewall', 'VPN',
  'Network Security', 'Troubleshooting', 'Packet Analysis',
]

export default function Networking() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-base-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Networking Foundation" />

        <Reveal className="glass-card rounded-2xl p-4 sm:p-8 mb-12">
          <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-y-6 lg:gap-2">
            {topology.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex flex-col items-center gap-2 text-center w-full lg:w-24">
                  <span className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
                  </span>
                  <span className="text-xs text-ink-300 leading-tight">{label}</span>
                </div>
                {i < topology.length - 1 && (
                  <div className="hidden lg:block w-8 h-px bg-gradient-to-r from-accent-cyan/60 to-accent-blue/60 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3">
          {knowledge.map((item, i) => (
            <Reveal key={item} delay={i * 0.02}>
              <span className="inline-block text-sm text-ink-300 glass-card rounded-full px-4 py-2 hover:border-accent-cyan/40 hover:text-ink-100 transition-colors">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

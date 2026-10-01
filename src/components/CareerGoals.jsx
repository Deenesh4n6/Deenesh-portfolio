import { ShieldCheck, Network, Radar, Rocket } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const goals = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Engineer',
    focus: 'Security operations, threat detection, network security, ethical hacking.',
  },
  {
    icon: Network,
    title: 'Network Engineer',
    focus: 'Routing, switching, LAN/WAN, Wi-Fi, infrastructure deployment and troubleshooting.',
  },
  {
    icon: Radar,
    title: 'SOC Analyst',
    focus: 'Monitoring, incident detection, SIEM concepts, MITRE ATT&CK.',
  },
  {
    icon: Rocket,
    title: 'Security / Network Entrepreneur',
    focus: 'Building practical networking and security solutions.',
  },
]

export default function CareerGoals() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-base-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="What I'm Building Toward"
          subtitle="Career interests and goals I'm actively working toward — not current job titles."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map(({ icon: Icon, title, focus }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-6 h-full hover:glow-border transition-shadow">
                <span className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-ink-100 mb-2">{title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Shield, Network, Radar, Bug, Search, Lock } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const exploring = [
  { label: 'Cybersecurity', icon: Shield },
  { label: 'Network Engineering', icon: Network },
  { label: 'SOC Operations', icon: Radar },
  { label: 'Ethical Hacking', icon: Bug },
  { label: 'Digital Forensics', icon: Search },
  { label: 'Secure Infrastructure', icon: Lock },
]

const stats = [
  { value: '4th Year', label: 'B.E. CSE' },
  { value: '7.86', label: 'CGPA' },
  { value: 'Cybersecurity', label: 'Focus' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3 space-y-4 text-ink-300 leading-relaxed">
            <p>
              I am a 4th-year B.E. Computer Science and Engineering student with a strong interest in
              cybersecurity, computer networking, ethical hacking, and secure infrastructure. I enjoy
              learning how networks, systems, and security technologies work and applying that
              knowledge through hands-on projects and practical experimentation.
            </p>
            <p>
              My technical interests include networking, Linux, cybersecurity, SOC operations,
              penetration testing, digital forensics, network monitoring, and security tools.
            </p>
            <p>
              My long-term goal is to build a strong career in cybersecurity and networking while
              continuing to develop practical technical skills, professional certifications, and
              real-world projects.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl px-5 py-4">
                  <p className="text-xl font-bold text-gradient">{s.value}</p>
                  <p className="text-sm text-ink-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass-card glow-border rounded-2xl p-6 h-full">
              <h3 className="font-semibold text-ink-100 mb-4">Currently Exploring</h3>
              <ul className="space-y-3">
                {exploring.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-ink-300">
                    <span className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

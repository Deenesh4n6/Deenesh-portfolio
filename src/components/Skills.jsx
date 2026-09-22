import { Shield, Network, Terminal, KeyRound, Code2, Cloud } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillCategories } from '../data/skills.js'

const categoryIcons = {
  Cybersecurity: Shield,
  Networking: Network,
  'Networking Tools': Terminal,
  'Security Tools': KeyRound,
  Programming: Code2,
  'Database / Cloud': Cloud,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8 bg-base-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and concepts I've applied through coursework, self-study, and hands-on practice."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.title] ?? Code2
            return (
              <Reveal key={category.title} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-6 h-full hover:glow-border transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-ink-100">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-ink-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:border-accent-cyan/40 hover:text-ink-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="py-24 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <Reveal>
          <div className="glass-card glow-border rounded-2xl p-8 flex flex-col sm:flex-row gap-6">
            <span className="w-14 h-14 rounded-xl bg-accent-cyan/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-accent-cyan" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-lg text-ink-100">
                B.E. Computer Science &amp; Engineering
              </h3>
              <p className="text-accent-cyan text-sm font-medium mt-1">Current Status: 4th Year</p>
              <p className="text-ink-300 mt-3 leading-relaxed">
                Anna University affiliated engineering education, Tamil Nadu, India.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-ink-300">
                  Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

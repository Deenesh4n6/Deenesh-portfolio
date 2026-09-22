import { Award, BadgeCheck, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Verified Credentials"
          subtitle="A growing record of practical learning across networking, cloud security, and cybersecurity."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.05}>
              <div className="glass-card glow-border rounded-xl overflow-hidden h-full hover:shadow-[0_0_32px_rgba(63,208,224,0.1)] transition-shadow">
                <div className="h-full flex flex-col">
                  <div className="relative p-5 flex items-center justify-between overflow-hidden bg-accent-cyan/[0.04] border-b border-white/10">
                    <div className="absolute -right-10 -top-16 w-32 h-32 rounded-full border border-accent-cyan/20" aria-hidden="true" />
                    <div className="absolute -right-4 -top-10 w-20 h-20 rounded-full border border-accent-cyan/10" aria-hidden="true" />
                    <div className="relative flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.2em] text-accent-cyan">CREDENTIAL {(i + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <ShieldCheck className="relative w-5 h-5 text-accent-green" aria-hidden="true" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-accent-green uppercase tracking-[0.16em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" /> Verified on {cert.platform}
                    </div>
                    <div className="flex items-start gap-3 mt-4">
                      <Award className="w-8 h-8 shrink-0 text-accent-cyan" strokeWidth={1.25} aria-hidden="true" />
                      <div>
                        <p className="text-xs text-ink-500">{cert.issuer}</p>
                        <h3 className="text-lg font-semibold text-ink-100 mt-1 leading-snug">{cert.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-ink-300 mt-4 leading-relaxed flex-1">{cert.description}</p>

                    <div className="flex flex-wrap gap-3 mt-5">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2.5 bg-accent-cyan text-base-900 hover:opacity-90 transition-opacity"
                      >
                        <BadgeCheck className="w-3.5 h-3.5" /> Verify credential
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

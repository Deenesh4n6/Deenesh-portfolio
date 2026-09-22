import { ArrowDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  'Linux',
  'Networking Fundamentals',
  'CCNA-Level Networking Knowledge',
  'Cybersecurity Fundamentals',
  'SOC & SIEM',
  'Ethical Hacking',
  'Digital Forensics / DFIR',
  'Advanced Network Security',
  'Professional Cybersecurity Career',
]

// Steps already completed vs. in progress vs. upcoming can be adjusted
// here as skills develop — currently marks the first step "in progress".
const currentStepIndex = 0

export default function Roadmap() {
  return (
    <section className="py-24 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="My Learning Journey"
          subtitle="Currently strengthening my networking and cybersecurity foundations."
        />

        <div className="flex flex-col items-center">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.05} className="flex flex-col items-center">
              <div
                className={`glass-card rounded-xl px-5 py-3 text-center font-medium ${
                  i === currentStepIndex
                    ? 'border-accent-cyan/60 text-accent-cyan glow-border'
                    : 'text-ink-300'
                }`}
              >
                {step}
                {i === currentStepIndex && (
                  <span className="block text-xs text-accent-green mt-1">In progress</span>
                )}
              </div>
              {i < steps.length - 1 && <ArrowDown className="w-4 h-4 text-ink-500 my-2" aria-hidden="true" />}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 glass-card rounded-2xl p-8 text-center">
          <h3 className="font-semibold text-ink-100 mb-2">Future Learning</h3>
          <p className="text-ink-300 max-w-xl mx-auto">
            I am interested in pursuing advanced education in Cybersecurity and strengthening my
            technical foundation through higher studies, certifications, and practical experience.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

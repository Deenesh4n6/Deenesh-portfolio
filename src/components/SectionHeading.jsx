import Reveal from './Reveal.jsx'

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <Reveal className={`flex flex-col gap-3 mb-12 ${alignment}`}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-100">{title}</h2>
      {subtitle && <p className="text-ink-300 max-w-2xl text-base sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}

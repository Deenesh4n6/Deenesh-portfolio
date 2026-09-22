import { useState } from 'react'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects, projectCategories } from '../data/projects.js'

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 h-full grid md:grid-cols-[1.35fr_1fr_auto] gap-5 items-start hover:glow-border transition-shadow">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-ink-100">{project.title}</h3>
        </div>
        <p className={`text-sm text-ink-300 mt-3 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs text-accent-cyan mt-2 self-start"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="flex flex-wrap content-start gap-2">
        <span className="text-xs shrink-0 text-accent-green bg-accent-green/10 border border-accent-green/30 rounded-full px-2.5 py-1">
          {project.category}
        </span>
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-ink-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>

      <div className="flex md:flex-col gap-3 md:justify-center md:border-l md:border-white/5 md:pl-5">
        <a
          href={project.github}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-accent-cyan transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-accent-cyan transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function OtherProjects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="other-projects" className="py-24 px-5 sm:px-8 bg-base-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Other Projects"
          subtitle="A mix of cybersecurity, full-stack, and IoT concepts built to apply what I'm learning."
        />

        <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-medium rounded-full px-4 py-2 border transition-colors ${
                filter === cat
                  ? 'bg-accent-cyan/10 border-accent-cyan/50 text-accent-cyan'
                  : 'border-white/10 text-ink-300 hover:text-ink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="space-y-5">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Github, ExternalLink } from 'lucide-react'
import TrunkBranchDiagram from './diagrams/TrunkBranchDiagram.jsx'
import CompanyNetworkDiagram from './diagrams/CompanyNetworkDiagram.jsx'
import { deploymentNote } from '../data/networkProjects.js'

export default function NetworkProjectCard({ project, onViewCaseStudy }) {
  return (
    <div className="glass-card glow-border rounded-2xl p-6 sm:p-8 h-full grid md:grid-cols-[1fr_1.15fr] gap-7">
      <div className="flex flex-col min-w-0">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-4xl font-bold text-accent-cyan/25">{project.number}</span>
            <h3 className="text-xl font-bold text-ink-100 mt-1">{project.title}</h3>
            <p className="text-sm text-accent-cyan mt-0.5">{project.label}</p>
          </div>
        </div>

        <span className="self-start text-xs text-accent-green bg-accent-green/10 border border-accent-green/30 rounded-full px-2.5 py-1 mb-4">
          {deploymentNote}
        </span>

        <p className="text-sm text-ink-300 leading-relaxed mb-5">{project.objective}</p>

        <div className="mt-auto flex flex-wrap gap-3 pt-5 border-t border-white/5">
          <button
            onClick={onViewCaseStudy}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-base-900 text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" /> View Case Study
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg glass-card text-sm font-medium text-ink-300 px-4 py-2.5 hover:text-ink-100 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub / Documentation
          </a>
        </div>
      </div>

      <div className="min-w-0">
        <div className="glass-card rounded-xl p-4 mb-5 bg-white/[0.02]">
          {project.diagram?.type === 'company' ? (
            <CompanyNetworkDiagram />
          ) : (
            <TrunkBranchDiagram trunk={project.diagram.trunk} branch={project.diagram.branch} />
          )}
        </div>

        {project.projectFlow && (
          <div className="flex flex-wrap items-center gap-2 mb-5 text-xs text-ink-300">
            <span className="font-semibold text-ink-100">Project Flow:</span>
            {project.projectFlow.join('  →  ')}
          </div>
        )}

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((t) => (
              <span key={t} className="text-xs text-ink-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        )}

        {project.skillsDemonstrated && (
          <div>
            <p className="text-xs font-semibold text-ink-500 mb-2">Skills demonstrated</p>
            <div className="flex flex-wrap gap-2">
              {project.skillsDemonstrated.map((s) => (
                <span key={s} className="text-xs text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

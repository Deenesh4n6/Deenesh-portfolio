import { useEffect } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'
import TrunkBranchDiagram from './diagrams/TrunkBranchDiagram.jsx'
import CompanyNetworkDiagram from './diagrams/CompanyNetworkDiagram.jsx'
import TestingChecklist from './TestingChecklist.jsx'
import CostEstimator from './CostEstimator.jsx'
import { deploymentNote } from '../data/networkProjects.js'

function Block({ title, children }) {
  return (
    <section className="mb-10">
      <h3 className="text-lg font-semibold text-ink-100 mb-3">{title}</h3>
      {children}
    </section>
  )
}

function VlanTable({ rows, showNetwork = true }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="text-left text-ink-500 border-b border-white/10">
            <th className="py-2 pr-3 font-medium">VLAN</th>
            <th className="py-2 pr-3 font-medium">Purpose</th>
            {showNetwork && <th className="py-2 pr-3 font-medium">Network</th>}
            <th className="py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.vlan} className="border-b border-white/5">
              <td className="py-2.5 pr-3 text-accent-cyan font-medium whitespace-nowrap">{r.vlan}</td>
              <td className="py-2.5 pr-3 text-ink-100">{r.purpose}</td>
              {showNetwork && <td className="py-2.5 pr-3 text-ink-300 font-mono text-xs">{r.network}</td>}
              <td className="py-2.5 text-ink-300">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function IpPlanTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="text-left text-ink-500 border-b border-white/10">
            <th className="py-2 pr-3 font-medium">VLAN</th>
            <th className="py-2 pr-3 font-medium">Purpose</th>
            <th className="py-2 pr-3 font-medium">Network</th>
            <th className="py-2 pr-3 font-medium">Gateway</th>
            <th className="py-2 font-medium">DHCP</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.vlan} className="border-b border-white/5">
              <td className="py-2.5 pr-3 text-accent-cyan font-medium whitespace-nowrap">{r.vlan}</td>
              <td className="py-2.5 pr-3 text-ink-100">{r.purpose}</td>
              <td className="py-2.5 pr-3 text-ink-300 font-mono text-xs">{r.network}</td>
              <td className="py-2.5 pr-3 text-ink-300 font-mono text-xs">{r.gateway}</td>
              <td className="py-2.5 text-ink-300">{r.dhcp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const { caseStudy } = project

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={onClose}
    >
      <div
        className="bg-base-900 border border-white/10 w-full max-w-3xl rounded-xl sm:rounded-2xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-base-900/95 backdrop-blur-md border-b border-white/10 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 z-10">
          <div className="min-w-0">
            <span className="inline-block text-xs text-accent-green bg-accent-green/10 border border-accent-green/30 rounded-full px-2.5 py-1 mb-2">
              {deploymentNote}
            </span>
            <h2 className="text-xl font-bold text-ink-100 break-words">{project.title}</h2>
            <p className="text-sm text-accent-cyan mt-0.5 break-words">{project.label}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="shrink-0 w-9 h-9 rounded-full glass-card flex items-center justify-center text-ink-300 hover:text-ink-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 sm:px-8 py-6 sm:py-8">
          <Block title="Problem">
            <p className="text-ink-300 leading-relaxed">{caseStudy.problem}</p>
          </Block>

          <Block title="Objective">
            <p className="text-ink-300 leading-relaxed">{project.objective}</p>
          </Block>

          <Block title="Architecture">
            <p className="text-ink-300 leading-relaxed mb-5">{caseStudy.architecture}</p>
            <div className="glass-card rounded-2xl p-6">
              {project.diagram?.type === 'company' ? (
                <CompanyNetworkDiagram />
              ) : project.diagram?.type === 'simple' ? (
                <TrunkBranchDiagram trunk={project.diagram.trunk} branch={project.diagram.branch} />
              ) : null}
            </div>
          </Block>

          {project.ipPlan && (
            <Block title="IP Addressing Plan">
              <p className="text-xs text-ink-500 mb-3">Proposed Example IP Addressing Plan</p>
              <IpPlanTable rows={project.ipPlan} />
            </Block>
          )}

          {project.vlanPlan && (
            <Block title="VLAN Design">
              <VlanTable rows={project.vlanPlan} showNetwork={!!project.vlanPlan[0]?.network} />
            </Block>
          )}

          {project.firewallPolicy && (
            <Block title="Firewall Policy">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4">
                  <p className="text-sm font-semibold text-accent-green mb-2">Allow</p>
                  <ul className="space-y-1.5 text-sm text-ink-300">
                    {project.firewallPolicy.allow.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-sm font-semibold text-red-400 mb-2">Restrict</p>
                  <ul className="space-y-1.5 text-sm text-ink-300">
                    {project.firewallPolicy.restrict.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Block>
          )}

          {project.equipment && (
            <Block title="Equipment List & Cost Estimate">
              <CostEstimator equipment={project.equipment} />
            </Block>
          )}

          {project.wifiDesign && (
            <Block title="Wi-Fi Design">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.wifiDesign.ssids.map((s) => (
                  <span key={s} className="text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-ink-300">
                    {s}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5 text-sm text-ink-300 list-disc list-inside">
                {project.wifiDesign.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Block>
          )}

          {(project.securityDesign || project.securityControls) && (
            <Block title="Security Design">
              <div className="flex flex-wrap gap-2">
                {(project.securityDesign ?? project.securityControls).map((s) => (
                  <span key={s} className="text-sm text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-full px-3 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            </Block>
          )}

          {project.installationPlan && (
            <Block title="Installation Plan">
              <ol className="space-y-2">
                {project.installationPlan.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-ink-300">
                    <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-semibold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {project.testingChecklist && (
            <Block title="Testing Checklist">
              <TestingChecklist categories={project.testingChecklist} />
            </Block>
          )}

          {project.amcPackages && (
            <Block title="Annual Maintenance Contract (AMC)">
              <p className="text-sm text-ink-300 mb-5">
                Services include: {project.amcServices.join(', ')}.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.amcPackages.map((pkg) => (
                  <div key={pkg.tier} className="glass-card rounded-xl p-5">
                    <p className="font-semibold text-ink-100 mb-1">{pkg.tier}</p>
                    <p className="text-accent-cyan text-sm font-medium mb-3">₹____ / year</p>
                    <ul className="space-y-1.5 text-sm text-ink-300">
                      {pkg.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink-500 mt-4">
                Pricing can be customized based on site size, equipment count, SLA requirements, and support scope.
              </p>
            </Block>
          )}

          {(project.configTasks || project.skillsDemonstrated) && (
            <div className="grid sm:grid-cols-2 gap-6">
              {project.configTasks && (
                <Block title="Configuration Tasks">
                  <ul className="space-y-1.5 text-sm text-ink-300 list-disc list-inside">
                    {project.configTasks.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </Block>
              )}
              {project.skillsDemonstrated && (
                <Block title="Skills Demonstrated">
                  <div className="flex flex-wrap gap-2">
                    {project.skillsDemonstrated.map((s) => (
                      <span key={s} className="text-sm text-ink-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </Block>
              )}
            </div>
          )}

          <Block title="Lessons Learned">
            <p className="text-ink-300 leading-relaxed">{caseStudy.lessonsLearned}</p>
          </Block>

          <Block title="Future Improvements">
            <p className="text-ink-300 leading-relaxed">{caseStudy.futureImprovements}</p>
          </Block>

          <div className="flex gap-3 pt-2 border-t border-white/5 mt-2">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-accent-cyan transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub / Documentation
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-accent-cyan transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

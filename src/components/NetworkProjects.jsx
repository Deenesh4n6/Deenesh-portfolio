import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import NetworkProjectCard from './NetworkProjectCard.jsx'
import CaseStudyModal from './CaseStudyModal.jsx'
import { networkProjects } from '../data/networkProjects.js'

export default function NetworkProjects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Practical Networking Projects"
          subtitle="Hands-on network design, configuration, security and infrastructure planning. Presented as networking lab / portfolio projects."
        />

        <div className="space-y-5">
          {networkProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <NetworkProjectCard project={project} onViewCaseStudy={() => setActiveProject(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}

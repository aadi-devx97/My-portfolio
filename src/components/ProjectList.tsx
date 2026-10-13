import { getOtherProjects } from '../data/projects.ts'
import { ProjectCard } from './ProjectCard.tsx'

export function ProjectList() {
  const otherProjects = getOtherProjects()

  return (
    <section id="projects" className="projects-section container" aria-label="Other Projects">
      <div className="section-header">
        <span className="section-eyebrow">Project Portfolio</span>
        <h2 className="section-heading">Additional Full-Stack & Frontend Applications</h2>
        <p className="section-lead">
          Each project is built to explore specific aspects of software development: authentication
          flows, CRUD API architectures, data structures, and third-party API integration.
        </p>
      </div>

      <div className="projects-grid">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

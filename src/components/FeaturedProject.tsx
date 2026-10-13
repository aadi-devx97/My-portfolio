import { getFeaturedProject } from '../data/projects.ts'

export function FeaturedProject() {
  const project = getFeaturedProject()
  const caseStudy = project.caseStudy

  return (
    <section
      id="featured-project"
      className="featured-section container"
      aria-label="Featured Engineering Case Study"
    >
      <div className="section-header">
        <span className="section-eyebrow">Deep-Dive Case Study</span>
        <h2 className="section-heading">Featured Engineering Project</h2>
        <p className="section-lead">
          An architectural breakdown of a complete full-stack web application designed, built, and
          deployed from scratch.
        </p>
      </div>

      <article className="case-study-card">
        {/* Case Study Header Banner */}
        <div className="case-study-header">
          <div className="case-study-meta">
            <span className="badge badge-featured">{project.badge || 'Featured Project'}</span>
            <span className="case-study-year">{project.year}</span>
          </div>

          <h3 className="case-study-title">{project.title}</h3>
          <p className="case-study-subtitle">{project.subtitle}</p>

          <div className="case-study-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Launch Live Application</span>
                <svg
                  className="btn-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M11 3h6v6M10 10l7-7M17 11v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" />
                </svg>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* System Architecture Diagram (Structural representation) */}
        <div className="system-diagram" aria-label="System architecture diagram">
          <div className="diagram-header">
            <span className="diagram-title">System Architecture Flow</span>
            <span className="diagram-badge">MERN Stack • Decoupled Architecture</span>
          </div>

          <div className="diagram-flow">
            <div className="diagram-node node-client">
              <span className="node-label">Client Application</span>
              <span className="node-tech">React SPA + Context API</span>
              <span className="node-detail">Protected routing & JWT Bearer injection</span>
            </div>

            <div className="diagram-arrow" aria-hidden="true">
              <span className="arrow-line"></span>
              <span className="arrow-text">HTTPS / REST API</span>
            </div>

            <div className="diagram-node node-server">
              <span className="node-label">Application Server</span>
              <span className="node-tech">Node.js + Express.js</span>
              <span className="node-detail">Auth middleware, bcrypt, controllers</span>
            </div>

            <div className="diagram-arrow" aria-hidden="true">
              <span className="arrow-line"></span>
              <span className="arrow-text">Mongoose ODM</span>
            </div>

            <div className="diagram-node node-database">
              <span className="node-label">Cloud Database</span>
              <span className="node-tech">MongoDB Atlas</span>
              <span className="node-detail">User-scoped schemas & task documents</span>
            </div>
          </div>
        </div>

        {/* Case Study Content Breakdown */}
        {caseStudy && (
          <div className="case-study-body">
            <div className="case-study-section">
              <h4 className="case-study-section-title">Overview & Engineering Objective</h4>
              <p className="case-study-text">{caseStudy.overview}</p>
              <p className="case-study-text secondary-text">{caseStudy.problemStatement}</p>
            </div>

            {/* Architecture Grid */}
            <div className="architecture-grid">
              <div className="arch-card">
                <div className="arch-card-header">
                  <span className="arch-number">01</span>
                  <h5>Frontend Layer</h5>
                </div>
                <ul className="arch-list">
                  {caseStudy.architecture.frontend.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="arch-card">
                <div className="arch-card-header">
                  <span className="arch-number">02</span>
                  <h5>Backend & API Layer</h5>
                </div>
                <ul className="arch-list">
                  {caseStudy.architecture.backend.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="arch-card">
                <div className="arch-card-header">
                  <span className="arch-number">03</span>
                  <h5>Database & Storage</h5>
                </div>
                <ul className="arch-list">
                  {caseStudy.architecture.database.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="arch-card">
                <div className="arch-card-header">
                  <span className="arch-number">04</span>
                  <h5>Auth & Security Model</h5>
                </div>
                <ul className="arch-list">
                  {caseStudy.architecture.security.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verified Highlights */}
            <div className="case-study-section">
              <h4 className="case-study-section-title">Verified Core Features</h4>
              <div className="highlights-grid">
                {caseStudy.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-bullet" aria-hidden="true">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="case-study-tech">
              <span className="tech-label">Technologies Used:</span>
              <div className="tech-chips">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </section>
  )
}

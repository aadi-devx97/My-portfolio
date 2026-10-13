import { siteConfig } from '../data/config.ts'

export function Hero() {
  const { personal } = siteConfig

  return (
    <section id="hero" className="hero-section container" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true"></span>
            {personal.status}
          </span>
        </div>

        <h1 className="hero-title">
          I build full-stack apps that solve real problems.
        </h1>

        <p className="hero-subtitle">
          I'm <strong className="hero-name">{personal.name}</strong>, a self-taught{' '}
          <span className="hero-highlight">{personal.role}</span> specializing in the{' '}
          <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). Alongside my undergraduate
          studies in Business Administration, I design, build, and deploy production-ready web
          applications with clean data flow, reliable authentication, and accessible interfaces.
        </p>

        {/* Target roles indicator */}
        <div className="hero-target-roles" aria-label="Target internship roles">
          <span className="target-roles-label">Target Roles:</span>
          <div className="role-tags">
            {personal.targetRoles.map((role) => (
              <span key={role} className="role-tag">
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="hero-actions">
          <a href="#featured-project" className="btn btn-primary">
            <span>Explore Featured Project</span>
            <svg
              className="btn-arrow"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 10h12m-6-6l6 6-6 6" />
            </svg>
          </a>

          <a href="#projects" className="btn btn-secondary">
            View All Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        {/* Social & Channel Quick Links */}
        <div className="hero-links" aria-label="External Profiles">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            <svg
              className="link-icon"
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
            <span>GitHub ({personal.githubUsername})</span>
          </a>

          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            <svg
              className="link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.54-1.54 1.54 1.54 0 0 0-3.08 0c0 .85.69 1.54 1.54 1.54m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
            <span>LinkedIn Profile</span>
          </a>

          <a href={`mailto:${personal.email}`} className="external-link">
            <svg
              className="link-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <span>{personal.email}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

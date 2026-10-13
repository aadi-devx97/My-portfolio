import { siteConfig } from '../data/config.ts'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">{siteConfig.personal.name}</span>
            <span className="footer-role">
              {siteConfig.personal.role} • {siteConfig.personal.specialization}
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#hero">Top</a>
            <a href="#featured-project">Case Study</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {siteConfig.personal.name}. All project implementations verifiable via
            public GitHub repositories.
          </p>

          <p className="footer-colophon">
            Designed with an editorial aesthetic • Built with React 19, TypeScript & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

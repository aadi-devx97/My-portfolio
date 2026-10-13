import { useState, useEffect } from 'react'
import { siteConfig } from '../data/config.ts'
import { ThemeToggle } from './ThemeToggle.tsx'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Esc key or when resizing to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 860) setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner container">
        <a href="#top" className="site-brand" onClick={closeMenu}>
          <span className="brand-monogram">AJ</span>
          <div className="brand-text">
            <span className="brand-name">{siteConfig.personal.name}</span>
            <span className="brand-role">Full-Stack Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action CTAs & Controls */}
        <div className="header-actions">
          {siteConfig.personal.resume.enabled ? (
            <a
              href={siteConfig.personal.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline resume-cta"
            >
              <svg
                className="btn-icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M4 4v12a2 2 0 002 2h8a2 2 0 002-2V7.5L12.5 4H6a2 2 0 00-2 2z" />
                <polyline points="12 4 12 8 16 8" />
              </svg>
              Resume
            </a>
          ) : (
            <a href="#contact" className="btn btn-sm btn-outline resume-cta">
              Resume Request
            </a>
          )}

          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {siteConfig.navigation.map((item) => (
                <li key={item.href} className="mobile-nav-item">
                  <a href={item.href} className="mobile-nav-link" onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-drawer-footer">
            {siteConfig.personal.resume.enabled ? (
              <a
                href={siteConfig.personal.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
                onClick={closeMenu}
              >
                Download Resume (PDF)
              </a>
            ) : (
              <a
                href="#contact"
                className="btn btn-outline btn-block"
                onClick={closeMenu}
              >
                Request Resume
              </a>
            )}
            <div className="mobile-contact-quick">
              <a href={`mailto:${siteConfig.personal.email}`}>
                {siteConfig.personal.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

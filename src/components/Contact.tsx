import { useState } from 'react'
import { siteConfig } from '../data/config.ts'

export function Contact() {
  const { personal } = siteConfig
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback for older browsers
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="contact-section container" aria-label="Contact Information">
      <div className="section-header">
        <span className="section-eyebrow">Connect & Inquiries</span>
        <h2 className="section-heading">Get in Touch</h2>
        <p className="section-lead">
          I am actively exploring Full-Stack, Frontend, and Backend internship opportunities. Feel free
          to reach out via email, connect on LinkedIn, or inspect my repositories on GitHub.
        </p>
      </div>

      <div className="contact-grid">
        {/* Email Card */}
        <div className="contact-card primary-contact">
          <div className="contact-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">Direct Email</span>
            <a href={`mailto:${personal.email}`} className="contact-card-value email-link">
              {personal.email}
            </a>
            <p className="contact-card-desc">
              Preferred contact method. Typically respond within 24 hours.
            </p>
          </div>
          <div className="contact-card-actions">
            <a href={`mailto:${personal.email}`} className="btn btn-sm btn-primary">
              Send Email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-sm btn-outline"
              aria-label="Copy email address to clipboard"
            >
              {copied ? '✓ Copied' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="contact-card">
          <div className="contact-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">GitHub</span>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-value"
            >
              github.com/{personal.githubUsername}
            </a>
            <p className="contact-card-desc">
              Browse commit history, repository structures, and code architecture.
            </p>
          </div>
          <div className="contact-card-actions">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              Visit Profile ↗
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="contact-card">
          <div className="contact-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.54-1.54 1.54 1.54 0 0 0-3.08 0c0 .85.69 1.54 1.54 1.54m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">LinkedIn</span>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-value"
            >
              in/aadi-jain
            </a>
            <p className="contact-card-desc">
              Connect professionally and discuss potential internship roles.
            </p>
          </div>
          <div className="contact-card-actions">
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Resume Status Card */}
        <div className="contact-card">
          <div className="contact-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div className="contact-card-content">
            <span className="contact-card-label">Resume / CV</span>
            <span className="contact-card-value">
              {personal.resume.enabled ? 'Available for Download' : 'Available Upon Request'}
            </span>
            <p className="contact-card-desc">
              {personal.resume.enabled
                ? 'Comprehensive overview of technical projects, coursework, and skills.'
                : 'Directly request my updated PDF resume via email or connect on LinkedIn.'}
            </p>
          </div>
          <div className="contact-card-actions">
            {personal.resume.enabled ? (
              <a
                href={personal.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Download PDF
              </a>
            ) : (
              <a
                href={`mailto:${personal.email}?subject=Resume%20Request%20-%20Aadi%20Jain`}
                className="btn btn-sm btn-outline"
              >
                Request Resume PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

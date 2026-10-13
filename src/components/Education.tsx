import { educationInfo } from '../data/education.ts'

export function Education() {
  return (
    <section id="education" className="education-section container" aria-label="Education">
      <div className="section-header">
        <span className="section-eyebrow">Academic Foundation</span>
        <h2 className="section-heading">Education</h2>
        <p className="section-lead">
          Formal academic training in business administration paired with independent engineering
          studies.
        </p>
      </div>

      <div className="education-card">
        <div className="education-header">
          <div className="education-titles">
            <span className="education-badge">{educationInfo.status}</span>
            <h3 className="education-degree">{educationInfo.degree}</h3>
            <p className="education-institution">
              {educationInfo.institution} • {educationInfo.location}
            </p>
          </div>
          <div className="education-timeline">
            <span className="timeline-label">Expected Completion</span>
            <span className="timeline-date">{educationInfo.expectedGraduation}</span>
          </div>
        </div>

        <div className="education-body">
          <h4 className="education-highlights-heading">Curriculum & Engineering Synergy</h4>
          <ul className="education-highlights-list">
            {educationInfo.highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

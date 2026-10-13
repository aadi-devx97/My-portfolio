import { skillCategories } from '../data/skills.ts'

export function Skills() {
  return (
    <section id="skills" className="skills-section container" aria-label="Technical Skills">
      <div className="section-header">
        <span className="section-eyebrow">Technical Competencies</span>
        <h2 className="section-heading">Technical Toolkit</h2>
        <p className="section-lead">
          Competencies organized by domain rather than arbitrary percentage ratings. Focus areas
          reflect hands-on project implementation in the MERN ecosystem.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-category-card">
            <h3 className="skill-category-title">{category.name}</h3>
            <p className="skill-category-desc">{category.description}</p>
            <div className="skill-tags-wrapper" aria-label={`${category.name} skills`}>
              {category.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

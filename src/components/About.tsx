export function About() {
  return (
    <section id="about" className="about-section container" aria-label="About Aadi Jain">
      <div className="section-header">
        <span className="section-eyebrow">Background & Approach</span>
        <h2 className="section-heading">About Me</h2>
        <p className="section-lead">
          A disciplined, self-directed developer combining engineering fundamentals with an analytical
          business mindset.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card main-narrative">
          <h3 className="about-card-title">Engineering From First Principles</h3>
          <p>
            I am a self-taught full-stack developer focused on modern web architecture with the{' '}
            <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). Rather than relying on
            high-level abstractions before understanding what lies beneath, I build applications
            from scratch—designing REST APIs, configuring secure JWT authentication flows with bcrypt
            hashing, modeling database schemas in Mongoose, and structuring responsive React component
            hierarchies.
          </p>
          <p>
            My learning process centers on shipping practical, working software. Every project in my
            portfolio is either deployed live or backed by an open-source GitHub repository detailing
            its implementation, constraints, and architecture.
          </p>

          <h3 className="about-card-title" style={{ marginTop: '2rem' }}>
            Bridging Business Administration & Software Engineering
          </h3>
          <p>
            I am concurrently pursuing a <strong>Bachelor of Business Administration (BBA)</strong> at{' '}
            <strong>Maa Shakumbhari University</strong> (graduating in 2028). Studying organizational
            systems, operations, and analytical decision-making provides me with a grounded
            perspective on software engineering: code exists to solve actual operational bottlenecks,
            deliver measurable utility to users, and remain maintainable over time.
          </p>
        </div>

        <aside className="about-sidebar">
          <div className="about-card highlight-card">
            <h4 className="sidebar-card-title">Current Objective</h4>
            <p className="sidebar-card-text">
              Actively seeking a <strong>Full-Stack, Frontend, or Backend Developer Internship</strong>{' '}
              where I can contribute clean, tested code, collaborate with experienced engineering teams,
              and deepen my understanding of production-scale systems.
            </p>
          </div>

          <div className="about-card highlight-card">
            <h4 className="sidebar-card-title">Global Perspective & Career Aspirations</h4>
            <p className="sidebar-card-text">
              Over the long term, I am working toward building an international career, with a
              particular interest in Japan's technological ecosystem. I admire Japanese engineering
              principles—precision, intentional craftsmanship (<em>monozukuri</em>), and long-term
              reliability—and I apply that same standard of discipline to my daily coding practice.
            </p>
          </div>

          <div className="about-card highlight-card">
            <h4 className="sidebar-card-title">Core Principles</h4>
            <ul className="principles-list">
              <li>
                <strong>Verifiable Code:</strong> Every feature claim backed by code in public repositories.
              </li>
              <li>
                <strong>Security by Default:</strong> Protected routes, stateless JWTs, hashed credentials.
              </li>
              <li>
                <strong>Clean Interfaces:</strong> Fast, accessible UI without bloated dependencies.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

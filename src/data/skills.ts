import type { SkillCategory } from '../types/portfolio.ts'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Engineering',
    description:
      'Building performant, responsive client applications with modern component architectures and semantic standards.',
    skills: [
      'React',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5 & Semantic Markup',
      'Modern CSS3',
      'Responsive Web Design',
      'Context API & State Management',
      'Client-Side Routing',
    ],
  },
  {
    name: 'Backend & RESTful Services',
    description:
      'Constructing structured HTTP servers, REST APIs, middleware pipelines, and secure data transactions.',
    skills: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'Middleware Architecture',
      'Input Sanitization & Validation',
      'Error Handling Patterns',
    ],
  },
  {
    name: 'Database & Data Modeling',
    description:
      'Designing schema models, indexing strategies, and persistent cloud-based data storage.',
    skills: [
      'MongoDB',
      'Mongoose ODM',
      'MongoDB Atlas',
      'Schema Validation',
      'CRUD Operations',
      'User-Scoped Data Filtering',
    ],
  },
  {
    name: 'Auth, Security & Storage',
    description:
      'Securing user accounts, sessions, and protected resources across the application lifecycle.',
    skills: [
      'JSON Web Tokens (JWT)',
      'Password Hashing with bcrypt',
      'Protected Route Guards',
      'Session Security & Auth Tokens',
      'Environment Secrets Management',
    ],
  },
  {
    name: 'Tooling, Workflow & Deployment',
    description:
      'Managing developer toolchains, source control, linting standards, and production hosting.',
    skills: [
      'Git & Version Control',
      'GitHub',
      'Vite & Build Tooling',
      'Postman / HTTP Client Testing',
      'Netlify Cloud Hosting',
      'Oxlint & Code Quality',
    ],
  },
]

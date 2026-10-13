import type { SiteConfig } from '../types/portfolio.ts'

export const siteConfig: SiteConfig = {
  personal: {
    name: 'Aadi Jain',
    role: 'Full-Stack Developer',
    specialization: 'MERN Stack (MongoDB, Express, React, Node.js)',
    status: 'Actively seeking Full-Stack, Frontend, or Backend Developer internships',
    targetRoles: [
      'Full-Stack Developer Intern',
      'Frontend Developer Intern',
      'Backend Developer Intern',
    ],
    email: 'aadi.jain.x97@gmail.com',
    githubUrl: 'https://github.com/aadi-devx97',
    githubUsername: 'aadi-devx97',
    linkedinUrl: 'https://www.linkedin.com/in/aadi-jain-a043782b8/',
    location: 'India',
    resume: {
      // Set enabled to true once resume.pdf is placed in the public/ folder or an external URL is set
      enabled: true,
      url: '/resume.pdf',
      fileName: 'Aadi_Jain_Resume.pdf',
      instructionNote:
        'To connect your resume: place your PDF file into the public/ directory as resume.pdf, then toggle enabled to true in src/data/config.ts.',
    },
  },
  navigation: [
    { label: 'Featured Project', href: '#featured-project' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
}

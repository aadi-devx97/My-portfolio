export interface CaseStudyArchitecture {
  frontend: string[]
  backend: string[]
  database: string[]
  security: string[]
}

export interface CaseStudy {
  overview: string
  problemStatement: string
  architecture: CaseStudyArchitecture
  keyHighlights: string[]
  futureImprovements?: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  featured: boolean
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  demoAvailable: boolean
  caseStudy?: CaseStudy
  badge?: string
  year: string
}

export interface SkillCategory {
  name: string
  description: string
  skills: string[]
}

export interface EducationInfo {
  degree: string
  field: string
  institution: string
  location: string
  expectedGraduation: string
  status: string
  highlights: string[]
}

export interface PersonalConfig {
  name: string
  role: string
  specialization: string
  status: string
  targetRoles: string[]
  email: string
  githubUrl: string
  githubUsername: string
  linkedinUrl: string
  location: string
  resume: {
    enabled: boolean
    url: string
    fileName: string
    instructionNote: string
  }
}

export interface SiteConfig {
  personal: PersonalConfig
  navigation: { label: string; href: string }[]
}

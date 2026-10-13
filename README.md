# Aadi Jain — Developer Portfolio

A responsive, recruiter-oriented developer portfolio built with **React 19**, **TypeScript**, and **Vite**, featuring an editorial aesthetic, dark/light theme support, accessible navigation, and modular data-driven content architecture.

---

## 🛠️ Tech Stack & Tooling

- **Frontend Library:** React 19 (`react`, `react-dom`)
- **Language:** TypeScript 6 (`strict` mode with composite project references)
- **Bundler & Dev Server:** Vite 8 (powered by `@vitejs/plugin-react` and Oxc)
- **Linter:** Oxlint (`oxlint` with React and TypeScript rule sets)
- **Styling:** Custom modern CSS design system with CSS variables, light/dark themes, and `prefers-reduced-motion` support

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18+ recommended) and npm installed:

```bash
node -v
npm -v
```

### Installation

```bash
# Clone or navigate into the workspace
cd "My portfolio"

# Install dependencies (already installed if node_modules exists)
npm install
```

### Development Server

Start Vite's fast hot-module-replacement (HMR) development server:

```bash
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173`).

### Production Build & Type Checking

```bash
# Type check and build optimized bundle to dist/
npm run build

# Preview the production build locally
npm run preview
```

### Code Quality & Linting

Run Oxlint across all TypeScript and React source files:

```bash
npm run lint
```

---

## 📁 Project Structure

```
My portfolio/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── icons.svg            # SVG sprite sheet
│   └── resume.pdf           # Place your PDF resume here (when ready)
├── src/
│   ├── assets/              # Static media assets
│   ├── components/          # Modular UI components
│   │   ├── About.tsx            # Background, BBA intersection & aspirations
│   │   ├── Contact.tsx          # Contact channels, email copy, & resume trigger
│   │   ├── Education.tsx        # Degree and university details
│   │   ├── FeaturedProject.tsx  # Deep-dive engineering case study
│   │   ├── Footer.tsx           # Clean editorial footer
│   │   ├── Hero.tsx             # Professional intro, target roles, & CTAs
│   │   ├── Navbar.tsx           # Responsive sticky nav & mobile drawer
│   │   ├── ProjectCard.tsx      # Reusable project card component
│   │   ├── ProjectList.tsx      # Responsive project grid
│   │   ├── Skills.tsx           # Grouped technical competencies
│   │   └── ThemeToggle.tsx      # Light/Dark mode switcher
│   ├── data/                # Data-driven configuration (edit here to update site)
│   │   ├── config.ts            # Personal profile, contacts, resume, and nav links
│   │   ├── education.ts         # Education details
│   │   ├── projects.ts          # Project inventory, case study, and helpers
│   │   └── skills.ts             # Categorized skills list
│   ├── types/               # TypeScript interfaces
│   │   └── portfolio.ts         # Type definitions for projects, skills, and config
│   ├── App.tsx              # Root page assembling all portfolio sections
│   ├── index.css            # Central design system, tokens, and layouts
│   └── main.tsx             # React DOM root entry
├── index.html               # Main HTML entry with SEO metadata
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # Base TypeScript configuration
└── package.json             # Scripts and dependencies
```

---

## ⚙️ Maintenance & Customization Guide

All personal data, project listings, and social links are centralized in `src/data/` so you can update your portfolio without modifying component JSX.

### 1. Adding a New Project

Open [`src/data/projects.ts`](src/data/projects.ts) and add a new item to the `projects` array:

```typescript
{
  id: 'my-new-project',
  title: 'Project Title',
  subtitle: 'Brief one-line subtitle',
  featured: false,
  year: '2025',
  badge: 'Full-Stack App',
  description: 'Explain what this project does and architectural choices.',
  techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  githubUrl: 'https://github.com/aadi-devx97/my-new-project',
  liveUrl: 'https://my-project-demo.com', // Optional; omit if no demo exists
  demoAvailable: true,                   // Set to false if demo is offline
}
```

The projects grid in [`src/components/ProjectList.tsx`](src/components/ProjectList.tsx) will automatically render the new card with zero changes to JSX or CSS.

### 2. Changing the Featured Project

In [`src/data/projects.ts`](src/data/projects.ts):
1. Find the project you want to feature and set `featured: true`.
2. Ensure other projects have `featured: false`.
3. Fill in the optional `caseStudy` object (overview, problemStatement, architecture breakdown, and keyHighlights) to populate the deep-dive case study section.

### 3. Updating Contact & Social Links

Open [`src/data/config.ts`](src/data/config.ts) and update the `personal` object:

```typescript
export const siteConfig: SiteConfig = {
  personal: {
    name: 'Aadi Jain',
    role: 'Full-Stack Developer',
    email: 'aadi.jain.x97@gmail.com',
    githubUrl: 'https://github.com/aadi-devx97',
    linkedinUrl: 'https://www.linkedin.com/in/aadi-jain-a043782b8/',
    status: 'Actively seeking Full-Stack, Frontend, or Backend Developer internships',
    targetRoles: [
      'Full-Stack Developer Intern',
      'Frontend Developer Intern',
      'Backend Developer Intern',
    ],
    // ...
  },
}
```

### 4. Adding or Replacing Your PDF Resume

1. Copy your PDF resume into the [`public/`](public/) directory and name it `resume.pdf` (e.g., `public/resume.pdf`).
2. Open [`src/data/config.ts`](src/data/config.ts) and set:

```typescript
resume: {
  enabled: true,         // Toggle to true once file is placed
  url: '/resume.pdf',     // Path relative to public/
  fileName: 'Aadi_Jain_Resume.pdf',
  // ...
}
```

When `enabled` is `true`, the Navbar and Contact section will automatically display live download buttons for your resume.

### 5. Updating Skills or Education

- To modify skill categories or badges: edit [`src/data/skills.ts`](src/data/skills.ts).
- To update degree progress or university details: edit [`src/data/education.ts`](src/data/education.ts).

---

## 🧪 Verification Commands

Before committing or deploying, run these checks to ensure code quality:

```bash
# 1. Oxlint syntax and hook checks
npm run lint

# 2. TypeScript compilation check
npx tsc -b --noEmit

# 3. Production build test
npm run build
```

import type { Project } from '../types/portfolio.ts'

export const projects: Project[] = [
  {
    id: 'productivity-dashboard-v2',
    title: 'Productivity Dashboard V2',
    subtitle: 'Full-Stack MERN Task & Workflow System',
    featured: true,
    year: 'Around August 2026',
    badge: 'Featured Project',
    description:
      'A full-stack productivity web application built with the MERN stack. Designed with secure JWT authentication, user-isolated task storage in MongoDB Atlas, real-time status filtering, and dark/light mode responsiveness.',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Mongoose',
      'JWT',
      'bcrypt',
      'React Router',
      'Context API',
    ],
    liveUrl: 'https://productivity-dashboard-x.netlify.app/',
    githubUrl: 'https://github.com/aadi-devx97/productivity-dashboard',
    demoAvailable: true,
    caseStudy: {
      overview:
        'Productivity Dashboard V2 addresses personal task tracking through a structured full-stack architecture. The application enforces complete user isolation with token-based authentication and provides an uncluttered workspace for managing daily goals, search filtering, and theme preferences.',
      problemStatement:
        'Standard client-only todo lists lack secure multi-device synchronization and persistent user data isolation. This project builds a production-grade full-stack architecture with decoupled frontend and backend services.',
      architecture: {
        frontend: [
          'React component tree with clean state separation',
          'Context API managing global auth token & user state',
          'Client-side routing with protected route guards via React Router',
          'Fetch API wrapper injecting JWT Bearer authorization headers',
        ],
        backend: [
          'Node.js and Express RESTful API with structured controllers',
          'Auth middleware verifying JWT tokens on all task endpoints',
          'Input validation and centralized error handling routines',
          'CORS and environment-based configuration for cloud deployment',
        ],
        database: [
          'MongoDB Atlas cloud database cluster',
          'Mongoose schemas with strict data types and relational user references',
          'User-scoped querying ensuring users can only read and mutate their own tasks',
        ],
        security: [
          'Password hashing using bcrypt before database persistence',
          'Signed JSON Web Tokens (JWT) for stateless session validation',
          'Protected backend routes rejecting requests missing valid bearer tokens',
          'Auto-logout logic triggered upon expired or invalidated credentials',
        ],
      },
      keyHighlights: [
        'Complete CRUD operations: create, edit, toggle complete, and delete tasks',
        'Multi-criteria task filtering (All, Pending, Completed) with instant search',
        'Dark / Light theme persistence for comfortable day and night usage',
        'Personalized dashboard greeting and organized layout structure',
      ],
      futureImprovements: [
        'Calendar view integration and scheduled deadline reminders',
        'Productivity analytics and completion trends over time',
        'Drag-and-drop task reordering',
      ],
    },
  },
  {
    id: 'notes-app',
    title: 'Authenticated Notes App',
    subtitle: 'Full-Stack Note Management with MongoDB & JWT',
    featured: false,
    year: 'April 2026',
    badge: 'Full-Stack App',
    description:
      'A full-stack authenticated notes application built with Node.js, Express, MongoDB Atlas, and modular JavaScript. Features bcrypt password hashing, protected API endpoints, real-time note search, timestamps, and live character counting.',
    techStack: [
      'JavaScript (ES6+)',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Mongoose',
      'JWT',
      'bcrypt',
      'HTML5/CSS3',
    ],
    liveUrl: 'https://notes-app-x97.netlify.app/',
    githubUrl: 'https://github.com/aadi-devx97/notes-app',
    demoAvailable: true,
  },
  {
    id: 'task-manager-v2',
    title: 'Task Manager V2',
    subtitle: 'Responsive Task Workflow Application with REST API',
    featured: false,
    year: 'Around March 2026',
    badge: 'Full-Stack Web App',
    description:
      'A responsive full-stack task manager constructed with vanilla JavaScript and an Express REST API backend. Provides task creation, priority labels, search and filtering mechanisms, input sanitization, and mobile-friendly layouts.',
    techStack: [
      'JavaScript (ES6+)',
      'Node.js',
      'Express.js',
      'REST API',
      'HTML5',
      'CSS3',
    ],
    liveUrl: 'https://task-manager-aadi.netlify.app/',
    githubUrl: 'https://github.com/aadi-devx97/task-manager-v2',
    demoAvailable: true,
  },
  {
    id: 'weather-app',
    title: 'Modern Weather App',
    subtitle: 'Live Forecast & Geolocation Application',
    featured: false,
    year: 'Jan 2026',
    badge: 'Frontend API App',
    description:
      'A real-time meteorological application powered by the OpenWeatherMap API. Features city-based searching, browser geolocation lookup, dynamic weather-based backgrounds, temperature unit conversion (°C / °F), and local storage caching.',
    techStack: [
      'JavaScript (ES6+)',
      'OpenWeatherMap API',
      'HTML5',
      'CSS3',
      'Geolocation API',
    ],
    githubUrl: 'https://github.com/aadi-devx97/weather-app',
    demoAvailable: false,
  },
]

/**
 * Helper to retrieve the active featured project.
 * Falls back to the first project in the list if none has `featured: true`.
 */
export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) || projects[0]
}

/**
 * Helper to retrieve non-featured projects for the grid display.
 */
export function getOtherProjects(): Project[] {
  return projects.filter((p) => !p.featured)
}

import { Navbar } from './components/Navbar.tsx'
import { Hero } from './components/Hero.tsx'
import { FeaturedProject } from './components/FeaturedProject.tsx'
import { ProjectList } from './components/ProjectList.tsx'
import { About } from './components/About.tsx'
import { Skills } from './components/Skills.tsx'
import { Education } from './components/Education.tsx'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'

export function App() {
  return (
    <div className="portfolio-app" id="top">
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedProject />
        <ProjectList />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
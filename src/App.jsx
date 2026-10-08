import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import NetworkProjects from './components/NetworkProjects.jsx'
import OtherProjects from './components/OtherProjects.jsx'
import Certifications from './components/Certifications.jsx'
import Networking from './components/Networking.jsx'
import Education from './components/Education.jsx'
import CareerGoals from './components/CareerGoals.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import SecurityBoot from './components/SecurityBoot.jsx'
import { useCallback, useState } from 'react'

export default function App() {
  const [isBooting, setIsBooting] = useState(true)
  const finishBoot = useCallback(() => setIsBooting(false), [])

  return (
    <div className="min-h-screen bg-base-900 text-ink-100">
      {isBooting && <SecurityBoot onComplete={finishBoot} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <NetworkProjects />
        <OtherProjects />
        <Certifications />
        <Networking />
        <Education />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

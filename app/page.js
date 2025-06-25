"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Demo content sections with proper spacing to avoid navbar overlap */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900/50 pt-16 sm:pt-20">
        <About />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-900/50 pt-16 sm:pt-20">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        <Contact />
      </section>
    </div>
  )
}

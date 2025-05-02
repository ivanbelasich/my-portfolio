'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import About from './about/page'
import Projects from './projects/page'
import Skills from './skills/page'
import Contact from './contact/page'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.5, 0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <div ref={ref} className="bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-blue-900 text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Iván Belasich</h1>
        <p className="text-2xl mb-6 text-gray-300">
          Desarrollador de Software | Frontend & Blockchain
        </p>
        
        <div className="flex space-x-4">
          <motion.a 
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Sobre Mí
          </motion.a>
          
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.1 }}
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-full"
          >
            Proyectos
          </motion.a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  )
}
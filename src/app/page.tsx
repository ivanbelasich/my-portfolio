'use client'

import { motion, } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import i18next from '../i18n'
import About from './about/page'
import Projects from './projects/page'
import Skills from './skills/page'
import Contact from './contact/page'
import { FaArrowUp } from 'react-icons/fa'
import Hero from './hero/page'
import { Space_Grotesk } from 'next/font/google';
import WorkMethodologies from './metodologies/page'

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-space-grotesk',
})

export default function Home() {
  const [language, setLanguage] = useState(i18next.language)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng)
    }

    window.addEventListener('scroll', toggleVisibility)

    i18next.on('languageChanged', handleLanguageChange)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      i18next.off('languageChanged', handleLanguageChange)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${fontSpaceGrotesk.variable} font-main bg-deep-slate text-off-white overflow-x-hidden`}
    >
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed cursor-pointer bottom-8 right-8 z-50 bg-teal-blue text-off-white p-4 rounded-full shadow-2xl hover:bg-seafoam-green transition-colors"
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Hero Section with Ultra-Complex Animations */}
      <Hero />

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-deep-slate via-teal-blue to-seafoam-green py-16 text-off-white">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-deep-slate py-16 text-off-white">
        <Projects />
      </section>

      {/* Work Methodologies Section */}
      <section id="work-methodologies" className="min-h-screen bg-deep-slate py-16 text-off-white">
        <WorkMethodologies />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-deep-slate py-16 text-off-white">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-deep-slate py-16 text-off-white">
        <Contact />
      </section>
    </div>
  )
}
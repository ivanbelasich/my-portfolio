'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import i18next from '../i18n'
import About from './about/page'
import Projects from './projects/page'
import Skills from './skills/page'
import Contact from './contact/page'
import { FaArrowUp } from 'react-icons/fa'

export default function Home() {
  const [language, setLanguage] = useState(i18next.language)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.5, 0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['50% 0%', '50% 100%']
  )

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    i18next.changeLanguage(newLang)
    setLanguage(newLang)
  }

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
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-['Inter'] overflow-x-hidden"
    >
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        {language === 'es' ? 'English' : 'Español'}
      </button>

      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors"
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Hero Section */}
      <motion.section
        style={{
          opacity,
          scale,
          backgroundPosition
        }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative 
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-fixed bg-[length:200%_200%]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-50 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50
          }}
          className="max-w-3xl relative z-10"
        >
          <motion.h1
            initial={{ letterSpacing: '-0.05em' }}
            animate={{ letterSpacing: '0em' }}
            className="text-6xl font-extrabold mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-600
            tracking-tight font-['Poppins']"
          >
            {i18next.t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl mb-8 text-gray-300 font-light font-['Inter']"
          >
            {i18next.t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="#about"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 
              bg-gradient-to-r from-blue-600 to-purple-600 
              hover:from-blue-700 hover:to-purple-700 
              text-white font-semibold 
              rounded-full 
              transition-all 
              shadow-xl 
              hover:shadow-2xl
              font-['Inter']"
            >
              {i18next.t('hero.aboutMe')}
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 
              border-2 border-white/30 
              hover:bg-white/10 
              text-white 
              font-semibold 
              rounded-full 
              transition-all 
              shadow-lg 
              hover:shadow-xl
              font-['Inter']"
            >
              {i18next.t('hero.projects')}
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-900 py-16">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-900 py-16">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-800 py-16">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-800 py-16">
        <Contact />
      </section>
    </div>
  )
}
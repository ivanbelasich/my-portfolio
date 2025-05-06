'use client'

import { motion } from 'framer-motion'
import i18next from '../../i18n'
import { FiExternalLink } from 'react-icons/fi'

export default function About() {
  const professionalExperience = {
    es: [
      {
        company: 'Keroke',
        role: 'Desarrollador Frontend',
        period: 'Feb 2024 - Presente',
        location: 'Chile',
        description: 'Empresa de servicios tecnológicos especializada en staff augmentation para el sector FinTech. Proporciona talento de desarrollo a empresas que requieren recursos especializados para proyectos específicos.',
        type: 'Fábrica de Software',
        employmentType: 'Part-time',
        companyLink: 'https://www.keroke.ro/'
      },
      {
        company: 'Bigger',
        role: 'Desarrollador Fullstack',
        period: 'Abril 2023 - Dic 2024',
        location: 'Sydney, Australia',
        description: 'Bigger es una agencia de innovación tecnológica especializada en el desarrollo de soluciones digitales para startups. Con un enfoque integral, la empresa ayuda a emprendedores a transformar ideas en productos digitales escalables, ofreciendo servicios que van desde el desarrollo de MVP hasta integraciones avanzadas en la nube.',
        type: 'Agencia de Innovación Digital',
        employmentType: 'Full-time',
        companyLink: 'https://www.biggertech.co/'
      }
    ],
    en: [
      {
        company: 'Keroke',
        role: 'Frontend Developer',
        period: 'Feb 2024 - Present',
        location: 'Chile',
        description: 'Technology services company specializing in staff augmentation for the FinTech sector. Provides development talent to companies requiring specialized resources for specific projects.',
        type: 'Software Factory',
        employmentType: 'Part-time',
        companyLink: 'https://www.keroke.ro/'
      },
      {
        company: 'Bigger',
        role: 'Fullstack Developer',
        period: 'Apr 2023 - Dec 2024',
        location: 'Sydney, Australia',
        description: 'Bigger is a technology innovation agency specializing in digital solutions for startups. With a comprehensive approach, the company helps entrepreneurs transform ideas into scalable digital products, offering services ranging from MVP development to advanced cloud integrations.',
        type: 'Digital Innovation Agency',
        employmentType: 'Full-time',
        companyLink: 'https://www.biggertech.co/'
      }
    ]
  };

  const cvExperience = i18next.language === 'es' ? professionalExperience.es : professionalExperience.en;

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 100
        }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            type: 'spring',
            bounce: 0.4
          }}
          className="text-5xl font-bold mb-12 text-center text-primary-accent"
        >
          {i18next.t('about.title')}
        </motion.h2>

        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6
            }}
            className="text-xl text-text-main leading-relaxed"
          >
            {i18next.t('about.description')}
          </motion.p>
        </div>

        <div className="relative pl-4 md:pl-0 md:w-3/4 lg:w-2/3 mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-12 text-center text-primary-accent"
          >
            {i18next.t('about.experience.title')}
          </motion.h3>

          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-border-subtle to-transparent -ml-[1px]"></div>
          
          <div className="space-y-12">
            {cvExperience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }} // All enter from left
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                className={`relative flex items-start pl-12`} // Consistent padding-left
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 top-5 w-4 h-4 rounded-full bg-primary-accent ring-background-main z-10 -ml-[9px]`}></div>
                
                {/* Experience Card (Content) */}
                <div className={`w-full`}> { /* Card takes full width to the right */}
                  <div
                    className="
                      bg-gradient-to-br 
                      from-background-subtle/70 
                      to-background-subtle/40 
                      from-border-subtle/70 
                      to-border-subtle/40 
                      border 
                      border-primary-accent/50 
                      rounded-2xl 
                      p-6 
                      shadow-xl 
                      overflow-hidden 
                      relative
                      group
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                    "
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-accent"></div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-off-white mb-1">
                          <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                            {exp.company}
                            <FiExternalLink className="ml-2 text-text-secondary text-sm" />
                          </a>
                        </h4>
                        {/* Moved Period here for better visibility */}
                        <span className="block text-sm text-off-white font-medium mb-1">{exp.period}</span> 
                        <p className="text-sm text-text-secondary flex items-center">
                          <span className="mr-1">🌐</span> {exp.type} <span className="ml-3">🌎 {exp.location}</span>
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        {/* Removed Period from here, kept employment type */}
                        <span className="block text-xs text-text-secondary/80">🕒 {exp.employmentType}</span>
                      </div>
                    </div>
                    <p className="text-lg text-off-white font-semibold mb-2">{exp.role}</p>
                    <p className="text-text-secondary leading-relaxed text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
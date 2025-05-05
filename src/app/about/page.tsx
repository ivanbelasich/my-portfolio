'use client'

import { motion } from 'framer-motion'
import i18next from '../../i18n'

export default function About() {
  const professionalExperience = {
    es: [
      {
        company: 'GranMenu',
        role: 'Desarrollador Frontend',
        period: 'Feb 2024 - Presente',
        location: 'Chile',
        description: 'Empresa de servicios tecnológicos especializada en staff augmentation para el sector FinTech. Proporciona talento de desarrollo a empresas que requieren recursos especializados para proyectos específicos.',
        type: 'Proveedor de Servicios de Talento Tech',
        employmentType: 'Part-time',
        companyLink: 'https://granmenu.me/'
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
        company: 'GranMenu',
        role: 'Frontend Developer',
        period: 'Feb 2024 - Present',
        location: 'Chile',
        description: 'Technology services company specializing in staff augmentation for the FinTech sector. Provides development talent to companies requiring specialized resources for specific projects.',
        type: 'Tech Talent Outsourcing Provider',
        employmentType: 'Part-time',
        companyLink: 'https://granmenu.me/'
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
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
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
            className="text-xl text-gray-300 leading-relaxed"
          >
            {i18next.t('about.description')}
          </motion.p>
        </div>

        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          >
            {i18next.t('about.experience.title')}
          </motion.h3>

          {cvExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              className="
                bg-gradient-to-br 
                from-gray-800/70 
                to-gray-800/40 
                border 
                border-gray-700/50 
                rounded-2xl 
                p-6 
                shadow-xl 
                overflow-hidden 
                relative
                group
                transition-all
                duration-300
                mb-6
                hover:scale-[1.02]
              "
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="
                    text-2xl 
                    font-bold 
                    text-transparent 
                    bg-clip-text 
                    bg-gradient-to-r 
                    from-blue-400 
                    to-purple-600 
                    transition-all 
                    duration-300
                    mb-1
                  ">
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {exp.company}
                    </a>
                  </h4>
                  <p className="text-sm text-gray-400 flex items-center">
                    <span className="mr-2">🌐</span>
                    {exp.type} · <span className="ml-2">🌎 {exp.location}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-gray-300 font-medium">{exp.period}</span>
                  <span className="block text-sm text-gray-500">🕒 {exp.employmentType}</span>
                </div>
              </div>

              <p className="text-lg text-white/90 font-semibold mb-2">{exp.role}</p>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
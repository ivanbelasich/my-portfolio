'use client'

import { motion } from 'motion/react'
import i18next from '../../i18n'

export default function About() {
  const professionalExperience = {
    es: [
      {
        company: 'GranMenu',
        role: 'Desarrollador Frontend',
        period: 'Feb 2024 - Presente',
        location: 'Chile',
        description: 'Startup',
        type: 'Startup FinTech',
        technologies: ['React', 'TypeScript', 'WebSockets'],
        companyLink: 'https://granmenu.me/'
      },
      {
        company: 'Bigger',
        role: 'Desarrollador Fullstack',
        period: 'Dic 2023 - Dic 2024',
        location: 'Sydney, Australia',
        description: 'Aceleradora tecnológica de alto impacto que transforma conceptos innovadores en soluciones digitales escalables. Colaboré en el desarrollo de productos digitales para startups emergentes, implementando arquitecturas de microservicios y soluciones cloud nativas.',
        type: 'Agencia de Innovación Digital',
        technologies: ['React Native', 'AWS', 'Blockchain', 'Web3'],
        companyLink: 'https://www.biggertech.co/'
      }
    ],
    en: [
      {
        company: 'GranMenu',
        role: 'Frontend Developer',
        period: 'Feb 2024 - Present',
        location: 'Chile',
        description: 'Startup',
        type: 'Startup FinTech',
        technologies: ['React', 'TypeScript', 'WebSockets'],
        companyLink: 'https://granmenu.me/'
      },
      {
        company: 'Bigger',
        role: 'Fullstack Developer',
        period: 'Dec 2023 - Dec 2024',
        location: 'Sydney, Australia',
        description: 'High-impact technology accelerator transforming innovative concepts into scalable digital solutions. Collaborated on digital product development for emerging startups, implementing microservices architectures and cloud-native solutions.',
        type: 'Digital Innovation Agency',
        technologies: ['React Native', 'AWS', 'Blockchain', 'Web3'],
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
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {["Fintech", "Blockchain", "React Expert", "Clean Code"].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700"
              >
                <span className="text-blue-400 text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
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
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                </h4>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="text-lg text-gray-300 font-medium">{exp.role}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>📍 {exp.location}</span>
                <span>🏢 {exp.type}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="my-16 border-t border-gray-700 opacity-30"></div>

        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {i18next.language === 'es'
              ? "Metodologías de Trabajo"
              : "Work Methodologies"}
          </h3>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {(i18next.language === 'es'
                ? [
                  {
                    title: "Agile & Scrum",
                    description: "Implementación de metodologías ágiles con sprints de 2 semanas, daily standups, y revisiones periódicas de progreso.",
                    icon: "🚀"
                  },
                  {
                    title: "CI/CD",
                    description: "Configuración de pipelines de GitHub Actions para integración y despliegue continuo, automatizando pruebas y builds.",
                    icon: "⚙️"
                  },
                  {
                    title: "Calidad de Código",
                    description: "Uso de Snyk para detección de vulnerabilidades, revisiones de código mediante Pull Requests, y mantención de estándares de código.",
                    icon: "🛡️"
                  },
                  {
                    title: "Entrega de Features",
                    description: "Entrega incremental de features con validación de stakeholders, prototipado rápido y mejora continua.",
                    icon: "🎯"
                  }
                ]
                : [
                  {
                    title: "Agile & Scrum",
                    description: "Implementation of agile methodologies with 2-week sprints, daily standups, and periodic progress reviews.",
                    icon: "🚀"
                  },
                  {
                    title: "CI/CD",
                    description: "Configuration of GitHub Actions pipelines for continuous integration and deployment, automating tests and builds.",
                    icon: "⚙️"
                  },
                  {
                    title: "Code Quality",
                    description: "Using Snyk for vulnerability detection, code reviews through Pull Requests, and maintaining code standards.",
                    icon: "🛡️"
                  },
                  {
                    title: "Feature Delivery",
                    description: "Incremental feature delivery with stakeholder validation, rapid prototyping, and continuous improvement.",
                    icon: "🎯"
                  }
                ]
              ).map((methodology, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 hover:border-blue-500/50 transform transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{methodology.icon}</span>
                    <h4 className="text-xl font-semibold text-blue-400">{methodology.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {methodology.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
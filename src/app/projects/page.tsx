'use client'

import { motion } from 'motion/react'
import i18next from '../../i18n'

export default function Projects() {
  const projectsData = i18next.t('projects.projects', { returnObjects: true })

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        {i18next.t('projects.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl transition-all"
          >
            <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {project.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{project.company} | {project.period}</p>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center"
              >
                🌐 {i18next.t('projects.demo')}
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="border border-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center"
              >
                💻 {i18next.t('projects.code')}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
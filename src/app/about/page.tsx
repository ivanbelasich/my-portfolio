'use client'

import { motion } from 'motion/react'
import i18next from '../../i18n'

export default function About() {
  const professionalExperience = [
    {
      company: 'GranMenú',
      role: i18next.t('about.granmenu.role'),
      period: i18next.t('about.granmenu.period'),
      description: i18next.t('about.granmenu.description')
    },
    {
      company: 'Bigger',
      role: i18next.t('about.bigger.role'),
      period: i18next.t('about.bigger.period'),
      description: i18next.t('about.bigger.description')
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {i18next.t('about.title')}
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            {i18next.t('about.description')}
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {i18next.t('about.experience.title')}
          </h3>

          {professionalExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  {exp.company}
                </h4>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="text-lg text-gray-300 font-medium">{exp.role}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
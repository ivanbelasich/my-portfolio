'use client'

import { motion } from 'motion/react'
import i18next from '../../i18n'

interface SkillCategory {
  category: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: i18next.t('skills.frontend.category'),
      skills: i18next.t('skills.frontend.skills', { returnObjects: true }) as string[]
    },
    {
      category: i18next.t('skills.backend.category'),
      skills: i18next.t('skills.backend.skills', { returnObjects: true }) as string[]
    },
    {
      category: i18next.t('skills.devops.category'),
      skills: i18next.t('skills.devops.skills', { returnObjects: true }) as string[]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {i18next.t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {category.category}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
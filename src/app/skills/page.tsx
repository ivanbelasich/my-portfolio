'use client'

import { motion } from 'framer-motion'
import i18next from '../../i18n'

interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: i18next.language === 'es' ? 'Frontend' : 'Frontend',
      skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Next.js', 'Zod', 'Redux', 'Formik' ],
      color: 'from-blue-900/20 to-blue-700/30'
    },
    {
      category: i18next.language === 'es' ? 'Backend' : 'Backend',
      skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Express.js'],
      color: 'from-blue-900/20 to-gray-700/30'
    },
    {
      category: i18next.language === 'es' ? 'Blockchain' : 'Blockchain',
      skills: ['Stellar'],
      color: 'from-blue-900/20 to-violet-700/30'
    },
    {
      category: i18next.language === 'es' ? 'DevOps' : 'DevOps',
      skills: ['Docker', 'GitHub Actions', 'Snyk'],
      color: 'from-blue-900/20 to-blue-700/30'
    },
    {
      category: i18next.language === 'es' ? 'Pruebas' : 'Testing',
      skills: ['Jest', 'Cypress', 'React Native Testing Library'],
      color: 'from-blue-900/20 to-gray-700/30'
    },
    {
      category: i18next.language === 'es' ? 'Principios de Diseño' : 'Design Principles',
      skills: ['SOLID', 'Clean Architecture'],
      color: 'from-blue-900/20 to-violet-700/30'
    },
    {
      category: i18next.language === 'es' ? 'Metodologías' : 'Methodologies',
      skills: ['Agile', 'Scrum'],
      color: 'from-blue-900/20 to-blue-700/30'
    },
    {
      category: i18next.language === 'es' ? 'Herramientas' : 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Slack', 'Clickup'],
      color: 'from-blue-900/20 to-gray-600/30'
    }
  ]

  return (
    <div className="relative container mx-auto px-4 py-16 overflow-hidden">
      {/* Subtle background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-1/3 -right-1/3 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative space-y-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {i18next.language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "backOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`
                relative
                bg-gradient-to-br ${category.color}
                border border-white/10 
                p-6 rounded-xl 
                backdrop-blur-sm
                overflow-hidden
                hover:shadow-lg
                transition-all
                duration-300
                group
              `}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.3
                    }}
                    viewport={{ once: true }}
                    className="
                      bg-white/10 
                      text-white/90 
                      px-3 py-1.5 
                      rounded-lg 
                      text-sm 
                      font-medium
                      hover:bg-white/20
                      transition-all
                      duration-200
                      backdrop-blur-sm
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
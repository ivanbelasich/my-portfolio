'use client'

import { motion } from 'motion/react'
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
      skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Next.js'],
      color: 'from-blue-500/30 to-cyan-400/30'
    },
    {
      category: i18next.language === 'es' ? 'Backend' : 'Backend',
      skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Express.js'],
      color: 'from-green-500/30 to-teal-400/30'
    },
    {
      category: i18next.language === 'es' ? 'Blockchain' : 'Blockchain',
      skills: ['Stellar'],
      color: 'from-purple-500/30 to-indigo-400/30'
    },
    {
      category: i18next.language === 'es' ? 'DevOps' : 'DevOps',
      skills: ['Docker', 'GitHub Actions', 'Snyk'],
      color: 'from-red-500/30 to-orange-400/30'
    },
    {
      category: i18next.language === 'es' ? 'Pruebas' : 'Testing',
      skills: ['Jest', 'Cypress', 'React Native Testing Library'],
      color: 'from-yellow-500/30 to-amber-400/30'
    },
    {
      category: i18next.language === 'es' ? 'Principios de Diseño' : 'Design Principles',
      skills: ['SOLID', 'Clean Architecture'],
      color: 'from-pink-500/30 to-rose-400/30'
    },
    {
      category: i18next.language === 'es' ? 'Metodologías' : 'Methodologies',
      skills: ['Agile', 'Scrum'],
      color: 'from-indigo-500/30 to-violet-400/30'
    },
    {
      category: i18next.language === 'es' ? 'Herramientas' : 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Slack', 'Clickup'],
      color: 'from-gray-500/30 to-slate-400/30'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {i18next.language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className={`
                bg-gradient-to-br ${category.color}
                border border-gray-700/50 
                p-6 rounded-2xl 
                shadow-lg 
                transform transition-all 
                hover:scale-[1.02] hover:shadow-xl
              `}
            >
              <h3 className="text-xl font-bold mb-4 text-white/90">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="
                      bg-white/20 
                      text-white 
                      px-3 py-1 
                      rounded-full 
                      text-sm 
                      font-medium
                      hover:bg-white/30
                      transition-all
                    "
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
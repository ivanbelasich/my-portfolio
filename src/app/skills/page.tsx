'use client'

import { motion } from 'motion/react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Zustand']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'PostgreSQL']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'GitHub Actions', 'Snyk', 'Git', 'Postman']
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Cypress', 'React Testing Library']
  },
  {
    category: 'Blockchain',
    skills: ['Stellar']
  }
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Mis Habilidades</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">{category.category}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 text-lg">
            Además, trabajo bajo metodologías ágiles como Scrum y aplico principios de Clean Architecture y SOLID.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
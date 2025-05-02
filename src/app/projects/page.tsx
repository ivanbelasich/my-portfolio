'use client'

import { motion } from 'motion/react'

const projects = [
  {
    name: 'LongX',
    company: 'GranMenú',
    description: 'Migré el proyecto de Create React App a Vite, mejorando rendimiento y escalabilidad.',
    technologies: ['React', 'Vite', 'TypeScript', 'Websockets'],
    period: 'Feb 2025 - Actualidad'
  },
  {
    name: 'Intercripto',
    company: 'GranMenú',
    description: 'Landing page para plataforma de arbitraje de criptomonedas.',
    technologies: ['React', 'Tailwind CSS'],
    period: 'Feb 2025 - Actualidad'
  },
  {
    name: 'PlanetPay Wallet',
    company: 'Bigger',
    description: 'Billetera digital white-label con funcionalidades de swaps, pagos y autenticación segura.',
    technologies: ['React', 'AWS Cognito', 'Stripe', 'TypeScript'],
    period: 'Dic 2023 - Dic 2024'
  },
  {
    name: 'Emigro',
    company: 'Bigger',
    description: 'Billetera móvil basada en blockchain Stellar con conversión de criptomonedas.',
    technologies: ['React Native', 'Expo', 'Stellar', 'AWS Cognito'],
    period: 'Abril 2023 - Dic 2023'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Mis Proyectos</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">{project.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{project.company} | {project.period}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
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
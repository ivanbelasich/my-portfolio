'use client'

import { motion } from 'motion/react'

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Sobre Mí</h1>

                <div className="bg-white shadow-lg rounded-lg p-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Soy un Desarrollador de Software con más de 2 años de experiencia, especializado en frontend y con sólidos conocimientos en backend.
                        Mi pasión se centra en el desarrollo de aplicaciones web y móviles, con un enfoque particular en tecnologías Fintech y blockchain.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Experiencia Profesional</h2>
                            <ul className="space-y-4">
                                <li>
                                    <h3 className="font-bold">GranMenú - Frontend Developer</h3>
                                    <p className="text-sm text-gray-600">Feb 2025 - Actualidad</p>
                                    <p className="text-sm">Lideré migración de proyecto, modernizé UX/UI y implementé nuevas funcionalidades.</p>
                                </li>
                                <li>
                                    <h3 className="font-bold">Bigger - Frontend Developer</h3>
                                    <p className="text-sm text-gray-600">Dic 2023 - Dic 2024</p>
                                    <p className="text-sm">Desarrollé billetera digital white-label y panel de administración para PlanetPay.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Habilidades Técnicas</h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'React', 'React Native', 'TypeScript', 'Tailwind CSS',
                                    'Node.js', 'NestJS', 'PostgreSQL',
                                    'Docker', 'GitHub Actions',
                                    'Jest', 'Cypress'
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
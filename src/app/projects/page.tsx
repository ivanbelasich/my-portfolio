'use client'

import { motion } from 'motion/react'
import i18next from '../../i18n'

export default function Projects() {
  const language = i18next.language;

  const projectsData = {
    es: [
      {
        name: "LongX",
        company: "GranMend",
        period: "Feb 2025 - Presente",
        description: "Aplicación Web para la gestión de órdenes de compra/venta de criptomonedas.",
        technologies: ["React", "Vite", "Javascript", "WebSockets", "Tailwind CSS", "Zustand", "Formik", "Yup"],
        achievements: [
          "Migración desde create-react-app a Vite con mejoras significativas en performance.",
          "Implementación de sistema de chat en tiempo real para usuarios de una misma órden de compra/venta utilizando WebSockets.",
          "Integración de ordenamiento y filtrado de datos en tablas de órdenes de compra/venta e historial de transacciones.",
          "Restructuración de código para arquitectura más limpia.",
          "Mejoras en UX/UI para una mejor experiencia del usuario, desarrollo de diseño mobile-first."
        ],
        demoLink: "https://longxchangefrontend-development.up.railway.app/"
      },
      {
        name: "PlanetPay",
        company: "Bigger",
        period: "Dic 2023 - Dic 2024",
        description: "Plataforma web que ofrece servicios de infraestructura para empresas que desean ofrecer servicios de pagos digitales.",
        technologies: ["React Native", "AWS Cognito", "Stellar", "TypeScript", "React Native", "AWS Cognito", "Stellar", "Jest", "React Native Testing Library", "AWS Cognito", "Stellar", "Android Studio"],
        achievements: [
          "Participé en el desarrollo del dashboard de administración para la adquisición de productos y servicios FinTech.",
          "Implementé sistema de selección de productos, carrito de compras y checkout integrado con Stripe.",
          "Construí interfaces para gestión de suscripciones y visualización de productos disponibles.",
          "Participé en el desarrollo de la billetera digital white-label del ecosistema PlanetPay, la cual cuenta con funcionalidades de swap y conversión entre monedas tradicionales y cripto, ingreso/egreso de dinero FIAT, autenticación segura con AWS Cognito, historial de transacciones, balance de saldos.",
          "Colaboré en la landing page corporativa (planetpay.io) para captación de clientes."
        ],
        demoLink: "https://planetpay.io/"
      },
      {
        name: "Billetera Emigro",
        company: "Bigger",
        period: "Dic 2023 - Dic 2024",
        description: "Billetera móvil basada en blockchain Stellar",
        technologies: ["React Native", "Stellar", "AWS Cognito"],
        achievements: [
          "Implementación de autenticación segura con AWS Cognito",
          "Sistema de conversión y swap de criptoactivos",
          "Financiamiento de $80k de Stellar Foundation"
        ],
        demoLink: "https://www.youtube.com/watch?v=nS8COzNxajc"
      }
    ],
    en: [
      {
        name: "LongX Migration",
        company: "GranMend",
        period: "Feb 2025 - Present",
        description: "Migration of Create React App to Vite improving performance and build speed. Implementation of real-time chat with WebSockets for buy/sell orders.",
        technologies: ["React", "Vite", "TypeScript", "WebSockets", "Tailwind CSS"],
        achievements: [
          "Successful migration to Vite with significant performance improvements",
          "Implementation of real-time chat system",
          "Code restructuring for cleaner architecture"
        ],
        demoLink: "https://longxchangefrontend-development.up.railway.app/"
      },
      {
        name: "PlanetPay Wallet",
        company: "Bigger",
        period: "Dec 2023 - Dec 2024",
        description: "White-label digital wallet with asset swaps, payment system, and secure authentication with AWS Cognito.",
        technologies: ["React Native", "AWS Cognito", "Stellar", "Stripe"],
        achievements: [
          "Development of white-label solution for multiple clients",
          "Implementation of KYC/KYB forms with dynamic validations",
          "Secured $80k funding from Stellar Foundation"
        ],
        demoLink: "https://planetpay.io/"
      },
      {
        name: "Emigro Wallet",
        company: "Bigger",
        period: "Dec 2023 - Dec 2024",
        description: "Mobile wallet based on Stellar blockchain with swap and conversion functions between traditional and crypto currencies.",
        technologies: ["React Native", "Stellar", "AWS Cognito"],
        achievements: [
          "Implementation of secure authentication with AWS Cognito",
          "System for conversion and swap of crypto assets",
          "Secured $80k funding from Stellar Foundation"
        ],
        demoLink: "https://www.youtube.com/watch?v=nS8COzNxajc"
      }
    ]
  };

  const cvProjects = language === 'es' ? projectsData.es : projectsData.en;

  return (
    <div className="container mx-auto px-4" id="projects">
      <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        {i18next.t('projects.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {cvProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {project.name}
              </h3>
              <span className="text-sm text-gray-400 ml-4">
                {project.period}
              </span>
            </div>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-blue-400 text-sm font-semibold mb-2">{i18next.t('projects.achievements')}</h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center text-sm"
                >
                  🌐 {i18next.t('projects.demo')}
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
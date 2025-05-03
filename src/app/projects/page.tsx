'use client'

import { motion } from 'motion/react'
import i18next from '../../i18n'

export default function Projects() {
  const language = i18next.language;

  const projectsData = {
    es: [
      {
        name: "LongX",
        company: "GranMenú",
        period: "Feb 2025 - Presente",
        description: "Aplicación Web para la gestión de órdenes de compra/venta de criptomonedas.",
        technologiesTitle: "Tecnologías utilizadas",
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
        technologiesTitle: "Tecnologías utilizadas",
        technologies: ["React Native", "AWS Cognito", "Stellar", "TypeScript", "Jest", "React Native Testing Library", "Android Studio"],
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
        description: "Billetera móvil basada en blockchain Stellar con funciones de swap y conversión entre monedas tradicionales y criptomonedas.",
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
        name: "LongX",
        company: "GranMenú",
        period: "Feb 2025 - Present",
        description: "Web application for managing cryptocurrency buy/sell orders.",
        technologiesTitle: "Technologies used",
        technologies: ["React", "Vite", "Javascript", "WebSockets", "Tailwind CSS", "Zustand", "Formik", "Yup"],
        achievements: [
          "Migration from create-react-app to Vite with significant performance improvements.",
          "Implementation of real-time chat system for users of the same buy/sell order using WebSockets.",
          "Integration of sorting and filtering data in buy/sell order tables and transaction history.",
          "Code restructuring for cleaner architecture.",
          "UX/UI improvements for better user experience, mobile-first design development."
        ],
        demoLink: "https://longxchangefrontend-development.up.railway.app/"
      },
      {
        name: "PlanetPay",
        company: "Bigger",
        period: "Dec 2023 - Dec 2024",
        description: "Web platform offering infrastructure services for companies wanting to provide digital payment services.",
        technologiesTitle: "Technologies used",
        technologies: ["React Native", "AWS Cognito", "Stellar", "TypeScript", "Jest", "React Native Testing Library", "Android Studio"],
        achievements: [
          "Participated in the development of the administration dashboard for FinTech product and service acquisition.",
          "Implemented product selection system, shopping cart, and Stripe-integrated checkout.",
          "Built interfaces for subscription management and available product visualization.",
          "Participated in the development of PlanetPay ecosystem's white-label digital wallet, featuring swap and conversion between traditional and crypto currencies, FIAT money input/output, secure authentication with AWS Cognito, transaction history, balance tracking.",
          "Collaborated on the corporate landing page (planetpay.io) for customer acquisition."
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
            className="
              bg-gradient-to-br 
              from-gray-800/70 
              to-gray-800/40 
              border 
              border-gray-700/50 
              rounded-2xl 
              p-6 
              shadow-xl 
              overflow-hidden 
              relative
              group
              transition-all
              duration-300
              mb-6
            "
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <motion.h3 
                  className="
                    text-2xl 
                    font-bold 
                    text-transparent 
                    bg-clip-text 
                    bg-gradient-to-r 
                    from-blue-400 
                    to-purple-600 
                    transition-all 
                    duration-300
                    mb-1
                  "
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </motion.h3>
                <p className="text-sm text-gray-400 flex justify-around">
                  {project.company}  <span className="ml-2">{project.period}</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-white/90 font-semibold mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-blue-400 text-sm font-semibold mb-2">
                {i18next.t('projects.achievements')}
              </h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-400 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-blue-400 text-sm font-semibold mb-2">
                {project.technologiesTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(96, 165, 250, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                  className="
                    bg-gradient-to-r 
                    from-blue-500 
                    to-purple-600 
                    text-white 
                    px-5 
                    py-2.5 
                    rounded-full 
                    flex 
                    items-center 
                    text-sm 
                    font-medium
                    shadow-md
                    hover:opacity-90
                    transition-all
                    duration-300
                  "
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
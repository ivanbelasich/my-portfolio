'use client'

import { AnimatePresence, motion } from 'motion/react'
import i18next from '../../i18n'
import { useState } from 'react';
import { FiExternalLink, FiPlay, FiX } from 'react-icons/fi';

export default function Projects() {
  const language = i18next.language;
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
        demoLink: "https://drive.google.com/file/d/1nExqDf4dINN_0rkP005YEcIt9nbv1-y9/view?usp=drive_link",
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
        demoLink: "https://drive.google.com/file/d/1oOlJbuCrez1aNQ4xhuK5lMpHhmZ4Dc4m/view?usp=sharing"
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
        demoLink: "https://drive.google.com/file/d/1nExqDf4dINN_0rkP005YEcIt9nbv1-y9/view?usp=drive_link"
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
        demoLink: "https://drive.google.com/file/d/1oOlJbuCrez1aNQ4xhuK5lMpHhmZ4Dc4m/view?usp=sharing"
      }
    ]
  };

  const cvProjects = language === 'es' ? projectsData.es : projectsData.en

  const isVideoLink = (url: string) => {
    return /\.(mp4|webm|mov)$/i.test(url) ||
      /youtube|youtu\.be|drive\.google/.test(url)
  }

  const getVideoEmbedUrl = (url: string) => {
    // YouTube
    if (/youtube|youtu\.be/.test(url)) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      const videoId = (match && match[2].length === 11) ? match[2] : null
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }

    // Google Drive (necesitarás ajustar esto según cómo compartas tus videos)
    if (/drive\.google/.test(url)) {
      const fileId = url.match(/\/file\/d\/([^\/]+)/)?.[1] ||
        url.match(/id=([^&]+)/)?.[1]
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url
    }

    // Para enlaces directos a videos (MP4, WebM, etc)
    return url
  }

  const openVideoModal = (url: string) => {
    setSelectedVideo(url)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="container mx-auto px-4" id="projects">
      <h3 className="text-2xl font-bold mb-2 text-text-main">
        {i18next.t('projects.title')}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {cvProjects.map((project, index) => {
          const hasVideo = project.demoLink && isVideoLink(project.demoLink)

          return (
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
                from-border-subtle/70 
                to-border-subtle/40 
                border 
                border-primary-accent/50 
                rounded-2xl 
                p-6 
                shadow-xl 
                overflow-hidden 
                relative
                group
                mb-6
              "
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-accent"></div>

              {/* Top-right corner triangle banner */}
              {project.demoLink && (
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden z-10 group">
                  {/* Rotated background element */}
                  <div
                    className="absolute top-[20px] cursor-pointer -right-[48px] w-42 h-12 bg-primary-accent shadow-md transform rotate-45 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-90"
                  >
                    {/* Content (Icon) inside the rotated element */}
                    {hasVideo ? (
                      <motion.button
                        title={i18next.t('projects.watchDemo')}
                        onClick={() => openVideoModal(project.demoLink)}
                        className="text-background-main transform -rotate-45 mt-1 cursor-pointer" // Counter-rotate icon
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiPlay size={18} />
                      </motion.button>
                    ) : (
                      <motion.a
                        title={i18next.t('projects.viewProject')}
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-main transform -rotate-45 mt-1 cursor-pointer" // Counter-rotate icon
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center mb-4">
                <div>
                  <motion.h3
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {project.name}
                  </motion.h3>
                  <p className="text-sm text-text-secondary">
                    {project.company}  <span className="ml-2">{project.period}</span>
                  </p>
                </div>
              </div>

              <p className="text-lg text-text-main font-semibold mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-primary-accent text-sm font-semibold mb-2">
                  {i18next.t('projects.achievements')}
                </h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-accent mr-2">•</span>
                      <span className="text-text-main/80 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-primary-accent text-sm font-semibold mb-2">
                  {project.technologiesTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-primary-accent/20 text-primary-accent border-primary-accent/30 py-1 rounded-full text-xs font-medium"
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

              {/* Removed the original button div that was here */}

            </motion.div>
          )
        })}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background-main/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 text-text-main bg-primary-accent/80 hover:bg-primary-accent/90 rounded-full p-2 transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src={getVideoEmbedUrl(selectedVideo)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
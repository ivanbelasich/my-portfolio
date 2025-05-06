'use client'

import { motion } from 'framer-motion'
import i18next from '../../i18n'

export default function WorkMethodologies() {
    const workMethodologiesData = [
        {
            key: "agile",
            icon: "🚀",
            titleEs: "Agile & Scrum",
            titleEn: "Agile & Scrum",
            descriptionEs: "Implementación de metodologías ágiles con sprints de 2 semanas, daily standups, y revisiones periódicas de progreso.",
            descriptionEn: "Implementation of agile methodologies with 2-week sprints, daily standups, and periodic progress reviews."
        },
        {
            key: "cicd",
            icon: "⚙️",
            titleEs: "CI/CD",
            titleEn: "CI/CD",
            descriptionEs: "Configuración de pipelines de GitHub Actions para integración y despliegue continuo, automatizando pruebas y builds.",
            descriptionEn: "Configuration of GitHub Actions pipelines for continuous integration and deployment, automating tests and builds."
        },
        {
            key: "code-quality",
            icon: "🛡️",
            titleEs: "Calidad de Código",
            titleEn: "Code Quality",
            descriptionEs: "Uso de Snyk para detección de vulnerabilidades, revisiones de código mediante Pull Requests, y mantención de estándares de código.",
            descriptionEn: "Using Snyk for vulnerability detection, code reviews through Pull Requests, and maintaining code standards."
        },
        {
            key: "feature-delivery",
            icon: "🎯",
            titleEs: "Entrega de Features",
            titleEn: "Feature Delivery",
            descriptionEs: "Entrega incremental de features con validación de stakeholders, prototipado rápido y mejora continua.",
            descriptionEn: "Incremental feature delivery with stakeholder validation, rapid prototyping, and continuous improvement."
        }
    ];

    const workMethodologies = workMethodologiesData.map(methodology => ({
        title: i18next.language === 'es' ? methodology.titleEs : methodology.titleEn,
        description: i18next.language === 'es' ? methodology.descriptionEs : methodology.descriptionEn,
        icon: methodology.icon
    }));

    return (
        <div className="container mx-auto px-4 py-16">
            <h3 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-slate-200">
                {i18next.language === 'es'
                    ? "Metodologías de Trabajo"
                    : "Work Methodologies"}
            </h3>

            <div className="bg-gradient-to-br from-slate-900/80 to-sky-500/70 rounded-2xl p-8 border border-sky-500/30 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                    {workMethodologies.map((methodology, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.2,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-slate-900/50 rounded-xl p-6 border border-sky-500/30 hover:border-sky-500/50 "
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-4 text-sky-500">{methodology.icon}</span>
                                <h4 className="text-xl font-semibold text-sky-500">{methodology.title}</h4>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {methodology.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
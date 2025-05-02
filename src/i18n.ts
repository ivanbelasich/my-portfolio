import i18next from 'i18next';

i18next.init({
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  resources: {
    es: {
      translation: {
        hero: {
          title: "Iván Belasich",
          subtitle: "Desarrollador de Software | Frontend & Blockchain",
          aboutMe: "Sobre Mí",
          projects: "Proyectos"
        },
        about: {
          experience: {
            title: "Experiencia",
          },
          title: "Sobre Mí",
          description: "Desarrollador de Software con más de 2 años de experiencia, especializado en frontend y con sólidos conocimientos en backend. Mi pasión se centra en el desarrollo de aplicaciones web y móviles, con un enfoque particular en tecnologías Fintech y blockchain.",
          granmenu: {
            role: "Frontend Developer",
            period: "Enero 2023 - Actualidad",
            description: "Desarrollo de aplicaciones web modernas utilizando React, TypeScript y tecnologías de vanguardia."
          },
          bigger: {
            role: "Desarrollador de Software",
            period: "Abril 2023 - Julio 2023",
            description: "Implementación de soluciones fintech con énfasis en blockchain y aplicaciones móviles."
          }
        },
        projects: {
          title: "Mis Proyectos Destacados",
          projects: [
            {
              name: "LongX",
              company: "GranMenú",
              description: "Migré el proyecto de Create React App a Vite, mejorando rendimiento y escalabilidad.",
              technologies: ["React", "Vite", "TypeScript", "Websockets"],
              period: "Enero 2023 - Marzo 2023"
            },
            {
              name: "PlanetPay Wallet",
              company: "Bigger",
              description: "Billetera digital white-label con funcionalidades de swaps, pagos y autenticación segura.",
              technologies: ["React", "AWS Cognito", "Stripe", "TypeScript"],
              period: "Abril 2023 - Julio 2023"
            }
          ],
          demo: "Demo",
          code: "Código"
        },
        skills: {
          title: "Mis Habilidades",
          frontend: {
            category: "Frontend",
            skills: ["React", "React Native", "TypeScript", "Tailwind CSS", "Zustand"]
          },
          backend: {
            category: "Backend",
            skills: ["Node.js", "NestJS", "Express.js", "PostgreSQL"]
          },
          devops: {
            category: "DevOps & Tools",
            skills: ["Docker", "GitHub Actions", "Snyk", "Git", "Postman"]
          }
        },
        contact: {
          title: "Contáctame",
          nameLabel: "Nombre",
          namePlaceholder: "Tu nombre",
          emailLabel: "Email",
          emailPlaceholder: "Tu email",
          messageLabel: "Mensaje",
          messagePlaceholder: "Tu mensaje",
          submitButton: "Enviar Mensaje",
          submitMessage: "¡Gracias por tu mensaje! Me pondré en contacto pronto.",
          alternativeContact: "También puedes contactarme directamente:",
          email: "ivanbelasich@gmail.com",
          linkedin: "LinkedIn"
        }
      }
    },
    en: {
      translation: {
        hero: {
          title: "Iván Belasich",
          subtitle: "Software Developer | Frontend & Blockchain",
          aboutMe: "About Me",
          projects: "Projects"
        },
        about: {
          experience: {
            title: "Experience",
          },
          title: "About Me",
          description: "Software Developer with over 2 years of experience, specialized in frontend and with solid backend knowledge. My passion focuses on web and mobile application development, with a particular emphasis on Fintech and blockchain technologies.",
          granmenu: {
            role: "Frontend Developer",
            period: "January 2023 - Present",
            description: "Development of modern web applications using React, TypeScript, and cutting-edge technologies."
          },
          bigger: {
            role: "Software Developer",
            period: "April 2023 - July 2023",
            description: "Implementation of fintech solutions with emphasis on blockchain and mobile applications."
          }
        },
        projects: {
          title: "My Projects",
          projects: [
            {
              name: "LongX",
              company: "GranMenú",
              description: "I migrated the Create React App project to Vite, improving performance and scalability.",
              technologies: ["React", "Vite", "TypeScript", "Websockets"],
              period: "January 2023 - March 2023"
            },
            {
              name: "PlanetPay Wallet",
              company: "Bigger",
              description: "I created a white-label digital wallet with swap, payment, and secure authentication features.",
              technologies: ["React", "AWS Cognito", "Stripe", "TypeScript"],
              period: "April 2023 - July 2023"
            }
          ],
          demo: "Demo",
          code: "Code"
        },
        skills: {
          title: "My Skills",
          frontend: {
            category: "Frontend",
            skills: ["React", "React Native", "TypeScript", "Tailwind CSS", "Zustand"]
          },
          backend: {
            category: "Backend",
            skills: ["Node.js", "NestJS", "Express.js", "PostgreSQL"]
          },
          devops: {
            category: "DevOps & Tools",
            skills: ["Docker", "GitHub Actions", "Snyk", "Git", "Postman"]
          }
        },
        contact: {
          title: "Contact Me",
          nameLabel: "Name",
          namePlaceholder: "Your name",
          emailLabel: "Email",
          emailPlaceholder: "Your email",
          messageLabel: "Message",
          messagePlaceholder: "Your message",
          submitButton: "Send Message",
          submitMessage: "Thank you for your message! I'll get back to you soon.",
          alternativeContact: "You can also contact me directly:",
          email: "ivanbelasich@gmail.com",
          linkedin: "LinkedIn"
        }
      }
    }
  }
});

export default i18next;
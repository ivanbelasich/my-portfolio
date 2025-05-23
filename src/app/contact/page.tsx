'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import i18next from '../../i18n'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    form: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
      form: ''
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = i18next.language === 'es'
        ? 'El nombre es obligatorio'
        : 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = i18next.language === 'es'
        ? 'El nombre debe tener al menos 2 caracteres'
        : 'Name must be at least 2 characters long'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = i18next.language === 'es'
        ? 'El correo electrónico es obligatorio'
        : 'Email is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = i18next.language === 'es'
        ? 'Ingrese un correo electrónico válido'
        : 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = i18next.language === 'es'
        ? 'El mensaje es obligatorio'
        : 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = i18next.language === 'es'
        ? 'El mensaje debe tener al menos 10 caracteres'
        : 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.currentTarget.setAttribute('novalidate', '')

    setIsSubmitting(true)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      const formElement = e.currentTarget as HTMLFormElement
      const formDataToSend = new FormData(formElement)

      // Configuración específica para FormSubmit
      formDataToSend.append('_captcha', 'false')
      formDataToSend.append('_template', 'table')

      const response = await fetch(process.env.NEXT_PUBLIC_FORMSUBMIT_URL!, {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: ''
        })

        setErrors(prev => ({
          ...prev,
          form: i18next.language === 'es'
            ? 'Mensaje enviado exitosamente. ¡Gracias por contactarme!'
            : 'Message sent successfully. Thank you for reaching out!'
        }))
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error(error)
      setErrors(prev => ({
        ...prev,
        form: i18next.language === 'es'
          ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
          : 'Error sending message. Please try again.'
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full grid md:grid-cols-3 gap-12 bg-background-main/50 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-primary-accent/50"
      >
        {/* Contact Information Column */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-primary-accent">
              {i18next.t('contact.title')}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <a
                href="mailto:ivanbelasich@gmail.com"
                className="flex items-center space-x-3 text-text-secondary hover:text-text-main transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className='text-text-secondary'>ivanbelasich@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/ivanbelasich"
                target="_blank"
                className="flex items-center space-x-3 text-text-secondary hover:text-primary-accent transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className='text-text-secondary'>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ivanbelasich"
                target="_blank"
                className="flex items-center space-x-3 text-text-secondary hover:text-text-main transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-6"
        >
          {/* Campos ocultos para FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portfolio!" />

          {errors.form && (
            <div className={`
              mt-4 p-4 border rounded-xl text-sm
              ${errors.form === i18next.t('contact.successMessage')
                ? 'bg-primary-accent/20 border-primary-accent/50 text-primary-accent'
                : 'bg-red-600/20 border-red-500/50 text-red-300'}
            `}>
              {errors.form}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
              {i18next.t('contact.nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 bg-border-subtle border rounded-xl text-text-main 
                focus:outline-none focus:ring-2 transition-all duration-300
                ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-primary-accent/60 focus:ring-primary-accent'}
              `}
              placeholder={i18next.t('contact.namePlaceholder')}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
              {i18next.t('contact.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 bg-border-subtle border rounded-xl text-text-main 
                focus:outline-none focus:ring-2 transition-all duration-300
                ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-primary-accent/60 focus:ring-primary-accent'}
              `}
              placeholder={i18next.t('contact.emailPlaceholder')}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
              {i18next.t('contact.messageLabel')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4} // Adjusted rows from 5 to 4 for better spacing
              className={`
                w-full px-4 py-3 bg-border-subtle border rounded-xl text-text-main 
                focus:outline-none focus:ring-2 transition-all duration-300 resize-none
                ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-primary-accent/60 focus:ring-primary-accent'}
              `}
              placeholder={i18next.t('contact.messagePlaceholder')}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-2">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="
              w-full px-6 py-3 
              text-lg font-semibold 
              rounded-xl
              shadow-lg 
              bg-primary-accent 
              text-background-main 
              disabled:opacity-50 disabled:cursor-not-allowed 
              hover:brightness-110 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background-main 
            "
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {i18next.t('contact.submitting')}
              </span>
            ) : (
              i18next.t('contact.submitButton')
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
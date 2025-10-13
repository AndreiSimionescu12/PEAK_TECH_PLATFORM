'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'

interface ServiceCardProps {
  service: typeof siteConfig.services[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const iconMap = {
    Globe: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    ),
    ShoppingCart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
      </svg>
    ),
    Smartphone: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    Code: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative"
    >
      {/* Background Glow */}
      <motion.div
        whileHover={{ opacity: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 rounded-2xl blur-xl transition-opacity duration-300`}
      />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}
        >
          {iconMap[service.icon as keyof typeof iconMap]}
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <div className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:text-white"
          >
            <span className="font-medium">Află mai multe</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-slate-900/50 to-slate-800/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-blue-400 text-sm font-medium">SERVICII</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluții digitale{' '}
            <span className="gradient-text">complete</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Înțelegem că succesul tău este succesul nostru, de aceea ne angajăm să îți oferim servicii digitale complete — de la realizare site până la promovare online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ești pregătit să faci pasul următor?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Hai să discutăm cum putem ajuta afacerea ta să exceleze. Devino următoarea poveste de succes în portofoliul nostru!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {siteConfig.cta.secondary}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

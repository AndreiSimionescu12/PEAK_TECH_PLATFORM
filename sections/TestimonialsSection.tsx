'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'

interface TestimonialCardProps {
  testimonial: typeof siteConfig.testimonials[0]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      {/* Background Glow */}
      <motion.div
        whileHover={{ opacity: 0.2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 rounded-2xl blur-xl transition-opacity duration-300"
      />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-20">
          <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-blue-400" />
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
              viewport={{ once: true }}
            >
              <StarIcon className="w-5 h-5 text-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg">
          "{testimonial.content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          
          {/* Author Info */}
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.role}</div>
            <div className="text-sm text-blue-400">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-slate-800/30 to-slate-900/50">
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
            <span className="text-blue-400 text-sm font-medium">TESTIMONIALE</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ce spun{' '}
            <span className="gradient-text">clienții</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Suntem mândri de feedback-ul pozitiv pe care îl primim de la clienții noștri. Fiecare proiect este o oportunitate de a construi relații durabile și de a livra rezultate excepționale.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteConfig.testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Alătură-te comunității noastre de clienți mulțumiți
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  100%
                </motion.div>
                <div className="text-white font-semibold mb-1">Rate satisfacție</div>
                <div className="text-gray-400 text-sm">Clienți mulțumiți</div>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  24/7
                </motion.div>
                <div className="text-white font-semibold mb-1">Suport tehnic</div>
                <div className="text-gray-400 text-sm">Asistență continuă</div>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  3+
                </motion.div>
                <div className="text-white font-semibold mb-1">Ani experiență</div>
                <div className="text-gray-400 text-sm">În dezvoltare digitală</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Devino următorul nostru client mulțumit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

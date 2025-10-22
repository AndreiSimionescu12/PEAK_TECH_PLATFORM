'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-12 md:py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              Servicii
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-white/90 max-w-2xl leading-relaxed">
              Înțelegem că succesul tău este succesul nostru, de aceea ne angajăm să îți oferim servicii digitale complete, de la realizare site până la promovare online.
            </p>
          </motion.div>

          {/* CTA Button - Responsive */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex-shrink-0 rounded-full border-2 border-white/30 hover:border-blue-400 text-white hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold">Programează</div>
              <div className="text-xs md:text-sm font-semibold">o întâlnire</div>
              <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 mx-auto mt-1 md:mt-2 rotate-[-45deg]" />
            </div>
          </motion.button>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Service Item */}
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-2 md:gap-4 lg:gap-12 py-5 md:py-6 lg:py-8 border-b border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
                {/* Title - Left */}
                <div className="lg:col-span-3 mb-2 lg:mb-0">
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description - Center */}
                <div className="lg:col-span-8">
                  <p className="text-sm md:text-base lg:text-lg text-white/80 md:text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow - Right */}
                <div className="flex lg:col-span-1 items-center justify-end mt-2 lg:mt-0">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-700 group-hover:border-blue-400 flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Ești pregătit să faci pasul următor?
            </h3>
            <p className="text-sm md:text-base text-white mb-4 md:mb-6 max-w-2xl mx-auto">
              Hai să discutăm cum putem ajuta afacerea ta să exceleze. Devino următoarea poveste de succes în portofoliul nostru!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              {siteConfig.cta.secondary}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

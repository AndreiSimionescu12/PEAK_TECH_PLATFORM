'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, LightBulbIcon, ShieldCheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function AboutSection() {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Inovație',
      description: 'Ne adaptăm constant la tehnologiile emergente și găsim soluții creative pentru provocările complexe.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Calitate',
      description: 'Livrăm produse de înaltă calitate, testate riguros și optimizate pentru performanță maximă.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Fiabilitate',
      description: 'Respectăm întotdeauna termenii de livrare și oferim suport tehnic continuu pentru toate proiectele.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Rezultate',
      description: 'Ne concentrăm pe rezultate măsurabile și pe creșterea sustenabilă a afacerii clienților noștri.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-slate-800/30 to-slate-900/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Parteneri în transformarea{' '}
              <span className="gradient-text">ta digitală</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-white text-lg leading-relaxed"
            >
              <p>
                La <span className="text-white font-semibold">Peak Tech SRL</span>, transformăm provocările în oportunități de succes și construim parteneriate durabile cu toți clienții noștri. Ne ocupăm de <span className="text-blue-400 font-semibold">realizarea de site-uri</span> profesionale și oferim <span className="text-blue-400 font-semibold">soluții digitale personalizate</span>, concepute să alinieze perfect viziunea și obiectivele afacerii tale.
              </p>
              
              <p>
                Am sprijinit numeroase companii să își atingă obiectivele digitale și să crească în mediul online. Printr-o abordare personalizată și rezultate măsurabile, livrăm cele mai bune soluții pentru <span className="text-blue-400 font-semibold">prezență online eficientă</span>, de la realizare site până la strategie digitală completă.
              </p>
              
              <p>
                Fie că ești startup sau companie matură, oferim <span className="text-blue-400 font-semibold">servicii digitale</span> care dezvoltă branduri online și consolidează încrederea clienților tăi.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Află mai multe despre noi
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30"
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Blue Glow Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Border Glow */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

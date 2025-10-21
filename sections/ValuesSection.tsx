'use client'

import { motion } from 'framer-motion'
import { EyeIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ValuesSection() {
  const values = [
    {
      icon: EyeIcon,
      title: 'Forma urmează funcția',
      description: 'Te vom ajuta ca afacerea ta să funcționeze mai bine și să arate bine făcând acest lucru.',
      delay: 0.2,
      offsetY: 'md:mt-0', // First card - normal position
    },
    {
      icon: UserGroupIcon,
      title: 'Consideră-ne partenerul tău',
      description: 'Obiectivul nostru principal este să ne dezvoltăm și să inovăm împreună, ca parteneri.',
      delay: 0.4,
      offsetY: 'md:mt-12', // Second card - slightly down
    },
    {
      icon: ClockIcon,
      title: 'Îți vom economisi timpul',
      description: 'Ne vom ocupa de problemele tale digitale, pentru ca tu să ai timp să conduci compania într-un mod corespunzător.',
      delay: 0.6,
      offsetY: 'md:mt-24', // Third card - more down
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: value.delay }}
                className={`relative group ${value.offsetY}`}
              >
                <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 h-full shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                  {/* Icon with blue gradient border */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-8"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/30">
                      <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                        <IconComponent className="w-12 h-12 text-blue-400" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white leading-relaxed text-base">
                    {value.description}
                  </p>

                  {/* Blue Glow Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


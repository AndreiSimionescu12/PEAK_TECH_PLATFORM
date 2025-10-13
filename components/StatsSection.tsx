'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/constants/siteConfig'

interface StatCardProps {
  number: string
  label: string
  description: string
  index: number
}

function StatCard({ number, label, description, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="text-4xl font-bold gradient-text mb-2">{number}</div>
        <div className="text-xl font-semibold text-white mb-2">{label}</div>
        <div className="text-gray-400 text-sm">{description}</div>
      </motion.div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900/50 to-slate-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rezultatele vorbesc de la sine
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            De-a lungul anilor, am construit o reputație solidă prin rezultate concrete și clienți mulțumiți.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

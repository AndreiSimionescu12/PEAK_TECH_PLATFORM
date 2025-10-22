'use client'

import { motion } from 'framer-motion'
import { 
  ShoppingCartIcon,
  CreditCardIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function EcommercePage() {
  const features = [
    {
      icon: ShoppingCartIcon,
      title: 'Magazin Online Complet',
      description: 'Platformă e-commerce profesională cu toate funcționalitățile necesare pentru vânzarea online.'
    },
    {
      icon: CreditCardIcon,
      title: 'Plăți Online Integrate',
      description: 'Sistem de plată securizat cu card bancar, PayPal și alte metode populare de plată.'
    },
    {
      icon: ChartBarIcon,
      title: 'Management Comenzi',
      description: 'Gestionare simplă a produselor, stocului, comenzilor și clienților dintr-un singur loc.'
    },
    {
      icon: SparklesIcon,
      title: 'Suport Tehnic Inclus',
      description: 'Asistență tehnică continuă pentru orice problemă care poate apărea cu magazinul tău.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Planificare & Strategie',
      description: 'Analizăm produsele tale și stabilim structura magazinului pentru conversii maxime.'
    },
    {
      step: '02',
      title: 'Design & Dezvoltare',
      description: 'Creăm un design atractiv și construim magazinul cu toate funcționalitățile necesare.'
    },
    {
      step: '03',
      title: 'Configurare & Testare',
      description: 'Configurăm produsele, plățile și livrările, apoi testăm tot procesul de cumpărare.'
    },
    {
      step: '04',
      title: 'Lansare & Suport',
      description: 'Lansăm magazinul și oferim suport tehnic continuu pentru orice problemă care poate apărea.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
              >
                <ShoppingCartIcon className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">MAGAZINE ONLINE</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Magazine online care <span className="gradient-text">vând</span>
              </h1>
              
              <p className="text-xl text-white mb-8 leading-relaxed">
                Creăm platforme e-commerce complete cu sistem de plată integrat și managementul comenzilor. 
                Suport tehnic inclus pe termen lung.
              </p>

              <div className="mb-8">
                <Link href="/estimate">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <SparklesIcon className="w-5 h-5" />
                    <span>Estimează proiectul</span>
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24h</div>
                  <div className="text-sm text-gray-400">răspuns ofertă</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">∞</div>
                  <div className="text-sm text-gray-400">suport inclus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">personalizat</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/20">
                <div className="bg-white rounded-lg p-6 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-3/4"></div>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="h-24 bg-blue-100 rounded"></div>
                      <div className="h-24 bg-cyan-100 rounded"></div>
                      <div className="h-24 bg-blue-100 rounded"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              De ce să alegi <span className="gradient-text">Peak Tech</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferim soluții complete pentru vânzarea online, de la design până la lansare și suport tehnic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cum lucrăm <span className="gradient-text">împreună</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un proces simplu și transparent, de la idee la magazinul tău online live.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gata să îți <span className="gradient-text">lansezi</span> magazinul online?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Completează formularul nostru de estimare și primești o ofertă personalizată în 24 de ore. Totul transparent și fără obligații!
            </p>
            <Link href="/estimate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 mx-auto"
              >
                <SparklesIcon className="w-5 h-5" />
                <span>Estimează proiectul</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-20 flex items-center justify-center mx-auto mb-8"
        >
          <img 
            src="/images/logo_peak_tech_transparent_background.png" 
            alt="Peak Tech SRL Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Site în{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            mentenanță
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto"
        >
          Lucrăm la îmbunătățirea experienței tale. Site-ul va fi din nou disponibil în curând.
        </motion.p>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full bg-slate-700/50 rounded-full h-2 mb-8 overflow-hidden mx-auto max-w-md"
        >
          <motion.div
            animate={{
              width: ["0%", "70%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">ACTUALIZARE ÎN PROGRES</span>
          </div>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-400 mb-8"
        >
          <p className="mb-2">Pentru urgențe, ne poți contacta la:</p>
          <a 
            href="mailto:contact@peaktech.ro" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            contact@peaktech.ro
          </a>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Încearcă din nou</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>© 2025 Peak Tech SRL - Construim experiențe digitale care inspiră</p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small floating mockup - top left */}
        <motion.div
          animate={{
            y: [-10, -20, -10],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-lg border border-slate-700/30 shadow-xl hidden lg:block"
        >
          <div className="p-2">
            <div className="h-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded w-3/4 mb-1"></div>
            <div className="h-1 bg-slate-700/60 rounded w-full mb-1"></div>
            <div className="h-1 bg-slate-700/60 rounded w-2/3"></div>
          </div>
        </motion.div>

        {/* Small floating mockup - bottom right */}
        <motion.div
          animate={{
            y: [10, 20, 10],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-24 h-32 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-lg border border-slate-700/30 shadow-xl hidden lg:block"
        >
          <div className="p-2">
            <div className="h-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded w-2/3 mb-1"></div>
            <div className="h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded border border-blue-500/30 mb-1"></div>
            <div className="h-1 bg-slate-700/60 rounded w-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

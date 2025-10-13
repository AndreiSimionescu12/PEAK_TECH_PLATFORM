'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient">
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

      {/* Floating Mockups Background - Cleaner & More Visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full relative flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
          {/* Browser Window - Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: [-10, -20, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute top-5 left-5 lg:top-10 lg:left-20 w-72 sm:w-80 lg:w-[400px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-slate-700 rounded px-3 py-1.5 text-sm font-medium text-gray-300">
                peaktech.ro
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-3/4"></div>
              <div className="h-2 bg-slate-700 rounded w-full"></div>
              <div className="h-2 bg-slate-700 rounded w-5/6"></div>
              <div className="h-2 bg-slate-700 rounded w-4/6"></div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded border border-blue-500/30"></div>
                <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded border border-cyan-500/30"></div>
              </div>
            </div>
          </motion.div>

          {/* Browser Window - Center Top - STATIC */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 w-80 lg:w-[450px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden hidden lg:block"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-slate-700 rounded px-3 py-1.5 text-sm font-medium text-gray-300">
                peaktech.ro/servicii
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded w-2/3"></div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded border border-blue-500/30"></div>
                <div className="h-20 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded border border-cyan-500/30"></div>
                <div className="h-20 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded border border-indigo-500/30"></div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Phone - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [10, 0, 10],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute top-24 lg:top-32 right-10 lg:right-32 w-52 lg:w-60 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden"
          >
            <div className="bg-slate-900 h-6 flex items-center justify-center">
              <div className="w-20 h-4 bg-slate-800 rounded-full"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-2/3"></div>
              <div className="h-2 bg-slate-700 rounded w-full"></div>
              <div className="h-2 bg-slate-700 rounded w-4/5"></div>
              <div className="mt-3 space-y-2">
                <div className="h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg border border-blue-500/30"></div>
                <div className="h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg border border-cyan-500/30"></div>
              </div>
            </div>
          </motion.div>

          {/* Browser Window - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 lg:bottom-20 right-5 lg:right-20 w-80 lg:w-[420px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-slate-700 rounded px-3 py-1.5 text-sm font-medium text-gray-300">
                peaktech.ro/contact
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-slate-700 rounded w-full"></div>
                  <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                </div>
              </div>
              <div className="h-24 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded border border-indigo-500/30 mt-4"></div>
            </div>
          </motion.div>

          {/* Browser Window - Bottom Left - STATIC */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
            className="absolute bottom-10 left-5 lg:left-10 w-72 lg:w-[380px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden hidden md:block"
          >
            <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-slate-700 rounded px-3 py-1.5 text-sm font-medium text-gray-300">
                peaktech.ro/despre
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-2/3"></div>
              <div className="h-2 bg-slate-700 rounded w-full"></div>
              <div className="h-2 bg-slate-700 rounded w-5/6"></div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded border border-blue-500/30"></div>
                <div className="h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded border border-cyan-500/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dark Overlay - Reduced */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>

      {/* Main Content - Centered on Mobile, Left on Desktop */}
      <div className="container-custom relative z-10 flex items-center min-h-screen py-20 md:py-0 px-6 md:px-8">
        <div className="max-w-4xl text-center md:text-left w-full mx-auto md:mx-0">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Construim</span>
            <span className="block gradient-text">experiențe digitale</span>
            <span className="block">care inspiră</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            {siteConfig.tagline}. Transformăm ideile tale în soluții digitale de succes, 
            cu focus pe calitate, inovație și rezultate măsurabile.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Hai să discutăm!</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

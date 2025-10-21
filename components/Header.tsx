'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = [
    { name: 'Acasă', href: '#home' },
    { name: 'Despre Noi', href: '#about' },
    { name: 'Servicii', href: '#services' },
    { name: 'Testimoniale', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{siteConfig.name}</h1>
                <p className="text-xs text-blue-400 uppercase tracking-wider">DIGITAL AGENCY</p>
              </div>
            </motion.div>

            {/* Right Side - Menu + CTA */}
            <div className="flex items-center space-x-4">
              {/* Menu Button with Text */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-lg font-medium">Meniu</span>
                <Bars3Icon className="w-6 h-6 text-blue-400" />
              </motion.button>

              {/* CTA Button - Desktop only */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block btn-primary"
              >
                {siteConfig.cta.primary}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Menu Overlay - Outside Header */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-slate-900/98 backdrop-blur-lg z-[9999] flex items-center justify-center overflow-hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ position: 'fixed' }}
          >
            {/* Close Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white p-2 z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </motion.button>

            {/* Menu Items */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center space-y-8 max-h-screen overflow-y-auto overflow-x-hidden py-8 px-4 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="block text-4xl md:text-5xl font-bold text-white hover:text-blue-400 transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-12 py-4"
                >
                  {siteConfig.cta.primary}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

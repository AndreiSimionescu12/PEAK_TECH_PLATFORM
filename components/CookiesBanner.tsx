'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    // Enable analytics and other non-essential cookies here
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
    // Disable non-essential cookies here
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-blue-500/20 shadow-2xl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1 pr-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-lg">🍪</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Cookie-uri</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Folosim cookie-uri pentru a îmbunătăți experiența ta. Continuând, 
                      sunteți de acord cu cookie-urile funcționale. Puteți accepta sau 
                      respinge cookie-urile de analiză.
                    </p>
                    <Link 
                      href="/cookies-policy" 
                      className="text-blue-400 hover:text-blue-300 text-sm underline mt-1 inline-block"
                    >
                      Aflați mai multe despre cookie-uri
                    </Link>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReject}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Respinge toate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAccept}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg text-sm font-medium transition-all shadow-lg"
                >
                  Acceptă toate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
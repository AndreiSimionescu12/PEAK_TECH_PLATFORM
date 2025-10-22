'use client'

import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function EstimateSection() {
  return (
    <Link href="/estimate">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-28 right-4 sm:right-6 z-40 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2"
      >
        <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
        <span>Estimează proiectul</span>
      </motion.button>
    </Link>
  )
}
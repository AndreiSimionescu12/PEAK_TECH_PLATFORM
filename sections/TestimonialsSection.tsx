'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'
import Link from 'next/link'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = siteConfig.testimonials

  // Calculează câte carduri să afișeze pe baza viewport-ului
  const [cardsToShow, setCardsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play carusel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext()
      }, 5000) // Schimbă la fiecare 5 secunde

      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused, cardsToShow])

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Obține testimonialele vizibile
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()

  // Variante animație pentru slide
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  // Funcție pentru a renderiza stelele cu jumătate
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Stele pline
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon key={`full-${i}`} className="w-5 h-5 text-blue-400" />
      )
    }

    // Jumătate de stea
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <StarOutlineIcon className="absolute w-5 h-5 text-blue-400" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <StarIcon className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      )
    }

    // Stele goale
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarOutlineIcon key={`empty-${i}`} className="w-5 h-5 text-slate-700" />
      )
    }

    return stars
  }

  return (
    <section 
      id="testimonials" 
      className="relative py-20 md:py-32 bg-slate-950 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              TESTIMONIALE
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ce spun{' '}
            <span className="gradient-text">clienții</span>
          </h2>
          
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Suntem mândri de feedback-ul pozitiv pe care îl primim de la clienții noștri. 
            Fiecare proiect este o oportunitate de a construi relații durabile și de a livra 
            rezultate excepționale.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile, visible on md+ */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-slate-800/90 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500/50 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-slate-800/90 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500/50 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          
          {/* Mobile Navigation Buttons - Inside container */}
          <div className="md:hidden flex justify-center space-x-4 mb-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-slate-800/90 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500/50 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 bg-slate-800/90 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500/50 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden px-4 py-8">
            <motion.div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                    {/* Header with Avatar and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {/* Avatar cu gradient albastru */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        
                        {/* Name and Badge */}
                        <div>
                          <div className="font-bold text-white text-lg">
                            {testimonial.name}
                          </div>
                          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mt-1">
                            {testimonial.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rating Stars cu jumătate */}
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <blockquote className="text-white leading-relaxed mb-4 flex-grow text-base">
                      {testimonial.content}
                    </blockquote>

                    {/* Footer with timestamp */}
                    <div className="pt-4 border-t border-slate-800 flex justify-end items-center text-sm">
                      <div className="text-gray-500">
                        {testimonial.timestamp || '1 lună în urmă'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation cu albastru */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-blue-500'
                    : 'w-3 h-3 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800 max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 px-2">
              Alătură-te comunității noastre de clienți mulțumiți
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">Rate satisfacție</div>
                <div className="text-gray-400 text-xs sm:text-sm">Clienți mulțumiți</div>
              </div>

              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">Suport tehnic</div>
                <div className="text-gray-400 text-xs sm:text-sm">Asistență continuă</div>
              </div>

              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">Proiecte realizate</div>
                <div className="text-gray-400 text-xs sm:text-sm">Site-uri și aplicații</div>
              </div>
            </div>

            <Link href="/estimate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Devino următorul nostru client mulțumit
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

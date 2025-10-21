'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import ValuesSection from '@/sections/ValuesSection'
import AboutSection from '@/sections/AboutSection'
import ServicesSection from '@/sections/ServicesSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import ContactSection from '@/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
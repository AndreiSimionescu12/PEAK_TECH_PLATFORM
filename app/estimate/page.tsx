'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  ShoppingCartIcon, 
  DevicePhoneMobileIcon, 
  CogIcon,
  ClockIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EstimatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    services: [] as string[],
    budget: 1500,
    timeline: '1-2',
    description: ''
  })

  const services = [
    { id: 'web-presentation', name: 'Site de prezentare', Icon: GlobeAltIcon },
    { id: 'ecommerce', name: 'Magazin online', Icon: ShoppingCartIcon },
    { id: 'mobile-app', name: 'Aplicație mobilă', Icon: DevicePhoneMobileIcon },
    { id: 'custom-software', name: 'Software custom', Icon: CogIcon },
  ]

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Cererea ta a fost trimisă! Îți vom răspunde în 24 de ore.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <Header />
      
      <section className="relative py-20 md:py-32 bg-slate-950 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-blue-400">Estimează</span> proiectul tău
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              Completează formularul și primește o ofertă personalizată în 24 de ore. Totul transparent, detaliat și fără obligații!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form - Left Side */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nume și prenumele tău *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Introdu numele tău"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Adresă de email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Telefon mobil *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="+40 123 456 789"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Companie (opțional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Numele companiei"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Industria ta *
                  </label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="">Selectează industria</option>
                    <option value="retail">Retail / E-commerce</option>
                    <option value="services">Servicii profesionale</option>
                    <option value="healthcare">Sănătate</option>
                    <option value="education">Educație</option>
                    <option value="technology">Tehnologie</option>
                    <option value="manufacturing">Producție</option>
                    <option value="real-estate">Imobiliare</option>
                    <option value="hospitality">Horeca</option>
                    <option value="other">Altele</option>
                  </select>
                </div>

                {/* Services Selection */}
                <div>
                  <label className="block text-white text-sm font-medium mb-4">
                    Selectează serviciile de care ai nevoie *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <motion.label
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-slate-700 bg-slate-800 hover:border-blue-500/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="hidden"
                        />
                        <service.Icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                        <span className="text-white text-sm font-medium">{service.name}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Budget Slider */}
                <div>
                  <label className="block text-white text-sm font-medium mb-4">
                    Buget: <span className="text-blue-400 font-bold">€{formData.budget.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-blue"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>€300</span>
                    <span>€10,000</span>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-white text-sm font-medium mb-4">
                    Termen limită
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {['1-2 săpt.', '1-2', '2-3', '3+'].map((option) => (
                      <motion.button
                        key={option}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, timeline: option })}
                        className={`py-3 px-2 rounded-lg font-medium transition-all text-sm ${
                          formData.timeline === option
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {option === '1-2 săpt.' ? option : `${option} luni`}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Descrie-ne proiectul tău
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Spune-ne mai multe despre viziunea ta, funcționalitățile dorite, sau orice alte detalii importante..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                >
                  Trimite cererea de estimare
                </motion.button>
              </form>
            </motion.div>

            {/* Info Cards - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Card 1 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Dă-ne doar 24 ore</h3>
                    <p className="text-gray-300">
                      și vom avea răspunsul pregătit. Îți vom trimite o estimare detaliată pentru proiectul tău.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Vom crea o estimare</h3>
                    <p className="text-gray-300">
                      bazată pe ore de lucru, timeline și costuri. Totul transparent și detaliat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Programează o consultanță gratuită</h3>
                <p className="text-gray-300 mb-4">
                  Discută cu experții noștri despre proiectul tău și primește o ofertă personalizată în 24 de ore.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">{siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom Slider Styles */}
        <style jsx>{`
          .slider-blue::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          .slider-blue::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: none;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
        `}</style>
      </section>

      <Footer />
    </div>
  )
}

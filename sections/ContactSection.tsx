'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  SparklesIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { siteConfig } from '@/constants/siteConfig'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    description: '',
    services: [] as string[],
    budget: 3000,
    timeline: '1-2'
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
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mulțumim! Te vom contacta în curând pentru discuția despre proiect.')
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: siteConfig.email,
      description: 'Trimite-ne un mesaj'
    },
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: siteConfig.phone,
      description: 'Luni - Vineri, 09:00 - 17:00'
    },
    {
      icon: MapPinIcon,
      title: 'Adresă',
      value: siteConfig.address,
      description: 'București, România'
    }
  ]

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-blue-400 text-sm font-medium">CONTACT</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-blue-400">Estimează</span> proiectul tău
          </h2>
          
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Completează formularul și primește o ofertă personalizată în 24 de ore. Totul transparent, detaliat și fără obligații!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Numele și prenumele tău *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800 border-b-2 border-blue-500 text-white px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
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
                  className="w-full bg-slate-800 border-b-2 border-blue-500 text-white px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
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
                  className="w-full bg-slate-800 border-b-2 border-blue-500 text-white px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="+40758989515"
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
                  className="w-full bg-slate-800 border-b-2 border-blue-500 text-white px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Numele companiei"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Industria ta *
                </label>
                <input
                  type="text"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-slate-800 border-b-2 border-blue-500 text-white px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Ex: E-commerce, Sănătate, Educație..."
                />
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
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>€300</span>
                  <span>€2,500</span>
                  <span>€5,000</span>
                  <span>€10,000+</span>
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
                  Povestește-ne despre proiectul tău *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                  className="w-full bg-slate-800 border-b-2 border-blue-500 text-white px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Descrie-ne proiectul tău și cum te putem ajuta..."
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <a
                        href={info.title === 'Email' ? `mailto:${info.value}` : info.title === 'Telefon' ? `tel:${info.value}` : '#'}
                        className="text-blue-400 hover:text-blue-300 font-medium mb-1 block transition-colors"
                      >
                        {info.value}
                      </a>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Dă-ne doar 24 ore
                  </h3>
                  <p className="text-gray-300">
                    și vom avea răspunsul pregătit. Îți vom trimite o estimare detaliată pentru proiectul tău.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Vom crea o estimare
                  </h3>
                  <p className="text-gray-300">
                    bazată pe ore de lucru, timeline și costuri. Totul transparent și detaliat.
                  </p>
                </div>
              </div>
            </div>


            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Programează o consultanță gratuită
              </h3>
              <p className="text-gray-300 mb-4">
                Discută cu experții noștri despre proiectul tău și primește o ofertă personalizată în 24 de ore.
              </p>
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
  )
}

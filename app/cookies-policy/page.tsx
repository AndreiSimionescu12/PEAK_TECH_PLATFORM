'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiesPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Politica de Cookies
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Introducere</h2>
                <p className="text-gray-300 mb-6">
                  Această politică privind cookie-urile explică modul în care folosim cookie-uri și tehnologii similare 
                  pe site-ul nostru (Peak Tech). Prin utilizarea site-ului nostru, ești de acord cu utilizarea 
                  cookie-urilor așa cum este descris în această politică. Această politică completează Politica noastră de 
                  confidențialitate.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">1. Ce sunt cookie-urile?</h2>
                <p className="text-gray-300 mb-6">
                  Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău de un site web sau o aplicație pentru a 
                  colecta și stoca informații. Sunt utilizate în mod obișnuit pentru a îmbunătăți funcționalitatea unui 
                  site, experiența utilizatorului și pentru a analiza performanța.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">2. Tipuri de cookie-uri pe care le folosim</h2>
                <p className="text-gray-300 mb-4">
                  Pentru acest site de prezentare, folosim doar cookie-uri esențiale:
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Cookie-uri Esențiale</h3>
                    <p className="text-gray-300 mb-3">
                      Aceste cookie-uri sunt necesare pentru funcționarea de bază a site-ului:
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1 mb-3">
                      <li>• Gestionarea sesiunii pentru formularul de contact</li>
                      <li>• Securitatea site-ului (protecție împotriva atacurilor)</li>
                      <li>• Memorarea preferințelor de consimțământ</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      <strong>Acestea sunt activate automat</strong> - sunt necesare pentru funcționarea corectă a site-ului.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">3. Cookie-uri ale terților</h2>
                <p className="text-gray-300 mb-6">
                  În prezent, nu folosim servicii terțe care să plaseze cookie-uri pe dispozitivul tău. 
                  Toate cookie-urile folosite sunt generate direct de site-ul nostru pentru funcționalități esențiale.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">4. Gestionarea cookie-urilor</h2>
                <p className="text-gray-300 mb-4">
                  Deoarece folosim doar cookie-uri esențiale pentru funcționarea site-ului:
                </p>
                
                <div className="bg-slate-700/30 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Setările browserului</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Poți bloca cookie-urile prin setările browserului tău, însă acest lucru poate afecta 
                    funcționarea corectă a site-ului (de exemplu, formularul de contact poate să nu funcționeze).
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong>Recomandare:</strong> Păstrează cookie-urile activate pentru o experiență optimă pe site.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">5. Consimțământul pentru utilizare</h2>
                <p className="text-gray-300 mb-6">
                  Prin utilizarea site-ului nostru, consimți automat la utilizarea cookie-urilor esențiale, 
                  deoarece acestea sunt necesare pentru funcționarea de bază a site-ului (formularul de contact și securitatea).
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">6. Actualizări ale acestei politici</h2>
                <p className="text-gray-300 mb-6">
                  Ne rezervăm dreptul de a actualiza această politică periodic pentru a reflecta modificările 
                  în utilizarea cookie-urilor sau cerințele legale. Te vom notifica despre modificările semnificative.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                <p className="text-gray-300 mb-4">
                  Pentru întrebări despre această Politică de Cookie-uri, ne poți contacta la:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-white font-semibold">Peak Tech SRL</p>
                  <p className="text-gray-300">Email: contact@peaktech.ro</p>
                  <p className="text-gray-300">Telefon: +40 722 123 456</p>
                  <p className="text-gray-300">Adresă: București, România</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

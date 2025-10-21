'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
              Politica de Confidențialitate
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Introducere</h2>
                <p className="text-gray-300 mb-6">
                  Această Politică de Confidențialitate explică simplu cum colectăm și folosim datele tale personale 
                  când vizitezi site-ul nostru și completezi formularul de contact. Respectăm Regulamentul General 
                  privind Protecția Datelor (GDPR).
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">1. De ce colectăm datele tale</h2>
                <p className="text-gray-300 mb-4">
                  Colectăm datele tale doar pentru:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Să îți răspundem la solicitările de contact și estimări de proiecte</li>
                  <li>• Să îți oferim informații despre serviciile noastre</li>
                  <li>• Să respectăm obligațiile legale (facturare, dacă devii client)</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">2. Ce date colectăm</h2>
                <p className="text-gray-300 mb-4">
                  Prin formularul de contact colectăm doar:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Numele tău</strong> - pentru a ști cum să ne adresăm</li>
                  <li>• <strong>Email-ul</strong> - pentru a-ți răspunde</li>
                  <li>• <strong>Numărul de telefon</strong> - pentru contact direct (opțional)</li>
                  <li>• <strong>Compania și industria</strong> - pentru a înțelege nevoile tale</li>
                  <li>• <strong>Detaliile proiectului</strong> - servicii, buget, timeline</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">3. De ce avem voie să folosim datele tale</h2>
                <p className="text-gray-300 mb-6">
                  Folosim datele tale pe baza:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Consimțământul tău</strong> - când completezi formularul, ești de acord să te contactăm</li>
                  <li>• <strong>Interesul nostru legitim</strong> - să îți răspundem la solicitare și să îți oferim servicii</li>
                  <li>• <strong>Obligații legale</strong> - dacă devii client, pentru facturare și conformitate fiscală</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">4. Cum îți protejăm datele</h2>
                <p className="text-gray-300 mb-6">
                  Datele tale sunt în siguranță la noi:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Stocate pe servere securizate</li>
                  <li>• Accesibile doar echipei Peak Tech</li>
                  <li>• Nu le vindem sau partajăm cu terți pentru marketing</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">5. Cu cine partajăm datele tale</h2>
                <p className="text-gray-300 mb-6">
                  Datele tale le partajăm doar când este necesar:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Cu autoritățile</strong> - doar dacă ne cere legea</li>
                  <li>• <strong>Cu furnizori tehnici</strong> - pentru hosting-ul site-ului (dar aceștia nu au acces la conținut)</li>
                  <li>• <strong>Nu vindem datele</strong> - niciodată companiilor de marketing</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">6. Drepturile tale</h2>
                <p className="text-gray-300 mb-4">
                  Poți oricând să:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Să vezi ce date avem</strong> despre tine</li>
                  <li>• <strong>Să corectezi</strong> datele greșite</li>
                  <li>• <strong>Să ștergi datele</strong> - ne scrii și le ștergem</li>
                  <li>• <strong>Să nu te mai contactăm</strong> - ne spui și oprim comunicarea</li>
                  <li>• <strong>Să primești datele</strong> într-un format pe care îl poți folosi</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">7. Cât timp păstrăm datele</h2>
                <p className="text-gray-300 mb-6">
                  Păstrăm datele tale:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Dacă nu devii client</strong> - 2 ani (pentru a-ți răspunde la întrebări viitoare)</li>
                  <li>• <strong>Dacă devii client</strong> - 7 ani (pentru obligații fiscale)</li>
                  <li>• <strong>Dacă ne ceri să le ștergem</strong> - imediat (cu excepția obligațiilor legale)</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">8. Cookie-uri</h2>
                <p className="text-gray-300 mb-6">
                  Folosim doar cookie-uri esențiale pentru funcționarea formularului. 
                  Detalii complete în <a href="/cookies-policy" className="text-blue-400 hover:text-blue-300 underline">Politica de Cookie-uri</a>.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">9. Actualizări</h2>
                <p className="text-gray-300 mb-6">
                  Dacă schimbăm această politică, te anunțăm prin email sau pe site.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                <p className="text-gray-300 mb-4">
                  Pentru întrebări despre această Politică de Confidențialitate sau pentru exercitarea 
                  drepturilor tale, ne poți contacta la:
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

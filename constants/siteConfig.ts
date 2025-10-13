export const siteConfig = {
  name: 'Peak Tech SRL',
  description: 'Construim experiențe digitale care inspiră',
  tagline: 'Soluții digitale complete pentru afaceri moderne',
  url: 'https://peaktech.ro',
  email: 'contact@peaktech.ro',
  phone: '+40 123 456 789',
  address: 'București, România',
  
  social: {
    linkedin: 'https://linkedin.com/company/peak-tech-srl',
    facebook: 'https://facebook.com/peaktechsrl',
    instagram: 'https://instagram.com/peaktechsrl',
  },
  
  services: [
    {
      id: 'web-presentation',
      title: 'Site-uri de prezentare',
      description: 'Site-uri web moderne și responsive, optimizate pentru conversii și experiența utilizatorului.',
      icon: 'Globe',
      features: ['Design responsive', 'Optimizare SEO', 'Performanță înaltă', 'Securitate avansată']
    },
    {
      id: 'ecommerce',
      title: 'Magazine online',
      description: 'Platforme e-commerce complete cu sistem de plată integrat și managementul comenzilor.',
      icon: 'ShoppingCart',
      features: ['Gateway de plată', 'Management stoc', 'Analytics avansate', 'Mobile-first']
    },
    {
      id: 'mobile-apps',
      title: 'Aplicații mobile',
      description: 'Aplicații native și cross-platform pentru iOS și Android, cu design intuitiv.',
      icon: 'Smartphone',
      features: ['iOS & Android', 'Design nativ', 'Performanță optimă', 'Push notifications']
    },
    {
      id: 'custom-software',
      title: 'Software custom',
      description: 'Soluții software personalizate pentru nevoile specifice ale afacerii tale.',
      icon: 'Code',
      features: ['Arhitectură scalabilă', 'API personalizate', 'Integrări complexe', 'Suport tehnic']
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: 'Maria Popescu',
      company: 'TechStart SRL',
      role: 'CEO',
      content: 'Peak Tech SRL ne-a transformat complet prezența online. Site-ul nostru nu doar că arată profesional, dar și convertește mult mai bine.',
      rating: 5,
      avatar: '/testimonials/maria-popescu.jpg'
    },
    {
      id: 2,
      name: 'Alexandru Ionescu',
      company: 'Digital Solutions',
      role: 'Founder',
      content: 'Colaborarea cu echipa Peak Tech a fost excepțională. Au înțeles perfect nevoile noastre și au livrat o soluție care depășește așteptările.',
      rating: 5,
      avatar: '/testimonials/alexandru-ionescu.jpg'
    },
    {
      id: 3,
      name: 'Elena Dumitrescu',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'Magazinul online dezvoltat de Peak Tech ne-a permis să creștem vânzările cu 300%. Recomand cu încredere!',
      rating: 5,
      avatar: '/testimonials/elena-dumitrescu.jpg'
    }
  ],
  
  stats: [
    {
      number: '50+',
      label: 'Proiecte realizate',
      description: 'Site-uri web și aplicații mobile'
    },
    {
      number: '3+',
      label: 'Ani experiență',
      description: 'În dezvoltarea soluțiilor digitale'
    },
    {
      number: '100%',
      label: 'Clienți mulțumiți',
      description: 'Rate de satisfacție maximă'
    },
    {
      number: '24/7',
      label: 'Suport tehnic',
      description: 'Asistență continuă pentru clienți'
    }
  ],
  
  cta: {
    primary: 'Programează o discuție',
    secondary: 'Programează o consultanță',
    contact: 'Contactează-ne acum'
  }
}

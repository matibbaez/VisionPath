export const projectsData = [
  {
    id: "vanguardia", 
    title: { es: "Vanguardia Seguros", en: "Vanguardia Seguros" },
    category: { es: "InsurTech / High-End Presence", en: "InsurTech / High-End Presence" },
    description: { 
        es: "Arquitectura digital de alto rendimiento para el sector asegurador. Maximizando la conversión a través de la velocidad extrema y el diseño de confianza.", 
        en: "High-performance digital architecture for the insurance sector. Maximizing conversion through extreme speed and trust-based design." 
    },
    fullContent: {
        es: "El desafío principal fue transformar la presencia digital de una agencia de seguros tradicional en una plataforma de generación de autoridad. Utilizando Astro, logramos un rendimiento del 100% en Core Web Vitals, garantizando que el usuario acceda a la información de pólizas de forma instantánea. Diseñamos un flujo de navegación que elimina la fricción operativa y posiciona a la marca como líder en innovación dentro del mercado asegurador.",
        en: "The main challenge was to transform the digital presence of a traditional insurance agency into an authority-generating platform. Using Astro, we achieved 100% performance in Core Web Vitals, ensuring users access policy information instantaneously. We designed a navigation flow that eliminates operational friction and positions the brand as an innovation leader in the insurance market."
    },
    tags: ["Astro", "Performance", "UI/UX System", "SEO"],
    image: "/vang.png",
    bannerImage: "/vang.png",
    color: "from-orange-600/20 to-amber-500/20" 
  },
  {
    id: "tulex-app", // NUEVO CASO: TULEX
    title: { es: "TuLex - Legal Cloud SaaS", en: "TuLex - Legal Cloud SaaS" },
    category: { es: "SaaS / Cloud Platform", en: "SaaS / Cloud Platform" },
    description: { 
        es: "Desarrollo de un sistema SaaS en la nube para la gestión inteligente de estudios jurídicos. Control de expedientes y plazos en tiempo real.", 
        en: "Development of a cloud-based SaaS system for smart law firm management. Real-time case and deadline tracking." 
    },
    fullContent: {
        es: "TuLex nació para resolver el problema de la obsolescencia en el software jurídico tradicional. Desarrollamos una plataforma 100% en la nube que permite a los abogados acceder a sus causas desde Tribunales usando su celular. La innovación central es su arquitectura de 'Semáforos Inteligentes', que automatiza el control de vencimientos mediante alertas visuales. Un sistema robusto, rápido y con seguridad de bases de datos aisladas.",
        en: "TuLex was born to solve the problem of obsolescence in traditional legal software. We developed a 100% cloud platform that allows lawyers to access their cases directly from court using their mobile phones. The core innovation is its 'Smart Traffic Lights' architecture, automating deadline control through visual alerts. A robust, fast system with isolated database security."
    },
    tags: ["SaaS", "Cloud Architecture", "Database", "Dashboard UI"],
    image: "/lexd.png", // Tu imagen de TuLex
    bannerImage: "/lexd.png", // Podés usar la misma para el banner adentro del caso o subir otra
    color: "from-teal-600/20 to-emerald-500/20" // Un gradiente verde/tech que le da onda a "sistema activo/semáforo verde"
  },
  {
    id: "juricloud",
    title: { es: "JuriCloud", en: "JuriCloud" },
    category: { es: "LegalTech / Claims Management SaaS", en: "LegalTech / Claims Management SaaS" },
    description: { 
        es: "Plataforma SaaS integral para la gestión 100% digital de reclamos legales. Seguimiento de expedientes en tiempo real y portal de clientes.", 
        en: "Comprehensive SaaS platform for 100% digital legal claims management. Real-time case tracking and client portal." 
    },
    fullContent: {
        es: "JuriCloud representa la evolución en la gestión de siniestros y reclamos. Desarrollamos una plataforma en la nube con arquitectura escalable que centraliza las operaciones de los estudios jurídicos. Su característica principal es el sistema de seguimiento: permite a los clientes consultar el estado de su trámite en tiempo real mediante un código único, mientras que los profesionales acceden a un panel de control avanzado para gestionar expedientes, optimizando tiempos y eliminando la fricción administrativa.",
        en: "JuriCloud represents the evolution in claims management. We developed a scalable cloud platform that centralizes law firm operations. Its core feature is the tracking system: it allows clients to check their case status in real-time using a unique code, while professionals access an advanced dashboard to manage files, optimizing time and eliminating administrative friction."
    },
    tags: ["Angular", "SaaS Platform", "Client Portal", "UI/UX"],
    image: "/jurii.png",
    bannerImage: "/jurii.png",
    color: "from-sky-500/20 to-indigo-600/20" // Gradiente celeste/índigo que hace match con la marca
  }
];

export const conceptualProjects = [
  {
    id: 'estudio-bejar',
    title: 'Estudio Bejar',
    category: 'Legal / Corporate Law',
    image: '/bejar.png', 
    tech: ['Astro', 'Tailwind', 'Framer'],
    demoUrl: 'https://bejar-propuesta.vercel.app/'
  },
  {
    id: 'tognee-asoc',
    title: 'Tognee & Asoc.',
    category: 'Legal / Boutique Firm',
    image: '/tognee.png',
    tech: ['Astro', 'React', 'Tailwind'],
    demoUrl: 'https://tognonato-propuesta.vercel.app/'
  },
  {
    id: 'brignaleti-abogados',
    title: 'Brignaleti Abogados',
    category: 'Legal / Civil & Family',
    image: '/brignaleti.png',
    tech: ['Astro', 'TypeScript', 'UI/UX'],
    demoUrl: 'https://brignardello-propuesta.vercel.app/'
  },
  {
    id: 'conti-legal',
    title: 'Estudio Conti',
    category: 'Legal / Penal & Criminal',
    image: '/conti.png',
    tech: ['Next.js', 'Tailwind', 'Motion'],
    demoUrl: 'https://contreras-propuesta.vercel.app/'
  },
  {
    id: 'dioanti-partners',
    title: 'Dioanti Partners',
    category: 'Legal / International',
    image: '/dioanti.png',
    tech: ['Astro', 'React', 'SEO'],
    demoUrl: 'https://diodati-propuesta.vercel.app/'
  },
  {
    id: 'lm-abogados',
    title: 'LM Abogados',
    category: 'Legal / Full Service',
    image: '/lm-abogados.png',
    tech: ['Astro', 'Tailwind', 'Vercel'],
    demoUrl: 'https://lm-propuesta.vercel.app/'
  }
];
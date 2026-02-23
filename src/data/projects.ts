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
    image: "/vanguardia-image.png",
    bannerImage: "/BannerVanguardia.png",
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
    image: "/lex.png", // Tu imagen de TuLex
    bannerImage: "/lex.png", // Podés usar la misma para el banner adentro del caso o subir otra
    color: "from-teal-600/20 to-emerald-500/20" // Un gradiente verde/tech que le da onda a "sistema activo/semáforo verde"
  },
  {
    id: "bustamante-legal",
    title: { es: "Estudio Bustamante", en: "Bustamante Law Firm" },
    category: { es: "LegalTech / High-End Corporate", en: "LegalTech / High-End Corporate" },
    description: { 
        es: "Transformación de la presencia institucional en una herramienta de conversión de alto rendimiento. Ingeniería orientada a resultados y SEO técnico.", 
        en: "Transformation of institutional presence into a high-performance conversion tool. Result-oriented engineering and technical SEO." 
    },
    fullContent: {
        es: "Para el Estudio Bustamante, el objetivo fue claro: la web debía ser tan eficiente como sus abogados. Implementamos una arquitectura sobre Astro que garantiza un puntaje de 100/100 en performance, fundamental para el posicionamiento orgánico. Diseñamos sistemas de navegación intuitivos que guían al usuario hacia la consulta, profesionalizando la entrada digital de la firma al mercado global.",
        en: "For Bustamante Law Firm, the objective was clear: the website had to be as efficient as its lawyers. We implemented an architecture on Astro that guarantees a 100/100 performance score, fundamental for organic positioning. We designed intuitive navigation systems that guide the user toward consultation, professionalizing the firm's digital entry into the global market."
    },
    tags: ["Astro", "Core Web Vitals", "SEO Strategy"],
    image: "/bustamante.png",
    bannerImage: "/bustamante-image.png",
    color: "from-blue-900/20 to-slate-800/20" 
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
export const projectsData = [
  {
    id: "vanguardia", 
    title: { es: "Vanguardia Seguros", en: "Vanguardia Seguros" },
    category: { es: "InsurTech / High-End Presence", en: "InsurTech / High-End Presence" }, // Cambiamos LegalTech por InsurTech
    description: { 
        es: "Arquitectura digital de alto rendimiento para el sector asegurador. Maximizando la conversión a través de la velocidad extrema y el diseño de confianza.", 
        en: "High-performance digital architecture for the insurance sector. Maximizing conversion through extreme speed and trust-based design." 
    },
    fullContent: {
        es: "El desafío principal fue transformar la presencia digital de una agencia de seguros tradicional en una plataforma de generación de autoridad. Utilizando Astro, logramos un rendimiento del 100% en Core Web Vitals, garantizando que el usuario acceda a la información de pólizas de forma instantánea. Diseñamos un flujo de navegación que elimina la fricción operativa y posiciona a la marca como líder en innovación dentro del mercado asegurador.",
        en: "The main challenge was to transform the digital presence of a traditional insurance agency into an authority-generating platform. Using Astro, we achieved 100% performance in Core Web Vitals, ensuring users access policy information instantaneously. We designed a navigation flow that eliminates operational friction and positions the brand as an innovation leader in the insurance market."
    },
    tags: ["Astro", "Performance", "UI/UX System", "SEO"], // Reflejamos tu stack real y el valor de velocidad
    image: "/vanguardia-image.png",
    bannerImage: "/BannerVanguardia.png",
    color: "from-orange-600/20 to-amber-500/20" // Un gradiente que combine con tu branding naranja
  },
  {
    id: "marza-legal",
    title: { es: "Marza Legal", en: "Marza Legal" },
    category: { es: "LegalTech / Boutique Identity", en: "LegalTech / Boutique Identity" },
    description: { 
        es: "Arquitectura digital minimalista para un estudio jurídico de elite. Enfocada en la autoridad visual y una experiencia de usuario sin fricciones.", 
        en: "Minimalist digital architecture for an elite law firm. Focused on visual authority and a frictionless user experience." 
    },
    fullContent: {
        es: "Desarrollamos una plataforma que refleja la precisión y el rigor del estudio Marza Legal. Utilizando Astro para una carga instantánea, logramos una interfaz que prioriza la legibilidad y la confianza. La estrategia técnica se centró en eliminar el ruido visual para destacar la trayectoria y especialización de la firma, optimizando cada punto de contacto para la captación de clientes de alto perfil.",
        en: "We developed a platform that reflects the precision and rigor of Marza Legal. Using Astro for instantaneous loading, we achieved an interface that prioritizes readability and trust. The technical strategy focused on removing visual noise to highlight the firm's track record and specialization, optimizing every touchpoint for high-profile client acquisition."
    },
    tags: ["Astro", "Edge Computing", "Legal UI"],
    image: "/marzas.png",
    bannerImage: "/marzas-image.png",
    color: "from-zinc-600/20 to-stone-500/20" 
  },
  {
    id: "bustamante-legal",
    title: { es: "Estudio Bustamante", en: "Bustamante Law Firm" }, // Título más directo
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
    color: "from-blue-900/20 to-slate-800/20" // Azules corporativos profundos
  }
];

// Agregá esto al final de src/data/projects.ts

// Reemplazá el array conceptualProjects en src/data/projects.ts con este:

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
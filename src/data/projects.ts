// src/data/projects.ts

export const projectsData = [
  {
    id: "trust-alliance", 
    title: { es: "Trust Alliance", en: "Trust Alliance" },
    category: { es: "Startup LegalTech", en: "Startup LegalTech" },
    description: { 
        es: "La nueva generación de servicios legales. Integramos derecho, inteligencia artificial y automatización para transformar los procesos en experiencias ágiles, transparentes y trazables.", 
        en: "The new generation of legal services. We integrate law, artificial intelligence, and automation to transform processes into agile, transparent, and traceable experiences." 
    },
    fullContent: {
        es: "Trust Alliance nace con la misión de revolucionar la prestación de servicios legales. A través de una arquitectura de software de última generación, integramos inteligencia artificial y flujos de trabajo automatizados para ofrecer a los clientes una experiencia sin precedentes. El sistema garantiza trazabilidad absoluta en cada etapa del proceso, eliminando la burocracia tradicional y estableciendo un nuevo estándar de agilidad y transparencia en el mercado LegalTech.",
        en: "Trust Alliance was born with the mission to revolutionize legal service delivery. Through next-generation software architecture, we integrate artificial intelligence and automated workflows to offer clients an unprecedented experience. The system guarantees absolute traceability at every stage of the process, eliminating traditional bureaucracy and setting a new standard for agility and transparency in the LegalTech market."
    },
    tags: ["LegalTech", "AI", "Automation", "SaaS"],
    image: "/trust-final.png",
    bannerImage: "/trust-final.png",
    color: "from-blue-600/20 to-indigo-900/20" 
  },
  {
    id: "tulex", 
    title: { es: "TuLex", en: "TuLex" },
    category: { es: "Legal Cloud SaaS", en: "Legal Cloud SaaS" },
    description: { 
        es: "Sistema SaaS en la nube para la gestión inteligente de estudios jurídicos, control de expedientes y plazos en tiempo real.", 
        en: "Cloud SaaS system for intelligent law firm management, case tracking, and real-time deadlines." 
    },
    fullContent: {
        es: "TuLex es una solución integral diseñada para modernizar la gestión diaria de los estudios jurídicos. Como un ecosistema nativo en la nube, centraliza el control de expedientes, automatiza el seguimiento de plazos procesales y facilita la colaboración del equipo legal en tiempo real. Su interfaz intuitiva permite a los abogados tener una visión completa de su cartera de casos desde cualquier dispositivo, reduciendo el margen de error humano y optimizando la rentabilidad del estudio.",
        en: "TuLex is a comprehensive solution designed to modernize the daily management of law firms. As a cloud-native ecosystem, it centralizes case control, automates the tracking of procedural deadlines, and facilitates real-time legal team collaboration. Its intuitive interface allows lawyers to have a complete overview of their case portfolio from any device, reducing human error and optimizing the firm's profitability."
    },
    tags: ["SaaS", "Management", "Cloud", "Platform"],
    image: "/lexd.png",
    bannerImage: "/lexd.png",
    color: "from-[--color-primary]/20 to-orange-500/20" 
  },
  {
    id: "reclama-ya",
    title: { es: "ReclamaYa & ReclamarYa", en: "ReclamaYa & ReclamarYa" },
    category: { es: "LegalTech & Sindical", en: "LegalTech & Syndicate" },
    description: { 
        es: "Núcleo de automatización inteligente para reclamos, con despliegue general y una versión exclusiva para el sindicato ASIM.", 
        en: "Intelligent automation core for claims, featuring a general deployment and an exclusive version for the ASIM syndicate." 
    },
    fullContent: {
        es: "Desarrollamos un motor de automatización dual diseñado para acelerar la resolución de reclamos legales. Por un lado, ReclamaYa opera como una plataforma abierta al público general, simplificando el inicio y seguimiento de trámites indemnizatorios. Por otro lado, ReclamarYa es una adaptación exclusiva y securizada para el sindicato ASIM, integrándose con sus flujos internos. Ambas plataformas comparten una infraestructura robusta que digitaliza el 100% del proceso, desde la carga documental hasta la resolución, brindando un servicio transparente y ágil.",
        en: "We developed a dual automation engine designed to accelerate the resolution of legal claims. On one hand, ReclamaYa operates as an open platform for the general public, simplifying the initiation and tracking of compensation procedures. On the other hand, ReclamarYa is an exclusive, secured adaptation for the ASIM syndicate, integrating with their internal workflows. Both platforms share a robust infrastructure that digitizes 100% of the process, providing a transparent and agile service."
    },
    tags: ["Automation", "LegalTech", "ASIM", "Dual System"],
    image: "/reclamaryaaa.png", 
    images: ["/reclamaya-1.png", "/reclamarya-2.png"], 
    isSplit: true,
    bannerImage: "/reclamaryaaa.png",
    color: "from-orange-600/20 to-red-600/20" 
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

export const deployedProjects = [
  {
    id: "mgeo",
    title: "M-GEO Abogados & Sports",
    category: { es: "Derecho Deportivo & Corporativo", en: "Sports & Corporate Law" },
    service: "Plataforma Digital Premium",
    liveUrl: "#", 
  },
  {
    id: "sp-abogados",
    title: "SF Abogados",
    category: { es: "El compromiso que exige tu caso", en: "The commitment your case demands" },
    service: "Desarrollo High-End",
    liveUrl: "#", 
  },
  {
    id: "estudio-sevilla",
    title: "Estudio de Sevilla",
    category: { es: "Indemnizaciones accidentes de moto", en: "Motorcycle accident compensation" },
    service: "Presencia Digital",
    liveUrl: "#", 
  },
  {
    id: "reclamarte",
    title: "Reclamarte",
    category: { es: "Sistema de reclamos ART", en: "Workers' Comp claims system" },
    service: "LegalTech & Automation",
    liveUrl: "#", 
  },
  {
    id: "leonardo-perez",
    title: "Leonardo Pérez",
    category: { es: "Derecho Penal & Civil", en: "Criminal & Civil Law" },
    service: "Diseño & Desarrollo Web",
    liveUrl: "#", 
  }
];

export const clientLogos = [
  { 
    name: "Trust Alliance", 
    type: "code",
    content: `
      <div class="flex items-center gap-3 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <img 
                src="/favi.png" 
                alt="Trust Alliance Shield" 
                class="w-full h-full object-contain"
            />
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              TRUST ALLIANCE
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              LEGALTECH PLATFORM
            </span>
        </div>
      </div>
    `
  },
  { 
    name: "MGEO Abogados", 
    type: "code", 
    content: `
      <div class="flex items-center gap-3 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <img src="/logo-abogados.png" alt="MGEO Abogados" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">MGEO ABOGADOS</span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">ESTUDIO JURÍDICO</span>
        </div>
      </div>
    `
  },
  { 
    name: "MGEO Sports", 
    type: "code", 
    content: `
      <div class="flex items-center gap-3 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <img src="/logo-sports.png" alt="MGEO Sports" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">MGEO SPORTS</span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">GESTIÓN DEPORTIVA</span>
        </div>
      </div>
    `
  },
  { 
    name: "SP Abogados", 
    type: "code", 
    content: `
      <div class="flex items-center gap-2.5 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
              <path d="M12 2L12 22"></path>
              <path d="M12 6L4 6"></path>
              <path d="M12 6L20 6"></path>
              <path d="M4 6L2 13C2 13 3 15 4 15C5 15 6 13 6 13L4 6"></path>
              <path d="M20 6L18 13C18 13 19 15 20 15C21 15 22 13 22 13L20 6"></path>
              <path d="M9 22L15 22"></path>
            </svg>
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              SP ABOGADO
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              Dr. Sebastián Penas
            </span>
        </div>
      </div>
    `
  },
  { 
    name: "Estudio Sevilla", 
    type: "code", 
    content: `
      <div class="flex items-center gap-2.5 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
              <path d="M4 18h16"></path>
              <path d="M12 18V9"></path>
              <path d="M12 9l-4-4 4 4z"></path>
              <path d="M12 9h6l3 3-3-3z"></path>
              <path d="M3 21h18"></path>
              <path d="M6 21h12"></path>
            </svg>
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              ESTUDIO SEVILLA
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              ABOGADOS
            </span>
        </div>
      </div>
    `
  },
  { 
    name: "Leonardo Pérez", 
    type: "code", 
    content: `
      <div class="flex items-center gap-2.5 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
              <path d="M3 21h18"></path>
              <path d="M4 18h16"></path>
              <path d="M6 18V9"></path>
              <path d="M12 18V9"></path>
              <path d="M18 18V9"></path>
              <path d="M3 9l9-5 9 5H3z"></path>
            </svg>
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              LEONARDO PÉREZ
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              ABOGADOS
            </span>
        </div>
      </div>
    `
  },
  { 
    name: "Vanguardia Seguros", 
    type: "code", 
    content: `
      <div class="flex items-center gap-3 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <img 
                src="/LogoVanguardiaBlanco.png" 
                alt="Vanguardia Seguros" 
                class="w-full h-full object-contain" 
            />
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              VANGUARDIA
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              ASESORES DE SEGUROS
            </span>
        </div>
      </div>
    `
  },
  { 
    name: "TuLex", 
    type: "code", 
    content: `
      <div class="flex items-center gap-3 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l2 3h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2z"></path>
              <circle cx="9" cy="13" r="1.5"></circle>
              <circle cx="15" cy="13" r="1.5"></circle>
              <path d="M10.5 13h3"></path>
            </svg>
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              TULEX
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              LEGAL CLOUD SAAS
            </span>
        </div>
      </div>
    `
  },
  { 
    name: "JuriCloud", 
    type: "code", 
    content: `
      <div class="flex items-center gap-3 text-white select-none">
        <div class="w-8 h-8 md:w-10 md:h-10 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-5h1.79a4.5 4.5 0 1 1 0 9z"></path>
              <path d="M8 12h2l2 3 2-6 2 3h2"></path>
            </svg>
        </div>
        <div class="flex flex-col justify-center text-left">
            <span class="text-sm md:text-base font-bold leading-none tracking-widest uppercase block">
              JURICLOUD
            </span>
            <span class="text-[5px] md:text-[6px] tracking-[0.2em] uppercase font-bold mt-1 text-gray-400 block">
              CLAIMS MANAGEMENT
            </span>
        </div>
      </div>
    `
  }
];
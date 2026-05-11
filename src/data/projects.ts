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
    id: "tulex-app", 
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

export const clientLogos = [
  { 
    name: "Trust Alliance", 
    type: "code", // Cambiamos a 'code' para armar la estructura híbrida
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
    // DISEÑO MEJORADO: Grulla geométrica abstracta en código nativo
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

export const deployedProjects = [
  {
    id: "trust-alliance",
    title: "Trust Alliance",
    category: { es: "Plataforma LegalTech", en: "LegalTech Platform" },
    service: "Ingeniería Web & UI/UX",
    liveUrl: "https://www.trustalliance.ar/", // Reemplazar por el dominio real
  },
  {
    id: "mgeo",
    title: "MGEO Abogados & Sports",
    category: { es: "Derecho Deportivo & Boutique", en: "Sports Law & Boutique" },
    service: "Plataforma Digital Premium",
    liveUrl: "https://mgeo.example.com", // Reemplazar por el dominio real
  },
  {
    id: "sp-abogados",
    title: "SP Abogados",
    category: { es: "Estudio Jurídico Integral", en: "Full-Service Law Firm" },
    service: "Desarrollo High-End",
    liveUrl: "https://www.spabogado.com.ar/", // Reemplazar por el dominio real
  },
  {
    id: "estudio-sevilla",
    title: "Estudio de Sevilla",
    category: { es: "Derecho Corporativo & Civil", en: "Corporate & Civil Law" },
    service: "Presencia Digital",
    liveUrl: "https://www.estudiosevilla.com.ar/", // Reemplazar por el dominio real
  },
  {
    id: "leonardo-perez",
    title: "Leonardo Pérez Abogados",
    category: { es: "Estudio Jurídico Boutique", en: "Boutique Law Firm" },
    service: "Diseño & Desarrollo Web",
    liveUrl: "https://www.estudioleonardoperez.com.ar/", // Reemplazar por el dominio real
  }
];
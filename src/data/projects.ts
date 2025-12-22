export const projectsData = [
  {
    id: "reclamarte", // Este será el link: /es/case/reclamarte
    title: { es: "ReclamARTe", en: "ReclamARTe" },
    category: { es: "LegalTech / Gestión", en: "LegalTech / Management" },
    description: { 
        es: "Sistema integral de expedientes con trazabilidad en tiempo real.", 
        en: "Comprehensive case file system with real-time traceability." 
    },
    fullContent: {
        es: "Aquí iría toda la historia larga del proyecto, el desafío técnico de usar Supabase en tiempo real y cómo redujimos la carga administrativa un 40%...",
        en: "Here would be the full story of the project, the technical challenge of using Supabase in real-time and how we reduced administrative load by 40%..."
    },
    tags: ["Supabase", "React", "Real-Time"],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop",
    color: "from-blue-600/20 to-cyan-500/20"
  },
  {
    id: "reclamaya",
    title: { es: "ReclamaYA", en: "ReclamaYA" },
    category: { es: "InsurTech / Referidos", en: "InsurTech / Referrals" },
    description: { 
        es: "Plataforma escalable de gestión de reclamos para aseguradoras.", 
        en: "Scalable claims management platform for insurers." 
    },
    fullContent: {
        es: "El desafío principal fue manejar miles de productores concurrentes. Implementamos una arquitectura en Node.js...",
        en: "The main challenge was handling thousands of concurrent producers. We implemented a Node.js architecture..."
    },
    tags: ["Node.js", "PostgreSQL", "Analytics"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop",
    color: "from-emerald-600/20 to-teal-500/20"
  },
  {
    id: "estudio-legal",
    title: { es: "Estudio Legal & Asoc.", en: "Legal Firm & Assoc." },
    category: { es: "High-End Corporate", en: "High-End Corporate" },
    description: { 
        es: "Identidad digital para firma de abogados líder.", 
        en: "Digital identity for a leading law firm." 
    },
    fullContent: {
        es: "Diseñamos una experiencia minimalista enfocada en la conversión y la velocidad de carga (Core Web Vitals)...",
        en: "We designed a minimalist experience focused on conversion and load speed (Core Web Vitals)..."
    },
    tags: ["Astro", "SEO Técnico", "Minimal UI"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    color: "from-slate-600/20 to-gray-500/20"
  }
];
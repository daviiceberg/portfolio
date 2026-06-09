import type { Lang } from './language-context'

export interface LocaleContent {
  nav: {
    links: { label: string; href: string }[]
    cta: string
  }
  hero: {
    eyebrow: string
    tagline: string
    subtitle: string
    cta1: string
    cta2: string
  }
  metrics: string[]
  about: {
    eyebrow: string
    heading: string
    body: string[]
  }
  expertise: {
    eyebrow: string
    heading: string
    subtitle: string
    featuredLabel: string
    featured: { title: string; text: string }[]
    coreLabel: string
    items: { title: string; text: string }[]
  }
  work: {
    eyebrow: string
    heading: string
    subtitle: string
    behanceCta: string
    projects: {
      number: string
      category: string
      name: string
      description: string
      challenge: { label: string; text: string }
      solution: { label: string; text: string }
      outcomes: { label: string; items: string[] }
      tech: string[]
      link?: string
      thumb?: string
    }[]
  }
  workflow: {
    eyebrow: string
    heading: string
    subtitle: string
    steps: { number: string; title: string; text: string }[]
    toolsLabel: string
    tools: string[]
  }
  experience: {
    eyebrow: string
    heading: string
    items: {
      company: string
      role: string
      period: string
      detail: string
    }[]
  }
  contact: {
    eyebrow: string
    heading: string[]
    subtitle: string
    availability: string
    cvLabel: string
    cvLink: string
    links: { label: string; href: string }[]
  }
  footer: { copy: string }
}

const en: LocaleContent = {
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: "Let's Talk",
  },
  hero: {
    eyebrow: 'Senior Product Designer · AI-Driven Product Builder',
    tagline: 'Designing products where UX, strategy, and intelligence converge.',
    subtitle: '10+ years turning complex business challenges into scalable digital experiences — now accelerated by AI-powered workflows and agent-based systems.',
    cta1: 'View Work',
    cta2: "Let's Talk",
  },
  metrics: [
    '10+ years experience',
    '50+ digital products',
    '+25% engagement growth',
    'SaaS · Healthtech · Martech',
    'Remote worldwide',
  ],
  about: {
    eyebrow: 'About',
    heading: 'From UX/UI delivery to AI-assisted product systems.',
    body: [
      "I've spent over a decade building a design practice at the intersection of user research, product strategy, and technical execution — now accelerated by AI tools and agent-based systems.",
      'I help teams translate ambiguous business problems into clear product direction, using Claude Code, LLM workflows, and structured knowledge systems to compress research, ideation, and implementation cycles — moving faster without losing depth.',
    ],
  },
  expertise: {
    eyebrow: 'Expertise',
    heading: 'Product design breadth with strategic depth.',
    subtitle: 'A senior design practice built for complex product environments, operational clarity, and high-trust collaboration.',
    featuredLabel: 'AI & Product Systems',
    featured: [
      { title: 'AI-Assisted Workflows', text: 'LLM-supported research synthesis, ideation, specification, and delivery acceleration with Claude Code, Codex, and Cursor.' },
      { title: 'Context Engineering', text: 'Structured product context systems — Obsidian vaults, second-brain architectures, and knowledge workflows for AI tools.' },
      { title: 'Functional Prototyping', text: 'Frontend-aware prototypes built with Claude Code and Figma Make that serve as real implementation foundations for engineering teams.' },
      { title: 'Conversational UI & AI UX', text: 'Human-AI interaction design, AI product flows, and experiences that make AI outputs intuitive and trustworthy.' },
    ],
    coreLabel: 'Core Design Practice',
    items: [
      { title: 'Product Design & UX', text: 'End-to-end UX/UI for complex workflows, SaaS platforms, and digital products from discovery to delivery.' },
      { title: 'Discovery & Strategy', text: 'Problem framing, stakeholder alignment, opportunity mapping, and product direction for ambiguous business contexts.' },
      { title: 'UX Architecture', text: 'Information architecture, user flows, service maps, and decision-heavy operational journeys designed for clarity.' },
      { title: 'Design Systems', text: 'Scalable components, interaction patterns, visual governance, and consistency across complex product suites.' },
      { title: 'SaaS Platforms', text: 'B2B products built around operations, accountability, data visibility, and sustainable user adoption at scale.' },
      { title: 'Healthtech Products', text: 'Healthcare interfaces designed for trust, compliance-adjacent workflows, clinical clarity, and operational auditability.' },
    ],
  },
  work: {
    eyebrow: 'Selected Work',
    heading: 'Case studies shaped around business complexity.',
    subtitle: 'Projects across healthtech, SaaS, and digital product systems — built with discovery, strategy, and AI-assisted delivery.',
    behanceCta: 'More projects on Behance',
    projects: [
      {
        number: '01',
        category: 'Healthcare Authorization Platform',
        name: 'Arvo Saúde',
        description: "A healthcare operations product shaped around authorization workflows, auditor decision-making, and complex clinical context for Brazil's supplemental health sector.",
        challenge: {
          label: 'Challenge',
          text: 'Nurse auditors and operations teams needed clearer workflows for reviewing authorizations without losing clinical nuance, operational accountability, or regulatory context.',
        },
        solution: {
          label: 'Solution',
          text: 'Led discovery, user interviews, and operational modeling. Delivered functional prototypes via Claude Code and Figma Make, plus a structured Obsidian second-brain system for institutional knowledge.',
        },
        outcomes: {
          label: 'Outcomes',
          items: [
            'Functional frontend used directly by engineering as implementation base',
            'Obsidian vault adopted company-wide as product and operational reference',
            'Authorization flows redesigned to reduce auditor decision friction',
            'Discovery cycles compressed through AI-assisted research synthesis',
          ],
        },
        tech: ['Claude Code', 'Figma Make', 'Figma MCP', 'Obsidian', 'UX Research', 'Healthtech'],
        link: '/cases/arvo',
        thumb: '/cases/arvo/thumb.webp',
      },
      {
        number: '02',
        category: 'Mobile SaaS Application',
        name: 'Boxler',
        description: 'An end-to-end mobile product for inventory management and relocation coordination, designed to support operational teams through structured field workflows.',
        challenge: {
          label: 'Challenge',
          text: 'The product needed to make inventory tracking and relocation coordination intuitive and usable in fast-moving, mobile-first operational contexts.',
        },
        solution: {
          label: 'Solution',
          text: 'Led full end-to-end product design: user interviews, usability testing, user flows, low and high-fidelity wireframes, and interactive prototypes aligned to Flutter implementation constraints.',
        },
        outcomes: {
          label: 'Outcomes',
          items: [
            'Complete mobile product design from discovery to MVP launch',
            'Operationally focused inventory and relocation coordination flows',
            'Implementation-ready UI patterns aligned to Flutter development',
          ],
        },
        tech: ['Flutter', 'Material Design', 'Mobile UX', 'SaaS', 'User Research'],
        link: 'https://www.behance.net/gallery/250115621/Boxler-APP',
        thumb: '/cases/boxler.webp',
      },
      {
        number: '03',
        category: 'Healthtech Brand & Product',
        name: 'Exon Genomics',
        description: 'A genomics-focused healthtech presence balancing scientific credibility, product clarity, and accessible healthcare communication across digital and print touchpoints.',
        challenge: {
          label: 'Challenge',
          text: 'The company needed a digital identity and platform experience that could translate complex genomics into a trustworthy, comprehensible product story for healthcare audiences.',
        },
        solution: {
          label: 'Solution',
          text: 'Created a credibility-led visual direction and product experience connecting healthcare context, scientific rigor, and user-centered communication — from ideation to MVP delivery.',
        },
        outcomes: {
          label: 'Outcomes',
          items: [
            'Stronger scientific positioning and brand consistency across touchpoints',
            'Clearer product communication translating complex genomics concepts',
            'Healthtech-ready visual system for digital and print materials',
          ],
        },
        tech: ['Brand System', 'Product Design', 'Healthtech', 'Scientific UX', 'Content Strategy'],
        link: 'https://www.behance.net/gallery/237818017/Exon-Genomics',
        thumb: '/cases/exon.webp',
      },
    ],
  },
  workflow: {
    eyebrow: 'AI & Product Workflow',
    heading: 'AI as a delivery multiplier, not a buzzword.',
    subtitle: 'A structured workflow that keeps product judgment in the lead while using modern tools to compress research, exploration, prototyping, and implementation cycles.',
    steps: [
      { number: '01', title: 'Research', text: 'Market context, user signals, operational dynamics, and business constraints gathered through structured, intentional inquiry.' },
      { number: '02', title: 'Discovery', text: 'Problem framing, opportunity mapping, constraints, and product direction crystallized through deep stakeholder collaboration.' },
      { number: '03', title: 'AI Exploration', text: 'LLMs used to expand options, synthesize research signals, generate and stress-test product assumptions at speed.' },
      { number: '04', title: 'Functional Prototype', text: 'Real interactions and realistic flows built with Claude Code and Figma Make — far beyond static wireframes or mockups.' },
      { number: '05', title: 'Validation', text: 'Stakeholder, user, and implementation feedback used to sharpen direction and eliminate risk before delivery begins.' },
      { number: '06', title: 'Implementation', text: 'Deep engineering collaboration through specs, design systems, and frontend-aware decisions that reduce handoff friction.' },
    ],
    toolsLabel: 'Tools & Systems',
    tools: ['Claude Code', 'Codex', 'Cursor', 'Figma Make', 'Figma MCP', 'ChatGPT', 'Gemini', 'Obsidian', 'LLM Workflows', 'Agent Systems'],
  },
  experience: {
    eyebrow: 'Experience',
    heading: 'A product path across healthtech, SaaS, and global digital studios.',
    items: [
      {
        company: 'Arvo Saúde',
        role: 'Senior Product Designer / Product Engineer',
        period: 'Feb 2026 – Jun 2026 · São Paulo, Brazil (Remote)',
        detail: "Led discovery for a healthcare authorization platform serving Brazil's supplemental health sector. Delivered functional prototypes via Claude Code used directly by engineering, and built an Obsidian second-brain vault adopted company-wide as product and operational reference.",
      },
      {
        company: 'Ensitech / Boxler',
        role: 'Senior Product Designer / UX/UI Designer',
        period: 'Oct 2025 – Feb 2026 · Austin, Texas, USA (Remote)',
        detail: 'Led end-to-end design of the Boxler mobile app: concept, discovery, MVP definition, prototyping, and launch. Conducted user interviews, usability testing, and collaborated closely with Flutter developers to deliver a scalable inventory and relocation management product.',
      },
      {
        company: 'RioSlum Studio',
        role: 'Senior Product Designer / UX/UI Designer',
        period: 'Sep 2024 – Aug 2025 · Philadelphia, USA (Remote)',
        detail: 'Redesigned core product navigation, reducing usability errors by 30% and improving task completion rates. Developed design systems and interactive prototypes for high-profile clients. Streamlined engineering and marketing collaboration through structured documentation.',
      },
      {
        company: 'Roda Trade',
        role: 'Senior Product Designer / UX/UI Designer',
        period: 'Mar 2023 – Sep 2024 · São Paulo, Brazil (Remote)',
        detail: 'Designed and launched promotional SaaS platforms achieving +25% engagement growth in under six months. Led UX/UI initiatives securing pitches for P&G, Vibra, Mary Kay, Sanofi, and Gillette.',
      },
      {
        company: 'Exon Genomics',
        role: 'Product Designer / Art Director / Social Media',
        period: 'Nov 2023 – Aug 2024 · São Paulo, Brazil (Remote)',
        detail: 'Led product design from ideation to MVP delivery. Improved team collaboration and design consistency across projects. Designed visual materials ensuring brand coherence across digital and print touchpoints.',
      },
      {
        company: 'Mira Próponto',
        role: 'UX/UI Designer / Art Director',
        period: 'Jun 2018 – Mar 2023 · São Paulo, Brazil (Remote)',
        detail: "Implemented UX methodologies and prototyping culture driving agency growth and new client acquisition. Delivered web and mobile applications for Unilever, Nivea, L'Oréal, Heineken, Kibon, Havaianas, Stanley, and other global brands. Mentored junior designers.",
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: ["LET'S BUILD", 'SOMETHING', 'MEANINGFUL.'],
    subtitle: 'Available for senior product design roles, AI product design work, product consulting, and remote international opportunities.',
    availability: 'Currently available',
    cvLabel: 'Download CV',
    cvLink: 'https://drive.google.com/file/d/1k5T5HfWHFvBQc0g_Pr5LWciL1EWHC6RP/view?usp=drive_link',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davi-rojtenberg' },
      { label: 'Email', href: 'mailto:davi.iceberg@gmail.com' },
      { label: 'Behance', href: 'https://www.behance.net/davirojtenberg' },
      { label: '+55 21 98875-0605', href: 'https://wa.me/5521988750605' },
    ],
  },
  footer: { copy: '© 2026 Davi Rojtenberg · Senior Product Designer' },
}

const pt: LocaleContent = {
  nav: {
    links: [
      { label: 'Sobre', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Projetos', href: '#work' },
      { label: 'Processo', href: '#process' },
      { label: 'Experiência', href: '#experience' },
      { label: 'Contato', href: '#contact' },
    ],
    cta: 'Vamos conversar',
  },
  hero: {
    eyebrow: 'Senior Product Designer · AI-Driven Product Builder',
    tagline: 'Criando produtos onde UX, estratégia e inteligência convergem.',
    subtitle: 'Mais de 10 anos transformando desafios complexos em experiências digitais escaláveis — agora acelerados por workflows com IA e sistemas baseados em agentes.',
    cta1: 'Ver projetos',
    cta2: 'Vamos conversar',
  },
  metrics: [
    '10+ anos de experiência',
    '50+ produtos digitais',
    '+25% crescimento de engajamento',
    'SaaS · Healthtech · Martech',
    'Remoto worldwide',
  ],
  about: {
    eyebrow: 'Sobre',
    heading: 'De entrega UX/UI a sistemas de produto com IA.',
    body: [
      'Ao longo de mais de uma década, construí uma prática de design na interseção de pesquisa de usuários, estratégia de produto e execução técnica — agora acelerada por ferramentas de IA e sistemas baseados em agentes.',
      'Ajudo times a transformar problemas de negócio ambíguos em direção de produto clara, usando Claude Code, workflows com LLMs e sistemas de conhecimento estruturado para comprimir ciclos de pesquisa, ideação e implementação — sem perder profundidade.',
    ],
  },
  expertise: {
    eyebrow: 'Expertise',
    heading: 'Amplitude em design de produto com profundidade estratégica.',
    subtitle: 'Uma prática de design sênior construída para ambientes de produto complexos, clareza operacional e colaboração de alta confiança.',
    featuredLabel: 'IA & Sistemas de Produto',
    featured: [
      { title: 'Workflows com IA', text: 'Síntese de pesquisa, ideação, especificação e aceleração de entrega com LLMs, Claude Code, Codex e Cursor.' },
      { title: 'Engenharia de Contexto', text: 'Sistemas de contexto estruturado para IA — vaults Obsidian, arquiteturas de second brain e workflows de conhecimento.' },
      { title: 'Prototipação Funcional', text: 'Protótipos com consciência de frontend construídos com Claude Code e Figma Make — usados como base real de implementação.' },
      { title: 'UI Conversacional & AI UX', text: 'Design de interação humano-IA, fluxos de produto com IA e experiências que tornam outputs de IA intuitivos e confiáveis.' },
    ],
    coreLabel: 'Prática de Design',
    items: [
      { title: 'Product Design & UX', text: 'UX/UI end-to-end para workflows complexos, plataformas SaaS e produtos digitais — do discovery à entrega.' },
      { title: 'Discovery & Estratégia', text: 'Framing de problema, alinhamento com stakeholders, mapeamento de oportunidades e direção de produto para contextos ambíguos.' },
      { title: 'Arquitetura de UX', text: 'Arquitetura da informação, fluxos de usuário, service maps e jornadas operacionais complexas projetadas para clareza.' },
      { title: 'Design Systems', text: 'Componentes escaláveis, padrões de interação, governança visual e consistência em suítes de produto complexas.' },
      { title: 'Plataformas SaaS', text: 'Produtos B2B construídos em torno de operações, accountability, visibilidade de dados e adoção sustentável de usuário.' },
      { title: 'Produtos Healthtech', text: 'Interfaces de saúde projetadas para confiança, workflows adjacentes à conformidade, clareza clínica e auditabilidade.' },
    ],
  },
  work: {
    eyebrow: 'Projetos Selecionados',
    heading: 'Estudos de caso moldados pela complexidade do negócio.',
    subtitle: 'Projetos em healthtech, SaaS e sistemas de produto digital — com discovery, estratégia e entrega assistida por IA.',
    behanceCta: 'Mais projetos no Behance',
    projects: [
      {
        number: '01',
        category: 'Plataforma de Autorização em Saúde',
        name: 'Arvo Saúde',
        description: 'Um produto de operações de saúde moldado em torno de workflows de autorização, tomada de decisão de auditores e contexto clínico complexo para o sistema de saúde suplementar brasileiro.',
        challenge: {
          label: 'Desafio',
          text: 'Enfermeiras auditoras e times de operações precisavam de workflows mais claros para revisar autorizações sem perder nuance clínica, accountability operacional ou contexto regulatório.',
        },
        solution: {
          label: 'Solução',
          text: 'Conduzi discovery, entrevistas com usuários e modelagem operacional. Entreguei protótipos funcionais via Claude Code e Figma Make, mais um sistema Obsidian de second brain para conhecimento institucional.',
        },
        outcomes: {
          label: 'Resultados',
          items: [
            'Frontend funcional usado diretamente pelo time de engenharia como base de implementação',
            'Vault Obsidian adotado em toda a empresa como referência de produto e operações',
            'Fluxos de autorização redesenhados para reduzir fricção de decisão dos auditores',
            'Ciclos de discovery comprimidos via síntese de pesquisa assistida por IA',
          ],
        },
        tech: ['Claude Code', 'Figma Make', 'Figma MCP', 'Obsidian', 'UX Research', 'Healthtech'],
        link: '/cases/arvo',
        thumb: '/cases/arvo/thumb.webp',
      },
      {
        number: '02',
        category: 'Aplicativo Mobile SaaS',
        name: 'Boxler',
        description: 'Um produto mobile end-to-end para gestão de inventário e coordenação de mudanças, projetado para apoiar times operacionais com workflows de campo estruturados.',
        challenge: {
          label: 'Desafio',
          text: 'O produto precisava tornar o rastreamento de inventário e a coordenação de mudanças intuitivos e utilizáveis em contextos operacionais rápidos e mobile-first.',
        },
        solution: {
          label: 'Solução',
          text: 'Conduzi design de produto end-to-end do conceito ao MVP: entrevistas com usuários, testes de usabilidade, fluxos, wireframes e protótipos interativos alinhados às restrições do Flutter.',
        },
        outcomes: {
          label: 'Resultados',
          items: [
            'Design completo de produto mobile do discovery ao lançamento do MVP',
            'Fluxos de inventário e gestão de mudanças focados em operações',
            'Padrões de UI prontos para implementação alinhados ao desenvolvimento Flutter',
          ],
        },
        tech: ['Flutter', 'Material Design', 'Mobile UX', 'SaaS', 'Pesquisa de Usuário'],
        link: 'https://www.behance.net/gallery/250115621/Boxler-APP',
        thumb: '/cases/boxler.webp',
      },
      {
        number: '03',
        category: 'Marca Healthtech & Produto',
        name: 'Exon Genomics',
        description: 'Uma presença healthtech focada em genômica, equilibrando credibilidade científica, clareza de produto e comunicação de saúde acessível em todos os touchpoints digitais e impressos.',
        challenge: {
          label: 'Desafio',
          text: 'A empresa precisava de uma identidade digital e experiência de plataforma capazes de traduzir genômica complexa em uma história de produto confiável e compreensível.',
        },
        solution: {
          label: 'Solução',
          text: 'Criei uma direção visual liderada por credibilidade e experiência de produto conectando contexto de saúde, rigor científico e comunicação centrada no usuário — da ideação ao MVP.',
        },
        outcomes: {
          label: 'Resultados',
          items: [
            'Posicionamento científico mais forte e consistência de marca em todos os touchpoints',
            'Comunicação de produto mais clara para conceitos complexos de genômica',
            'Sistema visual healthtech pronto para materiais digitais e impressos',
          ],
        },
        tech: ['Brand System', 'Product Design', 'Healthtech', 'Scientific UX', 'Estratégia de Conteúdo'],
        link: 'https://www.behance.net/gallery/237818017/Exon-Genomics',
        thumb: '/cases/exon.webp',
      },
    ],
  },
  workflow: {
    eyebrow: 'AI & Workflow de Produto',
    heading: 'IA como multiplicador de entrega, não buzzword.',
    subtitle: 'Um workflow estruturado que mantém o julgamento de produto na liderança enquanto usa ferramentas modernas para comprimir ciclos de pesquisa, exploração, prototipação e implementação.',
    steps: [
      { number: '01', title: 'Pesquisa', text: 'Contexto de mercado, sinais de usuário, dinâmicas operacionais e restrições de negócio coletados com investigação estruturada e intencional.' },
      { number: '02', title: 'Discovery', text: 'Framing do problema, mapeamento de oportunidades, restrições e direção de produto cristalizados através de colaboração com stakeholders.' },
      { number: '03', title: 'Exploração com IA', text: 'LLMs usados para expandir opções, sintetizar sinais de pesquisa, gerar e stress-testar premissas de produto em velocidade.' },
      { number: '04', title: 'Protótipo Funcional', text: 'Interações reais e fluxos realistas construídos com Claude Code e Figma Make — muito além de wireframes ou mockups estáticos.' },
      { number: '05', title: 'Validação', text: 'Feedback de stakeholders, usuários e implementação usado para refinar a direção e eliminar riscos antes que a entrega comece.' },
      { number: '06', title: 'Implementação', text: 'Colaboração profunda com engenharia através de specs, design systems e decisões com consciência de frontend que reduzem fricção de handoff.' },
    ],
    toolsLabel: 'Ferramentas & Sistemas',
    tools: ['Claude Code', 'Codex', 'Cursor', 'Figma Make', 'Figma MCP', 'ChatGPT', 'Gemini', 'Obsidian', 'LLM Workflows', 'Sistemas de Agentes'],
  },
  experience: {
    eyebrow: 'Experiência',
    heading: 'Uma trajetória em healthtech, SaaS e estúdios digitais globais.',
    items: [
      {
        company: 'Arvo Saúde',
        role: 'Senior Product Designer / Product Engineer',
        period: 'Fev 2026 – Jun 2026 · São Paulo, Brasil (Remoto)',
        detail: 'Liderei discovery para uma plataforma de autorização médica no setor de saúde suplementar brasileiro. Entreguei protótipos funcionais via Claude Code usados diretamente pela engenharia, e construí um vault Obsidian de second brain adotado em toda a empresa.',
      },
      {
        company: 'Ensitech / Boxler',
        role: 'Senior Product Designer / UX/UI Designer',
        period: 'Out 2025 – Fev 2026 · Austin, Texas, EUA (Remoto)',
        detail: 'Liderei o design end-to-end do aplicativo mobile Boxler: conceito, discovery, definição de MVP, prototipação e lançamento. Conduzi entrevistas com usuários, testes de usabilidade e colaborei com desenvolvedores Flutter para entregar um produto escalável de gestão de inventário.',
      },
      {
        company: 'RioSlum Studio',
        role: 'Senior Product Designer / UX/UI Designer',
        period: 'Set 2024 – Ago 2025 · Philadelphia, EUA (Remoto)',
        detail: 'Redesenhei a navegação principal do produto, reduzindo erros de usabilidade em 30% e melhorando a taxa de conclusão de tarefas. Desenvolvi design systems e protótipos interativos para clientes de alto perfil. Estruturei documentação e guias de handoff para engenharia e marketing.',
      },
      {
        company: 'Roda Trade',
        role: 'Senior Product Designer / UX/UI Designer',
        period: 'Mar 2023 – Set 2024 · São Paulo, Brasil (Remoto)',
        detail: 'Projetei e lancei plataformas SaaS de promoção e incentivo alcançando +25% de crescimento de engajamento em menos de seis meses. Liderei iniciativas de UX/UI conquistando concorrências para P&G, Vibra, Mary Kay, Sanofi e Gillette.',
      },
      {
        company: 'Exon Genomics',
        role: 'Product Designer / Diretor de Arte / Social Media',
        period: 'Nov 2023 – Ago 2024 · São Paulo, Brasil (Remoto)',
        detail: 'Liderei o design de produto da ideação à entrega do MVP. Melhorei a colaboração entre times e a consistência de design. Criei materiais visuais garantindo coerência de marca em todos os touchpoints digitais e impressos.',
      },
      {
        company: 'Mira Próponto',
        role: 'UX/UI Designer / Diretor de Arte',
        period: 'Jun 2018 – Mar 2023 · São Paulo, Brasil (Remoto)',
        detail: "Implementei metodologias de UX e cultura de prototipagem impulsionando crescimento da agência. Desenvolvi apps web e mobile para Unilever, Nivea, L'Oréal, Heineken, Kibon, Havaianas, Stanley e outras marcas globais. Mentorei designers juniores.",
      },
    ],
  },
  contact: {
    eyebrow: 'Contato',
    heading: ['VAMOS CRIAR', 'ALGO', 'SIGNIFICATIVO.'],
    subtitle: 'Disponível para posições de Senior Product Designer, projetos de AI product design, consultoria e oportunidades remotas internacionais.',
    availability: 'Disponível agora',
    cvLabel: 'Baixar Currículo',
    cvLink: 'https://drive.google.com/file/d/1FRJeut2WR2shWxPQ5dQzpjQzwpvKUs_M/view?usp=drive_link',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davi-rojtenberg' },
      { label: 'Email', href: 'mailto:davi.iceberg@gmail.com' },
      { label: 'Behance', href: 'https://www.behance.net/davirojtenberg' },
      { label: '+55 21 98875-0605', href: 'https://wa.me/5521988750605' },
    ],
  },
  footer: { copy: '© 2026 Davi Rojtenberg · Senior Product Designer' },
}

export const content: Record<Lang, LocaleContent> = { en, pt }

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Davi Rojtenberg',
  jobTitle: 'Senior Product Designer',
  url: 'https://davirojtenberg.com',
  email: 'davi.iceberg@gmail.com',
  telephone: '+5521988750605',
  knowsAbout: ['Product Design', 'Product Strategy', 'AI-assisted product development', 'SaaS', 'UX/UI Design', 'Design Systems', 'Functional Prototyping', 'Context Engineering'],
  sameAs: ['https://www.linkedin.com/in/davi-rojtenberg', 'https://www.behance.net/davirojtenberg'],
}

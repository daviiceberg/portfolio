'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { ErrorBoundary } from '@/components/error-boundary'
import { useLang, type Lang } from '@/lib/language-context'

/* ─── Content ─────────────────────────────────────────────────────────────── */

type Step = {
  number: string
  label: string
  title: string
  body: string[]
  images: { src: string; alt: string }[]
  twoCol?: boolean
}

type CaseContent = {
  eyebrow: string
  subtitle: string
  meta: { label: string; value: string }[]
  liveLabel: string
  backLabel: string
  resultsEyebrow: string
  resultsTitle: string
  resultsBody: string
  steps: Step[]
  outcomes: string[]
}

const content: Record<Lang, CaseContent> = {
  en: {
    eyebrow: 'Case Study · Healthcare Authorization Platform',
    subtitle: "A healthcare operations platform built around the real decision-making logic of nurse auditors — augmented by AI agents, OCR processing, and a structured clinical knowledge architecture for Brazil's supplemental health market.",
    meta: [
      { label: 'Client', value: 'Arvo Saúde' },
      { label: 'Sector', value: 'Healthtech · Saúde Suplementar' },
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Stack', value: 'Claude Code · React · Next.js · MUI' },
    ],
    liveLabel: 'View live product',
    backLabel: 'Back to portfolio',
    resultsEyebrow: 'Results',
    resultsTitle: 'Shaping a new standard for medical authorization in Brazil.',
    resultsBody: 'Arvo Saúde represents a significant evolution for the supplemental health market. The platform received strong validation from institutions across the sector and is currently in active integration with an extensive backend infrastructure — security, data pipelines, API layers, and operator-specific adaptations that will position it as a new benchmark for authorization operations in Brazilian supplemental health.',
    outcomes: [
      'Received strong positive feedback from multiple healthcare operators across Brazil',
      'Functional frontend prototype used directly by the engineering team as implementation base',
      'Authorization flows redesigned to measurably reduce auditor decision friction',
      'AI-assisted OCR and agents processing requests before human review',
      'Obsidian second-brain adopted company-wide as institutional knowledge reference',
      'Currently in active backend integration — APIs, security infrastructure, and operator-specific adaptations underway',
    ],
    steps: [
      {
        number: '01',
        label: 'Discovery',
        title: 'Listening to the frontlines of healthcare authorization',
        body: [
          'The process began with deep qualitative research — extensive interviews with nurse auditors across multiple supplemental health operators. The goal was to map the real mechanics of authorization: how decisions are made, what signals guide approval or denial, where friction accumulates, and what operational knowledge lives only in the heads of experienced auditors.',
          'Beyond workflow mapping, we surfaced specialization patterns, tool frustrations, regulatory pressure points, and the improvised compensatory behaviors that teams had developed to cope with inadequate systems. These conversations became the foundation for everything that followed.',
        ],
        images: [{ src: '/cases/arvo/discovery.webp', alt: 'Discovery research sessions with nurse auditors' }],
      },
      {
        number: '02',
        label: 'Insights & Benchmark',
        title: 'From raw conversation to actionable design intelligence',
        body: [
          'Every interview was synthesized and cross-referenced in a structured Obsidian knowledge base — a second brain for the project — allowing patterns to emerge across sessions, roles, and institutions. This was then combined with a rigorous benchmark of authorization tools, clinical decision support systems, and operational platforms across Brazil and internationally.',
          'The benchmark surfaced critical design principles: how triage logic should be visualized, how AI-generated insights should be positioned relative to human judgment, what regulatory constraints shape the interface, and how to balance speed with clinical rigor. The result was a set of insight clusters that directly informed architecture and feature prioritization.',
        ],
        images: [
          { src: '/cases/arvo/insights1.webp', alt: 'Insight synthesis and affinity mapping' },
          { src: '/cases/arvo/insights2.webp', alt: 'Benchmark findings and design principles' },
        ],
        twoCol: true,
      },
      {
        number: '03',
        label: 'User Flows',
        title: 'Mapping three distinct journeys through one complex system',
        body: [
          'Authorization is not a single flow — it is a constellation of interdependent actors making sequential decisions under time and regulatory pressure. We defined three primary flow systems: the provider-side submission flow (hospitals and clinics entering requests), the operator-side authorization flow (auditors triaging, analyzing, and deciding), and the medical committee escalation flow (bidirectional communication for cases requiring specialist review).',
          'Each flow was designed to hand off cleanly to the next, preserving context and reducing re-entry of information. The flows also established the data model requirements, surfacing which fields were critical at each decision point and where AI-assisted pre-processing could reduce cognitive load on auditors.',
        ],
        images: [{ src: '/cases/arvo/fluxos.webp', alt: 'User flows for provider submission, auditor authorization, and medical committee escalation' }],
      },
      {
        number: '04',
        label: 'Design System & Prototyping',
        title: 'Skipping fidelity theater, going straight to functional code',
        body: [
          'Given the compressed timeline and technical complexity, we made a deliberate strategic choice: bypass static Figma prototypes and build a functional frontend directly. Using Claude Code as the primary development accelerator, we moved from flow definitions to interactive HTML/React components in hours, not weeks.',
          'The engineering team specified React with Next.js and MUI as the component foundation — enabling rapid structural scaffolding with production-quality accessibility and design system coverage out of the box. The resulting design system documentation in MUI became a living reference that both design and engineering could iterate against simultaneously.',
        ],
        images: [{ src: '/cases/arvo/ds.webp', alt: 'Design system foundations built with MUI and React' }],
      },
      {
        number: '05',
        label: 'Dashboard',
        title: 'The command center for authorization operations',
        body: [
          'A formal PRD was developed to align stakeholders on priorities before screen-level work began. The first and most strategic screen was the Dashboard — the macro view that gives operations managers and senior auditors visibility into the full authorization pipeline at a glance.',
          'The dashboard surfaces real-time volumes, AI processing status, pending escalations, and team workload distribution. OCR agents and custom-built document readers process incoming requests automatically, extracting structured clinical data before a human ever touches the case. The dashboard makes this invisible work visible — translating AI throughput into operational intelligence.',
        ],
        images: [{ src: '/cases/arvo/dashboard.webp', alt: 'Operations dashboard showing AI processing pipeline and authorization volume' }],
      },
      {
        number: '06',
        label: 'Operational Queue',
        title: 'A queue designed to accelerate the right decisions',
        body: [
          'The operational queue is where the majority of auditor time is spent. Every design decision here was made with speed and accuracy in mind — not as competing priorities, but as complementary outcomes of good information architecture.',
          'Cases are surfaced with just enough context to enable triage without opening the full record: procedure code, beneficiary status, urgency flag, AI recommendation signal, and elapsed time. A rich filter and sort system allows auditors to self-organize their queue by specialization, urgency, or protocol type. The queue was designed to reduce decision fatigue by eliminating noise and surfacing signal.',
        ],
        images: [{ src: '/cases/arvo/fila-operacional.webp', alt: 'Operational queue with filters, priority signals, and AI recommendations' }],
      },
      {
        number: '07',
        label: 'Request Screen',
        title: 'One screen, every signal needed to decide',
        body: [
          'The request analysis screen is the heart of the product. It consolidates the full dossier for a given authorization request: beneficiary profile and medical history, procedure codes, attached clinical documents, referring provider context, and regulatory classification.',
          "A dedicated AI insights panel surfaces the platform's analysis — contraindications, protocol alignment, historical patterns, and risk flags — presented as decision support rather than directives. The final decision panel gives auditors four clear pathways: approve, deny, pend (request more information from the provider), or escalate to a medical committee. Every action is logged with context for regulatory audit trails.",
        ],
        images: [{ src: '/cases/arvo/tela-de-pedido.webp', alt: 'Request analysis screen with AI insights panel and decision controls' }],
      },
      {
        number: '08',
        label: 'Submission Wizard',
        title: 'Guided entry that reduces provider errors at the source',
        body: [
          'A significant source of authorization delays is incomplete or incorrect submissions from providers. The submission wizard was designed to solve this upstream — guiding hospital and clinic staff through a structured, validated entry process that ensures all required fields are populated before the request enters the authorization queue.',
          'The wizard supports document upload and OCR-assisted pre-population, reducing manual data entry while surfacing validation errors in context. By improving data quality at the point of entry, the wizard directly reduces the volume of pend actions required by auditors and compresses overall authorization cycle time.',
        ],
        images: [{ src: '/cases/arvo/wizard.webp', alt: 'Request submission wizard with guided steps and document upload' }],
      },
    ],
  },
  pt: {
    eyebrow: 'Estudo de Caso · Plataforma de Autorização em Saúde',
    subtitle: 'Uma plataforma de operações em saúde construída em torno da lógica real de tomada de decisão de enfermeiras auditoras — potencializada por agentes de IA, processamento OCR e uma arquitetura de conhecimento clínico estruturada para o mercado de saúde suplementar brasileiro.',
    meta: [
      { label: 'Cliente', value: 'Arvo Saúde' },
      { label: 'Setor', value: 'Healthtech · Saúde Suplementar' },
      { label: 'Papel', value: 'Lead Product Designer' },
      { label: 'Stack', value: 'Claude Code · React · Next.js · MUI' },
    ],
    liveLabel: 'Ver produto ao vivo',
    backLabel: 'Voltar ao portfólio',
    resultsEyebrow: 'Resultados',
    resultsTitle: 'Definindo um novo padrão para autorização médica no Brasil.',
    resultsBody: 'A Arvo Saúde representa uma evolução significativa para o mercado de saúde suplementar. A plataforma recebeu validação positiva de diversas instituições do setor e está em fase de integração com uma extensa infraestrutura de backend — segurança, pipelines de dados, camadas de API e adaptações específicas por operadora que a posicionarão como novo referencial em operações de autorização no Brasil.',
    outcomes: [
      'Feedback positivo de diversas operadoras de saúde suplementar no Brasil',
      'Protótipo funcional de frontend utilizado diretamente pelo time de engenharia como base de implementação',
      'Fluxos de autorização redesenhados para reduzir visivelmente a fricção de decisão dos auditores',
      'Agentes de IA com OCR processando pedidos antes da análise humana',
      'Second-brain em Obsidian adotado por toda a empresa como referência de conhecimento institucional',
      'Atualmente em integração ativa com backend — APIs, infraestrutura de segurança e adaptações por operadora em andamento',
    ],
    steps: [
      {
        number: '01',
        label: 'Discovery',
        title: 'Ouvindo a linha de frente das autorizações em saúde',
        body: [
          'O processo começou com pesquisa qualitativa profunda — entrevistas extensas com enfermeiras auditoras de diversas operadoras de saúde suplementar. O objetivo era mapear a mecânica real da autorização: como as decisões são tomadas, quais sinais guiam aprovação ou negativa, onde o atrito se acumula e qual conhecimento operacional vive apenas na cabeça de auditores experientes.',
          'Além do mapeamento de fluxos, identificamos padrões de especialização, frustrações com ferramentas, pontos de pressão regulatória e os comportamentos compensatórios improvisados que as equipes desenvolveram para lidar com sistemas inadequados. Essas conversas tornaram-se a base de tudo que veio depois.',
        ],
        images: [{ src: '/cases/arvo/discovery.webp', alt: 'Sessões de pesquisa de discovery com enfermeiras auditoras' }],
      },
      {
        number: '02',
        label: 'Insights & Benchmark',
        title: 'Da conversa bruta à inteligência de design acionável',
        body: [
          'Cada entrevista foi sintetizada e cruzada em uma base de conhecimento estruturada no Obsidian — um segundo cérebro para o projeto — permitindo que padrões emergissem entre sessões, papéis e instituições. Isso foi combinado com um benchmark rigoroso de ferramentas de autorização, sistemas de apoio à decisão clínica e plataformas operacionais no Brasil e internacionalmente.',
          'O benchmark revelou princípios de design críticos: como a lógica de triagem deve ser visualizada, como insights gerados por IA devem ser posicionados em relação ao julgamento humano, quais restrições regulatórias moldam a interface e como equilibrar velocidade com rigor clínico. O resultado foi um conjunto de clusters de insights que informou diretamente a arquitetura e a priorização de funcionalidades.',
        ],
        images: [
          { src: '/cases/arvo/insights1.webp', alt: 'Síntese de insights e mapeamento por afinidade' },
          { src: '/cases/arvo/insights2.webp', alt: 'Resultados do benchmark e princípios de design' },
        ],
        twoCol: true,
      },
      {
        number: '03',
        label: 'Fluxos de Usuário',
        title: 'Mapeando três jornadas distintas em um sistema complexo',
        body: [
          'A autorização não é um fluxo único — é uma constelação de atores interdependentes tomando decisões sequenciais sob pressão de tempo e regulação. Definimos três sistemas de fluxo principais: o fluxo de submissão pelos prestadores (hospitais e clínicas enviando pedidos), o fluxo de autorização pelos operadores (auditores triando, analisando e decidindo) e o fluxo de escalada para junta médica (comunicação bidirecional para casos que exigem avaliação especializada).',
          'Cada fluxo foi projetado para transferir contexto limpo ao próximo, preservando informações e reduzindo reentrada de dados. Os fluxos também estabeleceram os requisitos do modelo de dados, evidenciando quais campos eram críticos em cada ponto de decisão e onde o pré-processamento com IA podia reduzir a carga cognitiva dos auditores.',
        ],
        images: [{ src: '/cases/arvo/fluxos.webp', alt: 'Fluxos de usuário para submissão do prestador, autorização do auditor e escalada para junta médica' }],
      },
      {
        number: '04',
        label: 'Design System & Prototipagem',
        title: 'Pulando o teatro de fidelidade, indo direto para código funcional',
        body: [
          'Dado o prazo comprimido e a complexidade técnica, fizemos uma escolha estratégica deliberada: substituir protótipos estáticos no Figma pela construção direta de um frontend funcional. Usando o Claude Code como acelerador principal de desenvolvimento, passamos de definições de fluxo para componentes HTML/React interativos em horas, não semanas.',
          'O time de engenharia especificou React com Next.js e MUI como base de componentes — permitindo scaffolding estrutural rápido com acessibilidade de qualidade de produção e cobertura de design system prontos para uso. A documentação do design system resultante no MUI tornou-se uma referência viva que design e engenharia podiam iterar simultaneamente.',
        ],
        images: [{ src: '/cases/arvo/ds.webp', alt: 'Fundações do design system construído com MUI e React' }],
      },
      {
        number: '05',
        label: 'Dashboard',
        title: 'O centro de comando das operações de autorização',
        body: [
          'Um PRD formal foi desenvolvido para alinhar stakeholders nas prioridades antes de iniciar o trabalho em nível de tela. A primeira e mais estratégica tela foi o Dashboard — a visão macro que dá a gestores de operações e auditores sênior visibilidade sobre todo o pipeline de autorizações de relance.',
          'O dashboard apresenta volumes em tempo real, status de processamento da IA, escaladas pendentes e distribuição de carga entre a equipe. Agentes OCR e leitores de documentos desenvolvidos sob medida processam pedidos automaticamente, extraindo dados clínicos estruturados antes de qualquer interação humana. O dashboard torna esse trabalho invisível visível — traduzindo throughput de IA em inteligência operacional.',
        ],
        images: [{ src: '/cases/arvo/dashboard.webp', alt: 'Dashboard operacional mostrando o pipeline de processamento de IA e volume de autorizações' }],
      },
      {
        number: '06',
        label: 'Fila Operacional',
        title: 'Uma fila projetada para acelerar as decisões certas',
        body: [
          'A fila operacional é onde a maior parte do tempo do auditor é gasta. Cada decisão de design aqui foi tomada com velocidade e precisão em mente — não como prioridades concorrentes, mas como resultados complementares de uma boa arquitetura de informação.',
          'Os casos são apresentados com contexto suficiente para permitir triagem sem abrir o registro completo: código de procedimento, status do beneficiário, flag de urgência, sinal de recomendação da IA e tempo decorrido. Um sistema rico de filtros e ordenação permite que auditores organizem sua própria fila por especialização, urgência ou tipo de protocolo. A fila foi projetada para reduzir a fadiga de decisão eliminando ruído e evidenciando sinal.',
        ],
        images: [{ src: '/cases/arvo/fila-operacional.webp', alt: 'Fila operacional com filtros, sinais de prioridade e recomendações de IA' }],
      },
      {
        number: '07',
        label: 'Tela de Pedido',
        title: 'Uma tela, todos os sinais necessários para decidir',
        body: [
          'A tela de análise de pedido é o coração do produto. Ela consolida o dossiê completo de um pedido de autorização: perfil e histórico médico do beneficiário, códigos de procedimento, documentos clínicos anexados, contexto do prestador solicitante e classificação regulatória.',
          'Um painel dedicado de insights de IA apresenta a análise da plataforma — contraindicações, alinhamento com protocolos, padrões históricos e flags de risco — como suporte à decisão, não como diretiva. O painel de decisão final oferece quatro caminhos claros ao auditor: aprovar, negar, pendenciar (solicitar mais informações ao prestador) ou encaminhar para junta médica. Cada ação é registrada com contexto para trilhas de auditoria regulatória.',
        ],
        images: [{ src: '/cases/arvo/tela-de-pedido.webp', alt: 'Tela de análise de pedido com painel de insights de IA e controles de decisão' }],
      },
      {
        number: '08',
        label: 'Wizard de Submissão',
        title: 'Entrada guiada que reduz erros dos prestadores na origem',
        body: [
          'Uma fonte significativa de atrasos nas autorizações são submissões incompletas ou incorretas por parte dos prestadores. O wizard de submissão foi projetado para resolver isso no upstream — guiando equipes de hospitais e clínicas por um processo estruturado e validado que garante que todos os campos obrigatórios sejam preenchidos antes que o pedido entre na fila de autorização.',
          'O wizard suporta upload de documentos e pré-preenchimento assistido por OCR, reduzindo a entrada manual de dados enquanto apresenta erros de validação em contexto. Ao melhorar a qualidade dos dados no ponto de entrada, o wizard reduz diretamente o volume de pendências necessárias pelos auditores e comprime o tempo total do ciclo de autorização.',
        ],
        images: [{ src: '/cases/arvo/wizard.webp', alt: 'Wizard de submissão de pedido com etapas guiadas e upload de documentos' }],
      },
    ],
  },
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ArvoCase() {
  const { lang, toggle } = useLang()
  const c = content[lang]

  return (
    <ErrorBoundary>
      <main className="bg-canvas text-ink">
        <CaseHeader lang={lang} toggle={toggle} c={c} />
        <Hero c={c} />
        <div className="section-shell">
          <div className="rule" />
        </div>
        <Process c={c} />
        <Results c={c} />
        <CaseFooter c={c} />
      </main>
    </ErrorBoundary>
  )
}

/* ─── Header ──────────────────────────────────────────────────────────────── */

function CaseHeader({ lang, toggle, c }: { lang: Lang; toggle: () => void; c: CaseContent }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.06] bg-canvas/90 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 rounded text-sm text-muted transition hover:text-ink"
        >
          <ArrowLeft size={15} />
          <span className="hidden sm:inline">{c.backLabel}</span>
        </Link>

        <Link
          href="/"
          className="focus-ring rounded font-display text-lg font-semibold tracking-wide text-ink"
        >
          DR
        </Link>

        <button
          onClick={toggle}
          className="focus-ring flex items-center gap-1 rounded text-xs font-medium tracking-widest transition"
          aria-label="Switch language"
        >
          <span className={lang === 'en' ? 'text-ink' : 'text-muted transition hover:text-ink'}>EN</span>
          <span className="text-muted/40">|</span>
          <span className={lang === 'pt' ? 'text-ink' : 'text-muted transition hover:text-ink'}>PT</span>
        </button>
      </div>
    </header>
  )
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function Hero({ c }: { c: CaseContent }) {
  return (
    <section className="pb-16 pt-36 sm:pt-44">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-6">{c.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className="font-display font-bold leading-[0.92] tracking-[0.02em] text-ink"
            style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}
          >
            Arvo Saúde
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
            {c.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {c.meta.map(({ label, value }) => (
              <div key={label}>
                <p className="eyebrow mb-1">{label}</p>
                <p className="font-sans text-sm text-ink">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10">
            <a
              href="https://arvo-auth-m7.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-canvas transition-all hover:bg-gold/90"
            >
              {c.liveLabel} <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Process ─────────────────────────────────────────────────────────────── */

function Process({ c }: { c: CaseContent }) {
  return (
    <section className="py-12">
      {c.steps.map((step) => (
        <div key={step.number} className="mb-24 last:mb-0 sm:mb-32">
          <div className="section-shell">
            <Reveal>
              <div className="mb-3 flex items-center gap-3">
                <span className="eyebrow">{step.number}</span>
                <span className="h-px flex-1 bg-ink/[0.08]" />
                <span className="eyebrow">{step.label}</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="mb-8 font-display font-bold leading-[1.05] tracking-[0.02em] text-ink"
                style={{ fontSize: 'clamp(28px, 4.5vw, 64px)' }}
              >
                {step.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mb-10 max-w-3xl space-y-4">
                {step.body.map((para, j) => (
                  <p key={j} className="font-sans text-sm leading-relaxed text-muted sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            {step.twoCol ? (
              <div className="section-shell grid gap-4 sm:grid-cols-2">
                {step.images.map((img) => (
                  <div key={img.src} className="overflow-hidden rounded-xl border border-ink/[0.08] bg-surface">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(50vw - 48px), 580px"
                      quality={75}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="section-shell">
                <div className="overflow-hidden rounded-xl border border-ink/[0.08] bg-surface">
                  <Image
                    src={step.images[0].src}
                    alt={step.images[0].alt}
                    width={1600}
                    height={900}
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 64px), 1184px"
                    quality={75}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </Reveal>
        </div>
      ))}
    </section>
  )
}

/* ─── Results ─────────────────────────────────────────────────────────────── */

function Results({ c }: { c: CaseContent }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="rule mb-16" />
        <Reveal>
          <p className="eyebrow mb-4">{c.resultsEyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="mb-6 max-w-3xl font-display font-bold leading-[1.05] tracking-[0.02em] text-ink"
            style={{ fontSize: 'clamp(28px, 4.5vw, 64px)' }}
          >
            {c.resultsTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-10 max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
            {c.resultsBody}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <ul className="space-y-3">
            {c.outcomes.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 + i * 0.06 }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="font-sans text-sm leading-relaxed text-muted sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */

function CaseFooter({ c }: { c: CaseContent }) {
  return (
    <footer className="border-t border-ink/[0.06] py-12">
      <div className="section-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2 rounded text-sm font-medium text-muted transition hover:text-ink"
        >
          <ArrowLeft size={15} className="transition group-hover:-translate-x-0.5" />
          {c.backLabel}
        </Link>
        <p className="font-sans text-xs text-muted/50">
          Davi Rojtenberg · Senior Product Designer
        </p>
      </div>
    </footer>
  )
}

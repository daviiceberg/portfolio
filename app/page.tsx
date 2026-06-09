'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, ExternalLink, Menu, X, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useLang, type Lang } from '@/lib/language-context'
import { content, jsonLd, type LocaleContent } from '@/lib/content'

export default function Home() {
  const { lang, toggle } = useLang()
  const c = content[lang]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    const handler = () => {
      const next = window.scrollY > 48
      if (next !== scrolledRef.current) {
        scrolledRef.current = next
        setScrolled(next)
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <main className="bg-canvas text-ink">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header c={c} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} lang={lang} toggle={toggle} />
      <AnimatePresence>
        {menuOpen && <MobileMenu c={c} lang={lang} toggle={toggle} onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
      <Hero c={c} />
      <About c={c} />
      <Expertise c={c} />
      <Work c={c} />
      <Workflow c={c} />
      <Experience c={c} />
      <Contact c={c} />
      <Footer c={c} />
    </main>
  )
}

/* ─── Header ──────────────────────────────────────────────────────────────── */

function Header({
  c, scrolled, menuOpen, setMenuOpen, lang, toggle,
}: {
  c: LocaleContent
  scrolled: boolean
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  lang: Lang
  toggle: () => void
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink/[0.06] bg-canvas/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="focus-ring rounded font-display text-lg font-semibold tracking-wide text-ink">
          DR
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {c.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded px-3 py-2 text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangToggle lang={lang} toggle={toggle} />
          <a href="#contact" className="focus-ring hidden rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition hover:border-gold/50 hover:text-gold sm:inline-flex">
            {c.nav.cta}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="focus-ring rounded p-1 text-muted transition hover:text-ink lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function LangToggle({ lang, toggle }: { lang: Lang; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="focus-ring flex items-center gap-1 rounded text-xs font-medium tracking-widest transition"
      aria-label="Switch language"
    >
      <span className={lang === 'en' ? 'text-ink' : 'text-muted transition hover:text-ink'}>EN</span>
      <span className="text-muted/40">|</span>
      <span className={lang === 'pt' ? 'text-ink' : 'text-muted transition hover:text-ink'}>PT</span>
    </button>
  )
}

/* ─── Mobile Menu ─────────────────────────────────────────────────────────── */

function MobileMenu({
  c, lang, toggle, onClose,
}: {
  c: LocaleContent
  lang: Lang
  toggle: () => void
  onClose: () => void
}) {
  return (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-40 flex flex-col bg-canvas px-5 pb-12 pt-20"
    >
      <nav className="flex flex-col gap-1">
        {c.nav.links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="border-b border-ink/[0.06] py-4 font-display text-3xl font-medium text-ink transition hover:text-gold"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
      <div className="mt-auto flex items-center justify-between pt-8">
        <LangToggle lang={lang} toggle={toggle} />
        <a href="#contact" onClick={onClose} className="btn-primary">
          {c.nav.cta}
        </a>
      </div>
    </motion.div>
  )
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function Hero({ c }: { c: LocaleContent }) {
  return (
    <section id="top" className="relative pt-16" style={{ minHeight: '100dvh' }}>
      {/* Warm radial gradient, very subtle */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 15% 0%, rgba(200,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-shell grid items-center gap-8 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16" style={{ minHeight: 'calc(100dvh - 4rem)' }}>

        {/* Left: text content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {c.hero.eyebrow}
          </motion.p>

          {/* Name — opacity-0 start means no overflow-hidden needed; avoids clipping descenders */}
          <div className="mt-8">
            {['DAVI', 'ROJTENBERG'].map((word, i) => (
              <motion.h1
                key={word}
                className="block font-display font-bold leading-[0.9] tracking-[0.025em] text-ink"
                style={{ fontSize: 'clamp(44px, 8.5vw, 140px)' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Animated rule */}
          <motion.div
            className="mt-10 h-px origin-left bg-ink/[0.10]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Tagline + CTAs */}
          <motion.div
            className="mt-10 flex flex-col gap-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          >
            <p className="max-w-lg font-sans text-base leading-relaxed text-muted sm:text-lg">
              {c.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                {c.hero.cta1} <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                {c.hero.cta2}
              </a>
            </div>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            className="mt-14 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink/[0.08] pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {c.metrics.map((m) => (
              <span key={m} className="font-sans text-sm text-muted">
                {m}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait photo */}
        <motion.div
          className="hidden lg:flex lg:items-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-gold/[0.14]">
            <Image
              src="/davi.webp"
              alt="Davi Rojtenberg"
              fill
              sizes="340px"
              className="object-cover object-center"
              priority
            />
            {/* Bottom gradient for elegance */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-canvas/50 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── About ───────────────────────────────────────────────────────────────── */

function About({ c }: { c: LocaleContent }) {
  return (
    <section id="about" className="section-shell py-14 sm:py-20">
      <Reveal>
        <div className="rule mb-10" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-6">{c.about.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {c.about.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-5 self-center">
            {c.about.body.map((para, i) => (
              <p key={i} className="font-sans text-base leading-[1.8] text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ─── Expertise ───────────────────────────────────────────────────────────── */

function Expertise({ c }: { c: LocaleContent }) {
  return (
    <section id="expertise" className="bg-surface py-14 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-6">{c.expertise.eyebrow}</p>
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {c.expertise.heading}
            </h2>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted lg:text-right">
              {c.expertise.subtitle}
            </p>
          </div>
        </Reveal>

        {/* AI Featured row */}
        <Reveal delay={0.05}>
          <div className="mb-2 flex items-center gap-3">
            <span className="eyebrow">{c.expertise.featuredLabel}</span>
            <div className="h-px flex-1 bg-gold/20" />
          </div>
          <div className="mb-2 grid gap-px border border-gold/[0.18] bg-gold/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {c.expertise.featured.map((item, i) => (
              <article
                key={item.title}
                className="group flex h-full flex-col gap-4 bg-surface2 p-6 transition hover:bg-[#1f1e1a]"
              >
                <span className="font-sans text-xs font-semibold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Core Design grid */}
        <Reveal delay={0.1}>
          <div className="mb-2 mt-6 flex items-center gap-3">
            <span className="eyebrow text-muted/60">{c.expertise.coreLabel}</span>
            <div className="h-px flex-1 bg-ink/[0.07]" />
          </div>
          <div className="grid gap-px border border-ink/[0.07] bg-ink/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {c.expertise.items.map((item, i) => (
              <article
                key={item.title}
                className="group flex h-full flex-col gap-3 bg-surface p-6 transition hover:bg-surface2"
              >
                <span className="font-sans text-xs font-medium text-gold/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 font-sans text-xs leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Work ────────────────────────────────────────────────────────────────── */

function Work({ c }: { c: LocaleContent }) {
  return (
    <section id="work" className="section-shell py-14 sm:py-20">
      <Reveal>
        <div className="rule mb-10" />
        <p className="eyebrow mb-6">{c.work.eyebrow}</p>
        <h2 className="mb-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {c.work.heading}
        </h2>
        <p className="mb-16 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          {c.work.subtitle}
        </p>
      </Reveal>

      <div className="flex flex-col gap-8">
        {c.work.projects.map((project, idx) => (
          <Reveal key={project.name} delay={idx * 0.06}>
            <article className="group overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface transition hover:border-ink/[0.16]">
              {/* Project header */}
              <div className="flex items-start justify-between gap-6 border-b border-ink/[0.08] p-6">
                {/* Left: number + text */}
                <div className="flex min-w-0 items-start gap-5">
                  <span className="shrink-0 pt-1 font-sans text-xs font-medium text-gold/70">
                    {project.number}
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow mb-2">{project.category}</p>
                    <h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target={project.link.startsWith('http') ? '_blank' : undefined}
                        rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-canvas transition hover:bg-gold/90"
                      >
                        {project.link.startsWith('/') ? 'View case' : project.link.includes('behance') ? 'View on Behance' : 'View live'}
                        {project.link.startsWith('/') ? <ArrowRight size={12} /> : <ExternalLink size={12} />}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: thumbnail */}
                {project.thumb && (
                  <a
                    href={project.link}
                    target={project.link?.startsWith('http') ? '_blank' : undefined}
                    rel={project.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hidden shrink-0 overflow-hidden rounded-xl border border-ink/[0.08] sm:block sm:w-[19rem]"
                  >
                    <Image
                      src={project.thumb}
                      alt={project.name}
                      width={640}
                      height={400}
                      sizes="19rem"
                      quality={75}
                      loading="lazy"
                      className="w-full h-auto object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                )}
              </div>

              {/* Project body */}
              <div className="grid gap-px bg-ink/[0.06] sm:grid-cols-3">
                <div className="bg-surface p-6">
                  <p className="eyebrow mb-3">{project.challenge.label}</p>
                  <p className="font-sans text-sm leading-relaxed text-muted">{project.challenge.text}</p>
                </div>
                <div className="bg-surface p-6">
                  <p className="eyebrow mb-3">{project.solution.label}</p>
                  <p className="font-sans text-sm leading-relaxed text-muted">{project.solution.text}</p>
                </div>
                <div className="bg-surface p-6">
                  <p className="eyebrow mb-3">{project.outcomes.label}</p>
                  <ul className="flex flex-col gap-2">
                    {project.outcomes.items.map((item) => (
                      <li key={item} className="flex gap-2 font-sans text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 border-t border-ink/[0.08] px-6 py-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ink/[0.05] px-3 py-1 font-sans text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Workflow ────────────────────────────────────────────────────────────── */

function Workflow({ c }: { c: LocaleContent }) {
  return (
    <section id="process" className="bg-surface py-14 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-6">{c.workflow.eyebrow}</p>
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {c.workflow.heading}
            </h2>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted lg:text-right">
              {c.workflow.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px border border-ink/[0.07] bg-ink/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {c.workflow.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="group flex h-full flex-col bg-surface p-7 transition hover:bg-surface2">
                <span className="mb-6 font-display text-4xl font-light text-gold/30 sm:text-5xl">
                  {step.number}
                </span>
                <h3 className="mb-3 font-sans text-base font-semibold text-ink">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 border-t border-ink/[0.08] pt-6">
            <p className="eyebrow mb-4">{c.workflow.toolsLabel}</p>
            <div className="flex flex-wrap gap-2">
              {c.workflow.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/[0.10] bg-ink/[0.04] px-3 py-1.5 font-sans text-xs text-muted transition hover:border-gold/30 hover:text-ink"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Experience ──────────────────────────────────────────────────────────── */

function Experience({ c }: { c: LocaleContent }) {
  return (
    <section id="experience" className="section-shell py-14 sm:py-20">
      <Reveal>
        <div className="rule mb-10" />
        <p className="eyebrow mb-6">{c.experience.eyebrow}</p>
        <h2 className="mb-14 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {c.experience.heading}
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {c.experience.items.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.05}>
            <article className="grid gap-4 border-t border-ink/[0.08] py-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {item.company}
                </h3>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-gold/70">
                  {item.role}
                </p>
                <p className="mt-2 font-sans text-xs text-muted">{item.period}</p>
              </div>
              <p className="self-center font-sans text-sm leading-[1.8] text-muted">{item.detail}</p>
            </article>
          </Reveal>
        ))}
        <div className="rule" />
      </div>
    </section>
  )
}

/* ─── Contact ─────────────────────────────────────────────────────────────── */

function Contact({ c }: { c: LocaleContent }) {
  return (
    <section id="contact" className="bg-surface py-14 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-10">{c.contact.eyebrow}</p>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              {c.contact.heading.map((line) => (
                <h2
                  key={line}
                  className="block font-display font-bold leading-[0.9] text-ink"
                  style={{ fontSize: 'clamp(52px, 8vw, 120px)' }}
                >
                  {line}
                </h2>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {/* Availability badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.07] px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="font-sans text-sm text-gold">{c.contact.availability}</span>
              </div>

              <p className="font-sans text-sm leading-[1.8] text-muted">{c.contact.subtitle}</p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                {c.contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="focus-ring inline-flex items-center justify-between gap-2 rounded-xl border border-ink/[0.10] bg-ink/[0.03] px-4 py-3 font-sans text-sm text-muted transition hover:border-gold/40 hover:text-gold"
                  >
                    <span>{link.label}</span>
                    {link.href.startsWith('mailto') ? (
                      <Mail size={13} className="shrink-0 opacity-50" />
                    ) : link.href.startsWith('tel') ? (
                      <Phone size={13} className="shrink-0 opacity-50" />
                    ) : (
                      <ExternalLink size={13} className="shrink-0 opacity-50" />
                    )}
                  </a>
                ))}
              </div>

              {/* CV Download — language-aware */}
              <a
                href={c.contact.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex w-full items-center justify-between gap-3 rounded-xl border border-gold/25 bg-gold/[0.06] px-5 py-3.5 font-sans text-sm font-medium text-gold transition hover:bg-gold/[0.12] hover:border-gold/50"
              >
                <span>{c.contact.cvLabel}</span>
                <Download size={15} className="shrink-0" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */

function Footer({ c }: { c: LocaleContent }) {
  return (
    <footer className="section-shell py-8">
      <div className="rule mb-6" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs text-muted">{c.footer.copy}</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/davi-rojtenberg"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-sans text-xs text-muted transition hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/davirojtenberg"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-sans text-xs text-muted transition hover:text-gold"
          >
            Behance
          </a>
          <a
            href="mailto:davi.iceberg@gmail.com"
            className="focus-ring font-sans text-xs text-muted transition hover:text-gold"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

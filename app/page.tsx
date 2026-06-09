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
    <section id="top" className="relative pt-16 min-h-svh">
      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[800px]"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 18% -5%, rgba(200,169,110,0.09) 0%, transparent 60%)',
        }}
      />

      <div className="section-shell py-12 lg:grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">

        {/* Text column */}
        <div className="flex flex-col">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {c.hero.eyebrow}
          </motion.p>

          {/* Name */}
          <div className="mt-6">
            {['DAVI', 'ROJTENBERG'].map((word, i) => (
              <motion.h1
                key={word}
                className="block font-display font-bold leading-[0.88] text-ink"
                style={{ fontSize: 'clamp(46px, 7vw, 108px)', letterSpacing: '-0.02em' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Gold accent rule */}
          <motion.div
            className="mt-8 h-px origin-left bg-gold/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Photo — mobile only, between rule and tagline */}
          <motion.div
            className="mt-8 lg:hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] w-[180px] sm:w-[220px] overflow-hidden rounded-2xl border border-gold/[0.15]">
              <Image
                src="/davi.webp"
                alt="Davi Rojtenberg"
                fill
                sizes="220px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/50 to-transparent" />
            </div>
          </motion.div>

          {/* Tagline + subtitle + CTAs */}
          <motion.div
            className="mt-8 flex flex-col gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          >
            <p className="max-w-lg font-display text-xl font-light leading-snug text-ink/80 sm:text-2xl">
              {c.hero.tagline}
            </p>
            <p className="max-w-md font-sans text-sm leading-[1.8] text-muted">
              {c.hero.subtitle}
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

          {/* Metrics */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/[0.08] pt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {c.metrics.map((m, i) => (
              <span key={m} className="flex items-center gap-5">
                <span className="font-sans text-xs text-muted">{m}</span>
                {i < c.metrics.length - 1 && (
                  <span className="h-3 w-px bg-ink/[0.12]" />
                )}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Photo — desktop only, right column */}
        <motion.div
          className="hidden lg:flex lg:items-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[3/4] w-full max-w-[340px]">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] border border-gold/[0.12] bg-surface" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-gold/[0.18]">
              <Image
                src="/davi.webp"
                alt="Davi Rojtenberg"
                fill
                sizes="340px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── About ───────────────────────────────────────────────────────────────── */

function About({ c }: { c: LocaleContent }) {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            {/* Left: eyebrow + heading with gold left accent */}
            <div className="border-l border-gold/30 pl-7 lg:pl-10">
              <p className="eyebrow mb-6">{c.about.eyebrow}</p>
              <h2
                className="font-display font-semibold leading-[1.05] text-ink"
                style={{ fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '-0.02em' }}
              >
                {c.about.heading}
              </h2>
            </div>
            {/* Right: body text */}
            <div className="flex flex-col gap-6 self-center">
              {c.about.body.map((para, i) => (
                <p key={i} className="font-sans text-base leading-[1.9] text-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Expertise ───────────────────────────────────────────────────────────── */

function Expertise({ c }: { c: LocaleContent }) {
  return (
    <section id="expertise" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-6">{c.expertise.eyebrow}</p>
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="max-w-xl font-display font-semibold leading-tight text-ink"
              style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', letterSpacing: '-0.025em' }}
            >
              {c.expertise.heading}
            </h2>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted lg:text-right">
              {c.expertise.subtitle}
            </p>
          </div>
        </Reveal>

        {/* AI Featured row */}
        <Reveal delay={0.05}>
          <div className="mb-3 flex items-center gap-3">
            <span className="eyebrow">{c.expertise.featuredLabel}</span>
            <div className="h-px flex-1 bg-gold/20" />
          </div>
          <div className="mb-2 grid gap-px border border-gold/[0.18] bg-gold/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {c.expertise.featured.map((item, i) => (
              <article
                key={item.title}
                className="group flex h-full flex-col gap-3 bg-surface2 p-6 transition hover:bg-[#1f1e1a] hover:-translate-y-px"
              >
                <span
                  className="font-display font-bold leading-none text-gold/[0.12] select-none"
                  style={{ fontSize: 'clamp(48px, 5vw, 72px)' }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-auto">
                  <h3 className="font-sans text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Core Design grid */}
        <Reveal delay={0.1}>
          <div className="mb-3 mt-8 flex items-center gap-3">
            <span className="eyebrow text-muted/60">{c.expertise.coreLabel}</span>
            <div className="h-px flex-1 bg-ink/[0.07]" />
          </div>
          <div className="grid gap-px border border-ink/[0.07] bg-ink/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {c.expertise.items.map((item, i) => (
              <article
                key={item.title}
                className="group flex h-full flex-col gap-3 bg-canvas p-6 transition hover:bg-surface"
              >
                <span className="font-sans text-xs font-medium text-gold/40">
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
  const [featured, ...secondary] = c.work.projects

  return (
    <section id="work" className="bg-surface py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="rule mb-10" />
          <p className="eyebrow mb-6">{c.work.eyebrow}</p>
          <h2
            className="mb-3 font-display font-semibold leading-tight text-ink"
            style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', letterSpacing: '-0.025em' }}
          >
            {c.work.heading}
          </h2>
          <p className="mb-14 max-w-2xl font-sans text-sm leading-relaxed text-muted">
            {c.work.subtitle}
          </p>
        </Reveal>

        {/* ── Featured project ── */}
        <Reveal>
          <article className="group mb-6 overflow-hidden rounded-2xl border border-ink/[0.08] bg-canvas transition hover:border-gold/[0.18]">
            {/* Header: text left, large thumbnail right */}
            <div className="grid border-b border-ink/[0.08] lg:grid-cols-[1fr_1.35fr]">
              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-sans text-xs font-medium text-gold/70">{featured.number}</span>
                    <p className="eyebrow">{featured.category}</p>
                  </div>
                  <h3
                    className="font-display font-semibold leading-tight text-ink"
                    style={{ fontSize: 'clamp(36px, 4vw, 60px)', letterSpacing: '-0.025em' }}
                  >
                    {featured.name}
                  </h3>
                  <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-muted">
                    {featured.description}
                  </p>
                  {featured.link && (
                    <a
                      href={featured.link}
                      className="focus-ring mt-8 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-canvas transition hover:bg-gold/90"
                    >
                      View case <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Large thumbnail */}
              {featured.thumb && (
                <a
                  href={featured.link}
                  className="relative hidden min-h-[380px] overflow-hidden lg:block"
                >
                  <Image
                    src={featured.thumb}
                    alt={featured.name}
                    fill
                    sizes="(max-width: 1280px) 55vw, 720px"
                    quality={75}
                    loading="lazy"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                  />
                </a>
              )}
            </div>

            {/* Body: Challenge / Solution / Outcomes */}
            <div className="grid gap-px bg-ink/[0.06] sm:grid-cols-3">
              <div className="bg-canvas p-6">
                <p className="eyebrow mb-3">{featured.challenge.label}</p>
                <p className="font-sans text-sm leading-relaxed text-muted">{featured.challenge.text}</p>
              </div>
              <div className="bg-canvas p-6">
                <p className="eyebrow mb-3">{featured.solution.label}</p>
                <p className="font-sans text-sm leading-relaxed text-muted">{featured.solution.text}</p>
              </div>
              <div className="bg-canvas p-6">
                <p className="eyebrow mb-3">{featured.outcomes.label}</p>
                <ul className="flex flex-col gap-2">
                  {featured.outcomes.items.map((item) => (
                    <li key={item} className="flex gap-2 font-sans text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 border-t border-ink/[0.08] px-8 py-4">
              {featured.tech.map((tag) => (
                <span key={tag} className="rounded-full bg-ink/[0.05] px-3 py-1 font-sans text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        {/* ── Secondary projects — 2-col grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          {secondary.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.08}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-canvas transition hover:border-gold/[0.18]">
                {/* Thumbnail on top */}
                {project.thumb && (
                  <a
                    href={project.link}
                    target={project.link?.startsWith('http') ? '_blank' : undefined}
                    rel={project.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative block aspect-[16/9] overflow-hidden"
                  >
                    <Image
                      src={project.thumb}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(50vw - 48px), 580px"
                      quality={75}
                      loading="lazy"
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  </a>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-sans text-xs font-medium text-gold/70">{project.number}</span>
                    <p className="eyebrow">{project.category}</p>
                  </div>
                  <h3
                    className="font-display font-semibold leading-tight text-ink"
                    style={{ fontSize: 'clamp(26px, 3vw, 38px)', letterSpacing: '-0.02em' }}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : undefined}
                      rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="focus-ring mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-canvas transition hover:bg-gold/90"
                    >
                      {project.link.includes('behance') ? 'View on Behance' : 'View live'}
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Outcomes */}
                <div className="border-t border-ink/[0.08] p-6">
                  <p className="eyebrow mb-3">{project.outcomes.label}</p>
                  <ul className="flex flex-col gap-2">
                    {project.outcomes.items.map((item) => (
                      <li key={item} className="flex gap-2 font-sans text-xs leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 border-t border-ink/[0.08] px-6 py-4">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full bg-ink/[0.05] px-3 py-1 font-sans text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Behance CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex items-center justify-between border-t border-ink/[0.08] pt-8">
            <p className="font-sans text-sm text-muted">{c.work.behanceCta}</p>
            <a
              href="https://www.behance.net/davirojtenberg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Behance <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Workflow ────────────────────────────────────────────────────────────── */

function Workflow({ c }: { c: LocaleContent }) {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-6">{c.workflow.eyebrow}</p>
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="max-w-2xl font-display font-semibold leading-tight text-ink"
              style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', letterSpacing: '-0.025em' }}
            >
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
              <div className="group flex h-full flex-col bg-canvas p-7 transition hover:bg-surface">
                <span
                  className="mb-4 block font-display font-bold leading-none text-gold/[0.13] select-none transition group-hover:text-gold/[0.20]"
                  style={{ fontSize: 'clamp(56px, 6vw, 80px)' }}
                  aria-hidden
                >
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
    <section id="experience" className="bg-surface py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-6">{c.experience.eyebrow}</p>
          <h2
            className="mb-16 font-display font-semibold leading-tight text-ink"
            style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', letterSpacing: '-0.025em' }}
          >
            {c.experience.heading}
          </h2>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-gold/[0.18] sm:block" />

          <div className="flex flex-col sm:pl-10">
            {c.experience.items.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.05}>
                <article className="relative border-t border-ink/[0.08] py-8 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 top-9 hidden h-2.5 w-2.5 items-center justify-center sm:flex">
                    <div className="h-2 w-2 rounded-full bg-canvas ring-1 ring-gold/50" />
                  </div>

                  <div>
                    <h3
                      className="font-display font-semibold text-ink"
                      style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', letterSpacing: '-0.01em' }}
                    >
                      {item.company}
                    </h3>
                    <p className="mt-1 font-sans text-xs uppercase tracking-widest text-gold/70">
                      {item.role}
                    </p>
                    <p className="mt-2 font-sans text-xs text-muted">{item.period}</p>
                  </div>
                  <p className="mt-4 self-center font-sans text-sm leading-[1.8] text-muted lg:mt-0">{item.detail}</p>
                </article>
              </Reveal>
            ))}
            <div className="rule" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ─────────────────────────────────────────────────────────────── */

function Contact({ c }: { c: LocaleContent }) {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-12">{c.contact.eyebrow}</p>

          {/* Heading — full width */}
          <div className="mb-16 border-b border-ink/[0.08] pb-14">
            {c.contact.heading.map((line) => (
              <h2
                key={line}
                className="block font-display font-bold leading-[0.88] text-ink"
                style={{ fontSize: 'clamp(36px, 5.8vw, 108px)', letterSpacing: '-0.03em' }}
              >
                {line}
              </h2>
            ))}
            <div className="mt-8 h-px w-20 bg-gold/50" />
          </div>

          {/* Info row — 3 cols on md+ */}
          <div className="grid gap-8 md:grid-cols-3 md:items-start md:gap-12">

            {/* Availability + subtitle */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.07] px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="font-sans text-sm text-gold">{c.contact.availability}</span>
              </div>
              <p className="font-sans text-sm leading-[1.8] text-muted">{c.contact.subtitle}</p>
            </div>

            {/* Contact links */}
            <div className="grid grid-cols-2 gap-2">
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

            {/* CV Download */}
            <div className="flex flex-col justify-start">
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
    <footer className="bg-surface py-8">
      <div className="section-shell">
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
      </div>
    </footer>
  )
}

'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'en' | 'pt'

type LangCtx = { lang: Lang; toggle: () => void }

const LangContext = createContext<LangCtx>({ lang: 'en', toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang') as Lang | null
      if (saved === 'en' || saved === 'pt') setLang(saved)
    } catch {}
  }, [])

  const toggle = () =>
    setLang(l => {
      const next = l === 'en' ? 'pt' : 'en'
      try { localStorage.setItem('lang', next) } catch {}
      return next
    })

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

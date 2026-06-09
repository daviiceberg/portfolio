'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'en' | 'pt'

type LangCtx = { lang: Lang; toggle: () => void }

const LangContext = createContext<LangCtx>({ lang: 'en', toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'en' || saved === 'pt') setLang(saved)
  }, [])

  const toggle = () =>
    setLang(l => {
      const next = l === 'en' ? 'pt' : 'en'
      localStorage.setItem('lang', next)
      return next
    })

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

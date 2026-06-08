'use client'

import { createContext, useContext, useState } from 'react'

export type Lang = 'en' | 'pt'

type LangCtx = { lang: Lang; toggle: () => void }

const LangContext = createContext<LangCtx>({ lang: 'en', toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === 'en' ? 'pt' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

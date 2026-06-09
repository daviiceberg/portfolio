'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CaseError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-canvas px-5 text-ink">
      <p className="eyebrow mb-4">Something went wrong</p>
      <p className="mb-8 max-w-sm text-center font-sans text-sm text-muted">
        This page encountered an error. Try reloading or go back to the portfolio.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-canvas transition hover:bg-gold/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-muted transition hover:border-gold/50 hover:text-gold"
        >
          <ArrowLeft size={14} />
          Portfolio
        </Link>
      </div>
    </main>
  )
}

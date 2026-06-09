"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-5 text-ink">
          <p className="eyebrow mb-4">Something went wrong</p>
          <p className="mb-2 max-w-sm text-center font-sans text-sm text-muted">
            {this.state.error.message || "An unexpected error occurred."}
          </p>
          <p className="mb-8 font-mono text-xs text-muted/40">
            Check the browser console for details.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => this.setState({ error: null })}
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
      );
    }

    return this.props.children;
  }
}

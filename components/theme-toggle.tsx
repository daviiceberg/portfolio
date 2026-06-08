"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", nextDark);
    setIsDark(nextDark);
  }, []);

  function toggleTheme() {
    const nextDark = !isDark;
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDark(nextDark);
  }

  return (
    <button
      aria-label="Toggle dark mode"
      className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus:ring-offset-slate-950"
      type="button"
      onClick={toggleTheme}
    >
      {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
    </button>
  );
}

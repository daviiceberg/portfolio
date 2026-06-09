"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  // Fallback: força exibição após 800ms — reduzido de 2s para evitar flash longo no iOS
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 800);
    return () => clearTimeout(t);
  }, []);

  const show = reduceMotion || isInView || fallback;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 18 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: show && !isInView && !reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

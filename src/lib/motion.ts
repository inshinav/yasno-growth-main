import { useReducedMotion, type Variants } from 'framer-motion'

// Дисциплинированные варианты. Один язык движения. Перебор анимации читается
// как AI-генерация. Под prefers-reduced-motion useReveal() рендерит статичный
// финальный кадр (без движения и без opacity-фейда) — контент всегда виден.

export const EASE_SOFT = [0.22, 1, 0.36, 1] as const

/** Мягкий fade + small y. Базовый скролл-ревил для секций и карточек. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_SOFT },
  },
}

/** Контейнер со stagger для списков карточек. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

/**
 * Props для whileInView-ревила, уважающие prefers-reduced-motion.
 * При reduce: элемент сразу в состоянии 'show' (никакой анимации/фейда).
 */
export function useReveal() {
  const reduce = useReducedMotion()
  if (reduce) return { initial: 'show' as const }
  return {
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, amount: 0.25 },
  }
}

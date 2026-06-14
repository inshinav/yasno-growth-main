import { motion } from 'framer-motion'
import { fadeUp, useReveal } from '../lib/motion'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  /** Тонкая линия-разделитель сверху. */
  divided?: boolean
}

/** Секция-обёртка: единый ритм отступов + мягкий скролл-ревил. */
export default function Section({ id, children, className = '', divided = true }: SectionProps) {
  const reveal = useReveal()
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="shell">
        {divided && <div className="hairline" aria-hidden />}
        <motion.div className="py-16 sm:py-20 lg:py-28" variants={fadeUp} {...reveal}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

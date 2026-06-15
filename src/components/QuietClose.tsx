import { motion } from 'framer-motion'
import { fadeUp, useReveal } from '../lib/motion'

export default function QuietClose() {
  const reveal = useReveal()
  return (
    <section className="shell">
      <div className="hairline" aria-hidden />
      <motion.div variants={fadeUp} {...reveal} className="py-20 sm:py-28">
        <p className="eyebrow">growth roadmap · ясно</p>
        <p className="mt-5 max-w-3xl font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium leading-tight tracking-tight text-ink">
          <span className="text-blue-deep">Доверие × Исход.</span> Шесть шагов. Всё
          уже работает.
        </p>
      </motion.div>
    </section>
  )
}

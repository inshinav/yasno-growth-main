import { motion } from 'framer-motion'
import { fadeUp, useReveal } from '../lib/motion'
import { CLOSING } from '../data/strategy'

export default function QuietClose() {
  const reveal = useReveal()
  return (
    <section className="shell">
      <div className="hairline" aria-hidden />
      <motion.div variants={fadeUp} {...reveal} className="py-20 sm:py-28">
        <p className="eyebrow">growth os · ясно</p>
        <p className="mt-5 max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-[2rem]">
          {CLOSING}
        </p>
      </motion.div>
    </section>
  )
}

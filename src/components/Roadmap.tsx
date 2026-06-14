import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from './Section'
import Eyebrow from './Eyebrow'
import { ROADMAP } from '../data/strategy'
import { staggerContainer, fadeUp, useReveal } from '../lib/motion'

export default function Roadmap() {
  const reveal = useReveal()
  return (
    <Section id="roadmap">
      <div className="max-w-2xl">
        <Eyebrow index="05">роадмап разворачивания</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight">
          Как мы разворачиваем систему
        </h2>
      </div>

      <motion.ol
        variants={staggerContainer}
        {...reveal}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {ROADMAP.map((phase, i) => (
          <motion.li
            key={phase.index}
            variants={fadeUp}
            className="relative flex flex-col rounded-card border border-line bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <span className="data-mono grid h-8 w-8 place-items-center rounded-full bg-blue-deep text-sm font-medium text-white">
                {i + 1}
              </span>
              <div>
                <p className="data-mono text-[0.62rem] uppercase tracking-wider text-ink-soft">
                  {phase.index}
                </p>
                <h3 className="font-display text-lg font-semibold leading-none tracking-tight">
                  {phase.title}
                </h3>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {phase.items.map((item, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-snug text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-deep" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}

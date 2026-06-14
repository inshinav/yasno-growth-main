import { motion } from 'framer-motion'
import { Compass, RefreshCw } from 'lucide-react'
import Section from './Section'
import Eyebrow from './Eyebrow'
import { NORTH_STAR, GROWTH_LOOPS } from '../data/strategy'
import { staggerContainer, fadeUp, useReveal } from '../lib/motion'

export default function Strategy() {
  const reveal = useReveal()
  return (
    <Section id="strategy">
      <div className="max-w-2xl">
        <Eyebrow index="04">north star + петли</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight">
          Куда направлен рост
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Одна метрика задаёт направление — и четыре петли, которые её крутят.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* North Star — единственный тяжёлый акцент этой секции */}
        <motion.div
          variants={fadeUp}
          {...reveal}
          className="flex flex-col justify-between rounded-card border border-blue/40 bg-blue-tint p-6 shadow-lift"
        >
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Compass className="h-3.5 w-3.5 text-blue-deep" aria-hidden />
              north star metric
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight">
              {NORTH_STAR.metric}
            </h3>
            <p className="data-mono mt-3 inline-block rounded-full border border-blue/40 px-3 py-1 text-sm text-blue-deep">
              {NORTH_STAR.definition}
            </p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">{NORTH_STAR.why}</p>
        </motion.div>

        {/* Growth loops — подчинены North Star, без тяжёлого выделения */}
        <motion.ul variants={staggerContainer} {...reveal} className="grid gap-5 sm:grid-cols-2">
          {GROWTH_LOOPS.map((loop) => (
            <motion.li
              key={loop.index}
              variants={fadeUp}
              className="rounded-card border border-line bg-surface p-6"
            >
              <div className="flex items-center gap-2">
                <RefreshCw className="h-3.5 w-3.5 text-blue-deep" aria-hidden />
                <span className="data-mono text-xs text-blue-deep">{loop.index}</span>
              </div>
              <h4 className="mt-3 font-display text-base font-semibold leading-tight tracking-tight">
                {loop.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{loop.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}

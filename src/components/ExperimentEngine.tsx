import { motion } from 'framer-motion'
import { RotateCcw, ArrowRight } from 'lucide-react'
import Section from './Section'
import Eyebrow from './Eyebrow'
import { EXPERIMENT_LOOP, EXPERIMENT_PRINCIPLES } from '../data/strategy'
import { staggerContainer, fadeUp, useReveal } from '../lib/motion'

export default function ExperimentEngine() {
  const reveal = useReveal()
  return (
    <Section id="engine">
      <div className="max-w-2xl">
        <Eyebrow index="02">ядро системы</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight">
          Growth Experiment Engine
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Движок, который держит поток гипотез по всей воронке. Приоритизируем по
          влиянию на бизнес, отсеиваем дёшево и держим growth review как ритуал —
          не громкость идеи решает, а её вес.
        </p>
      </div>

      {/* Петля гипотез */}
      <motion.ol
        variants={staggerContainer}
        {...reveal}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
      >
        {EXPERIMENT_LOOP.map((step, i) => (
          <motion.li
            key={step.index}
            variants={fadeUp}
            className="relative flex flex-col rounded-card border border-line bg-surface p-6"
          >
            <span className="data-mono text-xs text-blue-deep">{step.index}</span>
            <h3 className="mt-2 font-display text-lg font-semibold leading-tight tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-snug text-ink-soft">{step.note}</p>
            {i < EXPERIMENT_LOOP.length - 1 && (
              <ArrowRight
                aria-hidden
                className="absolute -right-[14px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-blue-deep lg:block"
              />
            )}
          </motion.li>
        ))}
      </motion.ol>

      <motion.p
        variants={fadeUp}
        {...reveal}
        className="mt-4 flex items-center gap-2 data-mono text-xs text-ink-soft"
      >
        <RotateCcw className="h-3.5 w-3.5 text-blue-deep" aria-hidden />
        цикл повторяется — победителя в систему, проигравшего в архив
      </motion.p>

      {/* Принципы */}
      <motion.ul
        variants={staggerContainer}
        {...reveal}
        className="mt-10 grid gap-x-8 gap-y-3 border-t border-line pt-8 sm:grid-cols-2"
      >
        {EXPERIMENT_PRINCIPLES.map((p, i) => (
          <motion.li key={i} variants={fadeUp} className="flex gap-3">
            <span className="data-mono text-xs text-blue-deep">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-sm leading-relaxed text-ink">{p}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

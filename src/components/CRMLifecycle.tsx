import { motion } from 'framer-motion'
import { Info, ShieldCheck } from 'lucide-react'
import Section from './Section'
import Eyebrow from './Eyebrow'
import { CRM_CASCADES, CRM_NOTE, CRM_CARE } from '../data/strategy'
import { staggerContainer, fadeUp, useReveal } from '../lib/motion'

export default function CRMLifecycle() {
  const reveal = useReveal()
  return (
    <Section id="crm">
      <div className="max-w-2xl">
        <Eyebrow index="03">crm lifecycle map</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight">
          Шесть каскадов поверх Mindbox
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Воронка удержания: от реактивации лида с диагностики до рекомендации.
          Каждый каскад — со своим триггером и метрикой.
        </p>
      </div>

      <motion.ol
        variants={staggerContainer}
        {...reveal}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CRM_CASCADES.map((c) => (
          <motion.li
            key={c.index}
            variants={fadeUp}
            className="group rounded-card border border-line bg-surface p-6 transition-colors duration-300 hover:border-blue/40"
          >
            <div className="flex items-baseline gap-3">
              <span className="data-mono text-sm text-blue-deep">{c.index}</span>
              <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">
                {c.title}
              </h3>
            </div>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="eyebrow !text-[0.6rem]">триггер</dt>
                <dd className="mt-0.5 text-sm leading-snug text-ink-soft">{c.trigger}</dd>
              </div>
              <div>
                <dt className="eyebrow !text-[0.6rem]">метрика</dt>
                <dd className="data-mono mt-0.5 text-sm text-blue-deep">{c.metric}</dd>
              </div>
            </dl>
          </motion.li>
        ))}
      </motion.ol>

      {/* Оговорка ниши: человек в контуре — важнее метрики удержания */}
      <motion.div
        variants={fadeUp}
        {...reveal}
        className="mt-6 flex items-start gap-3 rounded-card border border-blue/30 bg-blue-tint p-5"
      >
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-deep" aria-hidden />
        <p className="text-sm leading-relaxed text-ink">{CRM_CARE}</p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        {...reveal}
        className="mt-4 flex items-start gap-3 rounded-card border border-clay/30 bg-clay-tint p-5"
      >
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-clay" aria-hidden />
        <p className="text-sm leading-relaxed text-ink-soft">{CRM_NOTE}</p>
      </motion.div>
    </Section>
  )
}

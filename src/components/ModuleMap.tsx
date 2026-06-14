import { motion } from 'framer-motion'
import Section from './Section'
import Eyebrow from './Eyebrow'
import ModuleCard from './ModuleCard'
import { MODULES } from '../data/modules'
import { staggerContainer, useReveal } from '../lib/motion'

export default function ModuleMap() {
  const reveal = useReveal()
  return (
    <Section id="system">
      <div className="max-w-2xl">
        <Eyebrow index="01">карта модулей</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight">
          Шесть модулей, одна воронка
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Каждый модуль повешен на стадию AARRR и на конкретный бизнес-эффект.
          Карточки раскрываются по клику — внутри: что делает, на какую метрику
          влияет, наша ставка.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        {...reveal}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {MODULES.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </motion.div>
    </Section>
  )
}

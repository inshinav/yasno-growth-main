import { motion } from 'framer-motion'
import { FileText, ListOrdered, FlaskConical, Scale } from 'lucide-react'
import Section from './Section'
import Eyebrow from './Eyebrow'
import { staggerContainer, fadeUp, useReveal } from '../lib/motion'

const ITEMS = [
  { icon: FileText, title: 'Единый формат гипотезы', body: 'что, для кого, какой эффект ждём и как замерим — до запуска, а не после.' },
  { icon: ListOrdered, title: 'ICE-приоритизация', body: 'решает вес гипотезы по влиянию на бизнес, а не громкость идеи.' },
  { icon: FlaskConical, title: 'A/B и замер до/после', body: 'минимальный честный тест с заранее заданным критерием успеха.' },
  { icon: Scale, title: 'Решения по цифрам', body: 'проигравший тест — минус одна иллюзия; не спорим вкусами, смотрим на данные.' },
]

export default function HowWeTest() {
  const reveal = useReveal()
  return (
    <Section id="method">
      <div className="max-w-2xl">
        <Eyebrow>как мы проверяем</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight">
          Зрелость — это считать, а не спорить
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        {...reveal}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ITEMS.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="rounded-card border border-line bg-surface p-6"
          >
            <Icon aria-hidden className="h-5 w-5 text-blue-deep" />
            <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-tight">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Eyebrow from './Eyebrow'
import { fadeUp, useReveal } from '../lib/motion'
import { STRATEGY } from '../data/roadmap'

export default function Thesis() {
  const reveal = useReveal()
  return (
    <Section id="thesis">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div className="max-w-xl">
          <Eyebrow>организующий тезис</Eyebrow>
          <p className="mt-6 font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-snug tracking-tight">
            В категории, где барьер — недоверие, рост ={' '}
            <span className="text-blue-deep">Доверие × Исход</span>.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Привлечение линейно и дорожает. Доверие и исход — накапливаются и
            усиливают друг друга. Поэтому мы растём системой: каждый шаг карты
            закрывает конкретное узкое место роста и подкреплён готовым артефактом.
          </p>
          <a
            href={STRATEGY.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-blue/40 px-5 py-3 text-sm font-medium text-blue-deep transition-colors duration-300 hover:bg-blue-tint"
          >
            Вся стратегия
            <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <motion.div
          variants={fadeUp}
          {...reveal}
          className="rounded-card border border-blue/40 bg-blue-tint p-7 shadow-lift"
        >
          <div className="flex items-center justify-center gap-4 py-4">
            <span className="font-display text-xl font-semibold tracking-tight">Доверие</span>
            <span className="font-display text-3xl font-semibold text-blue">×</span>
            <span className="font-display text-xl font-semibold tracking-tight">Исход</span>
          </div>
          <div className="hairline my-4" aria-hidden />
          <p className="text-center text-sm leading-relaxed text-ink-soft">
            Линейное привлечение делится между всеми каналами. Доверие и исход
            остаются с нами и накапливаются — это и есть компаунд.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}

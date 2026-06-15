import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import RoadSignature from './RoadSignature'
import { EASE_SOFT } from '../lib/motion'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <header id="roadmap" className="relative overflow-hidden scroll-mt-24">
      <div className="paper-grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[-12%] h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(47,107,255,0.16), transparent)' }}
      />

      <div className="shell relative">
        <motion.div
          className="max-w-2xl pt-16 sm:pt-20 lg:pt-24"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: EASE_SOFT, delay: reduce ? 0 : 0.1 }}
        >
          <p className="eyebrow mb-6">growth roadmap · ясно</p>
          <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.0]">
            Дорожная карта роста Ясно
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Шесть готовых шагов системы роста — от привлечения до удержания, плюс
            операционка и ядро. Каждый уже собран — откройте любой.
          </p>
          <a
            href="#projects"
            className="group mt-9 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-blue-deep px-5 py-3 text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(47,107,255,0.6)] transition-transform duration-300 ease-soft hover:-translate-y-0.5"
          >
            Смотреть шесть проектов
            <ArrowDown aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <div className="pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-14">
          <RoadSignature />
        </div>
      </div>
    </header>
  )
}

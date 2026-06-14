import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import AARRRFunnel from './AARRRFunnel'
import { EASE_SOFT } from '../lib/motion'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <header className="relative overflow-hidden">
      <div className="paper-grain absolute inset-0" aria-hidden />
      {/* Мягкое синее свечение за воронкой — характер, не декор */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(47,107,255,0.16), transparent)' }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          {/* Тезис — виден сразу, без мёртвой паузы перед смыслом */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.45, ease: EASE_SOFT, delay: reduce ? 0 : 0.1 }}
          >
            <p className="eyebrow mb-6">growth os · ясно</p>
            <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[0.98]">
              Как устроен
              <br />
              рост Ясно
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">
              Одна система — шесть модулей по воронке AARRR. Мы растим активную
              терапию, а не регистрации.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#system"
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-blue-deep px-5 py-3 text-sm font-medium text-white shadow-[0_10px_28px_-10px_rgba(47,107,255,0.6)] transition-transform duration-300 ease-soft hover:-translate-y-0.5"
              >
                Смотреть систему
                <ArrowDown
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <span className="data-mono text-xs text-ink-soft">
                6 модулей · 6 стадий · 1 ритм
              </span>
            </div>
          </motion.div>

          {/* Сигнатура */}
          <div className="lg:pl-4">
            <AARRRFunnel />
          </div>
        </div>
      </div>
    </header>
  )
}

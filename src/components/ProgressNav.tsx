import { useEffect, useState } from 'react'
import { motion, useScroll, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SECTIONS = [
  { id: 'manifesto', label: 'Манифест' },
  { id: 'system', label: 'Модули' },
  { id: 'engine', label: 'Движок' },
  { id: 'crm', label: 'CRM' },
  { id: 'strategy', label: 'Стратегия' },
  { id: 'roadmap', label: 'Роадмап' },
]

// Wayfinding на лонгскролле: полоса прогресса + dot-rail (xl) + «наверх».
export default function ProgressNav() {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  // Пусто на герое (у Hero нет id) — подсветка появляется, когда секция в зоне.
  const [active, setActive] = useState('')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => obs.observe(el))

    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth'
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-blue"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />

      <nav
        aria-label="Разделы документа"
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      >
        <ul className="flex flex-col gap-3.5">
          {SECTIONS.map((s) => {
            const on = active === s.id
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  aria-current={on ? 'true' : undefined}
                  className="group flex items-center gap-2.5"
                >
                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      on ? 'scale-125 bg-blue-deep' : 'bg-ink-soft/30 group-hover:bg-ink-soft/70'
                    }`}
                  />
                  <span
                    className={`data-mono text-[0.62rem] uppercase tracking-wider text-ink-soft transition-opacity duration-300 ${
                      on ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior })}
        aria-label="Наверх"
        className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink-soft shadow-card transition-all duration-300 hover:border-blue/40 hover:text-blue-deep ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <ArrowUp className="h-4 w-4" aria-hidden />
      </button>
    </>
  )
}

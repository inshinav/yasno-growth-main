import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import {
  FUNNEL_STAGES,
  FRAME_MODULES,
  moduleById,
  type AARRRStage,
} from '../data/modules'
import { funnelContainer, funnelStage, EASE_SOFT } from '../lib/motion'

// Сигнатура: воронка собирается сверху вниз, каждая стадия — свой срез
// (focus → метрика → ставка), не дубль модуля. Десктоп — hover/focus,
// мобайл — tap. Панель раскрытия идёт ПОЛНОЙ шириной (не сужается с рядом).

export default function AARRRFunnel() {
  const reduce = useReducedMotion()
  const [selected, setSelected] = useState<AARRRStage | null>(null)
  const [hovered, setHovered] = useState<AARRRStage | null>(null)
  const active = hovered ?? selected
  const accordion = { duration: reduce ? 0 : 0.3, ease: EASE_SOFT }

  return (
    <div className="w-full">
      <motion.ul
        className="flex flex-col items-stretch gap-2"
        variants={funnelContainer}
        initial={reduce ? 'show' : 'hidden'}
        animate="show"
        aria-label="Воронка AARRR — шесть стадий роста"
      >
        {FUNNEL_STAGES.map((stage, i) => {
          const mod = moduleById(stage.moduleId)
          const isActive = active === stage.key
          // Сужение применяем ТОЛЬКО к строке-кнопке, панель — полной ширины.
          const width = 100 - i * 8
          const cardId = `funnel-card-${stage.key}`

          return (
            <motion.li key={stage.key} variants={funnelStage} className="w-full">
              <button
                type="button"
                style={{ maxWidth: `${width}%` }}
                onMouseEnter={() => setHovered(stage.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(stage.key)}
                onBlur={() => setHovered(null)}
                onClick={() => setSelected((s) => (s === stage.key ? null : stage.key))}
                aria-expanded={isActive}
                aria-controls={cardId}
                className={`group mx-auto flex min-h-[52px] w-full items-center gap-3 rounded-[14px] border px-4 py-3 text-left transition-colors duration-300 ease-soft ${
                  isActive
                    ? 'border-blue bg-blue-tint'
                    : 'border-line bg-surface hover:border-blue/40'
                }`}
              >
                <span
                  className={`data-mono text-xs tabular-nums transition-colors ${
                    isActive ? 'text-blue-deep' : 'text-ink-soft'
                  }`}
                >
                  {stage.index}
                </span>
                <span lang="en" className="font-display text-base font-semibold tracking-tight sm:text-lg">
                  {stage.label}
                </span>
                <span className="ml-auto flex items-center gap-2">
                  {mod && (
                    <span
                      className={`data-mono rounded-full border px-2 py-0.5 text-[0.62rem] uppercase tracking-wider ${
                        isActive ? 'border-blue/40 text-blue-deep' : 'border-line text-ink-soft'
                      }`}
                    >
                      {mod.index}
                    </span>
                  )}
                  <ChevronDown
                    aria-hidden
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? 'rotate-180 text-blue-deep' : 'text-ink-soft/50'
                    }`}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={cardId}
                    role="region"
                    aria-label={`${stage.label}: чем закрыта стадия`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={accordion}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 space-y-2 rounded-[14px] border border-blue/25 bg-paper/70 p-4">
                      {mod && (
                        <p className="eyebrow">
                          <span className="text-blue-deep">{stage.index}</span>
                          <span aria-hidden className="mx-1.5 text-ink-soft/50">/</span>
                          <span lang="en">{stage.label}</span>
                          <ArrowRight aria-hidden className="mx-1.5 inline h-3 w-3 align-[-1px] text-ink-soft" />
                          модуль {mod.index} · {mod.title}
                        </p>
                      )}
                      <p className="text-sm leading-snug text-ink-soft">{stage.focus}</p>
                      <dl className="flex flex-col gap-1 pt-1 text-sm sm:flex-row sm:gap-6">
                        <div>
                          <dt className="eyebrow !text-[0.6rem]">метрика</dt>
                          <dd className="data-mono text-blue-deep">{stage.metric}</dd>
                        </div>
                        <div>
                          <dt className="eyebrow !text-[0.6rem]">наша ставка</dt>
                          <dd className="text-ink">{stage.bet}</dd>
                        </div>
                      </dl>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </motion.ul>

      {/* Рама: enablement-боты + ядро обнимают всю воронку */}
      <motion.div
        variants={funnelStage}
        initial={reduce ? 'show' : 'hidden'}
        animate="show"
        className="mx-auto mt-4 flex max-w-[68%] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center"
      >
        <span className="eyebrow !text-[0.6rem] text-ink-soft">рама системы</span>
        {FRAME_MODULES.map((m) => (
          <span key={m.id} className="data-mono text-[0.62rem] text-ink-soft">
            {m.index} {m.title.split(' ')[0]}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

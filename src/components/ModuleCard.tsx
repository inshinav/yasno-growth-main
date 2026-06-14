import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'
import { fadeUp, EASE_SOFT } from '../lib/motion'
import type { GrowthModule } from '../data/modules'

const STATUS_TONE: Record<string, string> = {
  'рабочий модуль': 'bg-blue',
  'рабочий прототип': 'bg-blue/60',
  'концепт + интерактив': 'bg-clay',
  'ядро системы': 'bg-ink',
}

export default function ModuleCard({ module }: { module: GrowthModule }) {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const isCore = module.kind === 'core'
  const panelId = `module-panel-${module.id}`
  const dot = STATUS_TONE[module.status] ?? 'bg-ink-soft'

  return (
    <motion.article
      variants={fadeUp}
      className={`flex flex-col rounded-card border transition-colors duration-300 ease-soft ${
        isCore
          ? 'border-blue/45 bg-blue-tint shadow-lift'
          : 'border-line bg-surface shadow-card hover:border-blue/40'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex flex-1 flex-col gap-4 rounded-card p-6 text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <p className="eyebrow">
            <span className="text-blue-deep">{module.index}</span>
            <span aria-hidden className="mx-1.5 text-ink-soft/40">/</span>
            {module.stageLabel}
          </p>
          <span
            aria-hidden
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-tight tracking-tight">
          {module.title}
        </h3>

        <p className="text-sm leading-relaxed text-ink-soft">{module.does}</p>

        <div className="mt-auto space-y-2 pt-1">
          <div>
            <p className="eyebrow !text-[0.6rem]">метрика</p>
            <p className="data-mono text-sm text-blue-deep">{module.metric}</p>
          </div>
          <div className="flex items-start gap-2 border-l-2 border-line pl-2.5">
            <p className="text-sm italic leading-snug text-ink">{module.bet}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden />
          <span className="data-mono text-[0.62rem] uppercase tracking-wider text-ink-soft">
            {module.status}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.34, ease: EASE_SOFT }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-6 py-5">
              <p className="text-sm leading-relaxed text-ink-soft">{module.detail}</p>
              {module.link && (
                <a
                  href={module.link}
                  className="mt-3 -mx-1 inline-flex min-h-[44px] items-center gap-1 px-1 text-sm font-medium text-blue-deep hover:underline"
                >
                  Смотреть каскады
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

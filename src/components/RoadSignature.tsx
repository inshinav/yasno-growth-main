import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ROAD_ORDER, projectByNum } from '../data/roadmap'
import { ROAD_POINTS, ROAD_VIEW, ROAD_PATH } from '../lib/roadGeometry'
import { EASE_SOFT } from '../lib/motion'

const STATIONS = ROAD_ORDER.map((num, i) => ({
  project: projectByNum(num)!,
  pt: ROAD_POINTS[i],
  step: i + 1,
}))

export default function RoadSignature() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(ROAD_ORDER[0])
  const activeProject = projectByNum(active)!
  const draw = (delay: number) =>
    reduce
      ? { initial: { pathLength: 1 }, animate: { pathLength: 1 } }
      : { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 1.1, ease: EASE_SOFT, delay } }

  return (
    <div className="w-full">
      {/* ── Десктоп: дорога-серпентина ───────────────────────────── */}
      <div className="hidden lg:block">
        <p className="eyebrow mb-2 flex items-center gap-1.5 text-ink-soft">
          наведите на веху — откроется проект
          <ArrowUpRight aria-hidden className="h-3 w-3" />
        </p>
        <div className="relative w-full" style={{ aspectRatio: `${ROAD_VIEW.w} / ${ROAD_VIEW.h}` }}>
          <svg
            viewBox={`0 0 ${ROAD_VIEW.w} ${ROAD_VIEW.h}`}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path id="thesis-arc" d="M 150 96 Q 520 8 880 86" fill="none" />
            <text
              fill="var(--ink)"
              style={{ fontFamily: "'Onest Variable', Onest, sans-serif", fontWeight: 600, fontSize: '30px', letterSpacing: '0.02em' }}
            >
              <textPath href="#thesis-arc" startOffset="50%" textAnchor="middle">
                Доверие × Исход
              </textPath>
            </text>
            <motion.path d={ROAD_PATH} fill="none" stroke="var(--road)" strokeWidth="18" strokeLinecap="round" {...draw(0)} />
            <motion.path d={ROAD_PATH} fill="none" stroke="var(--blue-deep)" strokeWidth="2.5" strokeLinecap="round" {...draw(0.25)} />
          </svg>

          {STATIONS.map(({ project, pt, step }, i) => {
            const left = (pt.x / ROAD_VIEW.w) * 100
            const top = (pt.y / ROAD_VIEW.h) * 100
            const labelBelow = pt.y < ROAD_VIEW.h * 0.6
            const isCore = project.num === '06'
            return (
              <motion.a
                key={project.num}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(project.num)}
                onFocus={() => setActive(project.num)}
                initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.9 + i * 0.08, ease: EASE_SOFT }}
                style={{ left: `${left}%`, top: `${top}%` }}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl px-2 py-1"
                aria-label={`Шаг ${step} · ${project.title} — открыть в новой вкладке`}
              >
                <span className="relative flex flex-col items-center">
                  {!labelBelow && (
                    <span className="mb-1.5 inline-flex items-center gap-0.5 whitespace-nowrap font-display text-[13px] font-semibold leading-none tracking-tight text-ink">
                      {project.short}
                      <ArrowUpRight aria-hidden className="h-3 w-3 text-blue-deep opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    </span>
                  )}
                  <span
                    className={`grid h-[22px] w-[22px] place-items-center rounded-full ${isCore ? 'bg-ink' : 'bg-blue-deep'} ring-4 ring-paper transition-transform duration-300 group-hover:scale-110`}
                  >
                    <span className="data-mono text-[9px] font-medium text-white">{step}</span>
                  </span>
                  {labelBelow && (
                    <span className="mt-1.5 inline-flex items-center gap-0.5 whitespace-nowrap font-display text-[13px] font-semibold leading-none tracking-tight text-ink">
                      {project.short}
                      <ArrowUpRight aria-hidden className="h-3 w-3 text-blue-deep opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    </span>
                  )}
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* Панель-превью активной вехи */}
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_SOFT }}
          className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-card border border-blue/30 bg-blue-tint px-5 py-3.5"
        >
          <span className="data-mono text-[0.62rem] uppercase tracking-wider text-ink-soft">
            {activeProject.stageLabel}
          </span>
          <span className="font-display text-base font-semibold tracking-tight">{activeProject.title}</span>
          <span className="hidden text-sm text-ink-soft sm:inline">— {activeProject.hypothesis}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-blue-deep">
            Открыть <ArrowUpRight aria-hidden className="h-4 w-4" />
          </span>
        </motion.div>
      </div>

      {/* ── Мобайл: вертикальная дорога ──────────────────────────── */}
      <div className="lg:hidden">
        <p className="mb-4 text-center font-display text-lg font-semibold tracking-tight text-ink">
          <span className="text-blue-deep">Доверие × Исход</span>
        </p>
        <ol className="relative ml-1 space-y-3">
          <span aria-hidden className="absolute bottom-3 left-[10px] top-3 w-0.5 bg-line" />
          {STATIONS.map(({ project }) => {
            const isCore = project.num === '06'
            return (
              <li key={project.num} className="relative">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[44px] items-start gap-3 rounded-card border border-line bg-surface p-4 pl-9 transition-colors duration-300 hover:border-blue/40"
                >
                  <span className={`absolute left-[3px] top-5 grid h-4 w-4 place-items-center rounded-full ${isCore ? 'bg-ink' : 'bg-blue-deep'} ring-4 ring-paper`} />
                  <div className="min-w-0 flex-1">
                    <p className="data-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">{project.stageLabel}</p>
                    <h4 className="mt-1 font-display text-base font-semibold leading-tight tracking-tight">
                      {project.num} · {project.title}
                    </h4>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">{project.hypothesis}</p>
                  </div>
                  <ArrowUpRight aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-blue-deep transition-transform group-hover:-translate-y-0.5" />
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

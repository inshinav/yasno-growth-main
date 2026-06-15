import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../lib/motion'
import { STAGES, type Project } from '../data/roadmap'

export default function ProjectCard({ project }: { project: Project }) {
  const stage = STAGES[project.stage]
  return (
    <motion.a
      variants={fadeUp}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-blue/40"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">
          <span className="text-blue-deep">{project.num}</span>
          <span aria-hidden className="mx-1.5 text-ink-soft/40">/</span>
          <span className={stage.color}>{project.stageLabel}</span>
        </p>
        <span className={`h-2 w-2 shrink-0 rounded-full ${stage.dot}`} aria-hidden />
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-tight tracking-tight">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.what}</p>

      <div className="mt-5 border-l-2 border-line pl-3">
        <p className="eyebrow !text-[0.6rem]">гипотеза</p>
        <p className="mt-1 text-sm leading-snug text-ink">{project.hypothesis}</p>
        <p className="data-mono mt-2 inline-block rounded-full border border-line px-2.5 py-0.5 text-[0.62rem] uppercase tracking-wider text-ink-soft">
          {project.check}
        </p>
      </div>

      <span className="mt-auto flex items-center gap-1.5 pt-6 text-base font-medium text-blue-deep">
        Открыть
        <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </motion.a>
  )
}

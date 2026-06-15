import { motion } from 'framer-motion'
import Section from './Section'
import Eyebrow from './Eyebrow'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/roadmap'
import { staggerContainer, useReveal } from '../lib/motion'

export default function Projects() {
  const reveal = useReveal()
  return (
    <Section id="projects">
      <div className="max-w-2xl">
        <Eyebrow>шесть проектов</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight">
          Всё уже собрано — откройте любой
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Каждый проект закрывает свой участок системы роста. Гипотезы помечены —
          их проверяем на данных, а не выдаём за результат. Карточки открываются в
          новой вкладке.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        {...reveal}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </motion.div>
    </Section>
  )
}

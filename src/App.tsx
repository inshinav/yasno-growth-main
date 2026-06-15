import { MotionConfig } from 'framer-motion'
import ProgressNav from './components/ProgressNav'
import Hero from './components/Hero'
import Diagnosis from './components/Diagnosis'
import Thesis from './components/Thesis'
import Projects from './components/Projects'
import HowWeTest from './components/HowWeTest'
import QuietClose from './components/QuietClose'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-blue-deep focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        К шести проектам
      </a>

      <ProgressNav />

      <main>
        <Hero />
        <Diagnosis />
        <Thesis />
        <Projects />
        <HowWeTest />
        <QuietClose />
      </main>
    </MotionConfig>
  )
}

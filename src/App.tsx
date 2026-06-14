import { MotionConfig } from 'framer-motion'
import ProgressNav from './components/ProgressNav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import ModuleMap from './components/ModuleMap'
import ExperimentEngine from './components/ExperimentEngine'
import CRMLifecycle from './components/CRMLifecycle'
import Strategy from './components/Strategy'
import Roadmap from './components/Roadmap'
import QuietClose from './components/QuietClose'

export default function App() {
  return (
    // reducedMotion="user" — уважает системную настройку, гасит transform-анимации
    <MotionConfig reducedMotion="user">
      <a
        href="#system"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-blue-deep focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        К системе модулей
      </a>

      <ProgressNav />

      <main>
        <Hero />
        <Manifesto />
        <ModuleMap />
        <ExperimentEngine />
        <CRMLifecycle />
        <Strategy />
        <Roadmap />
        <QuietClose />
      </main>
    </MotionConfig>
  )
}

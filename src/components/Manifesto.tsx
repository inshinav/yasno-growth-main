import Section from './Section'
import Eyebrow from './Eyebrow'
import { MANIFESTO } from '../data/strategy'

export default function Manifesto() {
  return (
    <Section id="manifesto" divided={false}>
      <Eyebrow>{MANIFESTO.eyebrow}</Eyebrow>
      <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
        {MANIFESTO.lead}
      </p>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
        {MANIFESTO.body}
      </p>
    </Section>
  )
}

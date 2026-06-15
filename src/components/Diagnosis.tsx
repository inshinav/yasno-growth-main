import Section from './Section'
import Eyebrow from './Eyebrow'

const POINTS = [
  'Мы — крупнейший сервис в молодой и всё ещё стигматизированной категории.',
  'Главный исторический канал — инфлюенс — сжался: Instagram под запретом для рекламы, YouTube замедлен, медиаинфляция.',
  'Реальный конкурент — не другие сервисы, а альтернативы самопомощи: друзья, таролог, «само пройдёт».',
  'Наша сила — подбор, доверие и исход. Растя категорию, мы растим себя.',
  'Скидками не «болеем»: работают циклические пакеты, а не разовые распродажи.',
]

export default function Diagnosis() {
  return (
    <Section id="diagnosis">
      <div className="max-w-2xl">
        <Eyebrow>диагноз</Eyebrow>
        <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight">
          Где мы и что изменилось
        </h2>
      </div>
      <ul className="mt-10 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
        {POINTS.map((p, i) => (
          <li key={i} className="flex gap-3 border-t border-line pt-4 text-base leading-relaxed text-ink">
            <span className="data-mono text-xs text-blue-deep">{String(i + 1).padStart(2, '0')}</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

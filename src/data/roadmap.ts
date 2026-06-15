// Контент — данными. Шесть готовых проектов Ясно. Ссылки — точные, внешние,
// открываются в новой вкладке. Цифры не выдумываем — только гипотезы «проверить».

export type StageKey =
  | 'acquisition'
  | 'activation'
  | 'retention'
  | 'ops'
  | 'system'

export interface StageMeta {
  key: StageKey
  label: string
  /** Tailwind-токен цвета вехи (по стадии воронки). */
  color: string
  dot: string
  tint: string
}

// color — всегда text-ink-soft (care/clay как ТЕКСТ не проходят AA на бумаге);
// стадия кодируется мелкой точкой (dot, графика) и тинтом, не цветом текста.
export const STAGES: Record<StageKey, StageMeta> = {
  acquisition: { key: 'acquisition', label: 'Acquisition', color: 'text-ink-soft', dot: 'bg-blue', tint: 'bg-blue-tint' },
  activation: { key: 'activation', label: 'Activation · Conversion', color: 'text-ink-soft', dot: 'bg-blue-deep', tint: 'bg-blue-tint' },
  retention: { key: 'retention', label: 'Retention · Revenue', color: 'text-ink-soft', dot: 'bg-care', tint: 'bg-care-tint' },
  ops: { key: 'ops', label: 'Операционка', color: 'text-ink-soft', dot: 'bg-clay', tint: 'bg-clay-tint' },
  system: { key: 'system', label: 'Система', color: 'text-ink-soft', dot: 'bg-ink', tint: 'bg-surface-2' },
}

export interface Project {
  num: string
  title: string
  /** Mono-лейбл стадии, как на карточке. */
  stageLabel: string
  stage: StageKey
  what: string
  hypothesis: string
  /** Чем проверяем гипотезу — никаких выдуманных результатов. */
  check: string
  href: string
  /** Короткое имя для вехи на дороге. */
  short: string
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'Перевёрнутая воронка',
    stageLabel: 'ACTIVATION · CONVERSION',
    stage: 'activation',
    what: 'Пересборка сайта и воронки: ценность до регистрации, подбор и проценты совпадения до коммитмента, меньше трения (один вопрос на экран), доверие в чувствительных местах, человеческий язык, LTV на экране подтверждения.',
    hypothesis: 'Перенос регистрации позже и «ценность вперёд» снижает отвал холодного трафика и поднимает активацию.',
    check: 'проверить A/B',
    href: 'https://inshinlab.com/yasno',
    short: 'Главная',
  },
  {
    num: '02',
    title: 'Контент-завод',
    stageLabel: 'ACQUISITION',
    stage: 'acquisition',
    what: 'Автоматизированная фабрика AI-контента под TikTok — верхний этаж воронки: дешёвый охват, массовое качество, канал, где ещё можно публиковать и почти нет рекламы.',
    hypothesis: 'AI-контент в TikTok даёт масштабируемый дешёвый охват взамен сжавшегося Instagram.',
    check: 'проверить на стоимости охвата',
    href: 'https://inshinlab.com/content-factory/',
    short: 'Контент-завод',
  },
  {
    num: '03',
    title: 'AI-наставник команды',
    stageLabel: 'ОПЕРАЦИОНКА · AI-ADOPTION',
    stage: 'ops',
    what: 'Персональный AI-наставник всей команды: адресные подсказки под роль, трек под уровень, фильтр новых AI-инструментов, ROI в сэкономленных часах, геймификация внедрения.',
    hypothesis: 'Предполагаем, что системное внедрение AI в команде ускоряет работу и повышает ROI.',
    check: 'проверить по сэкономленным часам',
    href: 'https://t.me/Yasno_growth_bot',
    short: 'AI-наставник',
  },
  {
    num: '04',
    title: 'Утренний дайджест',
    stageLabel: 'ОПЕРАЦИОНКА · СКОРОСТЬ',
    stage: 'ops',
    what: 'Ежедневная сводка по конкурентам, инфоповодам и новым маркетинговым инструментам.',
    hypothesis: 'Предполагаем: быстрее видим рынок — быстрее реагируем, а скорость реакции — ключевой множитель.',
    check: 'проверить по времени реакции',
    href: 'https://t.me/Yasnodigest',
    short: 'Дайджест',
  },
  {
    num: '05',
    title: 'CRM-стратегия',
    stageLabel: 'RETENTION · REVENUE',
    stage: 'retention',
    what: 'CRM как бережное сопровождение терапевтического пути поверх Mindbox: жизненные каскады без давления и без скидочной зависимости, деликатное приглашение вернуться, когда человек готов, переход 1→2, re-match, мягкая реактивация.',
    hypothesis: 'Предполагаем, что бережные lifecycle-каскады без давления поднимают retention и LT и мягко возвращают тех, кто готов продолжить.',
    check: 'проверить по переходу 1→2 и LT',
    href: 'https://inshinlab.com/yasno-crm/',
    short: 'CRM',
  },
  {
    num: '06',
    title: 'Growth-стратегия',
    stageLabel: 'СИСТЕМА (ЯДРО)',
    stage: 'system',
    what: 'Общий тезис Доверие × Исход, петли роста, метод экспериментов и вайб-кодинговый инсайт-движок — то, что держит всю систему.',
    hypothesis: 'Предполагаем, что системный движок гипотез заметно сжимает цикл «гипотеза → инсайт».',
    check: 'проверить по темпу проверенного обучения',
    href: 'https://inshinlab.com/yasno-growth-strategy/',
    short: 'Стратегия',
  },
]

export function projectByNum(num: string): Project | undefined {
  return PROJECTS.find((p) => p.num === num)
}

/** Порядок вех на дороге — по пути воронки (не по номеру): приобрести → активировать
 *  → удержать → (питается операционкой) → (держится системой). */
export const ROAD_ORDER = ['02', '01', '05', '03', '04', '06']

/** Ядро — проект 06, на него ведёт кнопка «вся стратегия». */
export const STRATEGY = PROJECTS.find((p) => p.num === '06')!

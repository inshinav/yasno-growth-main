interface EyebrowProps {
  index?: string
  children: React.ReactNode
  className?: string
}

/** Mono eyebrow-лейбл: 01 / ACQUISITION. Мир growth-инженерии. */
export default function Eyebrow({ index, children, className = '' }: EyebrowProps) {
  return (
    <p className={`eyebrow flex items-center gap-2 ${className}`}>
      {index && (
        <>
          <span className="text-blue-deep">{index}</span>
          <span aria-hidden className="text-ink-soft/50">
            /
          </span>
        </>
      )}
      <span>{children}</span>
    </p>
  )
}

// Геометрия сигнатурной дороги. Шесть станций лежат на гладком сплайне
// (Catmull-Rom → cubic bezier), поэтому вехи сидят ровно на дороге.

export interface Pt {
  x: number
  y: number
}

export const ROAD_VIEW = { w: 1000, h: 500 }

/** Точки станций в порядке дороги (см. ROAD_ORDER). Восходящая серпентина слева направо. */
export const ROAD_POINTS: Pt[] = [
  { x: 120, y: 380 },
  { x: 290, y: 270 },
  { x: 460, y: 350 },
  { x: 630, y: 235 },
  { x: 800, y: 310 },
  { x: 900, y: 155 },
]

/** Гладкий путь через точки (Catmull-Rom со степенью сглаживания k). */
export function smoothPath(points: Pt[], k = 1): string {
  if (points.length < 2) return ''
  const p = points
  let d = `M ${p[0].x} ${p[0].y}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2] ?? p2
    const c1x = p1.x + ((p2.x - p0.x) / 6) * k
    const c1y = p1.y + ((p2.y - p0.y) / 6) * k
    const c2x = p2.x - ((p3.x - p1.x) / 6) * k
    const c2y = p2.y - ((p3.y - p1.y) / 6) * k
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x} ${p2.y}`
  }
  return d
}

export const ROAD_PATH = smoothPath(ROAD_POINTS)

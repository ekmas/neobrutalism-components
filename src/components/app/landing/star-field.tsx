import Star1 from "@/components/stars/s1"
import Star4 from "@/components/stars/s4"
import Star6 from "@/components/stars/s6"
import Star8 from "@/components/stars/s8"
import Star9 from "@/components/stars/s9"
import Star10 from "@/components/stars/s10"
import Star11 from "@/components/stars/s11"
import Star13 from "@/components/stars/s13"
import Star14 from "@/components/stars/s14"
import Star16 from "@/components/stars/s16"
import Star20 from "@/components/stars/s20"
import Star22 from "@/components/stars/s22"
import Star26 from "@/components/stars/s26"
import Star29 from "@/components/stars/s29"
import Star32 from "@/components/stars/s32"
import Star37 from "@/components/stars/s37"
import Star39 from "@/components/stars/s39"

import { cn } from "@/lib/utils"

const COLOR = "var(--chart-3)"

const SHAPES = [
  Star9,
  Star20,
  Star13,
  Star32,
  Star8,
  Star26,
  Star1,
  Star14,
  Star4,
  Star22,
  Star11,
  Star37,
  Star29,
  Star6,
  Star16,
  Star10,
  Star39,
]

/** Stars around the ring. */
const COUNT = 26

/** Every star is the same size; phones scale them down with a class. */
const SIZE = 90

/**
 * The ring's half-axes are set in pixels as CSS variables on the container
 * (see RING_CLASS), not percentages, so the ring always clears the copy no
 * matter how it is rotated. The shorter axis is longer than half the copy's
 * width, which is what keeps the stars off the heading as they orbit.
 */
const RING_CLASS = "[--rx:300px] [--ry:300px] md:[--rx:760px] md:[--ry:620px]"

/**
 * Desktop ratio of the half-axes, used only to space the stars evenly by
 * arc length instead of bunching them on the flatter sides.
 */
const ASPECT = 760 / 620

/** Small seeded PRNG so server and client render the same field. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Placement = {
  Star: (typeof SHAPES)[number]
  /** Position in percent of the ring container. */
  x: number
  y: number
  rotate: number
}

/**
 * Sample `count` angles at equal arc-length steps around the ellipse and
 * return each as a point on the container's bounding box.
 */
function ring(count: number): Placement[] {
  const random = mulberry32(11)
  const samples = 720
  const lengths: number[] = [0]

  for (let i = 1; i <= samples; i++) {
    const a = (2 * Math.PI * (i - 1)) / samples
    const b = (2 * Math.PI * i) / samples
    const dx = ASPECT * (Math.cos(b) - Math.cos(a))
    const dy = Math.sin(b) - Math.sin(a)
    lengths.push(lengths[i - 1] + Math.hypot(dx, dy))
  }

  const total = lengths[samples]

  return Array.from({ length: count }, (_, i) => {
    const target = (i / count) * total
    let j = 0
    while (lengths[j + 1] < target) j++
    const angle = (2 * Math.PI * j) / samples

    return {
      Star: SHAPES[Math.floor(random() * SHAPES.length)],
      x: 50 + 50 * Math.cos(angle),
      y: 50 + 50 * Math.sin(angle),
      rotate: Math.round(random() * 60 - 30),
    }
  })
}

const PLACEMENTS = ring(COUNT)

/**
 * A ring of stars on an ellipse around the hero copy. The whole ring turns
 * slowly; each star turns the other way at the same rate so it stays
 * upright. Parts of the ring leave the viewport as it turns, which is fine.
 */
export default function StarField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[calc(var(--ry)*2)] w-[calc(var(--rx)*2)] -translate-x-1/2 -translate-y-1/2 motion-safe:animate-orbit",
          RING_CLASS,
        )}
      >
        {PLACEMENTS.map(({ Star, x, y, rotate }, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 motion-safe:animate-orbit-reverse"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Star
              color={COLOR}
              stroke="var(--border)"
              strokeWidth={4}
              size={SIZE}
              className="block max-md:scale-[0.6]"
              style={{ transform: `rotate(${rotate}deg)` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

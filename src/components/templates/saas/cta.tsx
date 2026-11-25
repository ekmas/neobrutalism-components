import { Check } from "lucide-react"

import Star15 from "@/components/stars/s15"
import Star22 from "@/components/stars/s22"
import Star26 from "@/components/stars/s26"
import Star30 from "@/components/stars/s30"

import EmailCapture from "./email-capture"

const PERKS = ["14-day free trial", "No credit card required", "Cancel anytime"]

// Main blue (chart-1) is left out so the centre star stays the only
// interactive-looking one.
const SHAPES = [Star15, Star22, Star26, Star30]
const COLORS = [
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

// Concentric waves that cover the whole background. Units are percent of the
// main star's width, so the waves scale with it. Each wave is slightly smaller
// than the one inside it and overlaps it heavily; the star count comes from
// the circumference so neighbours always overlap too. The first wave tucks
// behind the main star's rays, and waves continue until they pass the corners
// of a 2560px-wide screen. Each wave is offset half a step from the previous
// one so the stars interleave.
const FIRST = { radius: 46, size: 24 }
const SHRINK = 0.965 // each wave's stars relative to the previous wave
const STEP = 0.45 // radial spacing, as a share of the two waves' average size
const OVERLAP = 0.85 // arc between neighbours, as a share of star size
// Waves reach past the edges of a 3840px (4K) screen: half its width is about
// 2.5 times the 780px main star.
const MAX_RADIUS = 255
// The section is the main star's height minus 200px, so only a horizontal band
// is ever visible (about 34% of the star's width above and below centre on
// mobile, 37% on desktop). Stars entirely outside it are skipped; the margin
// covers rotated corners.
const VISIBLE_HALF_HEIGHT = 38

// Seeded so the shuffle renders identically on server and client.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Random index in [0, length) that differs from `avoid`.
function pickOther(random: () => number, length: number, avoid: number) {
  const n = Math.floor(random() * (length - 1))
  return n >= avoid ? n + 1 : n
}

const EXTRA_PER_WAVE = 2 // stars added to each wave on top of the computed count

const countFor = (radius: number, size: number) =>
  Math.round((2 * Math.PI * radius) / (size * OVERLAP)) + EXTRA_PER_WAVE

const RINGS: { count: number; radius: number; size: number }[] = []
for (
  let ring = { ...FIRST, count: countFor(FIRST.radius, FIRST.size) };
  ring.radius < MAX_RADIUS;

) {
  RINGS.push(ring)
  const size = ring.size * SHRINK
  const radius = ring.radius + ((ring.size + size) / 2) * STEP
  ring = { count: countFor(radius, size), radius, size }
}

// Outer waves first so inner waves overlap them, stacking towards the centre.
// Positions follow the circles exactly; only the shape and colour of each star
// are shuffled, never repeating the previous star's in the same wave.
const random = seeded(7)
const RING_STARS = RINGS.flatMap(({ count, radius, size }, ring) => {
  let shape = -1
  let color = -1
  return Array.from({ length: count }, (_, i) => i).flatMap((i) => {
    shape = pickOther(random, SHAPES.length, shape)
    color = pickOther(random, COLORS.length, color)
    const angle = ((i + (ring % 2) / 2) / count) * 2 * Math.PI - Math.PI / 2
    const x = 50 + radius * Math.cos(angle)
    const y = 50 + radius * Math.sin(angle)
    // Half-diagonal, so a star rotated 45° is still counted at full reach.
    if (Math.abs(y - 50) - size * 0.71 > VISIBLE_HALF_HEIGHT) return []
    const r = (n: number) => Math.round(n * 100) / 100
    return [
      {
        key: `${ring}-${i}`,
        shape,
        color: COLORS[color],
        x: r(x - size / 2),
        y: r(y - size / 2),
        size: r(size),
        transform: `rotate(${(i * 37 + ring * 19) % 90} ${r(x)} ${r(y)})`,
      },
    ]
  })
}).reverse()

// Hundreds of stars, so each shape is defined once and reused with <use>.
function StarWaves() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 size-full overflow-visible"
    >
      <defs>
        {SHAPES.map((Star, i) => (
          <symbol key={i} id={`cta-wave-star-${i}`} viewBox="0 0 200 200">
            <Star
              color="currentColor"
              stroke="var(--border)"
              strokeWidth={2}
              pathClassName="[vector-effect:non-scaling-stroke]"
              className="overflow-visible"
            />
          </symbol>
        ))}
      </defs>
      {RING_STARS.map(({ key, shape, color, x, y, size, transform }) => (
        <use
          key={key}
          href={`#cta-wave-star-${shape}`}
          x={x}
          y={y}
          width={size}
          height={size}
          transform={transform}
          style={{ color }}
        />
      ))}
    </svg>
  )
}

export default function CTA() {
  return (
    <section className="overflow-hidden border-b-4 border-border bg-background px-5">
      {/* The section is the main star's height minus 200px, so the star and
          the waves are clipped top and bottom. The content is sized to sit
          inside the main star's solid centre (about 68% of its width, before
          the rays start), well clear of the clipped edges. */}
      <div className="relative mx-auto flex min-h-105 w-full max-w-6xl items-center justify-center sm:min-h-145 md:min-h-100 lg:min-h-145">
        <div className="absolute left-1/2 top-1/2 size-155 -translate-x-1/2 -translate-y-1/2 sm:size-195">
          <StarWaves />
          <Star30
            aria-hidden
            color="var(--main)"
            stroke="var(--border)"
            strokeWidth={2}
            pathClassName="[vector-effect:non-scaling-stroke]"
            className="pointer-events-none relative size-full overflow-visible"
          />
        </div>

        <div className="relative flex w-full max-w-75 flex-col items-center text-center text-main-foreground sm:max-w-105">
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Your backlog won&apos;t triage itself.
            <br />
            Well, now it will.
          </h2>
          <p className="mt-3 text-sm font-base sm:mt-4 sm:max-w-xs sm:text-base">
            Join 2,000+ teams who plan less and ship more with Planly.
          </p>

          <div className="mt-5 flex w-full flex-col items-center gap-3 sm:mt-6">
            <EmailCapture
              cta="Get started"
              variant="neutral"
              className="mx-auto flex-row"
            />
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs font-base">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-1">
                  <Check className="size-3.5" /> {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

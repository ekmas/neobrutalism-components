/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAm9JREFUSEuNVstuGjEUPUZkaBcsGtJFihqxga8gFRJkSBul38EWFukvsCLdIb4jVIKBVGnDV5BuqJpmA2zY8HZlz8P2jD3Um7Hs+zz33OshlFIKvtiHBB/TkSsbXp6urOTtiXBwQE9v2azk+Yx3EFJfrVYsR1ipVIw7GQkKsqeUMqUAJH4vpyxQazabSBCCm5svehkNUoYM9Jim02keyGKxCAWkJiS0dRkYkt9utzg6sjgZNpsNksmkwg0TZi5EZhJwYrHV6XRQq9X4vt1u870GzZAfiihEEba6B5lMBvP5nPt7c3yM2WzmE1tQXDavY1HQEr4gs0YJ9vudgMS72253SCR8enBB74bwrH1UFIhs28ZgMOCCsooIzDvVX3IxZqPf7wcqigMWg9Pv4/LyoxpREJ0IUj1yPfZ6PVSrVYXzUg1EpdfrNbLZLKbTaUxDiauTk7d4fv4Di7FMmTYHaNpoNHB7+9WQjRt1vV5Hq9WSAlGb9OCoyOVy+D2ZsFqLOnpVOjt7j8lkEpOlT1MDoSkoEiRhKLhLhB3dg/jNEnEV6gM1OeD++z0q5QsFIgLmVqzhcIhyuSz1hOolFqJCoYCnp19gRlOvX+Hl7ws39O70FMvlklvK5/MYj8dGmJRpyqUkuAhrJAp8urrCt7tuMDaY2PX1Z3S7d66K/2YJA+Y+8HtzNBrh/MM5Bo6DSoXBFF2D4RC2fYHHn48oFotamWgGnlipVILjOLAsNkF148atGOsZ5uTh4cchB+pIpQZumAavvggKTbXvfSR4+TGJ/CToavA/j34k6jCflT8SRmPRGdpZFKQrN6DpddE4kx38A317Tr+wotUPAAAAAElFTkSuQmCC)
 */
export default function Star4({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string
  size?: number
  stroke?: string
  pathClassName?: string
  strokeWidth?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="M158.727 195 100 150.193 41.273 195l22.353-72.545L5 77.545l72.546-.101L100 5l22.455 72.444 72.545.102-58.626 44.909z"
      />
    </svg>
  )
}

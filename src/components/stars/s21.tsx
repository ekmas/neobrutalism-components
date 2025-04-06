/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArFJREFUSEuFVs1u2kAYHBuUSs0hh9qc6pBzkIAUSl+h5FHg3iCFnOJDeICkT9LwDKUgMBI5h9BLsXugUnpIwVvteo2/zdrgi8l69/uZmW82BmOMQTz8ZUQ/037Tz3LX/heDETLGDHFYjZAsyXX1lcTOSizXowS0appsT9CdTcUJBERaoBS4GAcuQtPgUCodZ7dBOqCIphxgwHqzFpvy+fxO1mgkIyE5WZ7NZjgtlTTKV6uV2HR0dKQJ4WH2IM5sJaJApNUDXLsuri67QlhxP9OpJwAql8siAYvAgute47J7JQtK1vmeDIiioB/rdQwG32GYOXG41+uBU9bpdERJYRii0WhgOBwSVFR4iUxV9YsAmxAHbw5EgGq1iuNjB6Zh4vFxDm/qoVar4eXlBaZp6uMjU0YcpMgxrsPzPBHctm34vi+OWbaFwA8wHo/Ft9e46yRL7ceYUnz5Zh48+B1ELcqHr/1aLnfNfiRppQPGsFlv8Pz3GfP5HPff7nH39Q4/F4ttbM5FnMdxHLTbbTSbn3FSPMHbw0PkcnkYseNsE8iqOFo0Qb/fx+3tLRaLBe06RheO8x6tVgvn583sBIlVqDGoFgqFwhb/eJdl2Vj6SznQqjSpae6d5Mlkgg9nZ3hnWQiCQMS3LRt+4MObTFAuVzTboFzqk0wUxaRMR6MRKpUKisUiQsaweHoCT1yr1/GPyjRlYEkC3X/qtToGPwaRzhlw07uBaRj4cnEhqN6EDJ/ooFG5625KcZRW0e0qxEynU/F3ZBXJ47ouutu9apxMsytx43p1Ea1Wf0TlutkB3CBLp6WED93sqFXIKl5N+Hqdbdd0nBOSQc0u/Q7YjiqvXV7fBp2klAmhXO8kOXYwUVHKJZciGi2d4qbJ1/QrUzWe7GuSFqSQvPMSj+0k45+b9OKA/1xdmcOnyo5pAAAAAElFTkSuQmCC)
 */
export default function Star21({
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
        d="M124.813 110.278C138.298 103.304 159.85 101.721 195 100c-35.15-1.721-56.702-3.304-70.187-10.278 4.604-14.467 18.725-30.826 42.362-56.897-26.071 23.637-42.43 37.758-56.897 42.362C103.304 61.702 101.721 40.15 100 5c-1.721 35.15-3.304 56.702-10.278 70.187-14.467-4.604-30.826-18.725-56.897-42.362 23.637 26.071 37.758 42.43 42.362 56.897C61.702 96.696 40.15 98.28 5 100c35.15 1.721 56.702 3.304 70.187 10.278-4.604 14.467-18.725 30.826-42.362 56.897 26.071-23.637 42.43-37.758 56.897-42.362C96.696 138.298 98.28 159.85 100 195c1.721-35.15 3.304-56.702 10.278-70.187 14.467 4.604 30.826 18.725 56.897 42.362-23.637-26.071-37.758-42.43-42.362-56.897"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

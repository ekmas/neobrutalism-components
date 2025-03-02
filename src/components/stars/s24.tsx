/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAg5JREFUSEuVVk16gjAQfWFbLb1EaQ8AXkZ31gN4ET2AdVcuI7iveIhqS7emXwYCEzNBy8KEJMzPe28mKq21RvuYibIvZvQWwpvytxrqorVWgqGQs/8GoSiDe77SQP37Aw2F8cPozlSlDFpnNPQ/hM1isaBxs9nQyOPq5260AYi4lx73KDIMKVwul35xEEsNBpFs1FqqqgovL69Q0Pg8HJAkCWc8gLJ14Bz1kze4TyYZyqKkk2maoih2xIcDI4e0jbeByJNps/sUP+H8fSbp0qFO0H1EcRzjdDoF+DA8BlRkoiPMtSJYBNudF1ZKXvE4JF+rIlJO2ZHBPpF+prUh3QTTSa9zLpJcHQ+YTmco96WMTWvbujCc5HmO5DkhbXNuugzq3xrL5RLb7RZdygHcWRqOPJRSmM/fsFqvMB6NCK4ug87B+1ZGnEfNHTMFWAfr9Qoj64CryJZndawwm05RlI0sbyWSphny/KOtDamSeeGzfRORMX9bRS3JXj1ZmfI6YEpoHPBHwMmIh1qHrzjKnt8H1wE0hfbdaNvDvVl6fIxxOn85DjhIvky9qm4WsixDWe7JWZqlKHY7P2qhnbFWITdfY9Do+tg2O/N+GGx2t0gWiLJLURTR1LZr784IVrIAi3QdD104PC6fg4Go+VZd1/Rqi6hvCfx2k1pFoA4cv/f8MRCQCJDspiTBFU7aldIfhetfv8JAjWAAAAAASUVORK5CYII=)
 */
export default function Star24({
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
        d="M117.577 52.5 100 5 82.423 52.5H62.5c-5.523 0-10 4.477-10 10v19.923L5 100l47.5 17.577V137.5c0 5.523 4.477 10 10 10h19.923L100 195l17.577-47.5H137.5c5.523 0 10-4.477 10-10v-19.923L195 100l-47.5-17.577V62.5c0-5.523-4.477-10-10-10z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

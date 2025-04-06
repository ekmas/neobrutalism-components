/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnNJREFUSEuVVs1u2kAQ/jaGqtzLCzRSOBfR1Kb3IjWxAxJ5GcSxSZ+lUSq7/BzgXnCbwJ1K8AI8gCvFzla7GLy/tOWCvOuZb+abmW9MnimlhAIg+IcfBQWB/n5+nnsQ3RFKKXsGYEORjYsoxHO7rQAgQuQG/E80Npxr78h+CKdIzED0oZDGkt29SxRgO7s7AEOQJpM0TflxqVQqKLUlmAdtoUiu1p6F5HfCLyqViliKIw1CIQGIUZuS2m63/JVqtaoB2Mq8A8hvsyzDw88HuJ6rM0SB9WYDAorXp6fGvovjGI1GI6dw15kCQBHD3d0XlMsv0Ol0JEfz+Zw/e65X0EKBMIqQZSm63a4CLAHIQbNs6vU6bm4+4fLS55dRFIElvAcej8fo9XpYLpc4cRzjrOptqhRiMp0gCAIMh0OsVr84RWdnNfhBgMHgG1ofWlI2MopUZPu4s6ib75v4Ecdgc++6LmazGQjZ64u9z4UM7MPCvHrNJlgRQQhc9x1m33MAbbhlMEmLRCHb9/5kOkUQ+DlFKx5FrVaD7/sYDAZotVpaRxUQR+bgOcvwpl7H7e1nXFx85E7CMOS0tK/anPfRaIR+v4/FYgHHcXIRUjIotKi4v/96zw067Y40pYc29TyJzzCMkKVP6F5fKzwrGTylKRaPj5xjTpfSUevNmp9ZB20e4+35ORzn5KA1ulTYJBrAQSpeVTX9EXkX+9Y6ByaDJEl4Bi+52Nm2m7y6JC3SGlVRMCbX7KjslPg+0GgU+ym3taqpSc3225VXRy2QKhQ51RYAudWKSP/ydWC4/q8MDrzL++iIBDAmjV8VhsV8dLnLGGIifwCTbna68vOyiQAAAABJRU5ErkJggg==)
 */
export default function Star10({
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
        d="m100 5 4.75 86.773L182.272 52.5 109.5 100l72.772 47.5-77.522-39.273L100 195l-4.75-86.773L17.728 147.5 90.5 100 17.728 52.5 95.25 91.773z"
      />
    </svg>
  )
}

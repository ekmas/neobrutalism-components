/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiZJREFUSEuNVU162jAUHJkeoNjtHjiTc4SQJeHjp/QGbkwCWcIVQo/Uwj62yQFqqZ9ky/onZmWkJ82befOeCGOMQf/xf6Rd0L+dmHYzFNPGEwXwSaTY9qB7jumhhDLGmoQZGIh5R++sw8AagEcWS4WyrIR8yTC2ZAzpytBI5NDnfKQiLTMAh8MRhADT+6nYvMnYrYGn0pa+4/FEZH7+81cxCBMXO0YNnFPaYTCGKIrECqVUMAnF66k2ACHHadLt93vM53Ph4Kc8x3K5bO65eZYr2fVB2Nc848FgoBIjQP2v7hgZfWT9MVzk6wRKayTfvuPjem005UkTYPh1iKIoPgVxbSp5M2C7fcZqvQbhPSJvFpo0UHz9ZbfDbDYDL4ortbRpe2lZXfH77YTsV4bz+dyRFXer/D3rwGg0wmazQZqmiJOkmzZaDYCqLPF2OiHLMlwul34ALfpoPMbPHxukdymGcWwB+MRnDPvXV+EcXXwhl8Ymz3MsFguQxrfKVlJIZ5paQXaR5d28yO9FgYHojfCg7GXTmlJ8aW0q61HXNUgUmYX1jCRtFoXdzM8951us1isRtHvZ4XH+eMv+qn7+RnObjvdjNyoYbYsodQ9hsT6zSPGeTCbgQNLCakdN3A6qHTPuuL7xZB6PB1HP6cODStmpr7kQmKZ6Ruq7qirBIIkT6/n0ONRlYOroN54phT95Mzmjkz19YkkResXCr1uvPnCAw33l1OY/qYFdwspl7m4AAAAASUVORK5CYII=)
 */
export default function Star8({
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
        d="M100 5s5.088 49.035 25.527 69.473C145.965 94.912 195 100 195 100s-49.035 5.088-69.473 25.527C105.088 145.965 100 195 100 195s-5.088-49.035-25.527-69.473C54.035 105.088 5 100 5 100s49.035-5.088 69.473-25.527C94.912 54.035 100 5 100 5"
      />
    </svg>
  )
}

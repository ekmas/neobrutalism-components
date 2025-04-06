/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiJJREFUSEuFVktSwkAQfVOlJRs5gZxArCLDgg2egs8NiHeCGyB6Cd1glYkLbhAvIBuxRMeaSSfz65EsIJnpzOvX/bo7QimlQJe+Ec2D/qcFu66gICDMgmvtrxsbc46CMAC+bYDS4rjQ9Lo1ZTDNZg0QMfC56KevzwPkUBrLoijQ6XQ8vyw6sUkyiPwE8jzHarXydhaLBZbLZTqMZO0w8JF1HB8fHzCbzmBI6qAq82PvBbC5v8dkMkmwCULUuFhVFfr9Pvb7PcMnWBJA97KL3W6HXq8XbCqIX6WMX9qz7+MPbsdjbLcvnqcCtQ705RKxp9XMRqMRnp+fcHZ23m55KpJSoizL4D03LClCZAMgyzIjgiZmnooyKfHmAvwbIB44ywZ4Lcq2njwGPID1jsULtlsGsYqAFICbAxfEPbu590MUJFnKIcq3so6fc9mDApm2krXGPAMqXD7JpJxTrtO+D9D0IpJpJocnkxyxseI1d3ySCd0wYEKUKoDTOYBbaEyS+apKi1cA2YBkSu01rgNiEJ3NgHHJ1wBF0RSrlwPgeDxibFrF9n8VuW3DsfRaBQnH66bN+Kiqd9z0r/Fhmh1TscFSt0vN7qoXDSsvRGFwN5sN5vN53a4ZmQohsF6vMZ1OwmHL96JoJpN88/wuPXBc4Gj0NpXMbIRcD4cDtIz1VY/Mi8QHQEDWnQfBCGfk6E49dtt+bcRJTss7+mKg0BmHTnyR/AGKynDAspMBcgAAAABJRU5ErkJggg==)
 */
export default function Star5({
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
        d="m100 5 82.272 47.5v95L100 195l-82.272-47.5v-95z"
      />
    </svg>
  )
}

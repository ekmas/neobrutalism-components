/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArBJREFUSEulVstu2kAUPTYSbgl8Dhi6I8uURYHfgAALKgFrAgIpgM1vAF3QbViVYvibQlGgwlPNeIhn7DGNVK/M3Os595z7QiOEEEQ91KKJRvnA/8XfRDN7J9CiALidOfkoIUTAd1SEeQVQBKAidTz+BoGGu48JhhkVBPW5EhcYyJEyJwK4xMWnXA4bx0G9XoOu6Xh+HiGby+LHeo2YroNDKYXWXEKIhybTT6fTWK1WMAwDRjwOy7JRb9SYXKPRCI+PjzifzzidTri/z2O73SlwAhKJIcznc5TLZQyHQzSbTWV0V9t8vkCx+EXNwE8yYfqamQxarTYePj/gg2GwjyhDRpMo3gHGYrlcotfrYbfbCUCKKjocDkilUp4TvzSyjAPo+/0eyeSdVNtekrn8ruvicrlgMpl4srwHgEcyGA5YEdCk63rsLSapD7KmCWe7DcmiZkBL0YvNvw3IpDNwHIcfKSSybZtVSEgikY2YD34VPbJsG5VKReq9NwbH4xGdTgcUgMoUpY6YcCl0EMRiMQbQfXrizSgwoADtdhvT6ZQBiB/7UtxOCgWoVqvodrtIJBKs7LxGE3qMAlCnm1eFjN6BZVuoVqpSyqQqMk0TW57kIP3bmvne9I7NZqOuoovrwhXLNFQ+iuxyH9rVtVqN5UFn84k+/9loQaX2v/ZIppIKiTga7Sw65FqtFgqFAht0wYYOjQ02Kl6xXH5Hv98PSBy5cAgWi28olUr+sFNkfTAc4muzidlshmKpxHeAPPbDG43b05kMVi8vjEWcjWsLjUaDMRqPx6zS/pzPeD2dkM/nA0NOKJHgNJVWMAA6n64LhwLQ0UUBTDOL9c81Ypoe2G5yZdzeyUJu6CttRvok2MpU7OdQ1YE3mmh4z37+x/8A8TppZfrL2ls+XpDRt0VZxPO/jJaVvot0hOkAAAAASUVORK5CYII=)
 */
export default function Star14({
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
        d="m100 5 10.403 29.319 18.954-24.67.833 31.1 25.65-17.606-8.817 29.834 29.834-8.817-17.605 25.65 31.098.833-24.669 18.954L195 100l-29.319 10.403 24.669 18.954-31.098.833 17.605 25.65-29.834-8.817 8.817 29.834-25.65-17.605-.833 31.098-18.954-24.669L100 195l-10.403-29.319-18.954 24.669-.833-31.098-25.65 17.605 8.817-29.834-29.834 8.817 17.605-25.65-31.098-.833 24.669-18.954L5 100l29.319-10.403-24.67-18.954 31.1-.833-17.606-25.65 29.834 8.817-8.817-29.834 25.65 17.605.833-31.098 18.954 24.669z"
      />
    </svg>
  )
}

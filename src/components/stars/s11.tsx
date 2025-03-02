/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmpJREFUSEuVVTuS2kAQfePymoQDrAMLAlaqMsSsA04CGRDhGHwHyImADHwQbwJOkcuiqDJiHXAANsBU7djzQdNiRqv1RKKZ7jf9ef3YM+ecQRwODgbGAShDcqjJ+pYG7Zt2k7/YawAcfpZJ40gw+kLGOReWq0NfZBzO57O8d3Nz4wZwpK0AHGWx7nJg8XUhzc1mMz8pHTOVgRtHWzlQuavIwNvtVvZMlsLUxglKANKNMmDmizE9Dq6q2lWW+KTJLz9mH+9RKpfkgO3iGJ73gTTTMWeuEh0OBzQaDfT7fbRaLRSLxaQU3W4X0+lM/m6325hOp0l1jk9HzOdzjEYjPDx8w+3t+yQf0mQFGccxyuWyusCAwA8wGAzQ6/VwOp2kuVAoYDweYzgcItpEgGQSx263Q6lUUr52BibNzWaDIAhyJ0WFVSeKIvh3vkW6VJMNQTjC8AdqtZoBodHkNwOT7AfW6xDV6sf8KaIMFI7fVyvc339KAon/ZVACtlwuUa/XSfD0yskcU+Gx0gCyEFYGKuYFIIurGasCCMMwKZGJTVEM5nq9RrVaTRpLa6V4QEn5bxX8f5MZougnfN+/6gOHtSr2ekx1HxH4PvqDL/gsx/SP7ME7OqZRdJlo/KJjqmc1BZBFNKET3U4Hs5kgGtDpdDCZTJIdeTzmEU0nRvePFB9i//34CM8TJOKSjJ7nEUKl1zv1zdQDS9YEsdkbpXzPeqpeouKFyUbRrDSsqahU6Lp2RLfk09FklyZfQi0WacHJ0SnVfKNoDpm8iiAkU/TlrZbMLK2hbplEy910rgtXfBI1tgEceWdN12se8ReQcnTE9h6YjQAAAABJRU5ErkJggg==)
 */
export default function Star11({
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
        d="m100 5 18.05 63.737L182.272 52.5 136.1 100l46.172 47.5-64.222-16.236L100 195l-18.05-63.736L17.728 147.5 63.9 100 17.728 52.5 81.95 68.737z"
      />
    </svg>
  )
}

/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAoFJREFUSEuFVkuO2kAQfVZsCUYaDIuZkeJFQALBLewDOJfAS+Y4wxIuMRwAnyKDQIINkcgsCEYxRKB01OVft7sNLSGb7qp69XlVbYMxxkCLP4z8kexJJ4WMKC8KpvsMBozUnEEAou30vQqAlKsc0uga/xhjGZrijBKBLCHaU96lCPTuatN1P3WiGkOSIkWLZy1LhVCLVJRODFlGkx1SVAEALJcr9HpdJR+X65UKbVlWKZsMq+UK3V5PybIAIHs0mUwQBIHEl9PpRP/rtToRLltcdhgE4lZePW0EmeJoNMJ4PM4N7fd7MtJstvIUvZZkZG5LNdDz0/U8hOGc9LbbLT2drw4BuC4/C6vIl9SAaHqzyAzf2h1sNmt8/FjAMIB+v49Oh+9ttLwVXVUbTcN9TjTbtjGbzQDG4PvfcYgiAru3BIAElxu7Xq/0O5/PiOMYx+MRu90OnueRvXAe4un5CXajgfrDA2q1GkzThGmZJXKX+oAaQgT4e0b8J0YURfj89QnXcwlgHs7x8vyCxuNjDmCZJr6YJgwpLCbWoKpVOCaD3bDxPnsnA77v43A4gOdIl6XCUgZAO/ru5R63222sN2ssPhYENhgMiiJX+yWwKAUouqcYrzwtGRW325/UyY7jkLLrulSPchhSBPpZlHBj9DrC+O0tn0v7/W9OAzRbrZw8STMWMmVWVQw7YDKZIgiGkvzpdKYIyqNiOp1iOBxqp6/QaGkNGLBc8cHVTW+lojaXy4UALdMqXX4sGZDdXrGfpl0ddpp6ZKObF5hYo+kwRS2NvQJAMwHuXKUKQTIA5cq8STv5UPRaUVOvzJs37K2PjhvjSHdl6oZd8kFTWlXRyPv/AZXah78kO8eMAAAAAElFTkSuQmCC)
 */
export default function Star12({
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
        d="m100 5 3.635 86.223 63.54-58.398-58.398 63.54L195 100l-86.223 3.635 58.398 63.54-63.54-58.398L100 195l-3.635-86.223-63.54 58.398 58.398-63.54L5 100l86.223-3.635-58.398-63.54 63.54 58.398z"
      />
    </svg>
  )
}

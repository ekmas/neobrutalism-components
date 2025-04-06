/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAwJJREFUSEuVVj1MWlEU/h4F+dGUWmKtk6iLlMG4OkiN3Yi6mThaYKiLSU0wdBcTk5q42MRQHG3i0lZnGtvaVSd0KdUuxhpttQERkNu8w7u8e997qL0LcO+55zvnO985F4UxxsAAKOAfUJe2Rd8YFPVY2pWtjb/ImJZCANoSnRKiuPRDk7WlIdkzCwDtQI9ai86UpQlRxpEyuPGy7qhUKhF1zqYmnbAbA2JQqowxTkajmPj+0dEREfe4o0OP9hbqagBaFCLvVvXY2vpMhQ6FQncHEIus3qpWq9jY2MDo2Fi9zBz/9eIiAcy8nDGojuH9h48YHRmBzabUVKdFKKmIh3V5WUTwSQDZvT24XM6ahgGMj49DFd36+no9g2KxiEAggGw2C7fLTcrRmWioIuCyWERLSzOSc/OYnY2TlHoDveR4f2+ffCwsLCCRSCCfz8Plclk2Ui2DBjUoXV3B42lGs8eN7z9y6O7qJoBcLoeenh5yXCgU4HSqqjL0jZVMxWbliZbLZXg8HlSuKxSh6kY9s9sdKBTycDgcBv3fRpGpXRgOD3/C7/drUdYa/+DgAJ2dnXVaRBJECKkPRN+np6eYnp7G2to7sOo1Ra3Gr2qEzxabzYaJiQksLS3B5/NZdLJUZIaLi79IvEpgNb2KtrY29PX1YXBwEAMDA4jFYqQUdQWDQaysrODb9ja+bH/F7s4uTk5OMPl8Esm5JO57vfWKCDJlWrqcZbloiqKgv7+fAHZ2d8CqWh6GMUOzU+HTF9qoEI0s5kUmk8Hws2FUyhUCsNvtyGQ+YWjoaeM5LanIkj0uPAa/vwvxeBxTUy+oS98sL1MPqIW+eRlqII5oflEdHQ9bW/Hn/Fx6cLzeBzj7fYZ7io26VxwPIqj5wTE0XTqdRjgcRvujdnEC4PjXMTY3NxGJRMT2MSVk7mRD0aLRCFKpt/WLOj5DNBpDKpWy6Bw+kgwUNWr3u71dHEe2Nr8H/+HNNMLkKdHgTbZg9LaXTuZI1rxQA/mvivXrprmyQDQFr5n+A5z4mr8s2WE/AAAAAElFTkSuQmCC)
 */
export default function Star13({
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
        d="M99.006 14.395c.126-1.193 1.862-1.193 1.988 0l7.08 66.88a1 1 0 0 0 1.532.738l56.703-36.164c1.011-.645 2.094.712 1.24 1.555l-47.875 47.233a1 1 0 0 0 .378 1.658l63.628 21.784c1.135.389.749 2.082-.442 1.939l-66.779-7.98a1 1 0 0 0-1.06 1.33l22.64 63.328c.404 1.13-1.161 1.883-1.792.863l-35.397-57.185a1 1 0 0 0-1.7 0l-35.397 57.185c-.631 1.02-2.196.267-1.792-.863l22.64-63.328a1 1 0 0 0-1.06-1.33l-66.779 7.98c-1.19.143-1.577-1.55-.442-1.939l63.628-21.784a1 1 0 0 0 .378-1.657L32.451 47.403c-.854-.842.229-2.2 1.24-1.554l56.703 36.164a1 1 0 0 0 1.532-.738z"
      />
    </svg>
  )
}

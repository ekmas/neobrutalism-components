/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAklJREFUSEuFVrt2m0AQvavWAqU1pFaO6vgLjD4gEvnMQNxbqy+w2ugY1yKtJSWtNmcf7M6wS0zBgWHnzsydF0IppaAACHMDu6go8TmcdR8jHAVxU0qNYLkRwNqPpE5AsanIGRMhgo+BurfOQCyXy5G5KRcUiAHNlGCeyr1E9VhZMAVkeWa+X67XQYS9OfM4SS+LwGsJa2wmBIqiwK/jEfJ5h/p7bQw0bYuqqrBardD3PXQagy4PzubA8WUiINEKMWZevzswguMNJPJkI+D58sfETBg8Cmuew806rm6EXp4PVkVSSqzXa6MUgTqzFDsVz263M/QNpc8i0Bjl5xL9qSfBcpjwpgvCttDg0H1R4HQ6MaKiJF8uFywWC2YgAMWg1oCVv5/PyPOMVVTUB09PP7HdbON0OW6o1+NDzY8G25rr+hx03Ssevj7g+vdPqlBcUqboCjzN7+Y4HA6+GX0E3dsHBggVAy3Bk0DdfJ7h5fCCL6bbWSdbL9q2RV3XIXOs7GkO4jrTupvNN1uyrlqjYWeT/CluqERNjtoB5/cz8kWeqCIiKsvStH/6clbSDW3Gii9TNk1tP0LKvW+0yEAEmrbiG81hMorG+0UPu3FXpyKbnkVDkqnW1LCboMXEPsyixAaMpynt4ZlAcV/gqMf1XmK70dWl0DSNodKM69891O02ufPILHILh+zVYeEMjmWZrhCFK104UqKq+MIJEGwn8zEbRasAvTK13DYRv8J5rjm5k+kPQqScWMHRD8UwPf630ZIV49mejpjq/QODmXS+y4wnIQAAAABJRU5ErkJggg==)
 */
export default function Star16({
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
        d="m100 5 17.211 30.766L147.5 17.728l-.477 35.25 35.249-.478-18.038 30.289L195 100l-30.766 17.211 18.038 30.289-35.249-.477.477 35.249-30.289-18.038L100 195l-17.211-30.766L52.5 182.272l.477-35.249-35.25.477 18.039-30.289L5 100l30.766-17.211L17.728 52.5l35.25.477-.478-35.25 30.289 18.039z"
      />
    </svg>
  )
}

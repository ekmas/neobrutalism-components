/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAyRJREFUSEuFVj1XGkEUvQuLFR+20SJiE7T2o5GkCHiOv0GxiL8gknPAmJNFE4l4TsgPSFJE/RFGaCIUMaYWm6hFsJaVFGGByZnZ2Z0ZdjHbsLvz9r13373vPTRCCIF80SeNv2D3nheutTghINC4qWwPaH1CiONDPQIw3LdI6T8JaQ6CVquFD+UyPn7+hJvmDXMQCoUwPz/P3s/MzDI0LFMFsveB+orFYuzARjBg0+v1sLS0hEq1YqOghpqG/f0vWF7JqKXwKaNhFLC1tcVKYCMYUorSXgn5XF4KryE+8RC/Li9ZQJkDQRwwPj6OZrNpJ3YvyQBGR0dBIbO6cDThSBh35p2Sl5MFRR/SdfS5dnxL5LJLgO032zAMg38voiQSU2g0zmW5sfvFxUVUKhU44vQiYGYCfLFYxKvNTTCiFEFrODn5hmQyyQ4o+XulEvL5DeghHVanI3HgEYIdoFarIZVKo9P565ZIjjMyMsLQdbtdvC+XYZotlsTCwgL7VnDAE5ZJm56aRuPiQoTmntmPDxoBT8PZj1PMzM76k0xrF41G8afd5o6o7omPUw8trpx7/b7bK1In2/nH43FcX1/bovFkqohJKaxjenBwgOWVFRFAlunh4SEymQwfRoJREYejGdLJE/EJXF1eqYHlWaQFAsDA7PP1JcPj0cPhMMw70zNIXJmenf3E3JxNDGN/SIk8hxqQeJTAeaOhDl4udzcA1XO9XmeeY9Eo1tez0HWdzZQO1bTMB7+nMq1Wq7wXBqavk6jDATW2LAu7u7vI5XL2MQFq9TqePE7yHpO1Crzd2cHmxsuBnaEW1UVAh1c6ncbx12OW7b09wX0UCgUYrw15zok5wB1IAQLodi0Eg0GRgjRlI5EI2u22wg2d+be3tx6n8gR3A9AR+7vZ9F0mtmAJJuOTrEfk613xHfIbtKTKnhVicfaBUTDsJcHDi82lLlLaK6uZVc4JYX5TT1M4OjpCMBAU5VVKRICWaSIWi/rI3n9NUlln15/j++kpLKvLxsmDsTGsrT1DNvvCf2V6lr4czrMa1f8EvsSpG011f2+wIaNCec0d/AMiXKXEknz2rwAAAABJRU5ErkJggg==)
 */
export default function Star39({
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
        d="M190.791 9.21c14.055 48.529-7.693 106.08-56.222 126.593-10.257 34.474 26.876 54.988 56.222 54.988-48.53 14.055-106.081-7.693-126.594-56.222-34.474-10.257-54.988 26.781-54.988 56.222-14.055-48.53 7.693-106.081 56.222-126.594C75.688 29.723 38.65 9.209 9.21 9.209c48.53-14.055 106.08 7.693 126.593 56.222 34.474 10.257 54.988-26.781 54.988-56.222"
      />
    </svg>
  )
}

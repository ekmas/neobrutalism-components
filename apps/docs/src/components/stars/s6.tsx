/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkBJREFUSEuNVjuWmzAUvSLnDI2zjOD0g7OOQCp7piOeniwk9OPjLhzSBLKOmFmA2cbQkALl6CGBhCRPVIF40vvc++6Dcc45rCW2mL0NDg5mfvGZ0mkONnLOXVc5bqcDlmPako7lM9nIZ3Yzg9V9fd+T381ms/Lvy4xDc6BHIc9LByqw49MTZXE6naxsllj0qAwHzgIYkQZBQO/jON4ol5nchIEeqf5dq2nXddhut/T1er0iiiI3TKtdDwamlfDzabdD27bEoPs4xuXyx8s0nQg2iyyiTNgEgWSGguc/2e2hqc4Kjqb5jTRN6WqRgeB1/atGkiRzqjpDZQuQsV2iVQZN02C/32P4O0wskCsMQ1RVJZ2YAS0lWrFIHRaAPj484NK2a8gm9sg0mOhsBsT3McqyRPQhWppOnpwzEE2U5znO5zNm9aCLdB9CJkS0U7GUA2XDGEOWZSiKQjajlkHfvyLPv0kHk47YS3egQpSgSJXKvmb4XhR4T93uabS5RC/thOjszP0cxzuU5Q+zNySWGovcsljXNQ6HA4ZhUByi0MPwDlX102CSyli/6XajSUvBpPRLalRNOP6cJE5RN1AjNbVIbOoFNRqbRF31AR9dGCnslgHwZomUBO4cUkHDx9dhCgPfPFgOT9l01w7bj6bY+e5e8lcs8g0qs1II3uly/ba8U0n1kXkTCgDH45EweKaBI5c5X3SVoK42Jpp70C+RimYUNvbIdPTkWir8Jo5ILWP/r4U20cxcl98T/2FrDjtM/wFI51e/zDbAbQAAAABJRU5ErkJggg==)
 */
export default function Star6({
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
        d="m100 5 25.659 69.341L195 100l-69.341 25.659L100 195l-25.659-69.341L5 100l69.341-25.659z"
      />
    </svg>
  )
}

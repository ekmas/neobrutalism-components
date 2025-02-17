/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAf1JREFUSEuNVbtuwkAQHBspiJIuuMOVaYMo4Dug4leggvwJVPF/IAVR4yZQxVBBSYgUX+TlcXu+W8NJNL5jZ3d2dtZTSikoAB6Ewy/zp5781BHBIwB+zHgFYBPAekofzGy9TCl1SV4uQ9/IAFIIowKdgJuKLMsoju/7lJBEF48jAmhudP6n0w8FrtVqBbavYNenvOILgMUd/4N+nqbfpIagERDXugJJCAqsB9ekrFboQKvVihT01m5bFbhlqMAqkAB0rDiOkRc8GAwkTVvANoAD58bg9H1KAOPxWAd6QC9r8mOZDodDomg2m1vzQR/EJvOsS6a62+3Sy8ViUUoRL8qQaa7z8+8Zx8MR+90OX5sNkiSh32a7wfJzSYE7nQ7CMESr1UIURWg2QzQar6jX66hWq/B8/24nhoo0wAG73R7b7RZJssZ67QbIg0etCCEBNK4AL/D9yr1CwypI1xJFCuj2ejRojyjiCrgAOJTAu3jDzJucn/l8XmIV5tDZg8Zdi6tCAZPpBPA8jEcjq8lS4eIcuCJ8xDEVNuj3S1RkmqC9D0pyK1qFw/4LA5hb1n3hyN29mVqaphQgCAK3mzrqEtzUzYBp16V79j7VQg9MK77JN1N/ZNEVWjjPHWHh8AXq8HrLc0yv4fNkUKQvHBU8SFhq+FMLh69Pnp07qFneP3U3Y7+HaoBTAAAAAElFTkSuQmCC)
 */
export default function Star7({
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
        d="m100 5 6.718 88.283L195 100l-88.282 6.718L100 195l-6.718-88.282L5 100l88.283-6.718z"
      />
    </svg>
  )
}

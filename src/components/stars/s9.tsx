/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiFJREFUSEuVVUFym0AQ7DVURQFXfNA1GH0geoflp0gPUPID2XclL0mUd+gFEOVoH1RlKB2QJsWysDvsgBwuSMvM9E7PTI8iIoJ+6pfqv+x5Y+Q8xt6cuP/c3+pCRMpz5oEICorH611oKDygdAb88qNwVxLRwO6FGgBDkf7g/e5YQ2uqrSybHo2MIg9Af5XrUVWVhg+DsAfgFoJz2dRACCrxdDwe9fHdpzsL4NHPDxyKeDt4NQWw3++10fzLfISiHoDbRfaTFB54enrGhS74tv46kgGni3WRpUVuq/v7BDfqBlmWezXwWDYhfIqEoauPyrJEHMe6y96KAlEUtd0td24LcH3QmuDT6RSn00kHm0wmeH19QRTFHR/eMJqU+BwQcK7OKMoCWZ5j9/MXvv/Y4nD4qykB1RPQzGX9JEmC1WqFxeIBaTpDHMUIwgBQdp54DYhQnc8oihJZnuH3bofttgY4GIDupXUrST5juVzi8XGBWTpDFMcIggBKWfFhNZB7h1NUu35wKRpyMlkOFNmXyKbIt1oWCl3kj436XhFKh6JhRWxjpGmKCxEO+R8rJ27XCWDjc9Bz2Gw2mt/1ej2yJ1wnwuA+cAendemkYj639/6fGshSYfQdABc7e97tAGFIWQYugN0NNuVOrsNQpkjIxpFrzp3UId3CMX1uaXzXyhwyGiKZ20sZ19S9ew7a/DwaXeEVlo9fA8+BZyB1Vw0uL0XCPwXJZr7x0QIaAAAAAElFTkSuQmCC)
 */
export default function Star9({
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
        d="M195 100c-87.305 4.275-90.725 7.695-95 95-4.275-87.305-7.695-90.725-95-95 87.305-4.275 90.725-7.695 95-95 4.275 87.305 7.695 90.725 95 95"
      />
    </svg>
  )
}

/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAAAXNSR0IArs4c6QAAAtRJREFUSEuNVTFTGkEYfbcHcQa6iFBQh8EmEJgxFKEFUgebQP6E6UirZWCkCP4D+ANUQayw0UI0M0IZIZUES2W4czO7e7C73GG4hmNv9+37vu997zMopRSuhy0Zzqr67t4J12e+MDcWwPzvJhjORgpD368D2EtgcTMFP6ASo+CfCDFgmiYsa65Eo0egYDvAHkxVAixbxCQwCYFl2R75EJcLQvxNYbxcUzeJdzBgQgTjubVJ+hnwM1XDX7lZcFCBLUtjvKbMkvHt7QAnJw0cHx+7NfICMAuJVaZcLqNarSISibDzEjgcDuN+cg+TmGi328jn88sL2EFi6KlYMG02myiVSjyqWCyGwXDIci2Bp3+nSCQT+DMe87xGo1H0+31sv97mjJY5dlJx9/sOyXdJPDw88JzvxuO4vLhEIBBk/3VVMMDTnx0UPuZh28+ccbG4j1arCZ/Px4s3m82Qy+XQ7Xa5Cl5tbaHXO0c6nVKrLhlLeQktfz04QK1W4+CGYfBQ5cO0TnF4dIRKpeIlP6EKqR9dak+Pj9jbe4+bXzfiMKNIgQ/ZLM66XR6FfJysi58VHWvlMsCAM5kMrq+vHVCBnM1mcXrahd/vc5i4RLcAdlpZ+X6wSSoOj1D5tjYVurt1Oh0UCgXYts0j/7RfRKvZgt/nAyEmnmZPXIqseOzZYsU77yGdSqkeoshtOkUymcRoNOIHmNyurq4QCoVE53GvYCZk8fBH4zESibdCbgDiu7u4vLhAMBhQvYJiZyeMyWTCJSUbRORGNIjJwe2VlmYN8rlU4rmPvYlhOBzKzmPHB4NbNH40UK/XdWm4vEK1TXlxufQFtep3hLWWftHlKTM3VypYAbwNaGGbwtzWOpZ0NxOmSZa2+Z9h81KDyGniaZves25BcN0E0bpIU8XcspazzpUKuWAbjs9ro8Vr7q2mS21l137HNrlZbDSh3SNAG6wLwpQ+z/8BborGeHiKwEUAAAAASUVORK5CYII=)
 */
export default function Star40({
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
        d="M90.5 5h19v78.546l68.022-39.273 9.5 16.454L119 100l68.022 39.273-9.5 16.454-68.022-39.273V195h-19v-78.546l-68.023 39.273-9.5-16.454L81 100 12.977 60.727l9.5-16.454L90.5 83.546z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

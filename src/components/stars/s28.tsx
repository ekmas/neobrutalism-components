/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmVJREFUSEuNVU162jAQfcaB72uzKUk3cJk6h0hXKXCBJj0BknwDuEBDwo5DxLkMrAi79CsUq4wkyxKWAtrAN5bmzbw3P0kppUwkgATnH3XffRR3kEgp6SsAc8n9abyLO3Ux3VuJysDEfiomimU0GmE+n2M8ZmBsbOMKxKiCdgB89xKJYU3bt3+3+Hz5CeW+VLlyzjFmzDD1AUWxDI4Fuf56jbf1mzUTAGMsqFuTIp/++pGxr1Yr9Pv92n7glI85GA8DuKhRkV1Op9MpHn49AEotXROckwY8oJ7rXkIDBCisq0JCcAEuhHqpICgDFtCgUb5UzbZMTUGYS0pkAywOzolzH0A4VRQocZOIBRAiRwKdjH8SvBYveCkKz5xlN8iyb8rW7X7B7e139Hq95uuqk9OLC5Tl3l6o2fYk0xpUPDn/Kbju1RWoIDqdju0P2wfD4RDPT08mA+qBUDbHuXm6q49pmuLfbgckun0tRSRFu93Gfk9ZmPgbaYTzstoY/MFggNls5gNQTtvtDr1+TzWU66rBSC23T6l51Gq1TKBHVVTdJh4XiwU2m40yFUWB4rWoWkDZsizDTZZpSqluVcnpQzg0RjyKGvJbgwQ/VJhQZVprY0eFW9YBJ9FhVy8IiVzkYC6AajTTyR/uhmqanlg41MU6Ays/JpMJft7f2z1Vu/AXSnMWKTdUonUn51yAiWruaB6Wy6VurBNLxBsVMR2ORwU11Hq9dnyfuQ9iALkQVoNW2sKf93fdrWecaAZuTAQg8hx3dz/w+PgbienSM/y70zS2dVw3cSrCX0L7IDDTYxCNyjEXXbD/bYVxwxE7mjEAAAAASUVORK5CYII=)
 */
export default function Star28({
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
        d="M121 5C96.7 5 77 24.7 77 49v29H5c0 24.301 19.7 44 44 44h28v73c24.301 0 44-19.699 44-44v-29h74c0-24.3-19.699-44-44-44h-30z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

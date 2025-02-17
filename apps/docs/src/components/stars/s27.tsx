/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmtJREFUSEuNVstymzAUPUxxZgpZ4LXp/4DH+ZiQZYM9fmxDP8YZ2/kfew2LQmZqWrVXPKQryUm1MeFxj+49D8X7I4Tw0C0BwL4WEPDG+/2r7h+9QP+GJ4SgCkbl/ob8ccA6CilE/rADAFCWJabT6YcbHHvU8a3egaqqEEWRfDIC0B9ZlqEoCgvk80bUrsca/S0GQJV938d+v0eapp90oz8WOJ3esFgs0LYt+04D6Mh8O56QzlNMfB/L5QrZ0yOCIDSnI4s0TYPipcB6s5aFD4eD3JjqR/ARDeOc3N2hba9sJ0EQjBwRX1RcX9T59UrfcIKYigbk3W6HZZ7LV/9vedhsN8i/Pys1MpkaPmiaGmF476hNLhlgyRudwmnVdY3gayABlCgEPGk0h9Q9z+t2o+rJa8etbrKd2g27GjLVccIwRPPeKIBO1dqu1TXx87OunW63VDRERRzHuFwuvcVdbKheZrMZzuezY6RsRHrmCMTxNw6gz8YodRsAPQcO7xLJgxQ/qC2/pBERySzTmIpcKUgk93O32LX40EnmOJ2KjA5o5/dhaApIwTmkRCSHQWDNwpbpvzwio+V5zjXJ+9F7k9fb7RbPutF6M2hOViRPJreiIpJ5VcmoeNdMApldv2RU6MuRRcfjEfP5XKbqarWSEU4kDkunq24a/CgKrNcbmV30bZIkmpMNo1ER/4uP/esrkjThh5nu0r59/Sil4g+LB7S/qQvFKgu7xyyTO+KJaB1fzkgY8LMnfmiNTq6qElGkjkz9FLNONAuCn+FlWWFKtbzByZwXIxGdCeD698PkV76jyfTWKG6hO4Adnf0F88l9wa9ZxDEAAAAASUVORK5CYII=)
 */
export default function Star27({
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
        d="M195 195c-54.245-54.245-135.755-54.245-190 0C59.245 140.755 59.245 59.245 5 5c54.245 54.245 135.755 54.245 190 0-54.245 54.245-54.245 135.755 0 190"
      />
    </svg>
  )
}

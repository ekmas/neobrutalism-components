/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAglJREFUSEuNVc16gyAQHG/VvFaOgk9UU+0TCR7tY1V7Kv0WFl0Ek+YSRdifmZ2hcs458I8eqviy//Oq/Jg9OzhUqORWfq6yBP5DIVoh+7F0/TFJcBSfHohvTdOAnrd19VvLTXE3HCwkKGOTRgBACei3fq8lLFNQSxDFHeM44r3vdz5kBz4BdyDpojN932cMZhDRxsfjAaUUjDEJEMUOHKA7jdlafAxDlqT6dc4lnALQWsHaWSQJhaUJQl9aa1hr0SoF6wtKkRUdpOPoD84WqlWYjPGD1dxSkmNw6tbvkePO05hPkSBcBjCT8QkiybrjLlsFY0PlpWERU1RQCeNLEFAny9fi49zvdw+L5MkLTVIcp+jg4EqqxEmAiyqkILTzCC6Kz0RKmmWriATGNs/pfn42wHH4Cqjf6mwk5UIcZZGADuROFIHdti0JWNd1DrmoKktQZIhDRrJlBqVaTMYWS5L7XlpFFBHN+bIUSJ7MyRxT5P4/psYcQlvXXWCR7CurD0rmIZaerrTGzEILliGU7L3IQevuNK5CDM/MbhcYi6hsdsGWO8WK373rCUQU6FOa3Qnf830Q1Us8kfAGaXaXNxqAcSRXfEhn2SGSF46sdaDCntt14RY7Mdc0QSv5fZDKUtrGxZ3MqjjZU3MjcVXYXtxouQ4yk0ojXxnZlYPK9byDq2QFpywnSO+VP1TFncapthQ8AAAAAElFTkSuQmCC)
 */
export default function Star20({
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
        d="M107.6 5H92.4v76.652L38.199 27.451 27.45 38.199 81.65 92.4H5v15.2h76.652L27.45 161.801l10.748 10.748L92.4 118.348V195h15.2v-76.652l54.201 54.201 10.748-10.748-54.201-54.201H195V92.4h-76.652l54.201-54.201-10.748-10.748-54.201 54.2z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

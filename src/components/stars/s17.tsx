/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqFJREFUSEuNVjGy2jAQfYbBNtwEfgOhI5CKLj9U4S40QDCZCTkLqchQhQ6GVAQqyEnA9h+szC6yLdkCokoW0r7dt7tvsYQQAgKABW3ljvjAcFG+Un9J9wJWJISIbas2cvaeAKTe6U4oAM/DuF6vbKdYLAJa2Gb/6a7FFKlL3k0dJgYtZnC93sCCQLvTYYD4nJ6bKTUBGMD4SAAfX195s1wuU5OqQ2o+5LkSQepDr/cJ8/kPOI6jBec4LkfgB4F2HgQBPvf7+LlYpJHlAVL4IAzgui5GoxEmk8ktACFQKBR4H4lIkga+M51+he9f4NhOWo2SY2MEZOT2cArbtnE4HHC5XNBsNhlgt9uhXC6jXq8jfAsxGqaOJKHdjUASTgl0HQdhGPJJpVLB+XzmPRknQEp8ybER+MH/JDlfaqfTCbXaC/MelxoZVcvueDyiWq3qXaqEkS/TOBVCYP9nj3anzd5qi1EsVCplrNdrNBoNwLqVclKwGkUCuEZXbLdbzL7PsPq1SqjhZkm8zvqfwlKuut0uBoMBWq1W0oxJBNSlv7dbfJvNsFqt8BaGkgrVKHmZoUtGY9ulBOB9q4VCocie3e9kSVHnQweX8zkBYwCJScnebDZoNN4RQ/qKKWKxy8nD7e7p7wm16ksmrbGdG8rjJD+RCupkKlMy5crSzJYscU+dnK67aqoL1ng8hjf1YJccHA77+40WhhgOh/A8L9tj/H3LQUYKySOSCvWhJhVRBEuSPv4yhjfxEPg+bNYuVWWFIckAer0e5vO5UezIgE4J+Lvf72PBYieZ0LTIMANMM/SRXOda2aRFuZGZeUVdSwmPB07OCbWT5f7xRMsAJCOTm0gPW51u6jMtyeb/DLoIsiHzRYPgxUm+P7PvUZtrW3MEAv8AR4apv8I92HMAAAAASUVORK5CYII=)
 */
export default function Star17({
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
        d="m100 5 14.542 59.893 52.633-32.068-32.068 52.633L195 100l-59.893 14.542 32.068 52.633-52.633-32.068L100 195l-14.542-59.893-52.633 32.068 32.068-52.633L5 100l59.893-14.542-32.068-52.633 52.633 32.068z"
      />
    </svg>
  )
}

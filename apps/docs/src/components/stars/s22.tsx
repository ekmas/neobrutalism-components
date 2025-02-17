/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAohJREFUSEuNVkuW4jAMLLMdMgfitxlCH4TAY4D9dN+A3vN5zafP0RBmBeFAwGzjebIdWyYOr7NJYiuSVSqVInIppYC+JIDnzxISwthwa+MgcBNSSrJ8cB8IpvxVOfXXuSkLAMS9Ho5pqsJF9Tpms3eMJ2N2rnKOi+UCr39ecb/fVfrdX12kxgd9aAPEcYzj8WicEQwEByCEwPl8RqPRcHlKILtkaLfb0AAQsNLeyNfhcFD2NoAQNQOTWi499/t9bLcbtTccDrHZbJmNDz59nRvkdQAKXtPFMwVhz26VTkaXhsBkGf7IZCZNBhKIfkb4d7/bADo/isg9WATVuoIxsE31u95uDCIJULGm02k5Vy8lH+uAb3WqxWKO8e+xOqDHolqtpkv7cKywo8BZyCHhn5MPjYCtAb1kWYZWq+XwdTj5dQ81lKlflhHjmtZC8E6mVc2QDYM/AEtFYTXTiF2ub4Od3DMNp+HnxawCSyCOu5b7XoCSFkmg9xIjTYum43hUMQroxjFS1Vx+t5cySJIEu91OezU05XSszgFIBgOs1x9MMh9YdLlc0GxSgb7DG94mzj5cZJOVomkhrs8arcQiF4C0K89zx6JCKparJaaTiS8VJbY4EXwWf7VaYTQaaZSLIkdRpCWXq4GvDA8N6AfjSdWjCLfrlUmFkmWupoFOAhQVCflC7yvaQbOUuplLBWEXJqR2M0gGWG/WyiTpJ9h9frIZ4JPCyoUo1BQANZebRH7RTqeTYZc7Ag2hTqfjDxyzTb72+z2DyLBITbW/R4V1vf4Ds/cZJuMJS6w8exfzOd7e3uzI7MUv+Np/2Z8HT01LIz0w46ts3KA3fx6emnLwzUb4/+E7EX2C/Ad3o4rFgicJjwAAAABJRU5ErkJggg==)
 */
export default function Star22({
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
        d="M158.603 100c78.169 75.604 16.906 136.867-58.603 58.603C24.396 236.867-36.867 175.604 41.397 100-36.867 24.396 24.396-36.867 100 41.397 175.604-36.867 236.867 24.396 158.603 100"
      />
    </svg>
  )
}

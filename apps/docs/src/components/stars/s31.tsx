/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA+RJREFUSEt9VkFMG1cQfd/G2CY2IibgplIhRw4lh0ZCShpySXvAkCjBqFGglAOiN0COc3CkAMKJhJCITOFYeiFEIVLsSNCQND0kEkhB9ARcOBYqlQKSARsMGO/+6s+u8S7rZQ7W7v7/5828NzPfjHPOwQEwGI2+i2VmvqyeUrca/DACMDMzYLNYtGDqsw4gF4Xes3izFRRge3sHAIen1IPjdFrJTLs1T0BM5pyfwQ6lvLq2hkuVlQgEAsTmcCSC1dW/UVFRqY85H8CZFKnHX05Oorn5Piq+Eg451v5Zw+TLV7h37wc9WXmyMWZgUItjbOw3dPzcgUKbnQDSx2mM/TqG9vb2E4D8InNoALTVooainpqbnUPtjRtgTCFT1MXs7Cy+vX79pLpyweurThFZXRXc/ru+jmvXruLmd9/D7XKRw8PDQzidzhwdDDhIpWB3OEnkvf0kPnz4E/Of53Hxy4ukVdaUDFSAtrY2jI+Pq03BYbVa8fTpE4RCj+BwOHB0dEQR250OHKQOMDAwgJ7HPZBkSfHHgNYfW1UflKuWImWPJEkYGRlFX18vkskknbJYGCKRCLq7uwlgePgXBB4EwGUZogTdLjf6w2F0dXZSUFqtT/rA6/Vic3Mz2x4UzfmSEthsNmzH4ziWMuRc1L74LbAWwFNaiuOjNHZ2d0iXrJWXl2Pjvw3ycQLQ1NSEWDRK6DkCyZfRFAwFyvDM0OhvRPT1a4U1baPF43EEHwYxPTVN9Ih0q6qqILQJBoNEnzDxfWhoiLheWVmBJMlwu124dfsWng09g8fjUQJjp8rUMKk4EHsTQ5PfD2axQJZlJSrGIBh5E4vizt27pzLUt7NxFimVTuLOzMygvr4eFuGcyyi0FdJqOp2mb0Lk39++hc9XZzKOsxpo+0oF2NjcwhdeLx2srv4ay8vLqKmpodWFvxZwufoylpaW6F0UR1lZWTYuXUYmGQB2u50i9fv9ivgMeDfzjqrF5/ORE7EWjUVhL7RTM2ZNV6b5pung4CBCoRCKi4tx5co3+PjxE53NaiDoEVZbW4vFxUUkEgkSPfggSMJqtdSNiuwS8Qsgtb+PoqIictbQ0IDp6SnqA19dHd6//4O0Sh2kcI72MMiSfNaNpgyp5G4CJedLsLW1hdGRUepQ4SgjZWAlYAYpk6EGFC3Q29uHzq4uXCi7gMTuLpVrDoXnGu00gSKDYrcbe3t7mJiYQEtzSy59Dky8eI7W1p/gcrmQTCZ0tGhHt27YnW5Z0VBiJvX09qljWV9u/f39CIfDkKSMAqD1rG41ufQNdati57kT83zSBmoKoP2ror1McpFqy94c+H+Yhe7EEN7IxwAAAABJRU5ErkJggg==)
 */
export default function Star31({
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
        d="M110.83 109.968c86.446 139.251-10.83 85.773-10.83-5.984 0 91.662-97.276 145.235-10.83 5.984-86.446 139.251-67.922 25.931 2.09-12.633-69.917 38.469-148.669-41.795-8.74-8.93-139.929-32.865-31.158-49.392 12.065-1.804C51.362 39.013 100-64.143 100 75.108c0-139.251 48.638-36.095 5.415 11.493 43.223-47.588 151.994-31.06 12.064 1.805 139.93-32.866 61.178 47.398-8.739 8.929 69.917 38.469 88.536 151.884 2.09 12.633"
      />
    </svg>
  )
}

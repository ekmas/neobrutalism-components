/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsZJREFUSEuNVs1u2kAQ/gxFLTlAiJQqiID7DI2aC/npnUMhVQJO36HkTVoeIuQHCXPhAaBJD0jNMyQmIVEqUexDQ4Wwq12v7V28kPgC3vXMN/N9szOrOI7jgH/ImwKwH2FL+kI/5I14SweK7TiOErIU3Qc+HDhQmD/2n9nyOHSJuVBoBmyXGnO7k8kE7XYbn4pFts57A05PT7G/v49oNCojgaK4AHOefr+PXC4HVVVxXD/GxvsN+mWv18PhoYbB3QCD+3usra1xlPJZEvZ8AJFHks3nvT3ouj5XB5LtQblMM+Fp4Q04isT0LdNEcnn5eZEBmKaJRCLh885rJlDkSWtZFlZSKUxtmwKQSAUe6UKwGolEMBwOkUwmZwLyqsgBpvYUvx8fUT06wvl5Awoc3ocEhV9ywUqlEmq1GtUkFou5wXkaEB41TWMR8DGTypoBkxDHWzR1HaViUQQgb5n1dQzu7mSkvAxYAdSciuvr6+Ac8Aet2+1i9+NuQDgLK6TBPOkV4OLHBfL5vF8xQpmOx/8Qj8cDc7m6ovsZwZ+e/uL1m7h/2oUqehqPsbQUpxkEvp+Jf2bbB/BI5U/yz8tL5Le25Bq8JBsAnU4H2zs7fv8Tmt07VcWNYcgZXphIsJnJZHB7exvWoNVq0Tpe2Bc86uaBMT1OTuqoVCpimZLO+fDwgOrXKvTWvP6z0DPKB2V8r33D6upb1mGFbhrMANO0sLKSgs1axYJ+QashokQx/DNEkvQjcii5mRFudowj07KwTHsLfxgk/wGMRqNwH5INnGBWulFo5QrOzs9cyJDvoP80m01BuoAL2cDhZh/RJJ1Og1RGvV7H5uYHCnx19QuH2hcYxg0Mw0A2m/WG4sw89wAkE54s2dMpGo2GWxGh4Q6QyisUCojFXrm8h0pwJoMQTmiSS3Akt5AXUMRPt3k3DP5qw98wxNH7H1p9mbqJr1o6AAAAAElFTkSuQmCC)
 */
export default function Star35({
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
        d="M60.575 5.095C81.665 28.37 118.24 28.37 139.235 5c-1.615 31.35 24.32 57.19 55.67 55.575-23.275 21.09-23.275 57.665.095 78.66-31.35-1.615-57.19 24.32-55.575 55.67-21.09-23.275-57.665-23.275-78.66.095 1.615-31.35-24.32-57.19-55.67-55.575C28.37 118.335 28.37 81.76 5 60.765c31.35 1.52 57.19-24.32 55.575-55.67"
      />
    </svg>
  )
}

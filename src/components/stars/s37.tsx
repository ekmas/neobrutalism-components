/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAwtJREFUSEuNVstO20AUPbZjpyIJj67IHxTSPeEXWPAQFStoERKNs0YqJV03lAXrJCABEnRDhRBI5ReAfUP5A7JLCSA1fk01YxvPeGzU2SSZuXfOuY85NwohhIBf9JdCQKDQD0AJDoPvwTHbj455Q+E2KBIAOxcdki+VWCUwoVzjESQAhFvNVhOmacbxJUI8NAfA50BkR9M1OzODZrOJYrH4fJiemMhfiCDNYWtrC7VaDa7rcsi+tWVZbE83jKBmQf0CSx8gdvPj4yPy+TxLhe04MAwdw8PD6Ha7zK3VamFtbQ1PT08wsgZ2d3bxbn4eAwO5qClCAI8QEjYK3bNtG4eHh1hZWWEAS++X8P3oCIqmov2rjbelElzPY+4TExO4uroS2waxCCIAPwzbsZHPFdDv/2UAGV2D53osSLoomfC753lQFI5eQhkTu4g6UXaXl5dQVTXGkCsgAFXTsLCwgP2DA2R1Q3o3iTUoFAqgdQjp8qylMDj4+mYdG583BEJyFxGgtdNC1TTFtDCUAIr/UABVUTE4NISHXg9TU1M4Pz8P3gqBEi9y2FGapsEjHjPk744iiOK6ubnBm7ExZtfpdHB6eopqteqbhi+50Whgdm4OxdFRVsbb37cYGx+PyirlKao6jcBx3UC2RNHiakAwPT2Di58XGBwaRO/+Hm4QwUt5D8NrNhuoVCpSQ0hF3vy2idrGF64ZE/Ke0FeFfB693kNMZVPEjj7/D8vL+HF8zOQhuQZ+bWiUk+VJXF9fw9dNURZS1DSiSJ3S3gJtBMdx2KXZ7CvW2rqup7UpP2Si514ulxk7uihQu91GqVQCfcWLi4tMVuja29tjsqJnAoAgEFmuASZiJycnWF1dhWXZyOUGsL29jUrlI+uqkdcj+NO9h231kaEXKmDsmUDGVqpc9y2L5dgwDMlJy2iof63j0/q62Jq85UsRPNtJ85ng7q7DptrZ2ZkAnDC+WW24lyzKrDTQgw061cyKyf4Y8OKfPKxIwkyWLEXgVGmlB/y/A2YoAPzPhH15bvuTQST0D+ZcpMOCryGuAAAAAElFTkSuQmCC)
 */
export default function Star37({
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
        d="M165.01 168.59c0-16.72-8.826-36.955-26.384-41.325 0 28.12-17.557 53.675-41.283 67.735 12.337-12.35 18.411-31.635 11.388-48.355-20.214 18.43-50.964 26.41-77.347 18.43 16.703 0 36.918-8.835 41.283-26.41-28.092 0-53.621-17.575-67.667-41.325 12.338 12.35 31.603 18.43 48.307 11.4C34.99 88.6 27.018 57.82 34.99 31.41c0 16.72 8.826 36.955 26.384 41.325 0-28.12 17.557-53.675 41.283-67.735C90.32 17.35 84.246 36.635 91.269 53.355c20.215-18.43 50.964-26.41 77.347-18.43-16.703 0-36.918 8.835-41.283 26.41 28.092 0 53.621 17.575 67.667 41.325-12.338-12.35-31.603-18.43-48.307-11.4 18.317 20.14 26.289 50.92 18.317 77.33"
      />
    </svg>
  )
}

/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApdJREFUSEuNVUFrGkEU/taqIJhL+h/SS5JDg60HoSEFq15qSU82pIgea0mvEZr0oHdtjuIhBm+SghCrqSCkBxu8idD8CS+mQqrdKTO76864M6oX3XHee9/73ve+1XRCiEYAaFj8Me+sfNW8qPEF5MGrpDSx8SCEAirs7JJdgNCfINA0Z7sqcBohRpgRKmPKPh2NRuzemn+NXeRKC5F8HoMiR3p5qdvbXxQ/ngee2UgktPDpVujAbi+Xz0MDwXE2a+dwYBHVYBRYgsKicHf3BaOi0+nYU1uiLqEDPopSIciXAOuP19mV4XA4Jwt1Fa4AbUQT18FUkVXM9cjFEuv/dEFd8wLhxSd08O3yEkdHn7D3cg+JRALBYBB+v3+G1pIn0clMRX/u79HtdlGtVtFut1EoFBCPx2cSEzqwor43G3gdf4O/Dw8sudvjwZONDQwGA/a8ubWJu993mEwmLMTr8aJeryMcDjv06BwytxM/b24QiUQwHo/NUypoAz398vl8aLVaCIVCSptZrCIzrNfrIRAIsCczN+jZ050dc2YqGdJRcTKVrzPB9fUPhF+FAbaSxuI3m80ZJSoPYIDkm8x3TODxeDGdTpHNHjOl5XM5uN1uYwZLvNC5B3MB5XIZ6VQKHzIZFItFVjnzMYOzr2eg/yWTSbnRWG7Km51sUi6XhoN3BzivVITtPXx/iMrFBYiuK22SUaSaAQXw5fQU/X4ftVqN05Zt1W/397G1vY2Tk8+cm/IUEHMGMh4JQTQWQ6PRMJJLhEKPYtEorq4aTF6ylyI3ZJGgUqmEdDotF9Ycl/RuKp2eFRCswlYRz4LYpsP4VilrVlGanY1CNEGV/atWWbnJC+W98B3AA7KGrGLHAUsM5scqkmr/8x9YtGzE51uGpAAAAABJRU5ErkJggg==)
 */
export default function Star1({
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
        d="M158.682 195 100 127.008 41.219 195l43.344-79.687L5 77.551l85.5 18.732L100 5l9.5 91.283L195 77.65l-79.661 37.663z"
      />
    </svg>
  )
}

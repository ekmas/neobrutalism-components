export default function TooltipExample() {
  return (
    <div className="group relative inline-block w-28 cursor-default text-center font-bold">
      hover me
      <div className="pointer-events-none absolute -left-1/2 bottom-8 z-10 ml-14 w-28 rounded-md border-2 border-black bg-[#bc95d4] px-3 py-2 text-center text-xs opacity-0 transition-all group-hover:opacity-100">
        tooltip
      </div>
    </div>
  )
}

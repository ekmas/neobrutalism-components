export default function Badge({ badgeText }: { badgeText: string }) {
  return (
    <div className="w-min rounded-full border-2 border-black bg-[#bc95d4] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
      {badgeText}
    </div>
  )
}

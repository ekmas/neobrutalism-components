export default function Badge({ badgeText }: { badgeText: string }) {
  return (
    <div className="w-min rounded-base border-2 border-black bg-main px-3 py-1.5 text-sm font-bold">
      {badgeText}
    </div>
  )
}

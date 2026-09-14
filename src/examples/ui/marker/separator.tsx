import { Marker, MarkerContent } from "@/components/ui/marker"

export default function MarkerSeparatorDemo() {
  return (
    <div className="w-full max-w-sm">
      <Marker variant="separator">
        <MarkerContent>Yesterday</MarkerContent>
      </Marker>
    </div>
  )
}

import { GlobeIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

export default function MarkerDemo() {
  return (
    <div className="w-full max-w-sm">
      <Marker>
        <MarkerIcon>
          <GlobeIcon />
        </MarkerIcon>
        <MarkerContent>Searched the web</MarkerContent>
      </Marker>
    </div>
  )
}

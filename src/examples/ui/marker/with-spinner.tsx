import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export default function MarkerWithSpinnerDemo() {
  return (
    <div className="w-full max-w-sm">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>Thinking...</MarkerContent>
      </Marker>
    </div>
  )
}

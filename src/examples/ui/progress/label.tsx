import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

export default function ProgressLabelDemo() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}

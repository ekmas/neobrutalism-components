import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function NativeSelectDisabledDemo() {
  return (
    <NativeSelect className="w-full max-w-xs" disabled>
      <NativeSelectOption value="">Disabled</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  )
}

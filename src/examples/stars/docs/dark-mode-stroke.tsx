import Star8 from "@/components/stars/s8"

export default function StarDarkModeStroke() {
  return (
    <Star8
      className="text-red-500 dark:text-blue-500"
      pathClassName="stroke-black dark:stroke-white"
      size={200}
      strokeWidth={2}
    />
  )
}

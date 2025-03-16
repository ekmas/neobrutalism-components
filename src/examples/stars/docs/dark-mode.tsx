import Star8 from "@/components/stars/s8"

export default function StarDarkMode() {
  return (
    <Star8
      className="text-red-500 dark:text-blue-500"
      size={200}
      stroke="black"
      strokeWidth={2}
    />
  )
}

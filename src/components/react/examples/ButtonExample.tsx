export default function ButtonExample() {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-10 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
    >
      Button
    </button>
  )
}

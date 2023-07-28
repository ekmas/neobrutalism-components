export default function Avatar({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="h-16 w-16 rounded-full border-2 border-black bg-cover bg-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    ></div>
  )
}

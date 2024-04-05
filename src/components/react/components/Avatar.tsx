export default function Avatar({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="h-16 w-16 rounded-full border-2 border-black bg-cover bg-center"
    ></div>
  )
}

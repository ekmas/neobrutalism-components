type Props = {
  imageUrl: string
  children: React.ReactNode
}

export default function ImageCard({ imageUrl, children }: Props) {
  return (
    <div className="w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="h-[200px] bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="border-t-2 border-black p-4">{children}</div>
    </div>
  )
}

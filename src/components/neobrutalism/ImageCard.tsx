type Props = {
  imageUrl: string
  children: React.ReactNode
}

export default function ImageCard({ imageUrl, children }: Props) {
  return (
    <figure className="w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#C4A1FF] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 border-black p-4">
        {children}
      </figcaption>
    </figure>
  )
}

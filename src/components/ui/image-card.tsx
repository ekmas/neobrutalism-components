type Props = {
  imageUrl: string
  caption: string
}

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark">
      <img className="w-full aspect-[4/3]" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-text border-border dark:border-darkBorder p-4">
        {caption}
      </figcaption>
    </figure>
  )
}

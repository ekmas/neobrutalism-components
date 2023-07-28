type Props = {
  heading: string
  paragraph: string
}

export default function Card({ heading, paragraph }: Props) {
  return (
    <div className="w-[250px] rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">{heading}</h2>
      </div>
      <div className="p-4">
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

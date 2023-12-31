export default function MarqueeExample() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-black bg-white font-bold">
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl m750:text-2xl">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl m750:text-2xl">
              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default function ImageCardExample() {
  return (
    <figure className="w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <img
        src="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
        alt="image"
      />

      <figcaption className="border-t-2 border-black p-4">Image</figcaption>
    </figure>
  )
}

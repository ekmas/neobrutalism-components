export default function ImageCardExample() {
  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-black bg-main font-bold shadow-base">
      <img
        src="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
        alt="image"
      />

      <figcaption className="border-t-2 border-black p-4">Image</figcaption>
    </figure>
  )
}

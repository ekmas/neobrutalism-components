export default function ImageCardExample() {
  return (
    <div className="w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div
        style={{
          backgroundImage:
            'url(https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg)',
        }}
        className="h-[200px] bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="border-t-2 border-black p-4">Image</div>
    </div>
  )
}

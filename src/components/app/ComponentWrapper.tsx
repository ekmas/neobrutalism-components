export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="not-prose flex w-full items-center justify-center z-[15] relative border-2 mb-5 border-black bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] px-10 py-20 shadow-base [background-size:16px_16px] m750:px-5 m750:py-10">
      {children}
    </div>
  )
}

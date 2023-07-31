import { highlight } from '@/lib/shiki'

const Code = async ({ code }: { code: string }) => {
  const component = await highlight(code)

  return (
    <div
      className="code w-max-[700px] scrollbar mt-5 h-[300px] overflow-x-auto rounded-md border-2 border-black bg-[#151515] p-5 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m1000:w-[500px] m750:h-[180px] m750:w-[350px] m400:w-full m400:text-xs"
      dangerouslySetInnerHTML={{ __html: component }}
    />
  )
}

export default Code

import { highlight } from '@/lib/shiki'

const Code = async ({ code }: { code: string }) => {
  const component = await highlight(code)

  return (
    <div
      className="w-max-[600px] scrollbar h-[300px] overflow-x-auto bg-[#151515] p-5 text-sm"
      dangerouslySetInnerHTML={{ __html: component }}
    />
  )
}

export default Code

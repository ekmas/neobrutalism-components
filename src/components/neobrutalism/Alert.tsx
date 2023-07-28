import { TbAlertOctagonFilled } from 'react-icons/tb'

export default function Alert({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center rounded-md border-2 border-black bg-[#bc95d4] p-5 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <TbAlertOctagonFilled className="mr-3 h-6 w-6" />
      {message}
    </div>
  )
}

import { TbAlertOctagonFilled } from 'react-icons/tb'

export default function Alert({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-center justify-center rounded-base border-2 border-black bg-main p-5 px-8 font-bold shadow-base"
    >
      <TbAlertOctagonFilled className="mr-3 h-6 min-h-[24px] w-6 min-w-[24px]" />
      {message}
    </div>
  )
}

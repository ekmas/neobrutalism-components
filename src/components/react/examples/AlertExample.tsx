import { TbAlertOctagonFilled } from 'react-icons/tb'

export default function AlertExample() {
  return (
    <div
      role="alert"
      className="flex items-center justify-center rounded-base border-2 border-black bg-main p-5 px-8 font-bold shadow-base m750:px-5"
    >
      <TbAlertOctagonFilled className="mr-3 h-6 min-h-[24px] w-6 min-w-[24px]" />
      Lorem ipsum dolor sit amet
    </div>
  )
}

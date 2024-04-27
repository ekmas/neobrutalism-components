export default function ToggleSwitch({
  isToggled,
  setIsToggled,
}: {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        onChange={(e) => {
          setIsToggled(e.target.checked)
        }}
        checked={isToggled}
        value=""
        className="peer sr-only"
      />
      <div className="peer h-8 w-[70px] rounded-full border-2 border-black bg-white after:absolute after:start-[6px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border-2 after:border-black after:bg-white after:transition-all after:content-[''] peer-checked:bg-main peer-checked:after:translate-x-[37px] peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px]"></div>
    </label>
  )
}

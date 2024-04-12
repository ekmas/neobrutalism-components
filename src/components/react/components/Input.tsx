type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

export default function Input({ value, setValue, placeholder }: Props) {
  return (
    <input
      className="rounded-base border-2 border-black p-[10px] font-bold ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none transition-all"
      type="text"
      name="text"
      id="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      aria-label={placeholder}
    />
  )
}

export default function TextareaExample() {
  return (
    <textarea
      className="h-[150px] w-[400px] resize-none rounded-base border-2 border-black p-[10px] font-bold ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none transition-all"
      name="textarea"
      id="textarea"
      placeholder={'Placeholder'}
    ></textarea>
  )
}

export default function TextareaExample() {
  return (
    <textarea
      className="h-[150px] w-[400px] resize-none rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
      name="textarea"
      id="textarea"
      placeholder={'Placeholder'}
    ></textarea>
  )
}

import { CopyButton } from "./copy-button"

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  __rawstring__?: string
}

export function Pre(props: PreProps) {
  const { children, __rawstring__ = "" } = props

  return (
    <div className="relative mb-5 shadow-shadow">
      <pre
        className="bg-black border-2 border-border scrollbar text-sm max-h-[300px] overflow-auto p-4 not-prose"
        {...props}
      >
        <CopyButton text={__rawstring__} />
        {children}
      </pre>
    </div>
  )
}

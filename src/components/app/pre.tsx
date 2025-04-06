import { cn } from "@/lib/utils"

import { CopyButton } from "./copy-button"

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  __rawstring__?: string
  wrapperClassName?: string
}

export function Pre(props: PreProps) {
  const { children, __rawstring__ = "", wrapperClassName } = props

  return (
    <div
      data-slot="pre-wrapper"
      className={cn("relative shadow-shadow", wrapperClassName)}
    >
      <pre className="bg-black border-2 border-border code text-sm max-h-[300px] overflow-auto p-4 not-prose">
        <CopyButton text={__rawstring__} />
        {children}
      </pre>
    </div>
  )
}

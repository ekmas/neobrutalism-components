import "@/styling/hljs.css"

import { ClassValue } from "clsx"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"

import { cn } from "@/lib/utils"

import CopyCode from "./CopyCode"

hljs.registerLanguage("typescript", typescript)

const Code = ({
  code,
  name,
  limitedHeight = true,
  className,
}: {
  code: string
  name?: string
  limitedHeight?: boolean
  className?: ClassValue
}) => {
  const component = hljs.highlight(code, { language: "typescript" }).value
  return (
    <div
      className={cn(
        "mt-5 group border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark",
        className,
      )}
    >
      {name && (
        <div className="font-heading border-b-2 h-9 m400:text-sm m400:flex m400:py-0 m400:items-center bg-[#101010] text-white border-border dark:border-darkBorder p-1 px-3">
          {name}
        </div>
      )}
      <div className="relative rounded-base">
        <pre>
          <code className="not-prose">
            <div
              style={{ height: limitedHeight ? "300px" : "unset" }}
              className={
                "w-max-[700px] code overflow-x-auto font-bold bg-[#101010] text-white p-4 px-5 leading-[1.65] text-sm m1000:w-full m750:h-[180px] m400:text-xs"
              }
              dangerouslySetInnerHTML={{ __html: component }}
            />
          </code>
        </pre>
        <CopyCode code={code} />
      </div>
    </div>
  )
}

export default Code

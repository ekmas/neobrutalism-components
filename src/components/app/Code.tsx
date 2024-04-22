import hljs from 'highlight.js/lib/core'
import moonscript from 'highlight.js/lib/languages/moonscript'

import 'highlight.js/styles/ascetic.css'

hljs.registerLanguage('moonscript', moonscript)
// there's no tsx, and typescript doesn't highlight markup so this is the workaround

const Code = ({
  code,
  name,
  limitedHeight = true,
}: {
  code: string
  name: string
  limitedHeight?: boolean
}) => {
  const component = hljs.highlight(code, { language: 'moonscript' }).value

  return (
    <div className="mt-5 rounded-base border-2 border-black shadow-base">
      <div className="rounded-t-base font-heading border-b-2 border-black bg-white p-1 px-3">
        {name}
      </div>
      <pre>
        <code className="not-prose">
          <div
            style={{ height: limitedHeight ? '300px' : 'unset' }}
            className="code w-max-[700px] scrollbar overflow-x-auto font-bold rounded-b-base bg-white p-5 text-sm m1000:w-full m750:h-[180px] m400:text-xs"
            dangerouslySetInnerHTML={{ __html: component }}
          />
        </code>
      </pre>
    </div>
  )
}

export default Code

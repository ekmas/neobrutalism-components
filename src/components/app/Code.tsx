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
    <div className="mt-5 rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="rounded-t-base border-b-2 border-black bg-white p-1 px-3">
        {name}
      </div>
      <pre>
        <code className="not-prose">
          <div
            style={{ height: limitedHeight ? '300px' : 'unset' }}
            className="code w-max-[700px] scrollbar overflow-x-auto rounded-base bg-white p-5 text-sm  m1000:w-[500px] m750:h-[180px] m750:w-[350px] m400:w-full m400:text-xs"
            dangerouslySetInnerHTML={{ __html: component }}
          />
        </code>
      </pre>
    </div>
  )
}

export default Code

import type { Highlighter } from 'shiki'
import { renderToHtml, getHighlighter } from 'shiki'

let highlighter: Highlighter
export async function highlight(code: string) {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: ['tsx'],
      theme: 'nord',
    })
  }

  const tokens = highlighter.codeToThemedTokens(code, 'tsx', 'nord', {
    includeExplanation: false,
  })
  const html = renderToHtml(tokens, { bg: '#151515' })

  return html
}

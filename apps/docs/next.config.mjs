import fs from 'fs'
import createMDX from '@next/mdx'
import rehypeExpressiveCode, {
  ExpressiveCodeTheme,
} from 'rehype-expressive-code'
import codeImport from 'remark-code-import'

const jsoncString = fs.readFileSync(
  new URL(`./src/data/theme.jsonc`, import.meta.url),
  'utf-8',
)
const myTheme = ExpressiveCodeTheme.fromJSONString(jsoncString)

/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
const rehypeExpressiveCodeOptions = {
  themes: [myTheme],
  styleOverrides: {
    borderWidth: '2px',
    borderColor: '#000',
    borderRadius: '0px',
    scrollbarThumbColor: '#000',
    scrollbarThumbHoverColor: '#000',
    frames: {
      frameBoxShadowCssValue:
        'var(--horizontal-box-shadow) var(--vertical-box-shadow) 0 #000',
      tooltipSuccessBackground: '#fff',
      tooltipSuccessForeground: '#000',
      inlineButtonBorder: '#000',
      inlineButtonBackground: '#fff',
      inlineButtonBorderOpacity: '1',
      inlineButtonBackgroundIdleOpacity: '1',
      inlineButtonBackgroundActiveOpacity: '1',
      inlineButtonBackgroundHoverOrFocusOpacity: '1',
      editorBackground: '#101010',
    },
    codeFontWeight: '700',
    uiFontFamily: 'inherit',
    uiFontWeight: '700',
    gutterBorderColor: '#000',
    focusBorder: '#000',
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[codeImport]],
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
  },
})

export default withMDX(nextConfig)

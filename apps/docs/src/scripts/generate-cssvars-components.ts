import * as fs from "fs"
import * as path from "path"

const root = process.cwd()

const uiDir = path.join(root, "src", "components", "ui")
const cssVarsDir = path.join(root, "src", "components", "css-vars")

if (!fs.existsSync(cssVarsDir)) {
  fs.mkdirSync(cssVarsDir, { recursive: true })
}

const rules: [RegExp, string][] = [
  [/\bbg-bg dark:bg-darkBg\b/g, "bg-bg"],
  [
    /\bdata-\[state=selected\]:text-text dark:data-\[state=selected\]:text-darkText\b/g,
    "data-[state=selected]:text-text",
  ],
  [/\btext-text\b(?!.*dark:text-darkText)/g, "text-mtext"],
  [/\btext-text dark:text-darkText\b/g, "text-text"],
  [/\bborder-border dark:border-darkBorder\b/g, "border-border"],
  [/\bbg-border dark:bg-darkBorder\b/g, "bg-border"],
  [/\bbg-white dark:bg-secondaryBlack\b/g, "bg-bw"],
  [/\bbg-black dark:bg-white\b/g, "bg-blank"],
  [/\bbg-border dark:border-darkBorder\b/g, "bg-border"],
  [/\bshadow-light dark:shadow-dark\b/g, "shadow-shadow"],
  [/\bhover:shadow-light dark:hover:shadow-dark\b/g, "hover:shadow-shadow"],
  [/\bhover:shadow-none dark:hover:shadow-none\b/g, "hover:shadow-none"],
  [/\boutline-border dark:outline-darkBorder\b/g, "outline-border"],
  [
    /\bfocus:border-border dark:focus:border-darkBorder\b/g,
    "focus:border-border",
  ],
  [
    /\bdata-\[state=open\]:border-border dark:data-\[state=open\]:border-darkBorder\b/g,
    "data-[state=open]:border-border",
  ],
  [/\bring-black dark:ring-white\b/g, "ring-ring"],
  [/\bring-offset-white dark:ring-offset-black\b/g, "ring-offset-ringOffset"],
  [
    /\bdata-\[state=unchecked\]:bg-white dark:data-\[state=unchecked\]:bg-secondaryBlack\b/g,
    "data-[state=unchecked]:bg-bw",
  ],
  [
    /\bdata-\[state=selected\]:bg-white dark:data-\[state=selected\]:bg-secondaryBlack\b/g,
    "data-[state=selected]:bg-bw",
  ],
  [
    /\bdata-\[state=active\]:border-border dark:data-\[state=active\]:border-darkBorder\b/g,
    "data-[state=active]:border-border",
  ],
]

const ruleExceptions: Record<string, RegExp[]> = {
  "calendar.tsx": [/\bbg-white dark:bg-secondaryBlack\b/g],
}

const specialRules: Record<string, { rule: RegExp; text: string }[]> = {}

const processFile = (filePath: string, destPath: string) => {
  const content = fs.readFileSync(filePath, "utf-8")
  let modifiedContent = content

  rules.forEach(([regex, replacement]) => {
    const relativeFilePath = path.relative(uiDir, filePath)

    if (ruleExceptions[relativeFilePath]) {
      if (
        ruleExceptions[relativeFilePath].toString().includes(regex.toString())
      ) {
        return
      }
    }

    modifiedContent = modifiedContent.replace(regex, replacement)

    if (specialRules[relativeFilePath]) {
      specialRules[relativeFilePath].forEach(({ rule, text }) => {
        modifiedContent = modifiedContent.replace(rule, text)
      })
    }
  })

  fs.writeFileSync(destPath, modifiedContent, "utf-8")
}

const processDirectory = (srcDir: string, destDir: string) => {
  const files = fs.readdirSync(srcDir)

  files.forEach((file) => {
    const srcPath = path.join(srcDir, file)
    const destPath = path.join(destDir, file)

    if (fs.statSync(srcPath).isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath)
      processDirectory(srcPath, destPath)
    } else if (file.endsWith(".tsx")) {
      processFile(srcPath, destPath)
    }
  })
}

processDirectory(uiDir, cssVarsDir)

console.log('Processing complete! Transformed components saved in "css-vars".')

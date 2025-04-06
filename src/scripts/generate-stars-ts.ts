import fs from "fs"
import path from "path"

const starsFilePath = path.resolve("src/data/stars.ts")
const starsDir = path.resolve("src/components/stars")

if (fs.existsSync(starsFilePath)) {
  fs.unlinkSync(starsFilePath)
}

const starFiles = fs
  .readdirSync(starsDir)
  .filter((file) => file.match(/^s\d+\.tsx$/))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10)
    return numA - numB
  })

const imports: string[] = []
const starsArray: string[] = []
const exampleImports: string[] = []
const exampleKeys = [
  "custom-width-height",
  "dark-mode-stroke",
  "dark-mode",
  "default",
  "with-stroke",
]

starFiles.forEach((file) => {
  const match = file.match(/s(\d+)\.tsx$/)
  if (!match) return

  const starNumber = match[1]
  const componentName = `Star${starNumber}`
  const importPath = `@/examples/stars/s${starNumber}`
  const filePath = path.join(starsDir, file)

  try {
    const code = fs.readFileSync(filePath, "utf-8")

    imports.push(`import ${componentName} from "${importPath}";`)
    starsArray.push(
      `  { componentExample: ${componentName}, code: \`${code.replace(/`/g, "\\`")}\` }`,
    )
  } catch (error) {
    console.error(`Failed to read ${filePath}:`, error)
  }
})

// Add example imports
exampleKeys.forEach((key) => {
  const componentName = key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
  exampleImports.push(
    `import ${componentName} from "@/examples/stars/docs/${key}";`,
  )
})

const newStarsContent = `
// Auto-generated file. Do not modify manually.

${imports.join("\n")}
${exampleImports.join("\n")}

type Star = {
  componentExample: React.ComponentType;
  code: string;
};

const STARS: Star[] = [
${starsArray.join(",\n")}
];

export const STARS_EXAMPLES = {
  ${exampleKeys
    .map((key) => {
      const componentName = key
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
      return `"${key}": ${componentName}`
    })
    .join(",\n  ")}
};

export default STARS;
`

fs.writeFileSync(starsFilePath, newStarsContent)

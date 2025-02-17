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

starFiles.forEach((file) => {
  const match = file.match(/s(\d+)\.tsx$/)
  if (!match) return

  const starNumber = match[1]
  const componentName = `Star${starNumber}`
  const importPath = `@/components/examples/stars/s${starNumber}`
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

const newStarsContent = `
// Auto-generated file. Do not modify manually.

${imports.join("\n")}

type Star = {
  componentExample: React.ComponentType;
  code: string;
};

const STARS: Star[] = [
${starsArray.join(",\n")}
];

export default STARS;
`

fs.writeFileSync(starsFilePath, newStarsContent)

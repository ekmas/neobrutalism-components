import fs from "fs"
import path from "path"

// Define paths
const chartExamplesDir = path.resolve(__dirname, "../examples/ui/chart")
const outputFilePath = path.resolve(__dirname, "../data/charts.ts")

// Function to read file content
function readFileContent(filePath: string): string {
  return fs.readFileSync(filePath, "utf8")
}

// Function to get component name from file path
function getComponentName(filePath: string): string {
  const fileName = path.basename(filePath, ".tsx")
  // Convert kebab-case to PascalCase
  return fileName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

// Function to process the file content
function processFileContent(content: string, componentName: string): string {
  // Replace the default export with a named export
  return content.replace(
    /export default function Component\(\)/,
    `export function ${componentName}()`,
  )
}

// Main function to generate charts.ts
function generateChartsTs() {
  try {
    // Find all chart example files
    const chartFiles = fs
      .readdirSync(chartExamplesDir)
      .filter((file) => file.endsWith(".tsx"))
      .sort()

    // Generate the content for charts.ts
    let chartsTsContent = `// This file is auto-generated. Do not edit manually.\n\n`

    // Add imports for each chart component
    chartFiles.forEach((file) => {
      const componentName = getComponentName(file)
      chartsTsContent += `import ${componentName} from "@/examples/ui/chart/${file.replace(".tsx", "")}";\n`
    })

    // Add the charts array
    chartsTsContent += `\nexport interface ChartExample {\n`
    chartsTsContent += `  component: React.ComponentType;\n`
    chartsTsContent += `  code: string;\n`
    chartsTsContent += `  name: string;\n`
    chartsTsContent += `}\n\n`

    chartsTsContent += `export const charts: ChartExample[] = [\n`

    // Add each chart to the array
    chartFiles.forEach((file, index) => {
      const filePath = path.join(chartExamplesDir, file)
      const componentName = getComponentName(file)
      const content = readFileContent(filePath)

      // Process the content to use named exports
      const processedContent = processFileContent(content, componentName)

      // Use JSON.stringify to properly escape all special characters
      const escapedContent = JSON.stringify(processedContent)

      chartsTsContent += `  {\n`
      chartsTsContent += `    component: ${componentName},\n`
      chartsTsContent += `    code: ${escapedContent},\n`
      chartsTsContent += `    name: "${componentName}",\n`
      chartsTsContent += `  }${index < chartFiles.length - 1 ? "," : ""}\n`
    })

    chartsTsContent += `];\n`

    // Write the file
    fs.writeFileSync(outputFilePath, chartsTsContent)

    console.log(`Successfully generated ${outputFilePath}`)
    console.log(`Processed ${chartFiles.length} chart examples`)
  } catch (error) {
    console.error("Error generating charts.ts:", error)
  }
}

// Run the script
generateChartsTs()

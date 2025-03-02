import fs from "fs"
import path from "path"

const scriptPath = __dirname
const docsPath = path.join(scriptPath, "..", "..")
const utilRegistryPath = path.join(docsPath, "..", "util-registry")

const componentsUiPath = path.join(docsPath, "src", "components", "ui")
const hooksPath = path.join(docsPath, "src", "hooks")
const registryJsonPath = path.join(docsPath, "registry.json")

const destinationComponentsUiPath = path.join(
  utilRegistryPath,
  "src",
  "components",
  "ui",
)
const destinationHooksPath = path.join(utilRegistryPath, "src", "hooks")
const destinationRegistryJsonPath = path.join(utilRegistryPath, "registry.json")

function copyDirectoryRecursive(src: string, dest: string) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`)
    return
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const items = fs.readdirSync(src)

  for (const item of items) {
    const srcItemPath = path.join(src, item)
    const destItemPath = path.join(dest, item)

    const isDirectory = fs.statSync(srcItemPath).isDirectory()

    if (isDirectory) {
      copyDirectoryRecursive(srcItemPath, destItemPath)
    } else {
      fs.copyFileSync(srcItemPath, destItemPath)
      console.log(`Copied file: ${srcItemPath} to ${destItemPath}`)
    }
  }
}

function copyAndModifyRegistry(src: string, dest: string) {
  try {
    const registryContent = fs.readFileSync(src, "utf-8")

    const modifiedContent = registryContent
      .replace(
        /https:\/\/neobrutalism.dev(\/[^\s"]*)?/g,
        "https://util.neobrutalism.dev$1",
      )
      .replace(/css-vars/g, "ui")
      .replace(/CSS Variables/g, "Utility Classes")

    fs.writeFileSync(dest, modifiedContent, "utf-8")
    console.log(`Copied and modified ${src} to ${dest}`)
  } catch (err) {
    console.error(`Error copying and modifying ${src} to ${dest}:`, err)
  }
}

function main() {
  copyDirectoryRecursive(componentsUiPath, destinationComponentsUiPath)
  copyDirectoryRecursive(hooksPath, destinationHooksPath)
  copyAndModifyRegistry(registryJsonPath, destinationRegistryJsonPath)
}

main()

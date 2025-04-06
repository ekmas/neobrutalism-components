import * as fs from "fs"
import * as path from "path"

import REGISTRY from "@/data/registry"

// Read the existing registry.json to preserve metadata
const registryPath = path.join(process.cwd(), "registry.json")
const existingRegistry = JSON.parse(fs.readFileSync(registryPath, "utf-8"))

// Update only the items array while preserving other fields
const updatedRegistry = {
  ...existingRegistry,
  items: REGISTRY,
}

// Convert to JSON string with proper formatting
const registryJson = JSON.stringify(updatedRegistry, null, 2)

// Write the updated JSON file
fs.writeFileSync(registryPath, registryJson)

console.log(`Registry JSON file updated at: ${registryPath}`)

import * as fs from "fs"
import * as path from "path"

const projectRoot = path.resolve(__dirname, "..")
const componentsDir = path.join(projectRoot, "components")
const hooksDir = path.join(projectRoot, "hooks")

function removeDir(dirPath: string) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(dirPath)
    console.log(`Removed directory: ${dirPath}`)
  } else {
    console.log(`Directory does not exist: ${dirPath}`)
  }
}

removeDir(componentsDir)
removeDir(hooksDir)

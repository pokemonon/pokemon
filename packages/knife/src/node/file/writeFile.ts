import * as path from 'path'
import fs from 'fs-extra'

export const writeFile = (filePath: string, content: string) => {
  fs.ensureDirSync(path.dirname(filePath))
  fs.writeFileSync(filePath, content)
}


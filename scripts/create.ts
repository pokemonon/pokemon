import * as fs from 'fs'
import { render, resolveRoot } from './utils'

const packageName = process.argv[2]

// 输入包名
if (!packageName) {
  console.error('please input package name!')
  process.exit(1)
}

// 判断是否重名
if (fs.existsSync(resolveRoot('packages', packageName))) {
  console.error('the package is exist!')
  process.exit(1)
}

render('scripts/template', `packages/${packageName}`, {
  packageName,
})

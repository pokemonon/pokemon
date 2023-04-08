import path from 'path'
import fs from 'fs-extra'
import type { ResolvePackageOptions } from './resolvePackage'
import { resolvePackage } from './resolvePackage'

/**
 * 获取依赖包信息
 * @param name
 * @param options
 * @returns
 */
export function getPackageInfoSync(name: string, options: ResolvePackageOptions = {}) {
  const packageJsonPath = resolvePackage(name, options)
  if (!packageJsonPath) { return }

  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  return {
    name,
    version: pkg.version,
    rootPath: path.dirname(packageJsonPath),
    packageJsonPath,
    packageJson: pkg,
  }
}

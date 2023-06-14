import type { ResolvePackageOptions } from './resolvePackage'
import { resolvePackage } from './resolvePackage'

/**
 * 判断依赖是否安装
 * @param name
 * @param options
 * @returns
 */
export function isPackageExists(name: string, options: ResolvePackageOptions = {}) {
  return !!resolvePackage(name, options)
}

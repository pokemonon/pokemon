export type ResolvePackageOptions = Parameters<NodeJS.RequireResolve>[1]

/**
 * 获取依赖的package.json路径
 * @param name
 * @param options
 * @returns
 */
export function resolvePackage(name: string, options: ResolvePackageOptions = {}) {
  try {
    return require.resolve(`${name}/package.json`, options)
  }
  catch (e) {
    return null
  }
}

# getPackageInfoSync
```ts
import type { ResolvePackageOptions } from './resolvePackage'
/**
 * 获取依赖包信息
 * @param name
 * @param options
 * @returns
 */
export declare function getPackageInfoSync(name: string, options?: ResolvePackageOptions): {
  name: string
  version: any
  rootPath: string
  packageJsonPath: string
  packageJson: any
} | undefined

```

## Test
```ts
import path from 'path'
import { getPackageInfoSync } from '@pokemonon/knife/node'
import { describe, expect, test } from 'vitest'

describe('getPackageInfoSync', () => {
  test('get vitest package.json', () => {
    const pkgInfo = getPackageInfoSync('vitest')

    const vitestPkgPath = require.resolve('vitest/package.json')
    const vitestPkg = require(vitestPkgPath)
    const vitestInfo = {
      name: 'vitest',
      version: vitestPkg.version,
      rootPath: path.dirname(vitestPkgPath),
      packageJsonPath: vitestPkgPath,
      packageJson: vitestPkg
    }

    expect(pkgInfo).toEqual(vitestInfo)
  })
})
```

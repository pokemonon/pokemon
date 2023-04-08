# loadPackageJson
```ts
/**
 * 加载package.json文件
 * @param cwd
 * @returns
 */
export declare function loadPackageJSON(cwd?: string): Promise<Record<string, any> | null>

```

## Test
```ts
import { loadPackageJSON } from '@pokemonon/knife/node'
import { describe, expect, test } from 'vitest'

describe('loadPackageJson', () => {
  test('get local package.json', async () => {
    expect(await loadPackageJSON()).toEqual(require('../../../package.json'))
  })
})
```

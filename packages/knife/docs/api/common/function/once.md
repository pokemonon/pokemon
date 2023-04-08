# once
```ts
import type { Fn } from '../../types'
/**
 * 确保函数只执行一次
 * @param {T} fn
 * @returns {ReturnType<T>}
 */
export declare const once: <T extends Fn<any[], any>>(fn: T) => {
  (this: any, ...args: any[]): ReturnType<T>
  flag: boolean
}

```

## Test
```ts
import { describe, test } from 'vitest'

describe('once', () => {
  test('once', () => {

  })
})
```

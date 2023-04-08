# memoize
```ts
import type { Fn } from '../../types'
export declare const memoize: {
  <T extends Fn<any[], any>>(fn: T, resolver?: (...args: any[]) => any): T
  Cache: MapConstructor
}

```

## Test
```ts
import { describe, test } from 'vitest'

describe('memoize', () => {
  test('memoize', () => {

  })
})
```

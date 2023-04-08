# isType
```ts
/**
 * 对象类型判断
 * @category Base
 */
export declare const isType: <T>(type: string) => <K = T>(val: any) => val is K

```

## Test
```ts
import { describe, expect, test } from 'vitest'
import { isType } from '@pokemonon/knife'

describe('isType', () => {
  test('check type of Array', () => {
    const isArray = isType('Array')
    expect(isArray([])).toBe(true)
    expect(isArray({})).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray({ length: 0 })).toBe(false)
  })
})
```

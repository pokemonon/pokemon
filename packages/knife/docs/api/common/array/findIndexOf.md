# findIndexOf
```ts
/**
 * 查找对象数组key对应的value
 * @category Array
 * @param {Array<Record<any, any>>} arr 查找对象
 * @param {any} key 目标字段
 * @param {any} value 目标值
 * @returns {number}
 */
export declare function findIndexOf(arr: any[], value: any): number
export declare function findIndexOf(arr: any[], key: any, value: any): number

```

## Test
```ts
import { describe, expect, test } from 'vitest'
import { findIndexOf } from '@pokemonon/knife'

describe('findIndexOf', () => {
  test('compare value with param of arr', () => {
    expect(findIndexOf([0, 1, 2, 3], 2)).toBe(2)
  })

  test('compare value with key to param of arr', () => {
    expect(findIndexOf([{ name: 'arron' }, { name: 'alon' }], 'name', 'arron')).toBe(0)
  })
})
```

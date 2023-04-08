# createAssign
```ts
import type { Fn } from '../../types'
/**
 * todo 不同类型及深度拷贝
 * 避免引用,使用的对象复制
 * @category Object
 * @param target
 * @returns {T}
 */
declare type Customizer = (objVal?: any, srcVal?: any, key?: any, obj?: any, src?: any) => boolean
export declare const createAssign: <T extends Fn<any[], string[]>>(getKeys: T) => {
  <T_1, S1>(obj: T_1, src1: S1, customizer?: Customizer): T_1 & S1
  <T_2, S1_1, S2>(obj: T_2, src1: S1_1, src2: S2, customizer?: Customizer): T_2 & S1_1 & S2
  <T_3, S1_2, S2_1, S3>(obj: T_3, src1: S1_2, src2: S2_1, src3: S3, customizer?: Customizer): T_3 & S1_2 & S2_1 & S3
  <T_4, S1_3, S2_2, S3_1, S4>(obj: T_4, src1: S1_3, src2: S2_2, src3: S3_1, src4: S4, customizer?: Customizer): T_4 & S1_3 & S2_2 & S3_1 & S4
  <T_5, S1_4, S2_3, S3_2, S4_1, S5>(obj: T_5, src1: S1_4, src2: S2_3, src3: S3_2, src4: S4_1, src5: S5, customizer?: Customizer): T_5 & S1_4 & S2_3 & S3_2 & S4_1 & S5
  (...args: any[]): any
}
export {}

```

## Test
```ts
import { describe, test } from 'vitest'

describe('createAssign', () => {
  test('createAssign', () => {

  })
})
```

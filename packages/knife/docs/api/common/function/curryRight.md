# curryRight
```ts
import type { FN_PLACEHOLDER } from '../const/FN_PLACEHOLDER'
import type { Fn } from '../../types'
/**
 * 返回T的子集 从最后一个元素开始
 * @param T 参数数组
 */
export declare type CurryRightPartialArr<T> = T extends [infer A, ...infer As] ? T | CurryRightPartialArr<As> : [
]
/**
 * 返回可能的参数组合
 * @param T 参数的数组
 * @param P 占位符
 */
export declare type CurryRightPlaceholderArr<T, P = FN_PLACEHOLDER> = T extends [infer A1] ? T : T extends [...infer As, infer A1] ? [
  ...CurryRightPlaceholderArr<As, P>,
  A1
] | [...CurryRightPlaceholderArr<As, P>, P] : [
]
/**
 * 剩余需要传递的参数
 * @param Expected 需要的参数
 * @param Provided 已经传递的参数
 */
export declare type CurryRightRemainingParameters<Expected extends any[], Provided extends any[], P = FN_PLACEHOLDER> = Expected extends [...infer EX, infer E1] ? Provided extends [...infer PX, infer P1] ? P1 extends P ? [
  ...CurryRightRemainingParameters<EX, PX, P>,
  E1
] : CurryRightRemainingParameters<EX, PX, P> : Expected : [
]
export declare type CurryRightCurriedPlaceholderArgs<T> = CurryRightPlaceholderArr<CurryRightPartialArr<T>>
export declare type CurryRightCurriedFunction<Expected extends any[], Provided extends any[], R = any> = <Exp extends CurryRightRemainingParameters<Expected, Provided>, T extends CurryRightCurriedPlaceholderArgs<Exp>>(...args: T) => T extends Exp ? R : CurryRightCurriedFunction<Exp, T, R>
export interface CurryRight {
  <F extends Fn>(fn: F): CurryRightCurriedFunction<Parameters<F>, [], ReturnType<F>>
  <F extends Fn>(fn: F, arity: number): CurryRightCurriedFunction<Parameters<F>, [], ReturnType<F>>
  placeholder: FN_PLACEHOLDER
}
/**
 * @category Function
 * @param {function} fn
 * @param {number} arity
 * @returns {function}
 */
export declare const curryRight: CurryRight

```

## Test
```ts
import { describe, test } from 'vitest'

describe('curryRight', () => {
  test('curryRight', () => {

  })
})
```

# curry
```ts
import type { FN_PLACEHOLDER } from '../const/FN_PLACEHOLDER'
import type { Fn } from '../../types'
/**
 * 返回T的子集 从最后一个元素开始
 * @param T 参数数组
 */
export declare type CurryPartialArr<T> = T extends [...infer As, infer A] ? T | CurryPartialArr<As> : [
]
/**
 * 返回可能的参数组合
 * @param T 参数的数组
 * @param P 占位符
 */
export declare type CurryPlaceholderArr<T, P = FN_PLACEHOLDER> = T extends [infer A1] ? T : T extends [infer A1, ...infer As] ? [
  A1,
  ...CurryPlaceholderArr<As, P>
] | [P, ...CurryPlaceholderArr<As, P>] : [
]
/**
 * 剩余需要传递的参数
 * @param Expected 需要的参数
 * @param Provided 已经传递的参数
 */
export declare type CurryRemainingParameters<Expected extends any[], Provided extends any[], P = FN_PLACEHOLDER> = Expected extends [infer E1, ...infer EX] ? Provided extends [infer P1, ...infer PX] ? P1 extends FN_PLACEHOLDER ? [
  E1,
  ...CurryRemainingParameters<EX, PX, P>
] : CurryRemainingParameters<EX, PX, P> : Expected : [
]
export declare type CurryCurriedPlaceholderArgs<T> = CurryPlaceholderArr<CurryPartialArr<T>>
export declare type CurryCurriedFunction<Expected extends any[], Provided extends any[], R = any> = <Exp extends CurryRemainingParameters<Expected, Provided>, T extends CurryCurriedPlaceholderArgs<Exp>>(...args: T) => T extends Exp ? R : CurryCurriedFunction<Exp, T, R>
export interface Curry {
  <F extends Fn>(fn: F): CurryCurriedFunction<Parameters<F>, [], ReturnType<F>>
  <Params extends any[], F extends Fn = Fn>(fn: F, arity: number): CurryCurriedFunction<Params, [], ReturnType<F>>
  placeholder: FN_PLACEHOLDER
}
/**
 * @category Function
 * @param {function} fn
 * @param {number} arity
 * @returns {function}
 */
export declare const curry: Curry

```

## Test
```ts
import { describe, test } from 'vitest'

describe('curry', () => {
  test('curry', () => {

  })
})
```

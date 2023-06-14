import type { Fn } from '../../types'
import { FN_PLACEHOLDER, isFnPlaceholder } from '../const/FN_PLACEHOLDER'
import { filter } from '../array/filter'
import type { CurryRightPartialArr, CurryRightPlaceholderArr, CurryRightRemainingParameters } from './curryRight'
import { curryRight } from './curryRight'

// todo 类型
interface PartialRight {
  <F extends Fn, Params extends Parameters<F>, R = ReturnType<Fn>, A extends any[] = CurryRightPlaceholderArr<CurryRightPartialArr<CurryRightRemainingParameters<Params, []>>>>(fn: F, ...args: A): Fn<CurryRightRemainingParameters<Params, A>, R>
  <Params extends any[], R = any, A extends any[] = CurryRightPlaceholderArr<CurryRightPartialArr<CurryRightRemainingParameters<Params, []>>>>(fn, ...args: A): Fn<CurryRightRemainingParameters<Params, A>, R>
  placeholder: FN_PLACEHOLDER
}

export const partialRight: PartialRight = (fn, ...args) => {
  return curryRight(fn, filter(args, v => !isFnPlaceholder(v)).length + 1)(...args as any)
}

partialRight.placeholder = new FN_PLACEHOLDER()

// function log(name: string, age: number, flag: boolean) {
//     // eslint-disable-next-line
//     console.log(...arguments)
// }
// const l = partialRight(log, 18, false);
// const p = l('name');

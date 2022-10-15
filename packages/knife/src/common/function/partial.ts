import { Fn } from '../../types';
import { curry, CurryRemainingParameters, CurryPlaceholderArr, CurryPartialArr } from './curry';
import { FN_PLACEHOLDER, isFnPlaceholder } from '../const/FN_PLACEHOLDER';
import { filter } from '../array/filter';

// todo 类型🤔
type PartialFn = {
    <F extends Fn, Params extends Parameters<F>, R extends ReturnType<F>, A extends any[] = CurryPlaceholderArr<CurryPartialArr<CurryRemainingParameters<Params, []>>>>(fn: F, ...args: A): Fn<CurryRemainingParameters<Params, A>, R>
    <Params extends any[], R = any, A extends any[] = CurryPlaceholderArr<CurryPartialArr<CurryRemainingParameters<Params, []>>>>(fn, ...args: A): Fn<CurryRemainingParameters<Params, A>, R>
    placeholder: FN_PLACEHOLDER
}

export const partial: PartialFn = (fn, ...args) => {
    return curry(fn, filter(args, v => !isFnPlaceholder(v)).length + 1)(...args as any);
};

partial.placeholder = new FN_PLACEHOLDER();



// function log(name: string, age: number) {
//     // eslint-disable-next-line
//     console.log(...arguments)
// }

// const p = partial(log, 'hua');
// const r = p(1);
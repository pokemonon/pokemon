import { Fn } from '../../../types/common';
import curry, { RemainingParameters, PlaceholderArr, PartialArr } from './curry';
import FN_PLACEHOLDER, { isFnPlaceholder } from '../const/FN_PLACEHOLDER';
import filter from '../array/filter';

// todo 类型🤔
type PartialFn = {
    <F extends Fn, Params extends Parameters<F>, R extends ReturnType<Fn>, A extends any[] = PlaceholderArr<PartialArr<RemainingParameters<Params, []>>>>(fn: F, ...args: A): Fn<RemainingParameters<Params, A>, R>
    <Params extends any[], R = any, A extends any[] = PlaceholderArr<PartialArr<RemainingParameters<Params, []>>>>(fn, ...args: A): Fn<RemainingParameters<Params, A>, R>
    placeholder: FN_PLACEHOLDER
}

const partial: PartialFn = (fn, ...args) => {
    return curry(fn, filter(args, v => !isFnPlaceholder(v)).length + 1)(...args as any);
};

partial.placeholder = new FN_PLACEHOLDER();

export default partial;

// function log(name: string, age: number) {
//     // eslint-disable-next-line
//     console.log(...arguments)
// }

// const p = partial(log, 'hua');
// const r = p(1);
import FN_PLACEHOLDER, { isFnPlaceholder } from '../const/FN_PLACEHOLDER';
import { Fn } from '../../../types/common';

/**
 * 返回T的子集 从最后一个元素开始
 * @param T 参数数组
 */
// eslint-disable-next-line
export type PartialArr<T> = T extends [...infer As, infer A] ?
    T | PartialArr<As> :
    [];

/**
 * 返回可能的参数组合
 * @param T 参数的数组
 * @param P 占位符
 */
// eslint-disable-next-line
export type PlaceholderArr<T, P = FN_PLACEHOLDER> = T extends [infer A1] ?
    T : // 最后一位不能是占位符
    T extends [infer A1, ...infer As] ?
        [A1, ...PlaceholderArr<As, P>] | [P, ...PlaceholderArr<As, P>] :
        [];

/**
 * 剩余需要传递的参数
 * @param Expected 需要的参数
 * @param Provided 已经传递的参数 
 */
export type RemainingParameters<Expected extends any[], Provided extends any[], P = FN_PLACEHOLDER> =
    Expected extends [infer E1, ...infer EX] ?
        Provided extends [infer P1, ...infer PX] ?
            P1 extends FN_PLACEHOLDER ?
                [E1, ...RemainingParameters<EX, PX, P>] :
                RemainingParameters<EX, PX, P> :
            Expected :
        [];

export type CurriedPlaceholderArgs<T> = PlaceholderArr<PartialArr<T>>
export type CurriedFunction<Expected extends any[], Provided extends any[], R = any> =
    <
        Exp extends RemainingParameters<Expected, Provided>,
        T extends CurriedPlaceholderArgs<Exp>,
    >(...args: T) =>
    T extends Exp ? R : CurriedFunction<Exp, T, R>
export interface Curry {
    <F extends Fn>(fn: F): CurriedFunction<Parameters<F>, [], ReturnType<F>>;
    <Params extends any[], F extends Fn = Fn>(fn: F, arity: number): CurriedFunction<Params, [], ReturnType<F>>;
    placeholder: FN_PLACEHOLDER;
}

/**
 * @category Function
 * @param {function} fn
 * @param {number} arity
 * @returns {function}
 */
const curry: Curry = (fn, arity = fn.length) => {
    return function curriedFn(...args: any[]) {
        if (args.length >= arity && args.every(i => !isFnPlaceholder(i))) {
            return fn.apply(this, args);
        }
        return (...nargs) => {
            // 占位符处理
            const argsLen = args.length;
            for (let i = 0; i < argsLen && nargs.length; i++) {
                const v = args[i];
                if (isFnPlaceholder(v)) {
                    args.splice(i, 1, nargs.shift());
                }
            }
            return curriedFn(...args, ...nargs);
        }; 
    };
};
curry.placeholder = new FN_PLACEHOLDER();

export default curry;

// const log = (name: string, age: number, flag: boolean) => {
//     console.log(name, age, flag);
//     return (str: string) => {
//         //
//     };
// };

// const clog = curry(log);
// const clog1 = clog('huahua');
// const clog2 = clog1(curry.placeholder, false);
// const clog3 = clog2(1);
// const clog4 = clog3('hello world');

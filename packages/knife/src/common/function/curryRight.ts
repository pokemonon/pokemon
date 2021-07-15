import FN_PLACEHOLDER from '../const/FN_PLACEHOLDER';
import { Fn } from '../../../types/common';

/**
 * 返回T的子集 从最后一个元素开始
 * @param T 参数数组
 */
// eslint-disable-next-line
export type PartialArr<T> = T extends [infer A, ...infer As] ?
    T | PartialArr<As> :
    [];

/**
 * 返回可能的参数组合
 * @param T 参数的数组
 * @param P 占位符
 */
// eslint-disable-next-line
export type PlaceholderArr<T, P = FN_PLACEHOLDER> = T extends [infer A1] ?
    T : // 第一位不能是占位符
    T extends [...infer As, infer A1] ?
        [...PlaceholderArr<As, P>, A1] | [...PlaceholderArr<As, P>, P] :
        [];


/**
 * 剩余需要传递的参数
 * @param Expected 需要的参数
 * @param Provided 已经传递的参数 
 */
export type RemainingParameters<Expected extends any[], Provided extends any[], P = FN_PLACEHOLDER> =
    Expected extends [...infer EX, infer E1] ?
        Provided extends [...infer PX, infer P1] ?
            P1 extends P ?
                [...RemainingParameters<EX, PX, P>, E1] :
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
export interface CurryRight {
    <F extends Fn>(fn: F): CurriedFunction<Parameters<F>, [], ReturnType<F>>;
    <F extends Fn>(fn: F, arity: number): CurriedFunction<Parameters<F>, [], ReturnType<F>>;
    placeholder: FN_PLACEHOLDER;
}
/**
 * @category Function
 * @param {function} fn
 * @param {number} arity
 * @returns {function}
 */
const curryRight: CurryRight = (fn, arity = fn.length) => {
    return function curriedFn(...args: any[]) {
        if (args.length >= arity && args.every(i => i !== FN_PLACEHOLDER)) {
            return fn.apply(this, args);
        }
        return (...nargs) => {
            // 占位符处理
            const argsLen = args.length;
            for (let i = argsLen - 1; i >= 0 && nargs.length; i--) {
                const v = args[i];
                if (v === FN_PLACEHOLDER) {
                    args.splice(i, 1, nargs.pop());
                }
            }
            return curriedFn(...nargs, ...args);
        }; 
    };
};
curryRight.placeholder = new FN_PLACEHOLDER();

export default curryRight;

// const log = (name: string, age: number, flag: boolean) => {
//     console.log(name, age, flag);
//     return (str: string) => {
//         //
//     };
// };

// const clog = curryRight(log);
// const clog1 = clog(false);
// const clog2 = clog1('', curryRight.placeholder);
// const clog3 = clog2(1);
// clog3('hello world');
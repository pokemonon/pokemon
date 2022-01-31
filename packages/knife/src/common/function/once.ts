import { Fn } from '../../../types/common';

/**
 * 确保函数只执行一次
 * @param {T} fn 
 * @returns {ReturnType<T>}
 */
const once = (<T extends Fn>(fn: T) => {
    let result: ReturnType<T>;
    const returnFn = function() {
        if (!returnFn.flag) {
            returnFn.flag = true;
            // eslint-disable-next-line
            result = fn.apply(this, arguments);
        }
        return result;
    };
    returnFn.flag = false;
    return returnFn;
});

export default once;

// function a() {
//     console.log('exec')
//     return new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
// }

// const b = once(a)

// b().then(() => {
//     console.log('a')
// })
// b().then(() => {
//     console.log('b')
// })
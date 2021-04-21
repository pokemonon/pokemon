import { Fn } from '../../../types/common'

/**
 * 确保函数只执行一次
 * @param {T} fn 
 * @returns {ReturnType<T>}
 */
const once = <T extends Fn>(fn: T) => {
    let flag = false
    let result: ReturnType<T>;
    return function() {
        if (!flag) {
            flag = true
            result = fn.apply(this, arguments)
        }
        return result
    }
}

export default once

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
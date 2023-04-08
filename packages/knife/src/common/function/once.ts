import type { Fn } from '../../types'

/**
 * 确保函数只执行一次
 * @param {T} fn
 * @returns {ReturnType<T>}
 */
export const once = <T extends Fn>(fn: T) => {
  let result: ReturnType<T>
  const returnFn = function (this, ...args) {
    if (!returnFn.flag) {
      returnFn.flag = true
      // eslint-disable-next-line
            result = fn.apply(this, args);
    }
    return result
  }
  returnFn.flag = false
  return returnFn
}

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

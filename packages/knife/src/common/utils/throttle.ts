export interface ThrottleOptions {
  immediate: boolean // 是否立即执行
}

/**
 * 节流
 * @category Utils
 * @param wait
 * @param fn
 * @param immediate 是否立即执行
 */
export const throttle = (fn, wait: number, {
  immediate = false,
}: ThrottleOptions) => {
  let timer
  let firstInvoke = immediate

  return function (this, ...args) {
    const next = () => {
      fn.apply(this, args)
      timer = null
    }

    // 如果是第一次触发，直接执行
    if (firstInvoke) {
      firstInvoke = false
      next()
    }

    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.apply(this, args)
      }, wait)
    }
  }
}


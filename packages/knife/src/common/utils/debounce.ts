/**
 * 防抖
 * @category Utils
 * @param delay 延迟时间
 * @param fn 回调函数
 */
export const debounce = (fn, delay: number) => {
  let timer
  return function (this, ...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}


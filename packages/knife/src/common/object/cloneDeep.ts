import { isArray } from '../base/isArray'
import { each } from './each'

/**
 * todo 不同类型及深度拷贝
 * 避免引用,使用的对象复制
 * @category Object
 * @param target
 * @returns {T}
 */
export const cloneDeep = <T>(target: T): T => {
  if (typeof target !== 'object') {
    return target
  }
  if (isArray(target)) {
    const arr = [] as any
    for (let i = 0; i < target.length; i++) {
      arr[i] = cloneDeep(target[i])
    }
    return arr
  }
  const obj = {} as T
  each(target, (v, k) => {
    obj[k] = cloneDeep(v)
  })
  return obj
}


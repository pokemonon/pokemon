import { isArrLike } from '../array/isArrLike'
import type { IterableValue } from '../../types'
import { isIterable } from './isIterable'

/**
 * 遍历对象的值
 * @category Object
 */
export function each<T extends Iterable<any>>(obj: T, iterator: (v: IterableValue<T>, k: number, o: T) => any): void
export function each<T extends ArrayLike<any>, K extends Exclude<keyof T, 'length'>>(obj: T, iterator: (v: T[K], k: number, o: T) => any): void
export function each<T, K extends keyof T, V = T[K]>(obj: T, iterator: (v: V, k: K, o: T) => any): void
export function each<T>(obj: ArrayLike<T> | Iterable<T> | Object, iterator) {
  if (isArrLike(obj) || isIterable(obj)) {
    Array.from(obj).forEach(iterator)
  }
  else {
    Object.keys(obj).forEach((k) => {
      const v = obj[k]
      iterator(v, k, obj)
    })
  }
}


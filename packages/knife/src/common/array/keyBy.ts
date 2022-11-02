import { isString } from '../base/isString'

/**
 * map the array element's property value to array element
 * @category Array
 * @param o array
 * @param k array element's property name
 * @returns {boolean}
 */
export function keyBy<T extends any[], K extends keyof T[number], V extends T[number]>(o: T, k: K): Record<V[K], V>
/**
 * custom map
 * @param o
 * @param iter the function receive array element and index
 */
export function keyBy<T extends any[], V extends T[number]>(o: T, iter: (v: V) => any): Record<any, V>
export function keyBy<T extends any[], K extends keyof T[number], V extends T[number]>(o: T, k: K | ((v: V) => any)) {
  const iter: any = isString(k) ? (v: V, _idx: number) => v[k] : k
  return o.reduce((res, item, idx) => {
    res[iter(item, idx)] = item
    return res
  }, {})
}

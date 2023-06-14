import { flatten } from './flatten'

/**
 * 数组全部铺平
 * @category Array
 * @param arr
 * @returns {T[]}
 */
export const flattenDeep = <T>(arr: T[]) => flatten(arr, true)


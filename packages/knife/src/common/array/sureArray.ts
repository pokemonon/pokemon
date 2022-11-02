import type { ItemOrArray } from '../../types'
import { isArray } from '../base/isArray'

/**
 * transform `v` to array
 * @param v
 * @returns
 */
export const sureArray = <T>(v: ItemOrArray<T>) => isArray(v) ? v : [v]


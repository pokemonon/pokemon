import { isType } from './isType'

/**
 * 对象类型判断
 * @category Base
 */
export const isArray = isType<unknown[]>('Array')


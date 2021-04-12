import isType from './isType';

/**
 * 对象类型判断
 * @category Base
 */
const isArray = isType<unknown[]>('Array');

export default isArray;
/**
 * 对象类型判断
 * @category Base
 */
export const isType = <T>(type: string) => <K = T>(val): val is K => Object.prototype.toString.call(val) === `[object ${type}]`;



/**
 * 对象类型判断
 * @category Base
 */
const isType = <T>(type: string) => (val): val is T => Object.prototype.toString.call(val) === `[object ${type}]`;

export default isType;

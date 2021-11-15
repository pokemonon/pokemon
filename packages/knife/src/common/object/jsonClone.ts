/**
 * 是否是可遍历对象
 * @category Object
 */
const jsonClone = <K>(val: K): K => JSON.parse(JSON.stringify(val));

export default jsonClone;
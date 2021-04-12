/**
 * 查找对象数组key对应的value
 * @category Array
 * @param {Array<Record<any, any>>} arr 查找对象
 * @param {any} key 目标字段
 * @param {any} value 目标值
 * @returns {number}
 */
const arrIndexOf = (arr: Array<Record<any, any>>, key: any, value: any) => arr.findIndex(i => i && i[key] === value);

export default arrIndexOf;

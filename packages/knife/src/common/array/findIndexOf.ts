/**
 * 查找对象数组key对应的value
 * @category Array
 * @param {Array<Record<any, any>>} arr 查找对象
 * @param {any} key 目标字段
 * @param {any} value 目标值
 * @returns {number}
 */
export function findIndexOf(arr: any[], value): number
export function findIndexOf(arr: any[], key, value): number
export function findIndexOf(arr: any[], ...args: any[]) {
  if (args.length === 2) {
    const [key, value] = args
    return arr.findIndex(i => i && i[key] === value)
  }
  return arr.findIndex(i => i === args[0])
}

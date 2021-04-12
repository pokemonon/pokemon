/**
 * 获取对象深路径下的值
 * @category Object
 * @param data 目标对象
 * @param prop 属性路径
 */
const getDeepProp = (data, prop: string) => prop.split('.').reduce((d, k) => d && d[k], data);

export default getDeepProp;
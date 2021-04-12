/**
 * 设置对象深路径下的值
 * @category Object
 * @param data 目标对象
 * @param prop 属性路径
 */
const setDeepProp = (data, prop: string, val: any) => {
    const keys = prop.split('.');
    const kLen = keys.length;
    let t = data;
    keys.forEach((k, i) => {
        if (i === kLen - 1) {
            t[k] = val;
        } else {
            t = t[k];
        }
    });
};

export default setDeepProp;
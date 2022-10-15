/**
 * 从对象中提取属性
 * @category Object
 * @param data
 * @param props
 */
export const pick = <D extends {}, T extends keyof D>(data: D, props: T[]) => props.reduce((result, prop) => {
    result[prop] = data[prop];
    return result;
}, {} as Pick<D, T>);



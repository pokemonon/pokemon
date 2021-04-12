/**
 * 从对象中剔除某些属性
 * @category Object
 * @param data
 * @param props
 */
const omit = <D extends {}, T extends keyof D>(data: D, props: T[]): Omit<D, T> => {
    return Reflect.ownKeys(data).reduce((result, prop) => {
        !props.includes(prop as T) && (result[prop] = data[prop]);
        return result;
    }, {} as Omit<D, T>);
};

export default omit;

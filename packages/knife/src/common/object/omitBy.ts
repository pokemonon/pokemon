/**
 *
 * @category Object
 * @param data
 * @param fn
 */
const omitBy = <D extends {}, T extends keyof D>(data: D, fn: (val: D[T], prop: T) => boolean): Partial<D> => {
    return Reflect.ownKeys(data).reduce((result, prop) => {
        !fn(data[prop], prop as T) && (result[prop] = data[prop]);
        return result;
    }, {});
};

export default omitBy;
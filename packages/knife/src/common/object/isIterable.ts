/**
 * 是否是可遍历对象
 * @category Object
 */
export const isIterable = <T>(o): o is Iterable<T> => {
    return o && Symbol.iterator in o;
};


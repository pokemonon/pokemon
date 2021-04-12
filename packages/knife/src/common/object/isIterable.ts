/**
 * 是否是可遍历对象
 * @category Object
 */
const isIterable = <T>(o): o is Iterable<T> => {
    return o && Symbol.iterator in o;
};

export default isIterable;
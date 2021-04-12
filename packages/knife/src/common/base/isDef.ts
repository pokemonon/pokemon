/**
 * 非Nullable（undefined null）
 * @category Base
 */
const isDef = <T>(val: T): val is NonNullable<T> => {
    return val !== undefined && val !== null;
};

export default isDef;
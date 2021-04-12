/**
 * 判断对象是否是（类）数组
 * @category Array
 * @param o 
 * @returns {boolean} 
 */
const isArrLike = <T>(o): o is ArrayLike<T> => {
    return o &&
        typeof o === 'object' &&
        o.length >= 0 &&
        o.length <= 2**53 - 1;
};

export default isArrLike;

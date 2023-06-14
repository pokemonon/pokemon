/**
 * check if the value is array or array like object
 * @category Array
 * @param o
 * @returns {boolean}
 */
export const isArrLike = <T>(o): o is ArrayLike<T> => {
  return o
    && typeof o === 'object'
    && o.length >= 0
    && o.length <= 2 ** 53 - 1
}


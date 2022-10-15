/**
 * 是否是空对象
 * @category Object
 * @param obj
 * @return {boolean}
 */
export const isEmptyObject = (obj: Object): boolean => {
    return !Object.keys(obj).length;
};


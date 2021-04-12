/**
 * 是否是空对象
 * @category Object
 * @param obj
 * @return {boolean}
 */
const isEmptyObject = (obj: Object): boolean => {
    return !Object.keys(obj).length;
};

export default isEmptyObject;
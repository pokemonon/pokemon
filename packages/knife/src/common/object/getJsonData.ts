/**
 * json字符串 -> 对象
 * @category Object
 * @param val 待转化
 * @param result 默认值
 */
export const getJsonData = (val, result = {}) => {
    if (!val) {
        return result;
    }
    try {
        return JSON.parse(val);
    } catch (e) {
        return result;
    }
};


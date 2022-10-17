/**
 * json是否相等
 * @category Object
 */
export const ifJsonEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};


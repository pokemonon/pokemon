/**
 * json是否相等
 * @category Object
 */
const ifJsonEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};

export default ifJsonEqual;
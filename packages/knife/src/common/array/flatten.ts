import isArray from '../base/isArray';

/**
 * 数组向上展开
 * @category Array
 * @param arr
 * @param depth number: 展开的层级; true: 全展开;
 * @returns {any[]}
 */
const flatten = <T>(arr: T[], depth: number | true = 1) => {
    let hasArr = true;
    let result = arr;
    while (depth === true ? hasArr : depth && hasArr) {
        depth === true || depth--;
        // eslint-disable-next-line no-loop-func
        result = result.reduce((list, i) => {
            if (isArray(i)) {
                hasArr = i.some(item => isArray(item));
                list.push(...i);
            } else {
                list.push(i);
            }
            return list;
        }, []);
    }
    return result;
};

export default flatten;
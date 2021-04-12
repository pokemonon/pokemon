/**
 * 分组
 * @category Array
 * @param arr
 * @param size
 */
const chunk = (arr: any[], size: number) => {
    const result: any[] = [];

    arr = [...arr];
    while (arr.length) {
        const group = arr.splice(0, size);
        result.push(group);
    }
    return result;
};

export default chunk;
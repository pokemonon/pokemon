import each from './each';

/**
 * todo 不同类型及深度拷贝
 * 避免引用,使用的对象复制
 * @category Object
 * @param target 
 * @returns {T}
 */
const cloneDeep = <T>(target: T) => {
    if (typeof target !== 'object') {
        return target;
    }
    if (Array.isArray(target)) {
        const arr: any[] = [];
        for (let i = 0; i < target.length; i++) {
            arr[i] = cloneDeep(target[i]);
        }
        return arr;
    }
    const obj = {};
    each(target, (v, k) => {
        obj[k] = cloneDeep(v);
    });
    return obj;
};

export default cloneDeep;

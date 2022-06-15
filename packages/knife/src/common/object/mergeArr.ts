import createAssigner from './createAssigner';
import baseMerge from '../internal/baseMerge';
import getKeys from './getKeys';
import isArray from '../base/isArray';

/**
 * 遍历对象的值, 数组会被合并
 * @category Object
 * @param object
 * @param source1
 * @param source2
 * @param ...
 * @param customizer
 */
const mergeArr = createAssigner(baseMerge(getKeys, (v1, v2) => {
    if (isArray(v1) && isArray(v2)) {
        return [...v1, ...v2];
    }
}));

export default mergeArr;

// const obj = {
//     info: {
//         name: 'huahua'
//     },
//     list: [
//         { id: 1 }
//     ]
// };
// const src1 = {
//     info: 1
// };
// const src2 = {
//     list: [
//         { name: '' },
//         1
//     ]
// };
// mergeArr(obj, src1, src2);

// console.log(obj);
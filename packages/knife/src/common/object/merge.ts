import { baseMerge } from '../internal/baseMerge'
import { createAssigner } from './createAssigner'
import { getKeys } from './getKeys'

/**
 * 遍历对象的值
 * @category Object
 * @param object
 * @param source1
 * @param source2
 * @param ...
 * @param customizer
 */
export const merge = createAssigner(baseMerge(getKeys) as any)

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
// merge(obj, src1, src2);

// console.log(obj);

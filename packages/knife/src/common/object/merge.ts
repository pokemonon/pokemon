import createAssigner from './createAssigner';
import baseMerge from '../internal/baseMerge';
import getKeys from './getKeys';

const merge = createAssigner(baseMerge(getKeys));

export default merge;

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
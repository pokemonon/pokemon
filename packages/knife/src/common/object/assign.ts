// import createAssign from './createAssign';
// import getKeys from './getKeys';

// export export const assign = createAssign(getKeys);

//

// import each from '../object/each';
import { assigner } from '../internal/assigner'
import { createAssigner } from './createAssigner'
import { getKeys } from './getKeys'

export const assign = createAssigner(assigner(getKeys))

// class Person {}
// // eslint-disable-next-line
// // @ts-ignore
// Person.prototype.prop = 18;

// const obj = {
//     name: 'hua'
// };
// const src1 = {
//     name: 'wei',
//     age: 18
// };
// const src2 = {
//     city: 'hz'
// };
// const p = new Person();
// assign(obj, src1, src2, p, v => !v);

// console.log(obj);

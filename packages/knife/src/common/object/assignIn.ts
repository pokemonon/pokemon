// import createAssign from './createAssign';
// import getAllKeys from './getAllKeys';

// export export const assignIn = createAssign(getAllKeys);

//
import { assigner } from '../internal/assigner'
import { createAssigner } from './createAssigner'
import { getAllKeys } from './getAllKeys'

export const assignIn = createAssigner(assigner(getAllKeys))

// class Person {}
// // eslint-disable-next-line
// // @ts-ignore
// Person.prototype.prop = 18;

// const obj = {
//     name: 'huahua'
// };
// const p = new Person();

// console.log(assignIn(obj, p));

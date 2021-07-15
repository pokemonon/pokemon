// import createAssign from './createAssign';
// import getKeys from './getKeys';

// const assign = createAssign(getKeys);

// export default assign;

// import each from '../object/each';
import createAssigner from './createAssigner';
import assigner from '../internal/assigner';
import getKeys from './getKeys';

const assign = createAssigner(assigner(getKeys));

export default assign;

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
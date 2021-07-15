// import createAssign from './createAssign';
// import getAllKeys from './getAllKeys';

// const assignIn = createAssign(getAllKeys);

// export default assignIn;
import createAssigner from './createAssigner';
import assigner from '../internal/assigner';
import getAllKeys from './getAllKeys';

const assignIn = createAssigner(assigner(getAllKeys));

export default assignIn;

// class Person {}
// // eslint-disable-next-line
// // @ts-ignore
// Person.prototype.prop = 18;

// const obj = {
//     name: 'huahua'
// };
// const p = new Person();

// console.log(assignIn(obj, p));
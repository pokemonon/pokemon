import { isString } from '../base/isString';

/**
 * 判断对象是否是（类）数组
 * @category Array
 * @param o 
 * @returns {boolean} 
 */
export function keyBy<T extends any[], K extends keyof T[number], V extends T[number]>(o: T, k: K): Record<V[K], V>;
export function keyBy<T extends any[], V extends T[number]>(o: T, iter: (v: V) => any): Record<any, V>
export function keyBy<T extends any[], K extends keyof T[number], V extends T[number]>(o: T, k: K | ((v: V) => any)) {
    const iter: any = isString(k) ? (v: V) => v[k] : k;
    return o.reduce((res, item) => {
        res[iter(item)] = item;
        return res;
    }, {});
}




// const arr = [
//     {
//         name: 'huahua',
//         city: 'hz'
//     },
//     {
//         name: 'jamie'
//     }
// ];
// const res = keyBy(arr, 'name');
// console.log(res);
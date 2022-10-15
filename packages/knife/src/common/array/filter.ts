import { each } from '../object/each';
import { IterableV } from '../../types';
import { isArrLike } from '../array/isArrLike';
import { isIterable } from '../object/isIterable';

// todo 类型
/**
 * @category Array
 * @param obj 
 * @param iterator 
 */
export function filter<T extends Iterable<any>>(obj: T, iterator: (v: IterableV<T>, k: number, o: T) => any): Partial<T>;
export function filter<T extends ArrayLike<any>, K extends Exclude<keyof T, 'length'>>(obj: T, iterator: (v: T[K], k: number, o: T) => any): Partial<T>;
export function filter<T, K extends keyof T, V = T[K]>(obj: T, iterator: (v: V, k: K, o: T) => any): Partial<T>;
export function filter(obj, predicate) {
    let result;
    if (isArrLike(obj) || isIterable(obj)) {
        result = [];
        each(obj, (v, k, o) => {
            if (predicate(v, k, o)) {
                result.push(v);
            }
        });
    } else {
        result = {};
        each(obj, (v, k, o) => {
            if (predicate(v, k, o)) {
                result[k] = v;
            }
        });
    }
    return result;
}



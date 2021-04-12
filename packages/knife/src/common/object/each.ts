import isArrLike from '../array/isArrLike';
import isIterable from './isIterable';

/**
 * 遍历对象的值
 * @category Object
 */
function each<T>(obj: ArrayLike<T>, iterator: (v: T, k: number, o: typeof obj) => void): void;
function each<T>(obj: Iterable<T>, iterator: (v, k, o: typeof obj) => void): void;
function each(obj: Object, iterator: (v, k, o: typeof obj) => void): void;
function each<T>(obj: ArrayLike<T> | Iterable<T> | Object, iterator) {
    if (isArrLike(obj) || isIterable(obj)) {
        Array.from(obj).forEach(iterator);
    } else {
        Object.keys(obj).forEach(k => {
            const v = obj[k];
            iterator(v, k, obj);
        });
    }
}

export default each;


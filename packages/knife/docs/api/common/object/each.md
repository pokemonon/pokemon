# each
```ts
import { IterableV } from '../../types';
/**
 * 遍历对象的值
 * @category Object
 */
export declare function each<T extends Iterable<any>>(obj: T, iterator: (v: IterableV<T>, k: number, o: T) => any): void;
export declare function each<T extends ArrayLike<any>, K extends Exclude<keyof T, 'length'>>(obj: T, iterator: (v: T[K], k: number, o: T) => any): void;
export declare function each<T, K extends keyof T, V = T[K]>(obj: T, iterator: (v: V, k: K, o: T) => any): void;

```
# keyBy
```ts
/**
 * 判断对象是否是（类）数组
 * @category Array
 * @param o
 * @returns {boolean}
 */
export declare function keyBy<T extends any[], K extends keyof T[number], V extends T[number]>(o: T, k: K): Record<V[K], V>;
export declare function keyBy<T extends any[], V extends T[number]>(o: T, iter: (v: V) => any): Record<any, V>;

```

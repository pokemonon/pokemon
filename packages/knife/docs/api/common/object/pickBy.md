# pickBy
```ts
/**
 *
 * @category Object
 * @param data
 * @param fn
 */
export declare const pickBy: <D extends {}, T extends keyof D>(data: D, fn: (val: D[T], prop: T) => boolean) => Partial<D>;

```

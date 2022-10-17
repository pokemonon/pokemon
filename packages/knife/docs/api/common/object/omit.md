# omit
```ts
/**
 * 从对象中剔除某些属性
 * @category Object
 * @param data
 * @param props
 */
export declare const omit: <D extends {}, T extends keyof D>(data: D, props: T[]) => Omit<D, T>;

```

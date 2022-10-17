# throttle
```ts
export interface ThrottleOptions {
    immediate: boolean;
}
/**
 * 节流
 * @category Utils
 * @param wait
 * @param fn
 * @param immediate 是否立即执行
 */
export declare const throttle: (fn: any, wait: number, { immediate }: ThrottleOptions) => (this: any, ...args: any[]) => void;

```

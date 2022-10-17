# once
```ts
import { Fn } from '../../types';
/**
 * 确保函数只执行一次
 * @param {T} fn
 * @returns {ReturnType<T>}
 */
export declare const once: <T extends Fn<any[], any>>(fn: T) => {
    (this: any, ...args: any[]): ReturnType<T>;
    flag: boolean;
};

```

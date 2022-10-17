# memoize
```ts
import { Fn } from '../../types';
export declare const memoize: {
    <T extends Fn<any[], any>>(fn: T, resolver?: (...args: any[]) => any): T;
    Cache: MapConstructor;
};

```

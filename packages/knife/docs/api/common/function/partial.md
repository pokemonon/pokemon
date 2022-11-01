# partial
```ts
import { Fn } from '../../types';
import { CurryRemainingParameters, CurryPlaceholderArr, CurryPartialArr } from './curry';
import { FN_PLACEHOLDER } from '../const/FN_PLACEHOLDER';
declare type PartialFn = {
    <F extends Fn, Params extends Parameters<F>, R extends ReturnType<F>, A extends any[] = CurryPlaceholderArr<CurryPartialArr<CurryRemainingParameters<Params, []>>>>(fn: F, ...args: A): Fn<CurryRemainingParameters<Params, A>, R>;
    <Params extends any[], R = any, A extends any[] = CurryPlaceholderArr<CurryPartialArr<CurryRemainingParameters<Params, []>>>>(fn: any, ...args: A): Fn<CurryRemainingParameters<Params, A>, R>;
    placeholder: FN_PLACEHOLDER;
};
export declare const partial: PartialFn;
export {};

```

## Test
```ts
import { describe, test } from 'vitest';

describe('partial', () => {
    test('partial', () => {

    });
});
```

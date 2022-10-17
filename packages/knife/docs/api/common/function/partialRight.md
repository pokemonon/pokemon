# partialRight
```ts
import { Fn } from '../../types';
import { CurryRightRemainingParameters, CurryRightPlaceholderArr, CurryRightPartialArr } from './curryRight';
import { FN_PLACEHOLDER } from '../const/FN_PLACEHOLDER';
declare type PartialRight = {
    <F extends Fn, Params extends Parameters<F>, R = ReturnType<Fn>, A extends any[] = CurryRightPlaceholderArr<CurryRightPartialArr<CurryRightRemainingParameters<Params, []>>>>(fn: F, ...args: A): Fn<CurryRightRemainingParameters<Params, A>, R>;
    <Params extends any[], R = any, A extends any[] = CurryRightPlaceholderArr<CurryRightPartialArr<CurryRightRemainingParameters<Params, []>>>>(fn: any, ...args: A): Fn<CurryRightRemainingParameters<Params, A>, R>;
    placeholder: FN_PLACEHOLDER;
};
export declare const partialRight: PartialRight;
export {};

```

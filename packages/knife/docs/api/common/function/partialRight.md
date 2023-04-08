# partialRight
```ts
import type { Fn } from '../../types'
import type { FN_PLACEHOLDER } from '../const/FN_PLACEHOLDER'
import type { CurryRightPartialArr, CurryRightPlaceholderArr, CurryRightRemainingParameters } from './curryRight'
declare interface PartialRight {
  <F extends Fn, Params extends Parameters<F>, R = ReturnType<Fn>, A extends any[] = CurryRightPlaceholderArr<CurryRightPartialArr<CurryRightRemainingParameters<Params, []>>>>(fn: F, ...args: A): Fn<CurryRightRemainingParameters<Params, A>, R>
  <Params extends any[], R = any, A extends any[] = CurryRightPlaceholderArr<CurryRightPartialArr<CurryRightRemainingParameters<Params, []>>>>(fn: any, ...args: A): Fn<CurryRightRemainingParameters<Params, A>, R>
  placeholder: FN_PLACEHOLDER
}
export declare const partialRight: PartialRight
export {}

```

## Test
```ts
import { describe, test } from 'vitest'

describe('partialRight', () => {
  test('partialRight', () => {

  })
})
```

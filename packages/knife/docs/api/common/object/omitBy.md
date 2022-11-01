# omitBy
```ts
/**
 *
 * @category Object
 * @param data
 * @param fn
 */
export declare const omitBy: <D extends {}, T extends keyof D>(data: D, fn: (val: D[T], prop: T) => boolean) => Partial<D>;

```

## Test
```ts
import { describe, test } from 'vitest';

describe('omitBy', () => {
    test('omitBy', () => {

    });
});
```

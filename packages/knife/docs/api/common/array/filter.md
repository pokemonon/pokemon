# filter
```ts
import { IterableV } from '../../types';
/**
 * @category Array
 * @param obj
 * @param iterator
 */
export declare function filter<T extends Iterable<any>>(obj: T, iterator: (v: IterableV<T>, k: number, o: T) => any): Partial<T>;
export declare function filter<T extends ArrayLike<any>, K extends Exclude<keyof T, 'length'>>(obj: T, iterator: (v: T[K], k: number, o: T) => any): Partial<T>;
export declare function filter<T, K extends keyof T, V = T[K]>(obj: T, iterator: (v: V, k: K, o: T) => any): Partial<T>;

```

## Test
```ts
import { describe, test } from 'vitest';

describe('filter', () => {
    test('filter', () => {

    });
});
```

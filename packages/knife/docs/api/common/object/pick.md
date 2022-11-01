# pick
```ts
/**
 * 从对象中提取属性
 * @category Object
 * @param data
 * @param props
 */
export declare const pick: <D extends {}, T extends keyof D>(data: D, props: T[]) => Pick<D, T>;

```

## Test
```ts
import { describe, test } from 'vitest';

describe('pick', () => {
    test('pick', () => {

    });
});
```

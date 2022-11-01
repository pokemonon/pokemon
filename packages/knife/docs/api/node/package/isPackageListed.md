# isPackageListed
```ts
/**
 * 判断依赖是否存在与package.json中
 * @param name
 * @param cwd
 * @returns
 */
export declare function isPackageListed(name: string, cwd?: string): Promise<boolean>;

```

## Test
```ts
import { describe, test } from 'vitest';

describe('isPackageListed', () => {
    test('isPackageListed', () => {

    });
});
```

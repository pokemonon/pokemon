# addDelimiter
```ts
export interface AddDelimiterOptions {
    step?: number;
    delimiter?: string;
    fromRight?: boolean;
}
/**
 * 添加分隔符
 * @category String
 * @param value 待处理的值
 * @param options 配置
 */
export declare const addDelimiter: (value: string | undefined, { step, delimiter, fromRight }: AddDelimiterOptions) => string;

```

## Test
```ts
import { describe, test } from 'vitest';

describe('addDelimiter', () => {
    test('addDelimiter', () => {

    });
});
```

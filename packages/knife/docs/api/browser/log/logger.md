# logger
```ts
export declare const logger: {
    createLog: (...styles: string[]) => (...formats: string[]) => (...args: string[]) => void;
    info: (...args: string[]) => void;
    warn: (...args: string[]) => void;
    error: (...args: string[]) => void;
};

```

## Test
```ts
import { describe, test } from 'vitest';

describe('logger', () => {
    test('logger', () => {

    });
});
```

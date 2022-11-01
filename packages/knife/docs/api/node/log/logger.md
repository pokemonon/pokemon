# logger
```ts
export declare const logger: {
    log: (msg?: string, tag?: null) => void;
    info: (msg: any, tag?: null) => void;
    done: (msg: any, tag?: null) => void;
    warn: (msg: any, tag?: null) => void;
    error: (msg: any, tag?: null) => void;
    clearConsole: (title: any) => void;
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

# resolvePackage
```ts
/// <reference types="node" />
export declare type ResolvePackageOptions = Parameters<NodeJS.RequireResolve>[1];
/**
 * 获取依赖的package.json路径
 * @param name
 * @param options
 * @returns
 */
export declare function resolvePackage(name: string, options?: ResolvePackageOptions): string | null;

```

## Test
```ts
import { describe, expect, test } from 'vitest';
import { resolvePackage } from '@pokemonon/knife/node';

describe('resolvePackage', () => {
    test('get vitest package.json path', () => {
        const pkgPath = resolvePackage('vitest');
        expect(pkgPath).toBe(require.resolve('vitest/package.json'));
    });
});
```

# camelCase
```ts
export interface CamelCaseOptions {
  /**
     * Uppercase the first character: foo-bar → FooBar
     * @default false
     */
  pascalCase?: boolean
  /**
     * Preserve the consecutive uppercase characters: foo-BAR → FooBAR.
     * @default false
     */
  preserveConsecutiveUppercase?: boolean
  /**
     * The locale parameter indicates the locale to be used to convert to upper/lower case according to any locale-specific case mappings. If multiple locales are given in an array, the best available locale is used.
     * @default auto The host environment’s current locale.
     */
  locale?: false | string | string[]
}
/**
 * 驼峰转化
 * @category String
 * @param {string} input
 * @param {CamelCaseOptions} options
 * @returns {string}
 */
export declare function camelCase(input: string, options?: CamelCaseOptions): any

```

## Test
```ts
import { describe, test } from 'vitest'

describe('camelCase', () => {
  test('camelCase', () => {

  })
})
```

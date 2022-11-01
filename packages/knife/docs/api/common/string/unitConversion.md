# unitConversion
```ts
/**
 * @desc 单位转换，默认3位逗号，保留2位小数，比例是100:1
 * @category String
 * @param {String|Number} value 转换数字
 * @param {Object} opts
 * @param {Number} opts.rate 换算比例
 * @param {Number} opts.place 小数点后保留几位
 * @param {Boolean} opts.comma 整数是否需要3位逗号分隔符
 * @param {String} opts.placeholder 占位符（default: --）
 * @return {String} 值无效或者不存在,则返回
 */
export declare const unitConversion: (value: string | number, { rate, place, comma, placeholder }?: {
    rate?: number | undefined;
    place?: number | undefined;
    comma?: boolean | undefined;
    placeholder?: string | undefined;
}) => string;

```

## Test
```ts
import { describe, test } from 'vitest';

describe('unitConversion', () => {
    test('unitConversion', () => {

    });
});
```

# iframeComm
```ts
interface IframeCommOpts {
    defaultTarget: any;
    defaultOrigin: string;
}
/**
 * 简化iframe间通信api
 * @category Comm
 */
export declare const iframeComm: ({ defaultTarget, defaultOrigin }?: IframeCommOpts) => {
    on: (eventName: string, listener: (evt: MessageEvent<any>, ...args: any[]) => any) => () => void;
    emit: {
        <T = any>(eventName: string, ...args: any[]): import("../../common/utils/eventToP").extendedPromise<T, any>;
        <T_1 = any, U = any>(target: U | U[], eventName: string, ...args: any[]): import("../../common/utils/eventToP").extendedPromise<T_1, any>;
    };
    once: (eventName: string, listener: (evt: MessageEvent<any>, ...args: any[]) => any) => () => void;
    off: (eventName: string, listener: import("../../types/index").Fn<any[], any>) => void;
    removeAllListeners: (eventName?: string | undefined) => void;
    close: any;
};
export {};
/**
 * @examples
 */

```

## Test
```ts
import { describe, test } from 'vitest';

describe('iframeComm', () => {
    test('iframeComm', () => {

    });
});
```

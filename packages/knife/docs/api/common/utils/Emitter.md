# Emitter
```ts
import type { Fn } from '../../types'
/**
 * 事件触发器
 * @class
 */
export declare class Emitter {
  #private
  /**
     * 监听事件
     * @param event
     * @param listener
     * @returns
     */
  on<T extends Fn>(event: string, listener: T): this
  /**
     * 监听事件 回调函数只会触发一次
     * @param event
     * @param listener
     * @returns
     */
  once<T extends Fn>(event: string, listener: T): this
  /**
     * 触发事件
     * @param event
     * @param args
     * @returns
     */
  emit(event: string, ...args: any[]): false | this
  /**
     * 取消指定回调的事件监听
     * @param event
     * @param listener
     * @returns
     */
  off<T extends Fn>(event: string, listener: T): false | this
  /**
     * 取消事件的监听
     * @param event 不传则取消所有事件的监听
     * @returns
     */
  removeAllListeners(event?: string): this
}

```

## Test
```ts
import { describe, test } from 'vitest'

describe('Emitter', () => {
  test('Emitter', () => {

  })
})
```

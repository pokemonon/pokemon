# eventToP
```ts
import type { Fn } from '../../types'
declare type OnAdapterCb<Evt> = (eventName: string, evt: Evt, data: any[]) => void
declare type OnAdapter<Evt> = (cb: OnAdapterCb<Evt>) => any
declare interface EmitAdapterInfo<Evt> {
  emitTarget?: any
  evt?: Evt
  eventName: string
  data: any[]
}
declare type EmitAdapter<Evt> = (info: EmitAdapterInfo<Evt>) => void
interface EventToPOpts<Evt> {
  onAdapter: OnAdapter<Evt>
  emitAdapter: EmitAdapter<Evt>
}
export interface extendedPromise<T, U = any> extends Promise<T> {
  every: (cb: (target: U, data: T) => void) => extendedPromise<T>
}
/**
 *
 * @category Utils
 * @param opts
 * @returns
 */
export declare function eventToP<Evt = any>(opts: EventToPOpts<Evt>): {
  on: (eventName: string, listener: (evt: Evt, ...args: any[]) => any) => () => void
  emit: {
    <T = any>(eventName: string, ...args: any[]): extendedPromise<T, any>
    <T_1 = any, U = any>(target: U | U[], eventName: string, ...args: any[]): extendedPromise<T_1, any>
  }
  once: (eventName: string, listener: (evt: Evt, ...args: any[]) => any) => () => void
  off: (eventName: string, listener: Fn) => void
  removeAllListeners: (eventName?: string) => void
  close: any
}
export {}

```

## Test
```ts
import { describe, test } from 'vitest'

describe('eventToP', () => {
  test('eventToP', () => {

  })
})
```

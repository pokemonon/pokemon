export type Fn<P extends any[] = any[], T = any> = (...args: P) => T

export type ItemOrArray<T> = T | T[]

export type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift'
export type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> =
    Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>>
    & {
      readonly length: L
      [ I: number ]: T
      [Symbol.iterator]: () => IterableIterator<T>
    }

export type IterableValue<T> = T extends Iterable<infer V> ? V : unknown

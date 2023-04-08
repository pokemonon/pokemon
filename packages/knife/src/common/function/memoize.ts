import type { Fn } from '../../types'

const defaultResolver = (...args) => args[0]
export const memoize = <T extends Fn>(fn: T, resolver = defaultResolver) => {
  const cache = new memoize.Cache()
  return ((...args) => {
    const key = resolver(...args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}

memoize.Cache = Map


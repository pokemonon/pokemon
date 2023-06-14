import { filter } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('filter', () => {
  test('array', () => {
    const res1 = filter([1, 2, 3, 4], val => val > 1)
    expect(res1).toEqual([2, 3, 4])

    const res2 = filter([4, 3, 2, 1], (val, idx) => idx > 2)
    expect(res2).toEqual([1])
  })

  test('object', () => {
    const res1 = filter({ a1: 'a', a2: 'a', b1: 'b', b2: 'b' }, (val, key) => val === 'a')
    expect(res1).toEqual({ a1: 'a', a2: 'a' })
  })

  test('array like object', () => {
    const arrLike = { length: 4, 0: 0, 1: 'string' }
    const res = filter(arrLike, i => i)
    expect(res).toEqual(['string'])
  })
})

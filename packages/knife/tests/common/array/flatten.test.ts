import { flatten } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('flatten', () => {
  test('flatten', () => {
    const arr = [[1], [[1]], [[[1]]]]
    // default to 1 depth
    expect(flatten(arr)).toEqual([1, [1], [[1]]])
    // flat 2 depth
    expect(flatten(arr, 2)).toEqual([1, 1, [1]])
    // deep flat
    expect(flatten(arr, true)).toEqual([1, 1, 1])
  })
})

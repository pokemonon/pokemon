import { flattenDeep } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('flattenDeep', () => {
  test('flattenDeep', () => {
    expect(flattenDeep([1, [1], [[1]]])).toEqual([1, 1, 1])
  })
})

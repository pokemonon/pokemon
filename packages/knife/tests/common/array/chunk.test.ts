import { chunk } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('chunk', () => {
  test('chunk', () => {
    expect(() => chunk([1, 2, 3, 4], 0)).toThrowError()
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]])
  })
})

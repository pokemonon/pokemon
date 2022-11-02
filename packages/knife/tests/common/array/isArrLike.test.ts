import { isArrLike } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('isArrLike', () => {
  test('isArrLike', () => {
    expect(isArrLike([])).toBeTruthy()
    expect(isArrLike({ length: 1 })).toBeTruthy()
    expect(isArrLike({ length: 2 ** 53 - 1 })).toBeTruthy()
    expect(isArrLike({ length: 2 ** 53 })).toBeFalsy()
    expect(isArrLike({})).toBeFalsy()
  })
})

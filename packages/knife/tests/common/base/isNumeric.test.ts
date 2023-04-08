import { isNumeric } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('isNumeric', () => {
  test('isNumeric', () => {
    const numericList = [
      1,
      '1.1',
      '-10',
      0xFF,
      '8e5',
    ]
    const nonNumericList = [
      '',
      '1.1.1',
      '1a',
      {},
      NaN,
      null,
      true,
      Infinity,
    ]
    numericList.forEach((i) => {
      expect(isNumeric(i)).toBeTruthy()
    })
    nonNumericList.forEach((i) => {
      expect(isNumeric(i)).toBeFalsy()
    })
  })
})

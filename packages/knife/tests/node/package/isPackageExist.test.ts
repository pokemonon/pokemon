import { isPackageExists } from '@pokemonon/knife/node'
import { describe, expect, test } from 'vitest'

describe('isPackageExist', () => {
  test('check if exist', () => {
    expect(isPackageExists('vitest')).toBeTruthy()
    expect(isPackageExists('nonexistant')).toBeFalsy()
  })
})

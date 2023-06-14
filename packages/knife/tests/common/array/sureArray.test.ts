import { sureArray } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('sureArray', () => {
  test('sureArray', () => {
    expect(sureArray('name')).toEqual(['name'])
    expect(sureArray(['name'])).toEqual(['name'])
  })
})

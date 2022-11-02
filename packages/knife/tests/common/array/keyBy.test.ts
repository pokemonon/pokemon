import { keyBy } from '@pokemonon/knife'
import { describe, expect, test } from 'vitest'

describe('keyBy', () => {
  test('map the array element\'s property value to array element', () => {
    const arr = [
      {
        name: 'arron',
      },
      {
        name: 'alon',
        age: 18,
      },
    ]

    const res1 = keyBy(arr, 'name')
    expect(res1).toEqual({
      arron: {
        name: 'arron',
      },
      alon: {
        name: 'alon',
        age: 18,
      },
    })
  })

  test('custom map', () => {
    const arr = [
      {
        name: 'arron',
        age: 16,
      },
      {
        name: 'alon',
        age: 18,
      },
    ]

    expect(keyBy(arr, item => `${item.name}.${item.age}`)).toEqual({
      'arron.16': {
        name: 'arron',
        age: 16,
      },
      'alon.18': {
        name: 'alon',
        age: 18,
      },
    })
  })
})

import { describe, expect, test } from 'vitest'
import { resolvePackage } from '@pokemonon/knife/node'

describe('resolvePackage', () => {
  test('get vitest package.json path', () => {
    const pkgPath = resolvePackage('vitest')
    expect(pkgPath).toBe(require.resolve('vitest/package.json'))
  })
})

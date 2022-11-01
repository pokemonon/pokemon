import { describe, expect, test } from 'vitest';
import { findIndexOf } from '@pokemonon/knife';

describe('findIndexOf', () => {
    test('compare value with param of arr', () => {
        expect(findIndexOf([0, 1, 2, 3], 2)).toBe(2);
    });

    test('compare value with key to param of arr', () => {
        expect(findIndexOf([ { name: 'arron'}, { name: 'alon'}], 'name', 'arron')).toBe(0);
    });
});
import { loadPackageJSON } from '@pokemonon/knife/node';
import { describe, expect, test } from 'vitest';

describe('loadPackageJson', () => {
    test('get local package.json', async () => {
        expect(await loadPackageJSON()).toEqual(require('../../../package.json'));
    });
});
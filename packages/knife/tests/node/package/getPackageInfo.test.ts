import path from 'path';
import { describe, expect, test } from 'vitest';
import { getPackageInfo } from '@pokemonon/knife/node';

describe('getPackageInfoSync', () => {
    test('get vitest package.json', async () => {
        const pkgInfo = await getPackageInfo('vitest');

        const vitestPkgPath = require.resolve('vitest/package.json');
        const vitestPkg = require(vitestPkgPath);
        const vitestInfo = {
            name: 'vitest',
            version: vitestPkg.version,
            rootPath: path.dirname(vitestPkgPath),
            packageJsonPath: vitestPkgPath,
            packageJson: vitestPkg
        };
        
        expect(pkgInfo).toEqual(vitestInfo);
    });
});
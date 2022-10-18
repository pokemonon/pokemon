import { getPackageInfoSync } from '@pokemonon/knife/node';
import path from 'path';
import { describe, expect, test } from 'vitest';

describe('getPackageInfoSync', () => {
    test('get vitest package.json', () => {
        const pkgInfo = getPackageInfoSync('vitest');

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
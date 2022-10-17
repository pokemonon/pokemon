import fs from 'fs-extra';
import path from 'path';
import { resolvePackage } from './resolvePackage';

/**
 * 获取依赖信息
 * @param name 
 * @param options 
 * @returns 
 */
export async function getPackageInfo(name, options) {
    const packageJsonPath = resolvePackage(name, options);
    if (!packageJsonPath)
        return;
  
    const pkg = JSON.parse(await fs.readFile(packageJsonPath, 'utf8')!);
  
    return {
        name,
        version: pkg.version,
        rootPath: path.dirname(packageJsonPath),
        packageJsonPath,
        packageJson: pkg,
    };
}
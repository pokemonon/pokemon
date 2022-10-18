import fs from 'fs-extra';
import path from 'path';
import { resolvePackage, ResolvePackageOptions } from './resolvePackage';

/**
 * 获取依赖信息
 * @param name 
 * @param options 
 * @returns 
 */
export async function getPackageInfo(name: string, options: ResolvePackageOptions = {}) {
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
import { loadPackageJSON } from './loadPackageJson';

/**
 * 判断依赖是否存在与package.json中
 * @param name 
 * @param cwd 
 * @returns 
 */
export async function isPackageListed(name: string, cwd?: string) {
    const pkg = await loadPackageJSON(cwd) || {};
  
    return (name in (pkg.dependencies || {})) || (name in (pkg.devDependencies || {}));
}
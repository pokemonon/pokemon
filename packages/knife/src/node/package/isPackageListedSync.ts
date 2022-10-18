import { loadPackageJSONSync } from './loadPackageJsonSync';


/**
 * 判断依赖是否存在与package.json中
 * @param name 
 * @param cwd 
 * @returns 
 */
export function isPackageListedSync(name: string, cwd?: string) {
    const pkg = loadPackageJSONSync(cwd) || {};
  
    return (name in (pkg.dependencies || {})) || (name in (pkg.devDependencies || {}));
}
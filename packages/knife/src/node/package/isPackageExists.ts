import { resolvePackage } from './resolvePackage';

/**
 * 判断依赖是否安装
 * @param name 
 * @param options 
 * @returns 
 */
export function isPackageExists(name, options) {
    return !!resolvePackage(name, options);
}
/**
 * 获取依赖的package.json路径
 * @param name 
 * @param options 
 * @returns 
 */
export function resolvePackage(name, options = {}) {
    try {
        return require.resolve(`${name}/package.json`, options);
    } catch (e) {
        return null;
    }
}
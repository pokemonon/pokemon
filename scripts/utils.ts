import * as fs from 'fs';
import * as path from 'path';
import { renderFile as ejsRenderFile } from 'ejs';
import globbay from 'globby';
import { outputFile } from 'fs-extra';

// 可打包的模块
export const targets = fs.readdirSync('packages').filter(f => {
    if (!fs.statSync(`packages/${f}`).isDirectory()) {
        return false;
    }
    const pkg = require(`../packages/${f}/package.json`);
    if (pkg.private && !pkg.buildOptions) {
        return false;
    }
    return true;
});

export const resolveRoot = (...p) => path.resolve(__dirname, '..', ...p);

/**
 * 渲染模板
 * @param source 源目录地址
 * @param target 目标目录地址
 * @param data 数据
 */
export const render = async (source: string, target: string, data: Record<string, any> = {}) => {
    source = resolveRoot(source);
    target = resolveRoot(target);

    const paths = fs.statSync(source).isFile() ?
        [path.basename(source)] :
        await globbay(['**/*'], {
            cwd: source
        });
    
    for (const p of paths) {
        const content = await ejsRenderFile(path.resolve(source, p), data);
        await outputFile(path.resolve(target, p.replace(/^_/, '.')), content);
    }
};


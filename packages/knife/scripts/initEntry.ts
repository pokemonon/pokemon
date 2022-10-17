import * as path from 'path';
import * as fs from 'fs';

// 获取子文件夹
function readDir(dirPath: string, isDir = true) {
    const res = fs.readdirSync(dirPath, {
        withFileTypes: true
    });

    return res.reduce((list, i) => {
        if (isDir && i.isDirectory() || !isDir && i.isFile()) {
            list.push(i.name);
        }
        return list;
    }, [] as string[]);
}

// 过滤index文件 或者 _开头文件
function filterIndex(paths: string[]) {
    return paths.filter(p => !/^(index|_)/.test(p));
}

const resolve = (...p: string[]) => path.resolve(__dirname, '..', ...p);
const commonDir = resolve('src/common');
const browerDir = resolve('src/browser');
const nodeDir = resolve('src/node');

// 生成入口文件
function genIndex(dirPath: string) {
    const subDirs = readDir(dirPath);
    const dirIndexTpl = `/* auto generate! */
${subDirs.map(i => `export * from './${i}';`).join('\n')}
`;
    // 主目录入口文件
    // fs.writeFileSync(path.resolve(dirPath, `${dirPath.split('/').slice(-1)[0]}.ts`), dirIndexTpl, { encoding: 'utf8' });
    fs.writeFileSync(path.resolve(dirPath, 'index.ts'), dirIndexTpl, { encoding: 'utf8' });

    // 子目录入口文件
    for (const subDir of subDirs) {
        const subFiles = filterIndex(readDir(path.resolve(dirPath, subDir), false));
        const subDirIndexTpl = `/* auto generate! */
${subFiles.map(i => {
        const name = i.split('.')[0];
        return `export * from './${name}';`;
    }).join('\n')}
`;
        fs.writeFileSync(path.resolve(dirPath, subDir, 'index.ts'), subDirIndexTpl, { encoding: 'utf8' });
    }
}

[commonDir, browerDir, nodeDir].forEach(dir => genIndex(dir));

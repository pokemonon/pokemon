import globby from 'globby';
import fs from 'node:fs';
import path from 'node:path';

async function start() {
    const files = await globby(['src/**/*.ts'], {
        absolute: true
    });
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf-8');
        const funcName = path.basename(file, '.ts');
        if (content.includes(`export ${funcName};`)) {
            content = content.replace(`export ${funcName};`, '');
            fs.writeFileSync(file, content, 'utf-8');
        } else {
            console.log('not match', file);
        }
    }
}

start();
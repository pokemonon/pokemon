import globby from 'globby';
import path from 'path';
import fs from 'fs-extra';
import { writeFile } from '../src/node';

const r = (...p: string[]) => path.resolve(__dirname, '..', ...p);

async function start() {
    const files = await globby('src/**/*.ts', {
        ignore: [
            '**/index.ts',
            '**/_**'
        ]
    });
    for (const file of files) {
        const relativeFile = path.relative('src', file);
        const relativeFileWithoutExt = relativeFile.replace('.ts', '');
        const [_, group, type, functionName] = file.match(/src\/(\w+)\/(\w+)\/(\w+)/)!;

        const docFile = r('docs/api', `${relativeFileWithoutExt}.md`);
        let docContent = `# ${functionName}`;

        // dts
        const dtsFile = r('dist/es', `${relativeFileWithoutExt}.d.ts`);
        if (fs.existsSync(dtsFile)) {
            docContent += `
\`\`\`ts
${fs.readFileSync(dtsFile)}
\`\`\`
`;
        }

        // test
        const testFile = r('tests', `${relativeFileWithoutExt}.test.ts`);
        if (fs.existsSync(testFile)) {
            docContent += `
## Test
\`\`\`ts
${fs.readFileSync(testFile)}
\`\`\`
`;
        }

        writeFile(docFile, docContent);
    }
}

start();
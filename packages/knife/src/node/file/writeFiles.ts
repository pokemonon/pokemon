import * as path from 'path';
import { writeFile } from './writeFile';

export const writeFiles = (dir: string, files: Record<string, string>) => {
    Object.keys(files).forEach(fileName => {
        const filePath = path.resolve(dir, fileName);
        writeFile(filePath, files[fileName]);
    });
};


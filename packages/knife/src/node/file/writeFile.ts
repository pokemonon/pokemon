import fs from 'fs-extra';
import * as path from 'path';

export const writeFile = (filePath: string, content: string) => {
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, content);
};


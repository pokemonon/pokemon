import * as path from 'path';
import fs from 'fs-extra';
import { memoize } from '../../common/function/memoize';

export const hasProjectNpm = memoize((cwd: string) => {
    const lockFile = path.resolve(cwd, 'package-lock.json');
    return fs.existsSync(lockFile);
});


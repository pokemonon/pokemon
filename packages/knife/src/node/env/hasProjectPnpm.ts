import * as path from 'path';
import fs from 'fs-extra';
import { memoize } from '../../common/function/memoize';

export const hasProjectPnpm = memoize((cwd: string) => {
    const lockFile = path.resolve(cwd, 'pnpm-lock.yaml');
    return fs.existsSync(lockFile);
});


import * as path from 'path';
import fs from 'fs-extra';
import momoize from '../../common/function/memoize';

const hasProjectPnpm = momoize((cwd: string) => {
    const lockFile = path.resolve(cwd, 'pnpm-lock.yaml');
    return fs.existsSync(lockFile);
});

export default hasProjectPnpm;
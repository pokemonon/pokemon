import * as path from 'path';
import fs from 'fs-extra';
import momoize from '../../common/function/memoize';

const hasProjectNpm = momoize((cwd: string) => {
    const lockFile = path.resolve(cwd, 'package-lock.json');
    return fs.existsSync(lockFile);
});

export default hasProjectNpm;
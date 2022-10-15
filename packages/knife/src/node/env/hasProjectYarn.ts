import * as path from 'path';
import fs from 'fs-extra';
import { memoize } from '../../common/function/memoize';

// let _hasProjectYarn: boolean | null;

// export const hasProjectYarn = (cwd) => {
//     if (_hasProjectYarn !== null) {
//         return _hasProjectYarn;
//     }
//     const lockFile = path.resolve(cwd, 'yarn.lock');
//     const result = fs.existsSync(lockFile);
//     return (_hasProjectYarn = result);
// };

export const hasProjectYarn = memoize((cwd: string) => {
    const lockFile = path.resolve(cwd, 'yarn.lock');
    return fs.existsSync(lockFile);
});


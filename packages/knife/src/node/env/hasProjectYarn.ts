import * as path from 'path';
import fs from 'fs-extra';
import monoize from '../../common/function/memoize';

// let _hasProjectYarn: boolean | null;

// const hasProjectYarn = (cwd) => {
//     if (_hasProjectYarn !== null) {
//         return _hasProjectYarn;
//     }
//     const lockFile = path.resolve(cwd, 'yarn.lock');
//     const result = fs.existsSync(lockFile);
//     return (_hasProjectYarn = result);
// };

const hasProjectYarn = monoize((cwd: string) => {
    const lockFile = path.resolve(cwd, 'yarn.lock');
    return fs.existsSync(lockFile);
});

export default hasProjectYarn;
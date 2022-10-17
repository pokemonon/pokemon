import execa from 'execa';
import { memoize } from '../../common/function/memoize';

export const hasProjectGit = memoize((cwd: string) => {
    try {
        execa.sync('git', ['status'], { stdio: 'ignore', cwd });
        return true;
    } catch (e) {
        return false;
    }
});


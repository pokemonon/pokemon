import execa from 'execa';
import momoize from '../../common/function/memoize';

const hasProjectGit = momoize((cwd: string) => {
    try {
        execa.sync('git', ['status'], { stdio: 'ignore', cwd });
        return true;
    } catch (e) {
        return false;
    }
});

export default hasProjectGit;
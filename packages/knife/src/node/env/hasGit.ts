import execa from 'execa';
import monoize from '../../common/function/memoize';

const hasGit = monoize(() => {
    try {
        execa.sync('git', ['--version'], { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
});

export default hasGit;
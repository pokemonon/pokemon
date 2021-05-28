import execa from 'execa';
import momoize from '../../common/function/memoize';

const hasNpm = momoize(() => {
    try {
        execa.sync('npm', ['--version'], { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
});

export default hasNpm;
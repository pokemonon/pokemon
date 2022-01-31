import execa from 'execa';
import momoize from '../../common/function/memoize';

const hasPnpm = momoize(() => {
    try {
        execa('pnpm', ['--version'], { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
});

export default hasPnpm;
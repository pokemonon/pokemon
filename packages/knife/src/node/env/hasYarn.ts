import execa from 'execa';
import memoize from '../../common/function/memoize';

// let _hasYarn: boolean | null;

// const hasYarn = () => {
//     if (_hasYarn !== null) {
//         return _hasYarn;
//     }
//     try {
//         execa.sync('yarn', ['--version'], { stdio: 'ignore' }); 
//         return (_hasYarn = true);
//     } catch (e) {
//         return (_hasYarn = false);
//     }
// };

const hasYarn = memoize(() => {
    try {
        execa.sync('yarn', ['--version'], { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
});

export default hasYarn;
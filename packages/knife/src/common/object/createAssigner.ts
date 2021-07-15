import each from './each';
import isFunction from '../base/isFunction';
import { Fn } from '../../../types/common';
import isDef from '../base/isDef';

/**
 * todo 不同类型及深度拷贝
 * 避免引用,使用的对象复制
 * @category Object
 * @param target 
 * @returns {T}
 */
type Customizer = (objVal?, srcVal?, key?, obj?, src?) => boolean
type Assigner = (obj, src, customizer: Customizer) => any

const createAssign = <T extends Fn<any[], string[]>>(assigner: Assigner) => {
    // const defaultCustomizer: Customizer = (_objVal, srcVal) => isDef(srcVal);
    
    // todo 类型
    // function assign<S extends [...Object[], Customizer]>(obj, ...sources: S)
    function assign<T, S1>(obj: T, src1: S1, customizer?: Customizer): T & S1
    function assign<T, S1, S2>(obj: T, src1: S1, src2: S2, customizer?: Customizer): T & S1 & S2
    function assign<T, S1, S2, S3>(obj: T, src1: S1, src2: S2, src3: S3, customizer?: Customizer): T & S1 & S2 & S3
    function assign<T, S1, S2, S3, S4>(obj: T, src1: S1, src2: S2, src3: S3, src4: S4, customizer?: Customizer): T & S1 & S2 & S3 & S4
    function assign<T, S1, S2, S3, S4, S5>(obj: T, src1: S1, src2: S2, src3: S3, src4: S4, src5: S5, customizer?: Customizer): T & S1 & S2 & S3 & S4 & S5
    function assign(obj, ...sources) {
        let customizer;
        if (isFunction(sources.slice(-1)[0])) {
            customizer = sources.pop();
        }
        each(sources, (src) => {
            assigner(obj, src, customizer);
        });
        return obj;
    }
    return assign;
};

export default createAssign;

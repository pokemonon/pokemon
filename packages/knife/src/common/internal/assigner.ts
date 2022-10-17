import { each } from '../object/each';
// import dc from './defaultCustomizer';
import { isDef } from '../base/isDef';

const dc = (objVal, srcVal, key, obj, src) => isDef(srcVal);
export const assigner = (getKeys, defaultCustomizer = dc) => (obj, src, customizer = defaultCustomizer) => {
    const keys = getKeys(src);
    each(keys, (k: any) => {
        const objVal = obj[k];
        const srcVal = src[k];
        if (customizer(objVal, srcVal, k, obj, src)) {
            obj[k] = srcVal;
        }
    });
    return obj;
};


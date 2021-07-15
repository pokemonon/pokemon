import isObj from '../base/isObj';
import each from '../object/each';

const assignMergeValue = (obj, k, v) => {
    if (v === undefined && !(k in obj) || v !== undefined) {
        obj[k] = v;
    }
};

const dc = (objVal?, srcVal?, key?, obj?, src?) => {
    return undefined;
};

const baseMerge = (getKeys, defaultCustomizer = dc) => function baseMergeDeep(obj, src, customizer = defaultCustomizer, map = new Map()) {
    // if (!isObj(obj) || !isObj(src)) return;
    // if (map[src]) return;
    const keys = getKeys(src);
    each(keys, (k: any) => {
        const objVal = obj[k];
        const srcVal = src[k];
        if (map.get(srcVal)) {
            return;
        }
        const newVal = customizer(objVal, srcVal, k, obj, src);
        if (newVal !== undefined) {
            obj[k] = newVal;
            return;
        }
        if (!isObj(srcVal) || !isObj(objVal)) {
            assignMergeValue(obj, k, srcVal);
            return;
        }
        // todo buffer...
        // map[srcVal] = true;
        map.set(srcVal, true);
        baseMergeDeep(objVal, srcVal, customizer, map);
        // map[srcVal] = false;
        map.set(srcVal, false);
    });
};

export default baseMerge;

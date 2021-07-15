interface GetAllKeysOpts {
    // enumerable?: boolean;
    unenumerable?: boolean;
    proto?: boolean;
    symbol?: boolean;
}
const getAllKeys = (obj, opts: GetAllKeysOpts = {}) => {
    const {
        unenumerable = false,
        proto = true,
        symbol = false
    } = opts;
    const keys: any[] = [];
    do {
        keys.push(...(unenumerable ?
            Object.getOwnPropertyNames(obj) :
            Object.keys(obj)));
        if (symbol) {
            keys.push(...Object.getOwnPropertySymbols(obj));
        }
        obj = Object.getPrototypeOf(obj);
    } while (
        proto &&
        obj !== Object.prototype
    );
    return keys;
};

export default getAllKeys;

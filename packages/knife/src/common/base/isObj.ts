const isObj = (val) => {
    const type = typeof val;
    return val != null && (type === 'object' || type === 'function');
};

export default isObj;
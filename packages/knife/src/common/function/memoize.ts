import { Fn } from 'packages/knife/types/common';

const defaultResolver = (...args) => args[0];
const memoize = <T extends Fn>(fn: T, resolver = defaultResolver) => {
    const cache = new memoize.Cache;
    return ((...args) => {
        const key = resolver(...args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }) as T;
};

memoize.Cache = Map;

export default memoize;

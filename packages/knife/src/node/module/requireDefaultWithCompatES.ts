import requireWithCompatES from './requireWithCompatES';

/**
 * require引用default
 * @category Module
 */
function requireDefaultWithCompatES(mod) {
    return requireWithCompatES(mod).default;
}

export default requireDefaultWithCompatES;
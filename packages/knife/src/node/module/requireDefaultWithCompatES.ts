import { requireWithCompatES } from './requireWithCompatES';

/**
 * require引用default
 * @category Module
 */
export function requireDefaultWithCompatES(mod) {
    return requireWithCompatES(mod).default;
}


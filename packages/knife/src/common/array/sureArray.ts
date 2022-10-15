import { ItemOrArray } from '../../types';
import { isArray } from '../base/isArray';

export const sureArray = <T>(v: ItemOrArray<T>) => isArray(v) ? v : [v];



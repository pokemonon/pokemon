import { ItemOrArray } from '../../../types/common';
import isArray from '../base/isArray';

const sureArray = <T>(v: ItemOrArray<T>) => isArray(v) ? v : [v];

export default sureArray;

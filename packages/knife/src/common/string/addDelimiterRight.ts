import addDelimiter, { AddDelimiterOptions } from './addDelimiter';

/**
 * 从右边开始添加分隔符
 * @category String
 * @param value 
 * @param options 
 * @returns {string} 
 */
const addDelimiterRight = (value = '', options: Omit<AddDelimiterOptions, 'fromRight'>) => addDelimiter(value, {
    ...options,
    fromRight: true
});

export default addDelimiterRight;
/**
 * 是否为身份证号（中国的）
 * @category RegExp
 */
export const isIdCard = value => /^\d{15}$|^\d{18}$|^\d{17}(\d|X|x)$/.test(value);


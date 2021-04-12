/**
 * 是否是手机号
 * @category RegExp
 */
const isPhone = value => /^1[3456789]d{9}$/.test(value);

export default isPhone;
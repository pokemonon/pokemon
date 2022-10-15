/**
 * 是否是邮箱
 * @category RegExp
 */
export const isEmail = value => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);


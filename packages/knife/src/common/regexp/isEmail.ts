/**
 * 是否是邮箱
 * @category RegExp
 */
const isEmail = value => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);

export default isEmail;
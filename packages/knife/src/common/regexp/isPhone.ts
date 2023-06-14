/**
 * 是否是手机号
 * @category RegExp
 */
export const isPhone = value => /^1[3456789]d{9}$/.test(value)


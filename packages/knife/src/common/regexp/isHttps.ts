/**
 * 是否是https的url
 * @category RegExp
 */
const isHttps = value => /^https:\/\/*/.test(value);

export default isHttps;
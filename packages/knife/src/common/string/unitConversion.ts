import addDelimiterRight from './addDelimiterRight';

/**
 * @desc 单位转换，默认3位逗号，保留2位小数，比例是100:1
 * @category String
 * @param {String|Number} value 转换数字
 * @param {Object} opts
 * @param {Number} opts.rate 换算比例
 * @param {Number} opts.place 小数点后保留几位
 * @param {Boolean} opts.comma 整数是否需要3位逗号分隔符
 * @param {String} opts.placeholder 占位符（default: --）
 * @return {String} 值无效或者不存在,则返回
 */
const unitConversion = (value: string | number, {
    rate = 100,
    place = 2,
    comma = true,
    placeholder = ''
} = {}) => {
    if (Number.isNaN(+value) || !value) {
        return placeholder;
    }
    const negative = value < 0 ? '-' : '';
    value = `${(Math.abs(+value) / (+rate)).toFixed(+place)}`;
    if (!comma) {
        return negative + value;
    }
    const num = value.split('.');
    // const integer = num[0].replace(/(\d+?)(?=(?:\d{3})+$)/g, '$1,');
    const integer = addDelimiterRight(num[0], { step: 3, delimiter: ',' });
    return negative + integer + (num[1] ? `.${num[1]}` : '');
};

export default unitConversion;

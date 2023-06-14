export interface AddDelimiterOptions {
  step?: number
  delimiter?: string
  fromRight?: boolean
}

/**
 * 添加分隔符
 * @category String
 * @param value 待处理的值
 * @param options 配置
 */
export const addDelimiter = (value = '', {
  step = 4, delimiter = ' ', fromRight = false,
}: AddDelimiterOptions) => {
  const regx = new RegExp(`(\\S{${step}})(?=\\S)`, 'g')

  fromRight && (value = value.split('').reverse().join(''))

  const result = value.replace(new RegExp(delimiter, 'g'), '').replace(regx, `$1${delimiter}`)
  return fromRight ? result.split('').reverse().join('') : result
}


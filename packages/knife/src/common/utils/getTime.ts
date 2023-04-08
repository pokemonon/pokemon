/**
 * 设置延迟的时间
 * @category Utils
 * @param time
 * @return {Promise<void>}
 */
export const getTime = (time: number) => new Promise(resolve => setTimeout(resolve, time))


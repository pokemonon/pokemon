/**
 * 设置延迟的时间
 * @category Utils
 * @param time
 * @return {Promise<void>}
 */
const getTime = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export default getTime;
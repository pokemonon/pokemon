/**
 * 非Nullable（undefined null）
 * @category Base
 */
export const isDef = <T>(val: T): val is NonNullable<T> => {
  return val !== undefined && val !== null
}


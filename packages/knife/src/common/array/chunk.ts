/**
 * group array
 * @category Array
 * @param arr
 * @param size
 */
export function chunk(arr: any[], size: number) {
  if (!+size) {
    throw new Error('size should greater than 0')
  }
  const result: any[] = []

  arr = [...arr]
  while (arr.length) {
    const group = arr.splice(0, size)
    result.push(group)
  }
  return result
}


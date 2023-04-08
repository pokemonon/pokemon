/**
 * isNumeric
 */
export function isNumeric(val) {
  return !isNaN(parseFloat(val)) && isFinite(val)
}


/**
 * Get the factorial of a number.
 *
 * @param {integer} num The number to add
 * @return {integer}
 */
export const factorial = (num) => {
  // If we ever reach 0 then the whole thing would end up being 0.
  if (num === 0) {
    return 1
  }

  return factorial(num - 1) * num
}

/**
 * Add one number recursively until there is nothing left.
 *
 * @param {integer} num The number to add
 * @return {integer}
 */
export const addition = (num) => {
  if (num <= 0) {
    return 0
  }

  const result = addition(num - 1) + num

  return result
}

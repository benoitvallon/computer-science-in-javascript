/**
 * A class to create a stack.
 *
 * FILO: First In Last Out (LIFO also works).
 *
 * @type {StackDS}
 */
export default class StackDS {
  constructor () {
    this.stack = []
  }

  /**
   * Push a new value onto the end of the stack.
   *
   * @param {mixed} value The value
   * @return {StackDS}
   */
  push = (value) => {
    this.stack.push(value)

    return this
  }

  /**
   * Pop an item off the end of the array.
   */
  pop = () => (
    this.stack.pop()
  )

  /**
   * Peek into the stack.
   *
   * Looks at the last item in the array.
   *
   * @return {mixed} The value.
   */
  peek = () => (
    this.stack[this.length() - 1]
  )

  /**
   * Get the length of the stack.
   *
   * @return {integer}
   */
  length = () => (
    this.stack.length
  )

  /**
   * Debugging method.
   *
   * @return {string}
   */
  print = () => (
    this.stack.join(' ')
  )
}

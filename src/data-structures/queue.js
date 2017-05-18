/**
 * The Queue data strucutre.
 *
 * FIFO. First in first out.
 *
 * @type {Array}
 */
export default class QueueDS {
  constructor () {
    this.queue = []
  }

  /**
   * Helper method to get the internal queue.
   *
   * @return {array}
   */
  getQueue = () => (
    this.queue
  )

  /**
   * Add an item to the back of the queue.
   *
   * @param {mixed} value The item to add to the queue.
   * @return {QueueDS}
   */
  enqueue = (value) => {
    this.queue.push(value)

    return this
  }

  /**
   * Remove the first item of the queue.
   *
   * @return {mixed}
   */
  dequeue = () => (
    this.queue.shift()
  )

  /**
   * Take a peek into the first item of the array.
   *
   * @return {mixed}
   */
  peek = () => (
    this.queue[0]
  )

  /**
   * Get the length of the queue.
   *
   * @return {integer}
   */
  length = () => (
    this.queue.length
  )
}

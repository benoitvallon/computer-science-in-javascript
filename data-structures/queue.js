export default class QueueDS {
  constructor () {
    this.queue = []
  }

  enqueue = (value) => {
    this.queue.push(value)
  }

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

  // @todo: Remove me.
  print = () => (
    this.queue.join(' ')
  )
}

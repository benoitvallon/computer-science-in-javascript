/* eslint-disable no-param-reassign */
/**
 * Doubly linked list class.
 *
 * Essentially the same as a singly linked list but now we have a link to both
 * the next and previous. Optionally the tail and head point to each other.
 */

/**
 * A node function.
 * @param {mixed} data The data to store.
 */
export function Node (data) {
  this.data = data
  this.previous = null
  this.next = null
}

export default class DoublyLinkedListDS {
  constructor () {
    this.head = null
    this.tail = null
    this.numberOfValues = 0
  }

  /**
   * Get an array representation of the list.
   *
   * Run through the list and make an array out of it so that we can test.
   *
   * @return {array}
   */
  toArray = () => {
    if (!this.head) {
      return []
    }

    // Initialize the first item in our array.
    const list = [this.head.data]
    let current = this.head

    // Go through the list and get all the datas.
    while (current.next !== null) {
      current = current.next

      // Get current's data not next's data.
      // Otherwise you'll react the end and have an error.
      list.push(current.data)
    }

    return list
  }

  /**
   * Add new data to the list.
   *
   * Create a node then place it somewhere in the list. Hint: At the end.
   *
   * How it works:
   *  1. Create a new node with the passed in data.
   *  2. If the root (head) doesn't exist we will create it and set it to head
   *     and tail otherwise we're appending to this list.
   *  3. If appending to this list we will add it to the tail.
   *    a. The new node's previous is the tail.
   *    b. The tail's next is our new node (this is the step that adds the new
   *       node).
   *    c. Set the tail to the new node.
   *  4. Increment our count.
   *  5. Return ourself so we can chain.
   *
   * @param {mixed} data The data to add.
   *
   * @return {DoublyLinkedListDS}
   */
  add (data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.previous = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.numberOfValues++

    return this
  }

  /**
   * Remove items from the list.
   *
   * There are multiple special cases that we need to handle.
   *  1. It's the HEAD and TAIL NODE (only node).
   *  2. It is the TAIL NODE.
   *  3. It is the HEAD NODE.
   *  4. It's a middle node.
   *
   * @note The actual restitching is done in a separate method to make the
   * readibilty higher. Could just as easily be done within this method. I would
   * even suggest moving it back in since it's a single use method that doesn't
   * provide much value to pull it out.
   *
   * How it works:
   *  1.
   *
   * @param {mixed} data Data to be removed.
   *
   * @return {DoublyLinkedListDS}
   */
  remove (data) {
    let current = this.head

    while (current) {
      if (current.data === data) {
        this.restitch(current)
        this.numberOfValues--
      }

      current = current.next
    }

    return this
  }

  restitch = (current) => {
    if (current === this.head && current === this.tail) {
      this.head = null
      this.tail = null
    } else if (current === this.head) {
      this.head = this.head.next
      this.head.previous = null
    } else if (current === this.tail) {
      this.tail = this.tail.previous
      this.tail.next = null
    } else {
      current.previous.next = current.next
      current.next.previous = current.previous
    }
  }

  insertAfter (data, toNodeData) {
    let current = this.head

    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data)
        if (current === this.tail) {
          this.add(data)
        } else {
          current.next.previous = node
          node.previous = current
          node.next = current.next
          current.next = node
          this.numberOfValues++
        }
      }

      current = current.next
    }

    return this
  }

  /**
   * Apply a function to all the elements in the list.
   *
   * @param {Function} fn Callback
   *
   * @return {DoublyLinkedListDS}
   */
  traverse = (fn) => {
    let current = this.head

    while (current) {
      if (fn) {
        fn(current)
      }

      current = current.next
    }

    return this
  }

  /**
   * Apply a function to all the elements in the list in reverse.
   *
   * @param {Function} fn Callback
   *
   * @return {DoublyLinkedListDS}
   */
  traverseReverse = (fn) => {
    let current = this.tail

    while (current) {
      if (fn) {
        fn(current)
      }
      current = current.previous
    }

    return this
  }

  /**
   * Get the length of the list.
   *
   * @return {integer}
   */
  length = () => (
    this.numberOfValues
  )
}

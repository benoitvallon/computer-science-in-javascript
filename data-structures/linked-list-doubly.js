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
   *  1. If the data we want to remove is the current then we'll remove it.
   *    a. Otherwise set current to it's next.
   *  2. We restich it (check it's documentation).
   *  3. Update the number of values.
   *  4. Return ourself so that we can chain.
   *
   * @param {mixed} data Data to be removed.
   *
   * @return {DoublyLinkedListDS}
   */
  remove (data) {
    let current = this.head

    while (current) {
      // This is what we want to remove.
      if (current.data === data) {
        // Re-stitch the head and tail and let the data die off in the ether.
        this.restitch(current)

        // Decrement the count.
        this.numberOfValues--
      }

      // Goto the next item.
      current = current.next
    }

    return this
  }

  /**
   * This is what actually does the restitching.
   *
   * There are multiple special cases that we need to handle.
   *  1. It's the HEAD and TAIL NODE (only node).
   *    - Clear the list.
   *  2. It is the HEAD NODE.
   *    - Make head's next head and remove the pointer to previous. Thusly
   *      removing any links to this node and allowing garbage collection to
   *      take it to the next world.
   *  3. It is the TAIL NODE.
   *    - Same as before but in the opposite.
   *  4. It's a middle node.
   *    - Then we want to get current's previous and next to point to each
   *      other.
   *
   * @param {Node} current The current node to remove
   */
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

  /**
   * Insert data after certain data.
   *
   * We in fact do not care about the head since that's where we start and we
   * ONLY allow insert after not before.
   *
   * How it works:
   *  1. While we have a list (aka current is a valid node) do our comparisons.
   *  2. If the current's data where we want to insert after then:
   *    a. Check if TAIL NODE then just this.add().
   *    a. Stitch it up by:
   *      - Using current's next's previous and setting it to the new node.
   *      - Setting new node's previous to current and next to current's next.
   *      - Then set current's next to our new node.
   *      -
   *  3. Increment our internal count/length/numberOfValues.
   *  4. Set current to it's next and continue.
   *
   * @param {mixed} data The data to insert.
   * @param {mixed} toNodeData The data to insert after.
   * @return {SinglyLinkedListDS}
   */
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

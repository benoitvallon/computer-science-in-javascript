/**
 * [Node description]
 * @param {[type]} data [description]
 */
export function Node (data) {
  this.data = data
  this.next = null
}

/**
 * [head description]
 * @type {[type]}
 */
export default class SinglyLinkedListDS {
  // Set initial state of the list.
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
   * Add an item onto the list.
   *
   * Create a node then place it somewhere in the list. Hint: At the end.
   *
   * How it works:
   *  1. We first create a new node with the data.
   *  2. If head doesn't exist let's start the list.
   *  3. Otherwise let's append it to the end.
   *  4. Increment the length count.
   *  5. Return myself so that we can get that sweet, sweet DSL going.
   *
   * @param {mixed} data The data to store.
   *
   * @return {SinglyLinkedListDS}
   */
  add = (data) => {
    const node = new Node(data)

    // No head ? Start list : Append to list. (Do you like that ternary dawg?)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    // Increment the length/count/numberOfValues.
    this.numberOfValues++

    return this
  }

  /**
   * Remove some data from the list.
   *
   * This one is more tricky because we need to handle 3 different cases.
   *  1. Head (super easy)
   *  2. Tail (super easy)
   *  3. Center (Annoying, but still easy)
   *
   * How it works:
   *  1. Demand data otherwise error (I would rather just return this ...).
   *  2. Set the current and previous to head to start.
   *  3. While the current exists we'll keep iterating through the list and
   *     comparing the current's data and the data passed in to see if we need
   *     to perform a removal.
   *  4. If current's data is not our data then we'll set previous to current.
   *  5. If this IS our data then we need to handle 3 different cases.
   *    a. If data is in the HEAD NODE: Reset head to it's next.
   *    b. If data is in the TAIL NODE: Reset tail to it's previous.
   *    c. If data is in a MIDDLE NODE: Set previous' next is current's next.
   *  6. Decrement the count/length/numberOfValues.
   *  7. Lastly we'll set current to the next item in the list.
   *
   * @param {mixed} data The data.
   *
   * @return {SinglyLinkedListDS}
   */
  remove = (data) => {
    if (!data) {
      // I could also "return this" and not have to deal with an exception.
      throw new Error('Requires data ya doof')
    }

    // Where we start.
    let current = this.head

    // We want to maintain a previous pointer in case we need to do some sewing.
    let previous = this.head

    // While we have a list let's go ahead and find the data and remove it.
    // Don't need to worry about memory management so it's okay if we remove
    // and let it live in memory space somewhere :).
    while (current) {
      // Let's maintain the previous pointer.
      if (current.data !== data) {
        previous = current
      }

      // If this node contains the data that is to be removed.
      if (current.data === data) {
        // If what we're removing is the head then make it's next the new head.
        if (current === this.head) {
          this.head = this.head.next
        }

        // If we are removing the tail make it's previous the new tail.
        if (current === this.tail) {
          this.tail = previous
        }

        // Do the final stitching and decrement the count/length/numberOfValues.
        // This is the main case as the above two are the special cases.
        // Meaning that we expect most of the time to be removing from the
        // middle. That means that we want make the previous' next be current's
        // next. Essentially removing the middle node.
        previous.next = current.next
        this.numberOfValues--
      }

      // Set current to the next item in the list if it exists; this'll allow
      // us to test the next item for removal.
      current = current.next
    }

    return this
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
   *    a. Check if TAIL NODE then we set the tail's next to the newly created
   *       node and set tail to the new node.
   *    a. Else it's anywhere else in the list and we can set the new node's
   *       next to current's next then reset current's next to our current node.
   *  3. Increment our internal count/length/numberOfValues.
   *
   * @param {mixed} data The data to insert.
   * @param {mixed} toNodeData The data to insert after.
   * @return {SinglyLinkedListDS}
   */
  insertAfter = (data, toNodeData) => {
    let current = this.head

    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data)

        if (current === this.tail) {
          this.tail.next = node
          this.tail = node
        } else {
          node.next = current.next
          current.next = node
        }

        this.numberOfValues++
      }

      current = current.next
    }

    return this
  }

  /**
   * Apply a callback to each element of the list.
   *
   * @param {Function} fn A callback for some reason
   * @return {SinglyLinkedListDS}
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
   * Get the length of the list.
   *
   * This one is special because internally we aren't handling this with an
   * internal JavaScript array. So we have to maintain our own count which is
   * saved in this.numberOfValues (which we increment or decrement in various
   * areas within this codebase).
   *
   * @return {integer}
   */
  length = () => (
    this.numberOfValues
  )

  print = () => {
    let string = ''
    let current = this.head

    while (current) {
      string += `${current.data} `
      current = current.next
    }

    // eslint-disable-next-line
    console.log(string.trim())
  }
}

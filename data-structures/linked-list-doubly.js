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

  remove (data) {
    let current = this.head

    while (current) {
      if (current.data === data) {
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
        this.numberOfValues--
      }
      current = current.next
    }

    return this
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

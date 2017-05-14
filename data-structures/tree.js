/* eslint-disable no-console */
export function Node (data) {
  this.data = data
  this.children = []
}

export default class TreeDS {
  constructor () {
    this.root = null
  }

  getTree = () => (
    this.root
  )

  add (data, parentData) {
    const node = new Node(data)
    const parent = parentData ? this.findBFS(parentData) : null

    if (parent) {
      parent.children.push(node)
    } else if (!this.root) {
      this.root = node
    } else {
      // I prefer not to do this so I would rather just exclude this else or return this.
      throw new Error('Root node is already assigned')
    }

    return this
  }

  /**
   * Remove a node from the tree.
   *
   * @param {mixed} data The data to remove.
   * @return {TreeDS}
   */
  remove (data) {
    if (this.root == null) {
      return this
    }

    if (this.root.data === data) {
      this.root = null
      return this
    }

    const queue = [this.root]

    while (queue.length) {
      const node = queue.shift()

      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].data === data) {
          node.children.splice(i, 1)
        } else {
          queue.push(node.children[i])
        }
      }
    }

    return this
  }

  contains = (data) => (
    !!this.findBFS(data)
  )

  findBFS (data) {
    const queue = [this.root]
    while (queue.length) {
      const node = queue.shift()
      if (node.data === data) {
        return node
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i])
      }
    }
    return null
  }

  preOrder (node, fn) {
    if (node) {
      if (fn) {
        fn(node)
      }
      for (let i = 0; i < node.children.length; i++) {
        this.preOrder(node.children[i], fn)
      }
    }
  }

  postOrder (node, fn) {
    if (node) {
      for (let i = 0; i < node.children.length; i++) {
        this.postOrder(node.children[i], fn)
      }
      if (fn) {
        fn(node)
      }
    }
  }

  traverseDFS (fn, method) {
    const current = this.root
    if (method) {
      this[`${method}`](current, fn)
    } else {
      this.preOrder(current, fn)
    }
  }

  traverseBFS (fn) {
    const queue = [this.root]
    while (queue.length) {
      const node = queue.shift()
      if (fn) {
        fn(node)
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i])
      }
    }
  }

  print () {
    if (!this.root) {
      console.log('No root node found')
      return
    }

    const newline = new Node('|')
    const queue = [this.root, newline]
    let string = ''
    while (queue.length) {
      const node = queue.shift()
      string += `${node.data.toString()} `
      if (node === newline && queue.length) {
        queue.push(newline)
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i])
      }
    }
    console.log(string.slice(0, -2).trim())
  }

  printByLevel () {
    if (!this.root) {
      console.log('No root node found')
      return
    }

    const newline = new Node('\n')
    const queue = [this.root, newline]
    let string = ''
    while (queue.length) {
      const node = queue.shift()
      string += node.data.toString() + (node.data !== '\n' ? ' ' : '')
      if (node === newline && queue.length) {
        queue.push(newline)
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i])
      }
    }
    console.log(string.trim())
  }
}

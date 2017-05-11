export default class StackDS {
  constructor() {
    this.stack = [];
  }

  getStack = () => (
    this.stack
  )

  push = (value) => {
    this.stack.push(value)

    return this
  }

  pop = () => (
    this.stack.pop()
  )

  peek = () => (
    this.stack[this.length() - 1]
  )

  length = () => (
    this.stack.length
  )

  print = () => (
    this.stack.join(' ')
  )
}

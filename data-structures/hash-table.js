/* eslint-disable no-prototype-builtins */
export default class HashTableDS {
  constructor (size) {
    this.values = {}
    this.numberOfValues = 0
    this.size = size
  }

  add (key, value) {
    const hash = this.calculateHash(key)
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {}
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++
    }
    this.values[hash][key] = value

    return this
  }

  remove (key) {
    const hash = this.calculateHash(key)
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      delete this.values[hash][key]
      this.numberOfValues--
    }
  }

  calculateHash (key) {
    return key.toString().length % this.size
  }

  search (key) {
    const hash = this.calculateHash(key)
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key]
    }
    return null
  }

  length () {
    return this.numberOfValues
  }

  print () {
    let string = ''
    for (const value in this.values) {
      for (const key in this.values[value]) {
        string += `${this.values[value][key]} `
      }
    }
    console.log(string.trim())
  }
}

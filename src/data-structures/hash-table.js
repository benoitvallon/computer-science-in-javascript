/* eslint-disable */
/* eslint-disable no-prototype-builtins */

// http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html
export default class HashTableDS {
  constructor (size) {
    this.values = {}
    this.numberOfValues = 0
    this.size = size
  }

  /**
   * Save a key and value to our quick search table.
   *
   * Object.prototype.hasOwnProperty() is special. It's a way to test if the object has
   * a property as it's own (not inherited). Could also use Object.keys(this.values).
   *
   * @param {string} key The key for the value to save.
   * @param {mixed} value Anything you wanna save.
   */
  add (key, value) {
    const hash = this.calculateHash(key)

    // If this hash doesn't exist we'll create it and initalize it to an empty object.
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {}
    }

    // Check if the hash contains a key and if it doesn't we'll increment the count.
    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++
    }

    // Save the value to the table.
    this.values[hash][key] = value

    return this
  }

  /**
   * Remove data/value from the table by key.
   *
   * Check if the hash and then the key exist THEN delete not before. Make sure to
   * decrement the count.
   *
   * @param {string} key The key used to hash.
   * @return {HashTableDS}
   */
  remove (key) {
    const hash = this.calculateHash(key)

    if (this.search(key)) {
      delete this.values[hash][key]
      this.numberOfValues--
    }

    return this
  }

  /**
   * Calculate the hash for our table.
   *
   * Hashing is a technique to convert a range of key values into a range of indexes of an
   * array. We're going to use modulo operator to get a range of key values. Consider an
   * example of hash table of size 20, and the following items are to be stored. Item are
   * in the (key,value) format.
   *
   * @see https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm
   *
   * @param {string} key The key to hash.
   * @return {integer} The hash index.
   */
  calculateHash = (key) => (
    key.toString().length % this.size
  )

  /**
   * Search the hash table and get the value.
   *
   * @param {string} key The string
   * @return {mixed}
   */
  search (key) {
    const hash = this.calculateHash(key)
    let value = null

    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      value = this.values[hash][key]
    }

    return value
  }

  /**
   * Get the length of the table.
   *
   * @return {integer}
   */
  length = () => (
    this.numberOfValues
  )
}

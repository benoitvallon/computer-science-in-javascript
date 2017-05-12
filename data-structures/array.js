/**
 * [array description]
 * @type {ArrayDS}
 */
export default class ArrayDS {
  constructor () {
    this.array = []
  }

  getArray = () => (
    this.array
  )

  /**
   * Add an item to the end of the array.
   * @param {mixed} data What to add to the array.
   */
  add = (data) => {
    this.array.push(data)
    return this
  }

  /**
   * Remove an item from the array.
   *
   * @param {mixed} data The data (a copy) to remove.
   * @return {ArrayDS} [description]
   */
  remove = (data) => {
    // filter(): a new array with all elements that pass the test by the
    // provided function. https://mzl.la/2r1yFPU So as long as this array does
    // not contain the data passed in it'll be added to the new array.
    this.array = this.array.filter((current) => current !== data)

    return this
  }

  /**
   * Find the first instance of a match if it exists.
   *
   * Uses indexOf. indexOf will either find the first match or -1 if it found
   * nothing.
   *
   * @param {mixed} data The data to match against.
   * @return {null|integer}
   */
  search = (data) => (
    this.searchCleanup(this.array.indexOf(data))
  )

  /**
   * We do not want to play with magic constants.
   *
   * I'm not going to lie. I really really like the shorthand return syntax.
   *
   * Basically this: ~-1 === 0 == false
   *
   * This looks super clever but it isn't once you know the compliment (run ~-1
   * in the console). Then you'll see that bitwise -1 is 0 which is false in
   * avascript making this return a null. Hense my little shortcut documentation
   * below above: ~-1 === 0 == false
   *
   * Don't be cute like this. An easier to read expression is as such and
   * therefore: index === -1 ? null : index. Or check for < 0 which is easiest.
   *
   * @FunQuestion: Why not return 0 or -1? Or maybe false or a string?
   *
   * @param {[type]} Clean up the index return value.
   * @return {null|integer}
   */
  searchCleanup = (index) => (
    ~index ? index : null
  )

  /**
   * Find all indexes of data.
   *
   * @param {mixed} data The data we are searching for.
   * @return {array}
   */
  findAll = (data) => {
    const indexes = []
    let i = -1

    // eslint-disable-next-line
    while ((i = this.array.indexOf(data, i + 1)) != -1) {
      indexes.push(i)
    }

    return indexes
  }

  /**
   * Get the value at given index.
   *
   * Does not do error checking; just assumes that value exists.
   *
   * @param {integer} index The index the value exists.
   *
   * @return {mixed}
   */
  getAtIndex = (index) => (
    this.array[index]
  )

  /**
   * Get the length of the array.
   *
   * @return {integer}
   */
  length = () => (
    this.array.length
  )

  /**
   * Return this Array object as a string.
   *
   * @return {string}
   */
  print = () => (
    this.array.join(' ')
  )
}

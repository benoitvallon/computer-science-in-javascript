/**
 * A collection of unique values.
 *
 * Think Venn Diagram
 *    Union: All.
 *    Interection: The middle bit.
 *    Difference: A side minus the middle bit.
 *
 * @type {Array}
 */
export default class SetDS {
  constructor () {
    this.values = []
    this.numberOfValues = 0
  }

  /**
   * Add a value to the set whilst insuring uniqueness.
   *
   * @param {mixed} value [description]
   * @return {SetDS} Myself so we can keep this chain gang going.
   */
  add = (value) => {
    if (this.values.indexOf(value) < 0) {
      this.values.push(value)
      this.numberOfValues++
    }

    return this
  }

  /**
   * Remove an item from the array.
   *
   * @param {mixed} value The value to be removed.
   * @return {SetDS} Myself so we can keep this chain gang going.
   */
  remove = (value) => {
    const index = this.values.indexOf(value)

    if (index >= 0) {
      // https://mzl.la/2pq1VDE: array.splice(start, deleteCount)
      this.values.splice(index, 1)
      this.numberOfValues--
    }

    return this
  }

  /**
   * Perform a union of two sets.
   *
   * A union is, essentially, just combining both sets. There are mutltiple ways
   * to accomplish this task. Here I chose to use two sets instead of creating
   * one large array and then removing duplicates.
   *
   * @param {SetDS} set A SetDS object
   * @return {SetDS}
   */
  union = (set) => {
    const newSet = new Set()

    this.values.forEach((value) => {
      newSet.add(value)
    })

    set.values.forEach((value) => {
      newSet.add(value)
    })

    return newSet
  }

  /**
   * Find the intersection of two sets.
   *
   * To do this we want to compare each item in our current set (this.values) to
   * the incomming set and if they are the same save it to a new set and return
   * that intersection.
   *
   * @param {SetDS} set A SetDS object to compare against.
   * @return {SetDS} The intersection
   */
  intersect = (set) => {
    const intersection = new SetDS()

    this.values.forEach((value) => {
      if (set.contains(value)) {
        intersection.add(value)
      }
    })

    return intersection
  }

  /**
   * Find the difference between this set and the paramater set.
   *
   * Very similar to intersect but this time it is the opposite.
   *
   * @param {SetDS} set A SetDS object to compare against.
   * @return {SetDS} The difference.
   */
  difference = (set) => {
    const newSet = new SetDS()

    this.values.forEach((value) => {
      if (!set.contains(value)) {
        newSet.add(value)
      }
    })

    return newSet
  }

  /**
   * Determine if the passed in set is a subset of me.
   *
   * This is different from the above two methods. This time we will use and
   * array method called [].every() that returns a boolean and accepts a
   * callabck that returns a boolean. It will iterate over each item and so long
   * as everything comes back positive from the callback then the passed in set
   * is a subset.
   *
   * @param {SetDS} set A SetDS object to compare against.
   * @return {boolean}
   */
  isSubset = (set) => (
    // If every item in the subset returns true it is a subset.
    set.values.every((value) => (
      this.contains(value)
    ))
  )

  /**
   * Get the length of the set.
   *
   * @return {integer}
   */
  length = () => (
    this.numberOfValues
  )

  /**
   * Determine if this values exists in our set.
   *
   * @param {mixed} value The value to test against
   * @return {boolean}
   */
  contains = (value) => (
    this.values.indexOf(value) !== -1
  )
}

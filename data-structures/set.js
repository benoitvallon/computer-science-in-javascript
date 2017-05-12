/**
 * A collection of unique values.
 *
 * Think Venn Diagram
 * Union: All.
 * Interection: The middle bit.
 * Difference: A side minus the middle bit.
 *
 * Coolio.
 *
 * @type {Array}
 */
export default class SetDS {
  constructor () {
    this.values = []
    this.numberOfValues = 0
  }

  getSet = () => (
    this.values
  )

  /**
   * Add a value to the set whilst insuring uniqueness.
   *
   * @param {mixed} value [description]
   */
  add = (value) => {
    if (this.values.indexOf(value) < 0) {
      this.values.push(value)
      this.numberOfValues++
    }

    return this
  }

  remove = (value) => {
    const index = this.values.indexOf(value)

    if (index >= 0) {
      // https://mzl.la/2pq1VDE: array.splice(start, deleteCount)
      this.values.splice(index, 1)
      this.numberOfValues--
    }

    return this
  }

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

  intersect = (set) => {
    const intersection = new SetDS()

    this.values.forEach((value) => {
      if (set.contains(value)) {
        intersection.add(value)
      }
    })

    return intersection
  }

  difference = (set) => {
    const newSet = new SetDS()

    this.values.forEach((value) => {
      if (!set.contains(value)) {
        newSet.add(value)
      }
    })

    return newSet
  }

  isSubset = (set) => (
    // If every item in the subset returns true it is a subset.
    set.values.every((value) => (
      this.contains(value)
    ))
  )

  length = () => (
    this.numberOfValues
  )

  contains = (value) => (
    this.values.indexOf(value) !== -1
  )
}

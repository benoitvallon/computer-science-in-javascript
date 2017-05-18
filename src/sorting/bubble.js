/**
 * A traditional bubble sort.
 *
 * @param {array} array The array to sort.
 * @return {array}
 */
export const bubbleSort = (array) => {
  // This is so that we don't modify the array coming in.
  const sortedArray = array
  let sorted = false
  let lastUnsorted = array.length

  while (!sorted) {
    sorted = true

    for (let current = 0; current < lastUnsorted; current++) {
      const next = current + 1

      if (sortedArray[current] > sortedArray[next]) {
        const oldCurrent = sortedArray[current]
        sortedArray[current] = sortedArray[next]
        sortedArray[next] = oldCurrent
        sorted = false
      }
    }

    lastUnsorted--
  }

  return sortedArray
}

/**
 * A recursive bubble sort.
 *
 * @param {array} array The array to sort.
 * @param {int} count The size of the array.
 * @return {array}
 */
export const bubbleSortRecursive = (array, count) => {
  if (count === 1) {
    return array
  }

  const sortedArray = array

  for (let current = 0; current < count - 1; current++) {
    const next = current + 1
    if (array[next] < array[current]) {
      const temp = array[current]
      sortedArray[current] = array[next]
      sortedArray[next] = temp
    }
  }

  return bubbleSortRecursive(array, count - 1)
}

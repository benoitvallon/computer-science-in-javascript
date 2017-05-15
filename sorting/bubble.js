/* eslint-disable no-console, no-param-reassign */
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

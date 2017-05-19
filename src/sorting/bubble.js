/**
 * A traditional bubble sort.
 *
 * 1. You compare the first item with the second. If the first item is bigger
 *    than the second item. you swap them so that the bigger one stays in the
 *    second position.
 * 2. And then compare second with third item. if second item is bigger than the
 *    third, we swap them. otherwise, they stayed in their position. Hence, the
 *    biggest among first three is in the third position.
 * 3. we keep doing it. until we hit the last element of the array. In that way
 *    we bubble up the biggest item of the array to the right most position of
 *    the array.
 * 4. Look at the inner loop in the code below.
 * 5. We repeat this process, starting from the last item of the array. look at
 *    the outer loop in the code below. We do this way, so that after finishing
 *    the first inner loop, the biggest one will be in the last item of the
 *    array.
 * 6. and then we move backward inside the outer loop.
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

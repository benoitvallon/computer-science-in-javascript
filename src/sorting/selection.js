/* eslint-disable no-console */

/**
 * Sort an array using the selection sort algorithm.
 *
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element
 * (considering ascending order) from unsorted part and putting it at the beginning. The
 * algorithm maintains two subarrays in a given array.
 *   1. The subarray which is already sorted
 *   2. Remaining subarray which is unsorted.
 *
 * In every iteration of selection sort, the minimum element (considering ascending
 * order) from the unsorted subarray is picked and moved to the sorted subarray.
 *
 * Following example explains the above steps:
 *
 *   arr[] = 64 25 12 22 11
 *   Find the minimum element in arr[0...4] and place it at beginning
 *   11 | 25 12 22 64
 *
 *   Find the minimum element in arr[1...4] and place it at beginning of arr[1...4]
 *   11 12 | 25 22 64
 *
 *   Find the minimum element in arr[2...4] and place it at beginning of arr[2...4]
 *   11 12 22 | 25 64
 *
 *   Find the minimum element in arr[3...4] and place it at beginning of arr[3...4]
 *   11 12 22 25 | 64
 *
 * @see http://www.geeksforgeeks.org/selection-sort/
 *
 * @param {array} array The array to sort.
 * @return {array}
 */
export const selectionSort = (array) => {
  const sortedArray = array
  const arrayLength = sortedArray.length
  let minimumIndex = sortedArray.length
  let temp = sortedArray.length

  for (let i = 0; i < arrayLength; i++) {
    minimumIndex = i

    // Iterate and find the index of the smallest element starting at the next element
    // from the sorted array.
    for (let j = i + 1; j < arrayLength; j++) {
      // We do not break here because we need to compare the entire list.
      if (sortedArray[j] < sortedArray[minimumIndex]) {
        minimumIndex = j
      }
    }

    // Perform the swap and go to the next element in the list.
    temp = sortedArray[i]
    sortedArray[i] = sortedArray[minimumIndex]
    sortedArray[minimumIndex] = temp
  }

  return sortedArray
}

/**
 * @todo: Finish this work buddy.
 */
// export const selectionSortRecursive = (array, startIndex) => {
//   // http://www.cs.kzoo.edu/cs210/Labs/Recursion/recursiveSelSort.html
//   if (startIndex >= array.length - 1) {
//     return
//   }
//
//   const minIndex = startIndex
//
//   for (let index = startIndex + 1; index < array.length; index++) {
//     if (array[index] < array[minIndex]) {
//       minIndex = index
//     }
//   }
//
//   const temp = array[startIndex]
//   array[startIndex] = array[minIndex]
//   array[minIndex] = temp
//
//   // Our recursive call.
//   selectionSort(array, startIndex + 1)
// }

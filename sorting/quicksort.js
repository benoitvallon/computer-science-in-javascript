/* eslint-disable no-param-reassign */
// http://www.stoimen.com/blog/2012/03/13/computer-algorithms-quicksort/
// http://www.stoimen.com/blog/2012/03/12/algorithm-cheatsheet-quicksort/
// http://www.stoimen.com/blog/2010/06/11/friday-algorithms-quicksort-difference-between-php-and-javascript/

export const quickSort = (arr, left, right) => {
  // let len = arr.length
  let pivot
  let partitionIndex


  if (left < right) {
    pivot = right
    partitionIndex = partition(arr, pivot, left, right)

   // sort left and right
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

export const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(arr, right, partitionIndex)
  return partitionIndex
}

export const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

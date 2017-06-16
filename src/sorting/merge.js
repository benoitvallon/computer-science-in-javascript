/**
 * Given an unsorted array: [34, 203, 3, 746, 200, 984, 198, 764, 9]
 * We want to see this sorted array: [3, 9, 34, 198, 200, 203, 746, 764, 984]
 *
 * If we output the left and right as we go to the console we'll see this:
 * [34, 203, 3, 746] [200, 984, 198, 764, 9]
 * [34, 203] [3, 746]
 * [34] [203]
 * [3] [746]
 * [200, 984] [198, 764, 9]
 * [200] [984]
 * [198] [764, 9]
 * [764] [9]
 *
 * This is why recursion is difficult to understand. What it outputs is not what we expect
 * so let us go ahead and make this easier to read and understand. We will use the above
 * fixture as an example.
 *
 * First the method will split the array in two. To note we choose right side smaller in
 * our method in the happenstance of an odd list.
 * LEFT: [34, 203, 3, 746] ----- RIGHT: [200, 984, 198, 764, 9]
 *
 * This is where things get a bit wierd. In the method below you'll notice that we pass
 * the left side first and then the right side into the merge method. Since we are calling
 * mergeSort again (recursion) as we pass it into merge we'll keep doing the left side in
 * the stack as it keeps going in. Then the right side will have it's chance and then
 * it'll all bubble up. Enough of that let's go ahead and continue.
 *
 * We take the left side and we cut that up to it's own left and right and pass that into
 * the merge method again.
 *
 * LEFT: [34, 203] ----- RIGHT: [3, 746]
 * LEFT: [34]----- RIGHT: [203]
 *
 * For mor imformation:
 * @see https://www.youtube.com/watch?v=sWtYJv_YXbo
 */

/**
 * Sort an array using the merge sort algorithm.
 *
 * Code is a simplified version of:
 * @see http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
 *
 * @param {array} arr The array to sort.
 * @return {array}
 */
export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const middle = parseInt(arr.length / 2, 10)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * The actual merging.
 *
 * Once you get past the recursion this is actually pretty simple.
 *
 * 1. Setup some variables that we'll be using to build the sorted array.
 * 2. We will loop through as long as each array has values left in BOTH.
 * 3. In our comparison we see if left or right is less. If left is less we'll
 *    put first into our result array otherwise place the right.
 * 4. After our loop we'll finish by concating any leftovers.
 *
 * @param {array} left Left array.
 * @param {array} right Right array.
 * @return {array}
 */
export const merge = (left, right) => {
  const result = []
  let l = 0
  let r = 0

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }

  // Remaining part needs to be addred to the result.
  return result
    .concat(left.slice(l))
    .concat(right.slice(r))
}

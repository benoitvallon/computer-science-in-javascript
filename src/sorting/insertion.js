/**
 * Sort an array using the insertion sort algorithm.
 *
 * Complexity: the worst case O(n2) and best case O(n)
 *
 * How it works:
 * Imagine you are playing cards. Somebody is giving you cards one by one. When you are
 * receiving card, you are planning to put them in a way so that the smaller one is on the
 * left. This means you want to insert them in a sorted way
 *
 * Assuming this unordered set: [5, 2, 4, 10, 7, 3]
 *
 * 1. If the first card you are getting is 5. Just hold the card in your hand. You dont
 *    have to do anything.
 * 2. If the second card is 2, you want to put it before 5 so that the two cards you have
 *    are sorted. When you are putting the card with number 2 at the left, you are
 *    changing the position of the card 5 from first position to second position. And then
 *    first position becomes available and you put 2 there.
 * 3. If the third card is 4 you will start from second position. In the second position
 *    you have card 5 which is bigger than 4. Hence you will move 5 to the third position.
 *    The next card to the left is 2 which is smaller than 4. Hence, you needn't move 2.
 *    You will insert card 4 in the second position.
 * 4. Then you got 10. It is bigger than the previous card which is 5. Hence, you just add
 *    it at the last position.
 * 5. The next card is 7. You just move the position of the card 10 to the right and
 *    insert card 7.
 * 6. If the last card is 3. You will have to move 10 to the right as it is bigger than 3
 *    and then you check with the next card to the left it is 7 which is bigger than 3.
 *    You move it to the right. Similarly, you move 5, 4 to the right and put the number
 *    3 before 2 as 2 is smaller than 3.
 *
 * @see https://khan4019.github.io/front-end-Interview-Questions/sort.html#selectionSort
 *
 * @param {array} array The array to sort.
 *
 * @return {array}
 */
export const insertionSort = (array) => {
  // Using .slice(0) is the ONLY way to clone the array.
  const sorted = array.slice(0)

  // Remember, we start at 1 because we assume the first item of the array as sorted. This
  // only saves us one iteration. In other words the first element of this collection will
  // become the first sorted element of the sorted array we are saving ourselves time with
  // this implicit skip.
  //
  // i is our index in our sorted array while j is our index in the unsorted array.
  for (let i = 1; i < sorted.length; i++) {
    const pivot = sorted[i]
    let j = i - 1

    while (j >= 0 && sorted[j] > pivot) {
      sorted[j + 1] = sorted[j]
      j--
    }

    sorted[j + 1] = pivot
  }

  return sorted
}

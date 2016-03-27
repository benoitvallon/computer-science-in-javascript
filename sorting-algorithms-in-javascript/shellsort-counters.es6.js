// sample of arrays to sort
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// gaps
const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for(let g = 0; g < gaps.length; g++) {
    const gap = gaps[g];
    for(let i = gap; i < array.length; i++) {
      countOuter++;
      const temp = array[i];
      let last = i;
      for(let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        countInner++;
        countSwap++;
        array[j] = array[j - gap];
        last -= gap;
      }
      array[last] = temp;
    }
  }
  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

shellsort(arrayRandom.slice()); // => outer: 15 inner: 11 swap: 11
shellsort(arrayOrdered.slice()); // => outer: 15 inner: 0 swap: 0
shellsort(arrayReversed.slice()); // => outer: 15 inner: 13 swap: 13

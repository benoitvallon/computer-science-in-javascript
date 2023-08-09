// sample of arrays to sort
let arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// gaps
let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for(let g = 0; g < gaps.length; g++) {
    let gap = gaps[g];
    for(let i = gap; i < array.length; i++) {
      countOuter++;
      let temp = array[i];
      for(let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        countInner++;
        countSwap++;
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

shellsort(arrayRandom.slice()); // => outer: 15 inner: 11 swap: 11
shellsort(arrayOrdered.slice()); // => outer: 15 inner: 0 swap: 0
shellsort(arrayReversed.slice()); // => outer: 15 inner: 13 swap: 13

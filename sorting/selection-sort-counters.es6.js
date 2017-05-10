// sample of arrays to sort
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function selectionSort(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for(let i = 0; i < array.length; i++) {
    countOuter++;
    let min = i;
    for(let j = i + 1; j < array.length; j++) {
      countInner++;
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      countSwap++;
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

selectionSort(arrayRandom.slice()); // => outer: 10 inner: 45 swap: 5
selectionSort(arrayOrdered.slice()); // => outer: 10 inner: 45 swap: 0
selectionSort(arrayReversed.slice()); // => outer: 10 inner: 45 swap: 5

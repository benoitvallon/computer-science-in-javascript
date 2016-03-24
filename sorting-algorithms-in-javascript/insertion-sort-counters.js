// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      countInner++;
      countSwap++;
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

insertionSort(arrayRandom.slice()); // => outer: 10 inner: 21 swap: 21
insertionSort(arrayOrdered.slice()); // => outer: 10 inner: 0 swap: 0
insertionSort(arrayReversed.slice()); // => outer: 10 inner: 45 swap: 45

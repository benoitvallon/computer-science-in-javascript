// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      countInner++;
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      countSwap++;
      swap(array, i, min);
    }
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

selectionSort(arrayRandom.slice()); // => outer: 10 inner: 45 swap: 5
selectionSort(arrayOrdered.slice()); // => outer: 10 inner: 45 swap: 0
selectionSort(arrayReversed.slice()); // => outer: 10 inner: 45 swap: 5

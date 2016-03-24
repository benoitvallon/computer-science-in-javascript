// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  for(var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for(var i = gap; i < array.length; i++) {
      var temp = array[i];
      for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

console.log(shellsort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

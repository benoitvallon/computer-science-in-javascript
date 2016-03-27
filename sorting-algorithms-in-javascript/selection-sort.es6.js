// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}

console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

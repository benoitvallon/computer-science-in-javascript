// sample of arrays to sort
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let countOuter = 0;
let countInner = 0;
let countSwap = 0;

function resetCounters() {
  countOuter = 0;
  countInner = 0;
  countSwap = 0;
}

// top-down implementation
function mergeSortTopDown(array) {
  countOuter++;
  if(array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

function mergeTopDown(left, right) {
  const array = [];

  while(left.length && right.length) {
    countInner++;
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

mergeSortTopDown(arrayRandom.slice()); // => outer: 19 inner: 24 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

mergeSortTopDown(arrayOrdered.slice()); // => outer: 19 inner: 15 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

mergeSortTopDown(arrayReversed.slice()); // => outer: 19 inner: 19 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

// bottom-up implementation
function mergeSortBottomUp(array) {
  let step = 1;
  while (step < array.length) {
    countOuter++;
    let left = 0;
    while (left + step < array.length) {
      countInner++;
      mergeBottomUp(array, left, step);
      left += step * 2;
    }
    step *= 2;
  }
  return array;
}
function mergeBottomUp(array, left, step) {
  const right = left + step;
  const end = Math.min(left + step * 2 - 1, array.length - 1);
  let leftMoving = left;
  let rightMoving = right;
  const temp = [];

  for (let i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
      temp[i] = array[leftMoving];
      leftMoving++;
    } else {
      temp[i] = array[rightMoving];
      rightMoving++;
    }
  }

  for (let j = left; j <= end; j++) {
    countSwap++;
    array[j] = temp[j];
  }
}

mergeSortBottomUp(arrayRandom.slice()); // => outer: 4 inner: 9 swap: 36
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

mergeSortBottomUp(arrayOrdered.slice()); // => outer: 4 inner: 9 swap: 36
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

mergeSortBottomUp(arrayReversed.slice()); // => outer: 4 inner: 9 swap: 36
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

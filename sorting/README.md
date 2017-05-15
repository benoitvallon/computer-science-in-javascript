[JS: Interview Questions - Sorting](https://khan4019.github.io/front-end-Interview-Questions/sort.html)

[About the #sorting-algorithms series](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript/
)

[Friday Algorithms: JavaScript Bubble Sort]( http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/)

https://github.com/stoimen/algorithms

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merger Sort
* Quick Sort
* Heap Sort
* Bucket Sort
* Shell Sort
* PigeonHole Sort
* BinaryTree Sort
* Radix Sort
* Cocktail Sort
* Other Sort

## Bubble Sort
1. You compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.
2. And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.
3. we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.
4. Look at the inner loop in the code below.
5. We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.
6. and then we move backward inside the outer loop.

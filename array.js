function MyArray() {
  this.array = [];
}

MyArray.prototype.add = function(data) {
  this.array.push(data);
};
MyArray.prototype.remove = function(data) {
  if(~this.array.indexOf(data)) {
    this.array.splice(this.array.indexOf(data), 1);
  }
};
MyArray.prototype.search = function(data) {
  if(~this.array.indexOf(data)) {
    return this.array.indexOf(data);
  } else {
    return null;
  }
};
MyArray.prototype.getAtIndex = function(index) {
  return this.array[index];
};
MyArray.prototype.length = function() {
  return this.array.length;
};
MyArray.prototype.print = function() {
  console.log(this.array.reduce(function(prev, curr) {
    return prev + curr + ' ';
  }, '').trim());
};

var array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.print(); // => 1 2 3 4
console.log('search 3 gives index 2:', array.search(3)); // => 2
console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); // => 3
console.log('length is 4:', array.length()); // => 4
array.remove(3);
array.print(); // => 1 2 4

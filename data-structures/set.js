class Set {
  constructor() {
    this.values = [];
    this.numberOfValues = 0;
  }

  add(value) {
    if(!~this.values.indexOf(value)) {
      this.values.push(value);
      this.numberOfValues++;
    }
  }

  remove(value) {
    const index = this.values.indexOf(value);
    if(~index) {
      this.values.splice(index, 1);
      this.numberOfValues--;
    }
  }

  contains(value) {
    return this.values.indexOf(value) !== -1;
  }

  union(set) {
    const newSet = new Set();
    set.values.forEach(value => {
      newSet.add(value);
    });
    this.values.forEach(value => {
      newSet.add(value);
    });
    return newSet;
  }

  intersect(set) {
    const newSet = new Set();
    this.values.forEach(value => {
      if(set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    this.values.forEach(value => {
      if(!set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  isSubset(set) {
    return set.values.every(function(value) {
      return this.contains(value);
    }, this);
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    console.log(this.values.join(' '));
  }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
console.log('---');
const set1 = new Set();
set1.add(1);
set1.add(2);
const set2 = new Set();
set2.add(2);
set2.add(3);
const set3 = set2.union(set1);
set3.print(); // => 1 2 3
const set4 = set2.intersect(set1);
set4.print(); // => 2
const set5 = set.difference(set3); // 1 2 4 diff 1 2 3
set5.print(); // => 4
const set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
console.log('set1 length gives 2:', set1.length()); // => 2
console.log('set3 length gives 3:', set3.length()); // => 3

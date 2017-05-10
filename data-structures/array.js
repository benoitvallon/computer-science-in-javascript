class MyArray {
  constructor() {
    this.array = [];
  }

  add(data) {
    this.array.push(data)
  }

  remove (data) {
    this.array = this.array.filter(current => current !== data)
  }

  search(data) {
    const foundIndex = this.array.indexOf(data);
    if (~foundIndex) {
      return foundIndex;
    }

    return null;
  }

  getAtIndex(index) {
    return this.array[index]
  }

  length() {
    return this.array.length
  }

  print() {
    console.log(this.array.join(' '))
  }
}

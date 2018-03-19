function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}

class DoublyLinkedList {
  constructor() {
    const dummyNode = new Node(undefined);
    dummyNode.next = dummyNode;
    dummyNode.previous = dummyNode;
    this.dummy = dummyNode;
    this.numberOfValues = 0;
  }

 /* this should be a private method */
 getNode(i){
    let node = undefined;
    if(i < Math.floor(this.numberOfValues/2)){
       node = this.dummy.next;
       for(let j = 0; j < i; j++){
           node = node.next;
       }
    } else{
        node = this.dummy;
        for(let j = this.numberOfValues; j > i; j--){
            node = node.previous;
        }
    }
    return node;
 }

 /* gets a values within the range of 0 > i >= n */
 get(i){
    if(0 > i || i >= this.numberOfValues) return undefined;
    return this.getNode(i).data;
 }

 /* sets a value withing the range 0 > i >= n */
 set(i,x){
    if(0 > i || i >= this.numberOfValues) return undefined;
    let node = getNode(i);
    let temp = node.data;
    node.data = x;
    return temp;
 }

 /* this should be a private method*/
  addBefore(node,x) {
    const toAdd = new Node(x);

    toAdd.previous = node.previous;
    toAdd.next     = node;

    
    toAdd.next.previous = toAdd;
    toAdd.previous.next = toAdd;
    
    this.numberOfValues++;

    return toAdd;
  }

  /* adds a node at i within the range of 0 > i > n */
  add(i,x){
    if(0 > i || i > this.numberOfValues) return;
    this.addBefore(this.getNode(i),x);
  }

  /* this should be a private method */
  removeNode(x){
    x.previous.next = x.next;
    x.next.previous = x.previous;
    this.numberOfValues--;
  }

  /* remeoves a node within the range of 0 > i >= n */
  remove(i){
    if(0 > i || i >= this.numberOfValues) return undefined;
    let node = this.getNode(i);
    this.removeNode(node);
    return node.data;
  }

  /* apply a function to the entire data set */
  map(fn) {
    let current = this.dummy.next;
    for(let i = 0; i < this.numberOfValues; i++){
      if(fn) {
        current.data = fn(current.data);
      }
      current = current.next;
    }
  }

  /* returns the size of the list */
  length() {
    return this.numberOfValues;
  }

  /* prints out the list */
  print() {
    let string = '';
    let current = this.dummy.next;
    for(let i = 0; i < this.numberOfValues; i++){
      string += `${current.data} `;
      current = current.next;
    }
    console.log(string.trim());
  }
}

/* tester data */

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.print(); // => ''
for(let i = 0; i < 10; i++){
    doublyLinkedList.add(doublyLinkedList.length(),i);
}
doublyLinkedList.map(function(val){return 10*val;});
doublyLinkedList.print(); //=> 0 10 20 30 40 50 60 70 80 90

for(let i = 0; i < doublyLinkedList.length();i++){
    console.log(doublyLinkedList.get(i)); //=> 0\n10\n20\n30\n40\n50\n60\n70\n80\n90\n
}
doublyLinkedList.remove(0);
doublyLinkedList.remove(doublyLinkedList.length()-1);
doublyLinkedList.print(); // => 10 20 30 40 50 60 70 80
console.log(doublyLinkedList.length()); // => 8

/* these line should all print out undefined */
console.log(doublyLinkedList.get(-1));
console.log(doublyLinkedList.get(doublyLinkedList.length()));
console.log(doublyLinkedList.set(-1,10));
console.log(doublyLinkedList.set(doublyLinkedList.length(),10));
console.log(doublyLinkedList.add(-1,10));
console.log(doublyLinkedList.add(doublyLinkedList.length() + 1,10));
doublyLinkedList.print(); // => 10 20 30 40 50 60 70 80
doublyLinkedList.add(0,-10);
doublyLinkedList.print(); // => -10 10 20 30 40 50 60 70 80

/*
doublyLinkedList.print(); // => ''
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', doublyLinkedList.length()); // => 4
doublyLinkedList.remove(3); // remove value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(9); // remove non existing value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(1); // remove head
doublyLinkedList.print(); // => 2 4
doublyLinkedList.remove(4); // remove tail
doublyLinkedList.print(); // => 2
console.log('length is 1:', doublyLinkedList.length()); // => 1
doublyLinkedList.remove(2); // remove tail, the list should be empty
doublyLinkedList.print(); // => ''
console.log('length is 0:', doublyLinkedList.length()); // => 0
doublyLinkedList.add(2);
doublyLinkedList.add(6);
doublyLinkedList.print(); // => 2 6
doublyLinkedList.insertAfter(3, 2);
doublyLinkedList.print(); // => 2 3 6
doublyLinkedList.traverseReverse(node => { console.log(node.data); });
doublyLinkedList.insertAfter(4, 3);
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 4);
doublyLinkedList.insertAfter(7, 6); // insertAfter the tail
doublyLinkedList.print(); // => 2 3 4 5 6 7
doublyLinkedList.add(8); // add node with normal method
doublyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', doublyLinkedList.length()); // => 7
doublyLinkedList.traverse(node => { node.data = node.data + 10; });
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
doublyLinkedList.traverse(node => { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.length()); // => 7
doublyLinkedList.traverseReverse(node => { console.log(node.data); }); // => 18 17 16 15 14 13 12
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.length()); // => 7
*/

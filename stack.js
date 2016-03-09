function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  this.stack.push(value);
};
Stack.prototype.pop = function() {
  return this.stack.pop();
};
Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};
Stack.prototype.length = function() {
  return this.stack.length;
};
Stack.prototype.print = function() {
  console.log(this.stack.join(' '));
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
console.log('peek is 3:', stack.peek()); // => 3
console.log('pop is 3:', stack.pop()); // => 3
stack.print(); // => 1 2
console.log('pop is 2:', stack.pop());  // => 2
console.log('length is 1:', stack.length()); // => 1
console.log('pop is 1:', stack.pop()); // => 1
stack.print(); // => ''
console.log('peek is undefined:', stack.peek()); // => undefined
console.log('pop is undefined:', stack.pop()); // => undefined

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor (data) {
    this.data=[]
  }
  push(element) {
    this.data.push(element)
  }

  pop() {
    let a
    return a=this.data.pop()
  }

  peek() {
    let b=this.data.slice(-1).join('')
    return +b
  }
}

module.exports = {
  Stack
};

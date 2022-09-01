class LinkedList {
  _head = new Node();

  append(value) {
    if (this._head.value === null) this._head = new Node(value);
    else {
      let next = this._head;
      while (next.nextNode) {
        next = next.nextNode;
      }
      next.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this._head.value === null) this._head = new Node(value);
    else {
      let node = new Node(value, this._head);
      this._head = node;
    }
  }

  size() {
    let size = 0;
    let next = this._head;
    if (next.value) size++;
    while (next.nextNode) {
      size++;
      console.log(next);
      next = next.nextNode;
    }
    return size;
  }

  head() {
    return this._head;
  }

  tail() {
    let next = this._head;
    while (next.nextNode) {
      next = next.nextNode;
    }
    return next;
  }

  at(index) {
    let next = this._head;
    let counter = 0;
    while (counter <= index) {
      if (counter === index) return next;
      if (!next.nextNode) break;
      next = next.nextNode;
      counter++;
    }
    return null;
  }

  pop() {
    let next = this._head;
    let previous = null;
    while (next.nextNode) {
      previous = next;
      next = next.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let next = this._head;
    let valueExists = false;
    if (next.value === value) valueExists = true;
    while (next.nextNode && !valueExists) {
      next = next.nextNode;
      if (next.value === value) valueExists = true;
    }
    return valueExists;
  }

  find(value) {
    let next = this._head;
    let index = 0;
    if (this._head.value === value) return index;
    while (next.nextNode) {
      next = next.nextNode;
      index++;
      if (next.value === value) return index;
    }
    return null;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();

list.append(45);
list.append(69);
list.prepend(1);

console.log(list.find(1));

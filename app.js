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

console.log(list.at(0));

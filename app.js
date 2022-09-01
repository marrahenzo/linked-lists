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

  toString() {
    let string = '';
    if (this._head.value !== null) {
      let next = this._head;
      while (next) {
        string += `(${next.value}) -> `;
        next = next.nextNode;
      }
    }
    string += 'null';
    return string;
  }

  insertAt(value, index) {
    if (index === 0) this.prepend(value);
    let counter = 0;
    let current = this._head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
      counter++;
      if (counter === index) {
        let newNode = new Node(value, current);
        previous.nextNode = newNode;
        return newNode;
      }
    }
    return null;
  }

  removeAt(index) {
    if (index === this.size() - 1) this.pop();
    let current = this._head;
    let previous = null;
    let counter = 0;
    if (counter === index) {
      if (current.nextNode) {
        this._head = current.nextNode;
      } else return null;
    }
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
      counter++;
      if (counter === index) {
        previous.nextNode = current.nextNode;
      }
    }
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
list.append('hola');
list.prepend('juancho');
list.insertAt(99, 3);
list.removeAt(2);

console.log(list.toString());

class LinkedList {
  head = new Node();

  append(value) {
    if (this.head.value === null) this.head = new Node(value);
    else {
      let next = this.head;
      while (next.nextNode) {
        next = next.nextNode;
      }
      next.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this.head.value === null) this.head = new Node(value);
    else {
      let node = new Node(value, this.head);
      this.head = node;
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

console.log(list.head);

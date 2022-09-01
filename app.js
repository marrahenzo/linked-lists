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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();

list.append(45);
list.append(41);
list.append(47);
list.append(69);

console.log(list);

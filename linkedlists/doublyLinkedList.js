// 10 --> 5 --> 16

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {

  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index,value){
    //check params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traveseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();

  }

  traveseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
    //check params
    if (index >= this.length) {
      return  this.printList();
    }

    const leader = this.traveseToIndex(index-1);
    const follower = leader.next.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return this.printList();
  }

}

const myLinkedList = new DoublyLinkedList(10);

//append elements to the linked list
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList.printList());
console.log(myLinkedList);

myLinkedList.insert(1,38);
console.log(myLinkedList.printList());
console.log(myLinkedList);

myLinkedList.remove(1);

console.log(myLinkedList.printList());
console.log(myLinkedList);

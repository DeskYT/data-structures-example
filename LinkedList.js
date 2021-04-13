class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentNode = null;
  }
  next() {
    this.currentNode = this.currentNode
      ? this.currentNode.next
      : this.list.head;
    return {
      value: this.currentNode ? this.currentNode.value : undefined,
      done: !this.currentNode,
    };
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.push(...args);
  }
  push(...args) {
    for (const item of args) {
      const newNode = new LinkedListNode(item);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
  }
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

class LinkedListNode {
  constructor(v) {
    this.value = v;
    this.prev = null;
    this.next = null;
  }
  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }

  get prev() {
    return this._prev;
  }

  set prev(newPrev) {
    if(newPrev !== null && !LinkedListNode.isLinkedListNode(newPrev)){
      throw new TypeError();
    }
    this._prev = newPrev;
  }

  get next() {
    return this._next;
  }

  set next(newNext) {
    if(newNext !== null && !LinkedListNode.isLinkedListNode(newNext)){
      throw new TypeError();
    }
    this._next = newNext;
  }
  static isLinkedListNode(list) {
    return list instanceof LinkedListNode;
  }
}

const lst = new LinkedList(1,2,3,4,5,6);
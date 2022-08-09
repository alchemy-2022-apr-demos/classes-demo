class Stack {
  #list;

  constructor(list) {
    this.#list = list || [];
  }

  get count() {
    return this.#list.length;
  }

  push(newItem) {
    // add a new item to the list
    this.#list.push(newItem);
  }

  pop() {
    // remove an item from the "top" of the list
  }

  peek() {
    // show the next item to be removed
    return this.#list[this.#list.length - 1];
  }
}

class Queue {}

class MyDataStructure {
  #list = [];
  constructor(initialList) {
    this.#list = initialList;
  }

  get list() {
    return this.#list.toString();
  }
  get count() {
    // access state, ie this.#list
    return this.#list.length;
  }

  set count(count) {
    return (this.#list.length = count);
  }

  static describeClass() {
    console.log("This is a custom Data Structure");
  }
}

class User {
  email;
  #passwordHash;

  constructor(email, password) {
    this.email = email;
    this.#passwordHash = password;
  }

  get passwordHash() {
    return this.#passwordHash;
  }
}

module.exports = { Stack, Queue, MyDataStructure, User };

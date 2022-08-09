const { MyDataStructure, User } = require("./index.js");

class Dog {
  constructor(name, age, breeds) {
    this.name = name;
    this.age = age;
    this.breeds = breeds;
  }
}

const benny = new Dog("Benny", 7, ["Terrier", "Chihauhau"]);

const myStructure = new MyDataStructure([1, 2, 3]);
const anotherStructure = new MyDataStructure(["a", "b", "c"]);
console.log(myStructure.list);
console.log(anotherStructure.list);
myStructure.count = 2;
console.log(myStructure.list);
MyDataStructure.describeClass();

// const user = new User("julie@alchemycodelab.com", "faoigjadf734%734");
// console.log(JSON.stringify(user));
// console.log(user.passwordHash);
// console.log(user);

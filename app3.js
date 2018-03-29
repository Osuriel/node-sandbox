// // Regular Version

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
//
// Person.prototype.greet = function(){
//   console.log(`Whats up ${this.firstName} ${this.lastName}`);
// }

// // Class Version Syntathic Sugar:

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet(){
    console.log(`Whats up ${this.firstName} ${this.lastName}`);
  }
}

const john = new Person('John', 'Solmex');

john.greet();

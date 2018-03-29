var greet = require('./greet');
var Emitter = require('events');
var inherits = require('util').inherits;
var Greet = require('./Greet');
var { GREET, INSULT } = require('./config').events;


// var emitter = new Emitter();
//
// emitter.on(GREET, function(){
//   console.log('someone said Hello!');
// });
//
// emitter.on(GREET, function(){
//   console.log('Yeah someone definately said hello');
// });
//
// emitter.on(INSULT, () => console.log('Someone has been insulted!'));
//
// greet.english();
// emitter.emit(GREET);
// greet.spanish();
//
// console.log('Fuck you cute');
// // emitter.emit(INSULT);
//
// function Greet(name){
//   Emitter.call(this);
//   this.name = name;
// }
//
// inherits(Greet, Emitter);
//
// console.log('Greet.prototype', Greet.prototype);
//
// Greet.prototype.sayHi = function(data){
//   //doStuff
//   console.log(`Hi my name is ${this.name} and the Data is ${data}`)
//   this.emit('stuffWereDone', data, this.name);
// }
//
// const greeter = new Greet('Omar');
//
// greeter.on('stuffWereDone', (data, name) =>{
//   console.log(`listener for stuffWereDone event is ran with ${data} and ${name}`);
// });
//
// console.log('greeter: ', greeter);
//
// greeter.sayHi('XYZ');





const greeter = new Greet('Omar');

greeter.on('stuffWereDone', (data, name) =>{
  console.log(`listener for stuffWereDone event is ran with ${data} and ${name}`);
});


greeter.sayHi('XYZ');

// var obj = {
//   name: 'John Doe',
//   greet: function(){
//     console.log(`Hello my name is ${this.name}`);
//   }
// }
//
// obj.greet();
// obj.greet.call({ name: 'Jane Doe' });
// obj.greet.apply ({ name: 'Jane Doe' });

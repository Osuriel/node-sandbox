var Emitter = require('events');

module.exports = class Greet extends Emitter {
  constructor(name){
    super();
    this.name = name;
  }

  sayHi(data){
    //doStuff
    console.log(`Hi my name is ${this.name} and the Data is ${data}`)
    this.emit('stuffWereDone', data, this.name);
  }

}

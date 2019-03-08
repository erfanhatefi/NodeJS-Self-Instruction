var EventEmitter = require('events');
var util = require('util');

function Greetr() { 
    this.greeting = 'Hello world!';
}

util.inherits(Greetr , EventEmitter);     //i t means that any object that is created by
//Greetr , can also have access to the properties , methods and prototypes of EventEmitter

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');         //it will show that Greetr is also an EventEmitter
}

var greeter1 = new Greetr();

greeter1.on('greet' , function() {
    console.log('Somone greeted!');
});

greeter1.greet();
//PART '2'              example is on the example.js
//a copy of app.js with difference that EventEmitter is passed with a data
var EventEmitter = require('events');
var util = require('util');

function Greetr() {                 //******
    EventEmitter.call(this);        //it will complete inheritance from the EventEmitter [super constructor]
    //it will compeletly gives us the access to all properties of EventEmitter
    //with this .call we will be sure that object has everything
    this.greeting = 'Hello world!';
}

util.inherits(Greetr , EventEmitter);     //it means that any object that is created by
//Greetr , can also have access to the properties , methods and prototypes of EventEmitter
//it sets up the prototype chain

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet' , data);         //it will show that Greetr is also an EventEmitter
    //this.emit('greet',data); actually is the Data which is passed for having later access 
}   //like the outputs of a method or function

var greeter1 = new Greetr();

greeter1.on('greet' , function(data) {
    console.log('Somone greeted! : ' + data);
});

greeter1.greet('Erfan');           //data in here is as an argument
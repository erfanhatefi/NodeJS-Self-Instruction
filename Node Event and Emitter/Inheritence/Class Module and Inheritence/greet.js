var EventEmitter = require('events');
//var util = require('util');

module.exports = class Greetr extends EventEmitter {         //no need for util.inherits(Greetr , EventEmitter); 
    constructor() {
        super();        //instead of 'EventEmitter.call(this);'
        this.greeting = 'Hello world!';
    }

    greet(data){
        console.log(this.greeting + ': ' + data);
        this.emit('greet' , data);
    }
}
//****Dealing with magic string****

var Emitter = require('events');

var eventConfig = require('./config');

var emtr = new Emitter();         //construct emitter

emtr.on(eventConfig.GREET , function(){            //greet is a property name
    console.log('Somewhere, some one ssaid hello ');
});   

emtr.on(eventConfig.GREET , function() {
    console.log('A greeting occured');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);     //it finds the property and lops the array
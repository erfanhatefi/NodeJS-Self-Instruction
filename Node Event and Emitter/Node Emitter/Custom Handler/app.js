var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet' , function(){            //greet is a property name
    console.log('Somewhere, some one ssaid hello ');
});   

emtr.on('greet' , function() {
    console.log('A greeting occured');
});

console.log('Hello!');
emtr.emit('greet');     //it finds the property and lops the array


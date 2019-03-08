'use strict';

var Greetr = require('./greet');

var greeter1 = new Greetr();

greeter1.on('greet' , function(data) {
    console.log('Somone greeted! : ' + data);
});

greeter1.greet('Erfan');  
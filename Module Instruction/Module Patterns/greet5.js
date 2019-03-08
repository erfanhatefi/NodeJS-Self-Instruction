//REVEALING MODULE PATTERN
var greeting = 'Hello world!!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet        //'greeting' would not be accessible outside the module
}
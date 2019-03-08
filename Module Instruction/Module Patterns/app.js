var greet = require('./greet1');
greet();

var greet2 = require('./greet2');
greet2.greet();
//or
//var greet2 = require('./greet2').greet; for instance and then
//greet2();

var greet3 = require('./greet3');
greet3.greet();

greet3.greeting = 'changed hello world';

var greet3 = require('./greet3');
greet3.greet();
//and the greet will be changed and it will be the same object


var Greet4 = require('./greet4');
var gtr = new Greet4();
gtr.greet();

gtr.greeting = "NOOOOOOOOOOO";

var gtr2 = new Greet4();
gtr2.greet();       //cnosole would not show the 'NOOOOOOOOOOO' string

var greet5 = require('./greet5').greet;
greet5();
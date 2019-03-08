//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(LIFE)
(function(){
    var firstname = 'erfan';
    console.log(firstname);
}());

var firstname = 'nima';
console.log(firstname);     //first 'erfan' and then 'nima' would be shown
//if we do this
var firstname = 'nima';

(function(){
    var firstname = 'erfan';
    console.log(firstname);
}());

var firstname = 'nima';
console.log(firstname);

//nothing would change because of the scope`s lifetime
//indeed, firstname would not be changed permenantly

//Another example with passing value

var firstname = 'erfan';
(function (lastname) {
    var firstname = 'erfan';
    console.log(firstname);
    console.log(lastname);
}('randkill'));
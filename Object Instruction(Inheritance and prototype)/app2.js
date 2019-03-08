//INHERITANCE and PROTOTYPE

'use strict';       //helps not make silly mistakes
//NEW
//class defining

class Person {
    constructor(firstname , lastname){      //by this code we can get rid of person function
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {                                 //it is instead of prototype and any method added to 
        console.log('Hello , ' + this.firstname + ' '       //class would be considered as the prototype
+this.lastname);
    }
}


/*
function person(firstname , lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}
*/
//using PROTOTYPE
/*
person.prototype.greet = function(){
    console.log('Hello , ' + this.firstname + ' '
+this.lastname);
};
*/

var erfan = new person('erfan' , 'randkill');

console.log(erfan.firstname + " " + 
erfan.lastname);

//OR use the prototype

erfan.greet();

//and new things

var nima = new person('nima' , 'vh');

nima.greet();

//OR using in this way
//it would return the function which is the 'prototype'
console.log(erfan.__proto__);
console.log(nima.__proto__);

console.log(erfan.__proto__=== nima.__proto__);      //it would return 'true' if the kind of objects are equal
var util = require('util');

function person() {
    this.firstname = 'Erfan';
    this.lastname = 'randkill';
}

person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function policeman() {
    person.call(this);      //we would not have access to the 'firstname' and 'lastname'
                            //unless we add '.call(this);'
    this.badgenumber = '1234';
}

util.inherits(policeman , person);

var officer = new policeman();
officer.greet();
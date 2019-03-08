//Setting up prototype chain instead of objects 
//and saying what they are inheriting from
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var Erfan = Object.create(person);      //I will have an empty object Erfan
Erfan.firstname = 'Erfan';              //overriding it
Erfan.lastname = 'Randkill';            //overriding it

var Nima = Object.create(person);      //I will have an empty object Nima
Nima.firstname = 'Nima';              //overriding it
Nima.lastname = 'VH';            //overriding it

console.log(Erfan.greet());
console.log(Nima.greet());
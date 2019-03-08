//OBJECT
var person = {
    firstname : 'erfan',
    lastname : 'randkill',
    greet : function(){
        console.log("Hello , " + this.firstname + " " 
    + this.lastname);
    }
};

person.greet();

//ways for outputting values and variables

console.log(person['firstname']);

console.log(person.firstname);
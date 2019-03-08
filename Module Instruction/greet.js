//MODULE INSTRUCTION

//console.log("hello");         1

var greet = function(){      
    console.log("hello");
};

//the code is protected and app.js does 
//not have easy access to this greet.js code

//solution :

module.exports = greet;     //it would be like the exit of a function
//greet should not be exported like greet() because it`s a variable kind,
//not a function
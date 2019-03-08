//OBJECT PROPERTIES AND METHODS
var obj = {
    greet : 'Hello'
}

//accessing :
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays

var arr =[];
arr.push(function(){
    console.log("Hello world 1");
});

arr.push(function(){
    console.log('Hello world 2');
});

arr.push(function(){
    console.log('Hello world 3');
});

//lopping over the array
//it will call them one time for every item inside the array
//which are 1 , 2 , 3
arr.forEach(function(item){
    item();
});
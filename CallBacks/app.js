function greet(callback) {          //call back would be a function itself
    console.log('Hello');
    var data = {        
        name: 'Erfan'
    }

    callback(data);              //and when I`m done , I will invoke the callback
}

greet(function(data) {
    console.log('the callback was invoked!');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback was invoked!!');
    console.log(data.name);
});
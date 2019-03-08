var obj = {
    name: 'Erfan Randkill',
    greet: function() {
        console.log('Hello ' + this.name);
    }
}

obj.greet();

obj.greet.call({name : 'Erfan vh'});   //it invokes the methods with difference that it
//will pass and object and it will point to the object passed ,actually we are borrowing
// the fucntion an access to our wanted object

obj.greet.apply({name : 'Erfan vh'}); //it acts actually like the same but with the bellow difference
//about parameters :

var obj = {
    name: 'Erfan Randkill',
    greet: function(parameter) {
        console.log('Hello ' + this.name);
    }
}

obj.greet.call({name : 'Erfan vh'} , parameter);
                                                        //difference is that parameters are passed by comma or array
obj.greet.apply({name : 'Erfan vh'}, [parameter]);

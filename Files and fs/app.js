var fs = require('fs');         //let us deal better and greatly with files

var greet = fs.readFileSync(__dirname + '/greet.txt' , 'utf8'       //it is actually a Synchronous approach
);       //by default it would be 'utf8'

console.log(greet);

//Asynchronous Approach :

//it might take a longer time , and if there was an Error it would be passed as the first parameter 
var greet2 = fs.readFile(__dirname + '/greet.txt' , 'utf8' , function( err , data  )          //callback
{                       //what comes back ,is Buffer full of the binary data now we can convert this by
    console.log(data);  // defining the encoding as we expect this data to be , and in this case , it would
});                     //convert our code from 'utf8' into simple readable String

console.log('Done!');           //this code runs later!!!!!!!!!!!!!!!!!!!!!!!!!!! :)
                                //BACAUSE THE CODE IS WRITTEN "ASYNCHRONOUSLY"
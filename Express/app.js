var express = require('express');       //npm install express --save
var app = express();

//now using environment variables

var port = process.env.PORT || 3000;    //this will be equaled to the environment value
//or if it was not available , it would be 3000

//now responding to the URL

app.get('/' , function(req, res) {      //this will respond to a HTTP request
    res.send('<html><head>Node js</head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api' , function(req , res){
    res.json({
        fistname: 'John' , lastname : 'Doe'
    });
});

app.listen(port);       //it creates a server   , 3000 is the port
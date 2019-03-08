//copy of app2.js with addition that it changes the Templatess
var http = require('http');
var fs = require('fs');

http.createServer(function( req, res){   //it`s a callback, it`s an event listener
    //we need to build a response,first it needs a 'head'
    res.writeHead(200, { 'Content-Type': 'text/html' } );   //200 is status code , and text/plain is the MIME Type
    //by adding 'utf8' to 'fs' , it would be considered as a Stream
    var html = fs.readFileSync(__dirname + '/index2.htm' , { encoding: 'utf8'});
    var message = 'Hello world...';
    html = html.replace('{Message}' , message); //replacing '{Message}' with our message var
    res.end(html);       //it`s the last thing we are sending

}).listen(1337, '127.0.0.1');
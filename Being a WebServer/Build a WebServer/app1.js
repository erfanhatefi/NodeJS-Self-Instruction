//copy of app.js with addition of adding '.html' file into it
var http = require('http');
var fs = require('fs');

http.createServer(function( req, res){   //it`s a callback, it`s an event listener
    //we need to build a response,first it needs a 'head'
    res.writeHead(200, { 'Content-Type': 'text/html' } );   //200 is status code , and text/plain is the MIME Type
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);       //it`s the last thing we are sending

}).listen(1337, '127.0.0.1');
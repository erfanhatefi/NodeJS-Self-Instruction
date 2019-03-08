var http = require('http');

http.createServer(function( req, res){   //it`s a callback, it`s an event listener
    //we need to build a response,first it needs a 'head'
    res.writeHead(200, { 'Content-Type': 'text/plain' } );   //200 is status code , and text/plain is the MIME Type
    res.end('Hello world\n');       //it`s the last thing we are sending , indeed , it means we are ending our sendings

}).listen(1337, '127.0.0.1');
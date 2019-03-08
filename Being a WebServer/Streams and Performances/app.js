var http = require('http');
var fs = require('fs');

http.createServer(function( req, res){   //it`s a callback, it`s an event listener
    //we need to build a response,first it needs a 'head'
    res.writeHead(200, { 'Content-Type': 'text/html' } );   //200 is status code , and text/plain is the MIME Type
    //it`s a Synchronous call
    //var html = fs.readFileSync(__dirname + '/index.htm');     it`s easy to make it to Stream
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    //by this way our buffer would be small , due to that , it would be faster and more responsible

    //res.end(html);       //it`s the last thing we are sending

}).listen(1337, '127.0.0.1');
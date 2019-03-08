var http = require('http');

http.createServer(function(req , res){
    //a response first starts with the "HEAD"
    res.writeHead(200 , {'Content-Type' : 'text/plain' });
    res.end('Hello world!\n');  //means that I`m done sending

}).listen(1337 , '127.0.01');
//copy of app.js with addition of adding '.html' file into it
var http = require('http');
var fs = require('fs');

http.createServer(function( req, res){   //it`s a callback, it`s an event listener
if(req.url === '/text'){
    res.writeHead(200, { 'Content-Type': 'text/html' } );
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);       //it`s the last thing we are sending
}

else if(req.url === '/'){
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
}

else if(req.url === '/api'){
        res.writeHead(200 , {'Content-Type': 'application/json'});
        var obj = {
            firstname: 'Erfan',
            lastname: 'Randkill'
        };
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
    res.end();
}
}).listen(1337, '127.0.0.1');
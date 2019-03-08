var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt' );

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');                                

//this is exactly what the 'pipe' does

/*
readable.on('data' , function(chunk) {      //stream is an EventEmitter
    console.log(chunk);     
    writable.write(chunk);
});*/



//as an instance we could have :

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();       //it creats a transform Stream which is both readable and writable
                                    //actually it compresses the chunck ,a compressed file which is stream

readable.pipe(writable);        //'readable' is the source and the 'writable' is the destination

//REMEMBER the 'pipe' function returns the destination

readable.pipe(gzip).pipe(compressed);     //this method of combination is called , Chaining Method


//We con`t need to read the whole file , we can read it and write it in pieces which is much more easier

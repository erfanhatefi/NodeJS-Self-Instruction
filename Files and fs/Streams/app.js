var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt' , { encoding: 'utf8' , highWaterMark: 16*1024 });
                                //highWaterMark means that how big each chunck should be

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data' , function(chunk) {      //stream is an EventEmitter
    console.log(chunk);
    writable.write(chunk);
});

//We don`t need to read the whole file , we can read it and write it in pieces which is much more easier

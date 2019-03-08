var buf = new Buffer('Hello' , 'utf8');     //giving the value and specify the encoding
console.log(buf);
console.log(buf.toString());        //convertiung back to String
console.log(buf.toJSON());          //converting into JSON
console.log(buf[2]);                //to get one index of JSON data of the buffer

buf.write('wo');
console.log(buf.toString());    //it owerwrites the two first characters of 'hello'
                                //with 'wo' which is 'wollo'
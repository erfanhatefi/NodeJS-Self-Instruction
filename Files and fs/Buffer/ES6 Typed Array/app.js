var buffer = new ArrayBuffer(8);        //Storing 8 Bytes
var view  = new Int32Array(buffer);     //it changes the buffer into Int32 , which is 
                                        //an Integer number with 32 bits (32 0s and 1s)
view[0]  = 5;
view[1] = 15;
view[2] = 30;                           //the buffer des not have the storage for this one[it doesn`t give the Error]
console.log(view);
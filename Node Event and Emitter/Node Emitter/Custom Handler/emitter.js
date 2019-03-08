// it is going to allow us to say an event 
//is happening and respond to it

function Emitter() {
    this.events = {      //object
        prop: []
    };  
}

Emitter.prototype.on = function(type , listner) {     //prototype function called 'on'
     //type is type of event is happening
    //properties on my event object
    this.events[type] =  this.events[type] || []     //making sure if the property exists
    //it means that if the properties exists 'ok' , otherwise , make an array

    this.events[type].push(listner);        //push listner function to the array
}

//we want to say that sth happened

Emitter.prototype.emit = function(type) {
    if(this.events[type]){
        this.events[type].forEach(function(listner) {
            listner();
        });
    }
}

//making this available

module.exports = Emitter;
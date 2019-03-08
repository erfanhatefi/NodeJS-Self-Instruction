//PASSING By Refrence and by Value

// => passing by value
function change(b){
    b = 2 ;
}

var a = 1;
change(a);
console.log(a);     //and '1' would be returned

// => passing by refrence

function changeObj(d) {
    d.prop1 = function () {};
    d.prop2 = {};
}

var c = {};     //empty object
c.prop1 = {};
changeObj(c);
console.log(c);
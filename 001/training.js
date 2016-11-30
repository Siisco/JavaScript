var evenStart = 0;
var evenEnd = prompt("Type how many even numbers you want to see");
evenEnd = Number(evenEnd);
var arr = [];

function myFunction() {
    "use strict";
    for (var i = evenStart;i < evenEnd + evenEnd; i+= 2 ) {
        arr.push(i); 
    }
}
myFunction();
console.log(arr.toString());
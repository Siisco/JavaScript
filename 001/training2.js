var sent = prompt("Enter a sentence");
var lower = sent.toLowerCase();
var arr = lower.split("");
var expCounts = {};
var maxKey = "";


removeStuff();
removeStuff2();
removeStuff3();
ldd();

function removeStuff() {
    "use strict";
    for (var i = arr.length -1; i >= 0; i--) {
        if (arr[i] === ".") {
            arr.splice(i, 1);
        }
    }
}

function removeStuff2() {
    for (var i = arr.length -1; i >= 0; i--) {
        if (arr[i] == " ") {
            arr.splice(i, 1);
        }
    }
}

function removeStuff3() {
    "use strict";
    for (var i = arr.length -1; i >= 0; i--) {
        if (arr[i] === ",") {
            arr.splice(i, 1);
        }
    }
}

arr.sort();

function ldd() {
    "use strict";
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        if (!expCounts[key]) {
        expCounts[key] = 0;
        }
    expCounts[key]++;
        if (maxKey == "" || expCounts[key] > expCounts[maxKey]) {
            maxKey = key;
        }
    }



}









console.log(maxKey + ": " + expCounts[maxKey]);
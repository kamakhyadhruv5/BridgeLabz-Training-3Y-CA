"use strict";

const rows = 5;

for (var i = 1; i <= rows; i++) {
    var pattern = "";

    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trimEnd());
}
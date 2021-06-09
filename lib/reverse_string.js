"use strict";
function ReverseString(input) {
    var reverse = input.split('');
    var length = reverse.length - 1;
    for (var i = 0; i < reverse.length / 2; i++) {
        var temp = reverse[i];
        reverse[i] = reverse[length - i];
        reverse[length - i] = temp;
    }
    return reverse.join("");
}
console.log(ReverseString('banana'));
console.log(ReverseString(ReverseString("Rolfe is a boomer")));

"use strict";
// function that takes number. if number divis by 3, print fizz, if divis by 5 print buzz, if both, print fizzbuzz. Else, print the input number
function FizzBuzz(input) {
    var output = '';
    if (input % 3 == 0)
        output += "fizz";
    if (input % 5 == 0)
        output += "buzz";
    if (output.length)
        console.log(output);
    if (!output.length)
        console.log(input);
}
FizzBuzz(93);
FizzBuzz(90);
FizzBuzz(95);
FizzBuzz(89);

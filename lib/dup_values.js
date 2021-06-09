"use strict";
//count # of duplicate values in a string
function StringtoMap(input) {
    var word_array = input.split('');
    let StringMap = new Map;
    for (let i = 0; i < word_array.length; i++) {
        if (!StringMap.has(word_array[i]))
            StringMap.set(word_array[i], 1);
        else {
            let count = StringMap.get(word_array[i]) + 1;
            StringMap.delete(word_array[i]);
            StringMap.set(word_array[i], count);
        }
    }
    return StringMap;
}
function CountDup(input) {
    let inputMap = StringtoMap(input);
    let dup = 0;
    for (let MapValues of inputMap.values()) {
        if (MapValues > 1) {
            dup += MapValues;
        }
    }
    return dup;
}
console.log("Antwon Lebowski", CountDup("Antwon Lebowski"));

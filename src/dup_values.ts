// https://www.javatpoint.com/typescript-map map functions

//count # of duplicate values in a string
function StringtoMap(input: string){
    var word_array: string[] = input.split('');
    let StringMap = new Map;
    for(let i: number = 0; i < word_array.length; i++){
        if(!StringMap.has(word_array[i]))
            StringMap.set(word_array[i], 1);
        else {
            let count: number = StringMap.get(word_array[i]) + 1;
            StringMap.delete(word_array[i]);
            StringMap.set(word_array[i], count);
        }    
    }     
    return StringMap;
}

function CountDup(input: string): number{
    let inputMap = StringtoMap(input);
    let dup: number = 0;
    for(let MapValues of inputMap.values()){
        if(MapValues > 1){
            dup += MapValues;
        }
    }
    return dup;
}

console.log("Antwon Lebowski", CountDup("Antwon Lebowski"));


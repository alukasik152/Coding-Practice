import { transpileModule } from "typescript";


//count # of duplicate values in a string
interface stringToObj{
    [key: string]: boolean;
} 
function stringToObj(input: string){
    let dupTracker: stringToObj = {};
    let stringArray: string[] = input.split('');
    for(let i: number = 0; i < stringArray.length; i++){
        if(stringArray[i] in dupTracker)
            dupTracker[stringArray[i]] = true;
        else
            dupTracker[stringArray[i]] = false;
    }
    return dupTracker;
}

function countDup(inputObj: stringToObj): number{
    let count = 0;
    let countObj = inputObj;
    for (let value of Object.values(inputObj))
        if (value === true)
            count++;
    return count;
}
let testObj = stringToObj("Josh and Bilbo drink from the same bowl");
console.log(countDup(testObj));

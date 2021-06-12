import { transpileModule } from "typescript";


//count # of duplicate values in a string
interface stringObj{
    [key: string]: boolean;
} 
function stringToObj(input: string){
    let inputObj: stringObj = {};
    let stringArray: string[] = input.split('');
    for(let i: number = 0; i < stringArray.length; i++){
        if(stringArray[i] in inputObj)
            inputObj[stringArray[i]] = true;
        else
            inputObj[stringArray[i]] = false;
    }
    return inputObj;
}

function countDup(inputObj: stringObj): number{
    let count = 0;
    let countObj = inputObj;
    for (let value of Object.values(inputObj))
        if (value === true)
            count++;
    return count;
}
let testObj = stringToObj("Josh and Bilbo drink from the same bowl");
console.log(countDup(testObj));

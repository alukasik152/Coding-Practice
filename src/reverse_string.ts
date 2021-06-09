function ReverseString(input: string): string{
    var reverse: string[] = input.split('');
    var length: number = reverse.length - 1;
    for(var i: number = 0; i < reverse.length/2; i++){
        var temp: string = reverse[i];
        reverse[i]=reverse[length-i];
        reverse[length-i] = temp;
    }
    return reverse.join("");
}
console.log(ReverseString('banana'));
console.log(ReverseString(ReverseString("Rolfe is a boomer")));
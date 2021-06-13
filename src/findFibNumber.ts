function findFib(nthTerm: number){
    if(nthTerm === 0)
        return 0;
    let a = 0;
    let b = 1;
    for(let i = 2; i < nthTerm ;i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return a+b;
}
console.log(findFib(15));

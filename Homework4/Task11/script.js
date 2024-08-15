function sum (arr){
    let finish = 0;
    for (const i of arr){
        finish = finish + i;
    }
    return finish;
}
console.log(sum([1, 2, 10]));
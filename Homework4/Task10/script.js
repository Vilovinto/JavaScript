function arrmin (numbers){
    let min = numbers [0];
    for (const number of numbers){
        if (number < min){
            min = number;
        }
    }
    return min;
}
console.log(arrmin([77, 22, 6, 999, 31]));
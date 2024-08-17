const swap = (arr, index1, index2) =>{
    let temp = arr [index1];
    arr [index1] = arr [index2];
    arr [index2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
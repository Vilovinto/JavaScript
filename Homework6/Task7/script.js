let nums = [11,21,3];
function sortNums (array, direction){
    if(direction === 'ascending'){
        const array = nums.sort((a, b) => a - b);
        return array;
    }
    else if (direction === 'descending'){
        const array = nums.sort((a, b) => b - a);
        return array;
    }
}
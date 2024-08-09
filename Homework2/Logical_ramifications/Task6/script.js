let x = prompt();
if (x === '0'){
    x = 0;
}
if (x === 'false'){
    x = false;
}
if (x === 0 || x === null || x === undefined || x === '' || x === false){
    console.log('default');
}
else{
    console.log('not default');
}
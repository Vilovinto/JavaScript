let num1 = prompt('Введіть перше число, будь яке');
let num2 = prompt('Введіть друге число, будь яке');
if (num1>num2){
    console.log('Перше число'+' '+num1+' '+'найбільше');
}
else if (num1<num2){
    console.log('Друге число'+' '+num2+' '+'найбільше');
}
else if (num1 === num2){
    console.log('Перше число'+' '+num1+' '+'та'+' '+'Друге число'+' '+num2+' '+'рівні');
}
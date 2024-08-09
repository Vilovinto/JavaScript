let day = prompt('Введіть число від 1 до 31');
if(day>=1 && day<10){
    console.log('Перша частина місяця');
}
else if(10<=day && day<20){
    console.log('Друга частина місяця');
}
else if(20<=day && day<=31){
    console.log('Третя частина місяця');
}
else {
    console.log('Невірно');
}
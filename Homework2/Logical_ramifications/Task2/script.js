let time = prompt('Введіть число від 0 до 59');
switch (true){
    case (0<=time && time<15):
        console.log('Перша чверть години')
        break;
    case (15<=time && time<30):
        console.log('Друга чверть години')
        break;
    case (30<=time && time<45):
        console.log('Третя чверть години')
        break;
    case (45<=time && time<60):
        console.log('Четверта чверть години')
        break;
    default:
        console.log('Невірно')
}
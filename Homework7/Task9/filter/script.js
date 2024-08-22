Array.prototype.myFilter = function (predicate){
    const arr = [];
    for (const i of this){
        if(predicate(i)){
            arr.push(i);
        }
    }
    return arr;
};
let users = [
    {name: 'Vlad', password: 4927, status: true},
    {name: 'Sergiy', password: 5893, status: false},
    {name: 'Iryna', password: 5236, status: false},
    {name: 'Andrii', password: 7523, status: true},
    {name: 'Artem', password: 2367, status: false},
    {name: 'Arthur', password: 9651, status: true},
    {name: 'Illia', password: 6622, status: false},
    {name: 'Ostap', password: 7123, status: true},
    {name: 'Volodimir', password: 1214, status: true},
    {name: 'Diana', password: 6351, status: false}
];
const result = users.myFilter((user) => user.status);
console.log(result);
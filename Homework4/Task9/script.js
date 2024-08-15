function mas (users){
    for (const user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
mas([{id: 1, name: 'Vlad', age: 20}, {id: 2, name: 'John', age: 40}, {id: 3, name: 'Anton', age: 35}]);
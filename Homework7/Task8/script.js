class cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
const cinderellas = [
    new cinderella('Viktoria', 19, 35),
    new cinderella('Julia', 21, 38),
    new cinderella('Iryna', 32, 36),
    new cinderella('Sarah', 25, 39),
    new cinderella('Alexis', 26, 34),
    new cinderella('Alice', 29, 37),
    new cinderella('Betty', 30, 40),
    new cinderella('Dorothy', 20, 35),
    new cinderella('Jean', 28, 32),
    new cinderella('Wanda', 26, 34),
]
console.log(cinderellas);
const prince = new Prince('Charles', 26, 36);
console.log(prince);
const cinderellaWin = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
princeWife = cinderellaWin;
console.log(princeWife);
function Car (model, producer, year, maxSpeed, engine){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function (){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue){
        this.year = newValue;
    };
    this.addDriver = function (driver){
        this.driver = driver;
    };
}
const car = new Car ('Kuga', 'Ford', 2005, 195, 150);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2010);
car.addDriver(['Mike']);
console.log(car);
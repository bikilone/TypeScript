function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Tooooooooooot!");
    }

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

/////////////////////////
var baseObject = {
    width:0,
    height: 0
}

var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.height = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
}

console.log(rectangle.calcSize());
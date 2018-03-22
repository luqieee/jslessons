


var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };

    this.logDriver = function () {
        console.log("driver name is " + this.driver)
    };
}

var myCar = new Car(70, "Lucas");
var myCar2 = new Car(70, "Ninja Man");
var myCar3 = new Car(70, "Humpty Dumpty");
var myCar4 = new Car(70, "Shaun");
var myCar5 = new Car(70, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();
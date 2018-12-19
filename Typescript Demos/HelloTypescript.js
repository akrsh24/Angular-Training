var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 100; //type inference
// x="Hello;
var str; // type annotation;
str = "typescript";
var bool;
var anyVar;
anyVar = true;
anyVar = { name: 'Sapient' };
anyVar = ['Angular', 'React'];
if (true) {
    var blockedScoped = 1000; //block scope
    if (true) {
        var blockedScoped_1 = 2000;
        console.log(blockedScoped_1); //local scope has higher priority
    }
    //let does not allow redeclaration of variable
}
var PI = 1.2;
//Arrays
var cars = ['Audi', 'BMW'];
var moreCars = new Array('Suzuki', 'Hyundai');
var allCars = cars.concat(moreCars); //spread operator
console.log(allCars);
//functions
function Add(x, y) {
    if (x < 0)
        return "x+y";
    else
        return x + y;
}
var res = Add(3, 4);
function Test(testMsg) {
}
Test();
function printBooks(title, noOfPages, author) {
    if (title === void 0) { title = "Unknown"; }
    if (noOfPages === void 0) { noOfPages = 0; }
    if (author === void 0) { author = "Unknown"; }
    console.log(title, author, noOfPages);
    //  title = title || "Unknown";  //Javascript way
}
printBooks("India", undefined, "Akarsh");
//Arrow functions
var Square = function (x) {
    return x * x;
};
var SquareAsArrow = function (x) {
    return x * x;
};
var enhancedSquare = function (x) { return x * x; };
allCars.forEach(function (car) {
    console.log(car);
});
allCars.forEach(function (car) { return console.log(car); });
//Classes
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "baleno"; }
        if (speed === void 0) { speed = 300; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        // console.log('The car ' + this.name +' is running at ' + this.speed +' kmph');
        console.log("The car " + this.name + " is running at " + this.speed + " kmph");
    };
    return Car;
}());
var cObj = new Car();
cObj.accelerate();
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly, useNitroPower) {
        var _this = _super.call(this) || this;
        _this.canFly = true;
        _this.useNitroPower = true;
        _this.canFly = canFly;
        _this.useNitroPower = useNitroPower;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        _super.prototype.accelerate.call(this);
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar('Aston Martin', 400, true, true);
var person = {
    name: 'Akarsh', walk: function () {
        console.log('Walking...');
    }
};
var CPerson = /** @class */ (function () {
    function CPerson() {
    }
    CPerson.prototype.walk = function () {
        console.log('Walking again...');
    };
    return CPerson;
}());
//Enhanced Class Syntax
var EnhancedCar = /** @class */ (function () {
    function EnhancedCar(name, speed) {
        if (name === void 0) { name = "Alto"; }
        if (speed === void 0) { speed = 180; }
        this.name = name;
        this.speed = speed;
    }
    return EnhancedCar;
}());
var eObj = new EnhancedCar();

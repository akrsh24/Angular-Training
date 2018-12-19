var x = 100; //type inference
// x="Hello;
var str: string;// type annotation;
str = "typescript";
var bool: boolean;
var anyVar: any;
anyVar = true;
anyVar = { name: 'Sapient' };
anyVar = ['Angular', 'React'];

if (true) {
    let blockedScoped = 1000;  //block scope
    if (true) {
        let blockedScoped = 2000;
        console.log(blockedScoped); //local scope has higher priority
    }
    //let does not allow redeclaration of variable
}

const PI = 1.2;


//Arrays
var cars: string[] = ['Audi', 'BMW'];
var moreCars: Array<string> = new Array<string>
    ('Suzuki', 'Hyundai');

var allCars: string[] = [...cars, ...moreCars]; //spread operator
console.log(allCars);

//functions

function Add(x: number, y: number): number | string { //returning multiple types
    if (x < 0)
        return "x+y";

    else
        return x + y;
}

var res: string | number = Add(3, 4);

function Test(testMsg?: any) {  //? =>> optional arguments

}

Test();

function printBooks(
    title: string = "Unknown",
    noOfPages: number = 0,
    author: string = "Unknown") {
    console.log(title, author, noOfPages);

    //  title = title || "Unknown";  //Javascript way
}

printBooks("India", undefined, "Akarsh");

//Arrow functions

var Square = function (x) {
    return x * x;
}

var SquareAsArrow = (x: number) => {
    return x * x;
}

var enhancedSquare = x => x * x;

allCars.forEach(function (car) {
    console.log(car);
})

allCars.forEach(car => console.log(car));

//Classes

class Car {
    name: string;
    speed: number;
    accelerate(): void {
        // console.log('The car ' + this.name +' is running at ' + this.speed +' kmph');
        console.log
            (`The car ${this.name} is running at ${this.speed} kmph`);
    }

    constructor(name: string = "baleno", speed: number = 300) {
        this.name = name;
        this.speed = speed;
    }
}

var cObj = new Car();
cObj.accelerate();

class JamesBondCar extends Car {
    canFly: boolean = true;
    useNitroPower: boolean = true;
    constructor(name: string, speed: number,
        canFly: boolean, useNitroPower: boolean) {
        super();
        this.canFly = canFly;
        this.useNitroPower = useNitroPower;
    }

    accelerate(): void {
        super.accelerate();
    }
}

var jbc = new JamesBondCar('Aston Martin', 400, true, true);

//interfaces

interface IPerson {
    name: string;
    age?: number;
    walk(): void;
}

var person: IPerson = {
    name: 'Akarsh', walk: () => {
        console.log('Walking...');
    }
};

class CPerson implements IPerson {
    name: string;
    age?: number;
    walk(): void {
        console.log('Walking again...');
    }
}

//Enhanced Class Syntax

class EnhancedCar {
    constructor(public name: string = "Alto", public speed: number = 180) { //defining public access modifier in constructor

    }
}

var eObj = new EnhancedCar();


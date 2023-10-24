//'use strict'
let vehicle = {
    power: 145,
    serialnumber: "1234567890",
    print: function(){
        return `power: ${this.power}, serialnumber: ${this.serialnumber}`;
    }
}
let car = Object.create(vehicle);
car.gears = 5;
console.log(car);
console.log(car.power);
console.log(car.print());
class Vehicle{
    static vehicleCounter = 0
    #mileage
    #power
    constructor(power, serialnumber){
        this.#power = power;
        this.serialnumber = serialnumber;
        this.#mileage = 0;
        Vehicle.vehicleCounter++;
    }
    get power(){
        return this.#power;
    }
    get mileage(){
        return this.#mileage;
    }
    set serialNumber(value){
        if(value){
            this.serialNumber = value;
        }
    }
    static copy(obj){
        if(obj instanceof Vehicle){
        return new Vehicle(obj.power, obj.serialnumber);
        }
        else {
            throw new Error("Can't copy from other types, obj is not instance of Vehicle!");
        }
    }
    print(){
        return `power: ${this.power}, serialnumber: ${this.serialnumber}`;
    }
}
class Car extends Vehicle{
    constructor(gears, power, serialNumber){
        super(power, serialNumber);
        this.gears = gears;
    }
    print(){
        return `power: ${this.power}, serialnumber: ${this.serialnumber} gears: ${this.gears}, mileage: ${this.mileage}`;
    }
}
let vehicle1 = new Vehicle(123,"6456546GF");
console.log(vehicle1);
console.log(vehicle1.power);
vehicle.serialnumber = "";       // wywołanie getter'a
console.log(vehicle1);
let v2 = new Vehicle(123,"342356265");
console.log(Vehicle.vehicleCounter);
car = new Car(5, 234, "3252356ytjyj");
console.log(car.print());
let copy = Vehicle.copy(car);
console.log(copy);
let map = new Map();
map.set({name: "123"}, car);
map.set(2, {name: "Adam"});
console.log(map.size);
console.log(map);
console.log(map.get(1));
console.log(map.has(3));
map.delete(1);
console.log(map);
let objMap ={};     
objMap["1"] = car;         //symulacja mapy za pomoca obiektu
objMap.k2 = {name: "Adam"};
delete objMap["1"];
console.log(objMap);
let set = new Set();      //zbiory
set.add("Adam");
set.add(car);
set.delete("Adam");
console.log(set.has("Adam"));
console.log(set);

//oblicz ile razy każdy z łańcuchów wystepuje w tablicy
let names = ["Ada", "Ewa", "Karol", "Ewa", "Adam", "Ada", "Ewa"];
let uniqueNames = new Set(names);
let mapCounter = new Map();
for(let item of uniqueNames){
    let counter = names.filter((x) => x === item).length;
    mapCounter.set(item,counter);
}
console.log(mapCounter);
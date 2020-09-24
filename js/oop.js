'use strict'

function Vehicle (speed, carrying) {
  this.speed = speed + ' км/ч';
  this.carrying = carrying + " кг";
}

Vehicle.prototype.list = function () {
  console.log('Тип транспорта: ' + (this.type || 'не задан') + ';');
  console.log('Скорость: ' + this.speed + ';');
  console.log('Грузоподъёмность:' + this.carrying + ';');
}

Car.prototype = Object.create(Vehicle.prototype);
Plane.prototype = Object.create(Vehicle.prototype);
Ship.prototype = Object.create(Vehicle.prototype);

function Car (speed, carrying) {
  Vehicle.call(this, speed, carrying);
  this.type = 'наземный';
}

function Plane(speed, carrying) {
  Vehicle.call(this, speed, carrying)
  this.type = 'Воздушный';
}

function Ship(speed, carrying) {
  Vehicle.call(this, speed, carrying);
  this.type = 'Водный';
  this.speed = speed + ' узлов';
}

function alertList(name){
  alert('Тип транспорта: ' + (name.type || 'не задан') + ';' + `\n` 
  + 'Скорость: ' + name.speed + ';' + `\n` 
  + 'Грузоподъёмность:' + name.carrying + ';');
}

let auto = new Car(100, 20000);
let auto1 = new Car(70, 10000);
let plane = new Plane(800 , 8000);
let ship = new Ship(20, 300000);
let s = new Vehicle(50, 40);

console.log(auto);
console.log(auto.list());
console.log(auto1);
console.log(plane);
console.log(plane.list());
console.log(ship);
console.log(ship.list());
console.log(s);
console.log(s.list());

alertList(auto1);

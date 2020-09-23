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


function Car (speed, carrying) {
  Vehicle.call(this, speed, carrying);
  this.type = 'наземный';
}

function Plane(speed, carrying) {
  Vehicle.call(this, speed, carrying)
  this.type = 'Воздушный';
  this.list = function () {
    console.log('Тип транспорта: ' + (this.type || 'не задан') + ';');
    console.log('Скорость: ' + this.speed + ';');
    console.log('Грузоподъёмность:' + this.carrying + ';');
  }
}

Ship.prototype = Vehicle.prototype;

function Ship(speed, carrying) {
  Vehicle.call(this, speed, carrying);
  this.type = 'Водный';
  this.speed = speed + ' узлов';
}

let auto = new Car(100, 20000);
let plane = new Plane(800 , 8000)
let ship = new Ship(20, 300000);
let s = new Vehicle(50, 40);

auto.__proto__ = s;

console.log(auto);
console.log(auto.list());
console.log(plane);
console.log(plane.list());
console.log(ship);
console.log(ship.list());
console.log(s);
console.log(s.list());


/*
Есть класс CoffeeMachine, заданный в функциональном стиле.
Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      console.log( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}
*/

function CoffeeMachine(power)
{
  this._waterAmount = 0;
  this._power = power;
  this.WATER_HEAT_CAPACITY = 4200;
};

CoffeeMachine.prototype.getTimeToBoil = function()
{
  return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.setWaterAmount = function(amount)
{
  this._waterAmount = amount;
};

CoffeeMachine.prototype.run = function()
{
  setTimeout(function() {
    console.log( 'Кофе готов!' );
  }, this.getTimeToBoil());
};


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

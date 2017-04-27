/*
Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные свойства timer, template и метод render.

Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.
*/

function Clock(template)
{
  this._template = template || {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
};

Clock.prototype.render = function()
{
  console.log(new Date().toLocaleString("ru", this._template));
};

Clock.prototype.start = function()
{
  var _self = this;
  this._intervalId = setInterval(function()
  {
    _self.render();
  }, 1000);
};

Clock.prototype.stop = function(sec)
{
  var _self = this;
  if(sec === undefined)
  {
    clearInterval(_self._intervalId);
  }
  else
  {
    setTimeout(function()
    {
      clearInterval(_self._intervalId);
    }, sec * 1000);
  }
};

// var clock = new Clock(
//   {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
//   });
//
// clock.start();
// clock.stop(5); //сек

/*
Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.
*/

function ExtendedClock(template, precision)
{
  Clock.apply(this, arguments);
  this._precision = precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = Clock;

ExtendedClock.prototype.start = function()
{
  var _self = this;
  this._intervalId = setInterval(function()
  {
    _self.render();
  }, _self._precision);
};

var extendedClock = new ExtendedClock(
  {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }, 2000);

extendedClock.start();
extendedClock.stop(5); //сек

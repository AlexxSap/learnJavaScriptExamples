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

// extendedClock.start();
// extendedClock.stop(5); //сек

/*
Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.

Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.

При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру, открытие завершается вызовом open() родителя.
Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.
*/



function Menu()
{
  this._state = Menu.STATE_CLOSED;
};

Menu.prototype.STATE_OPEN = 0;
Menu.prototype.STATE_CLOSED = 1;

Menu.prototype.open = function()
{
  console.log('Menu.open');
  this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function()
{
  console.log('Menu.close');
  this._state = Menu.STATE_CLOSED;
};

Menu.prototype.showState = function()
{
  var stateString = '';
  switch (this._state)
  {
    case Menu.STATE_OPEN:
      stateString = 'открыто';
      break;
    case Menu.STATE_CLOSED:
      stateString = 'закрыто';
      break;
    default:
      stateString = 'всё сложно';
  }
  console.log(stateString);
};


function AnimatingMenu()
{
  Menu.apply(this, arguments);
  AnimatingMenu.STATE_ANIMATING = 2;
};

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.open = function()
{
  console.log('AnimatingMenu.open');
  this._state = AnimatingMenu.STATE_ANIMATING;
  var _self = this;
  this._timerID = setTimeout(function()
  {
    Menu.prototype.open.apply(_self);
  }, 1000);
}

AnimatingMenu.prototype.close = function()
{
  clearTimeout(this._timerID);
  Menu.prototype.close.apply(this);
}

AnimatingMenu.prototype.showState = function()
{
  if(this._state ===  AnimatingMenu.STATE_ANIMATING)
  {
    console.log('анимация!');
  }
  else
  {
    this.prototype.showState.call(this);
  }
};

var menu = new AnimatingMenu();
menu.open();
menu.showState();
menu.close();

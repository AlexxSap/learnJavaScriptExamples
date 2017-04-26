
function Machine(power)
{
  this._enable = false;
  this._power = power;
  var _self = this;

  this.enable = function()
  {
    _self._enable = true;
  };
  this.disable = function()
  {
    _self._enable = false;
  };
}

function CoffeMachine(power)
{
  Machine.apply(this, arguments);

  var _waterAmount;

  this.setWaterAmount = function(amount)
  {
    _waterAmount = amount;
  };

  // var parentEnable = this.enable;
  // this.enable = function()
  // {
  //   parentEnable();
  //   this.run();
  // };

  function onReady()
  {
    console.log('Ready!!!');
  };

  this.run = function()
  {
    console.log('enabled...');
    setTimeout(onReady, 2000);
  };
}

// var coffeMachine = new CoffeMachine(10000);
// coffeMachine.setWaterAmount(1000);
// coffeMachine.enable();
// coffeMachine.run();

/*
В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
*/

function CoffeMachine(power)
{
  Machine.apply(this, arguments);

  var _waterAmount;

  this.setWaterAmount = function(amount)
  {
    _waterAmount = amount;
  };

  function onReady()
  {
    console.log('Ready!!!');
  };

  this.run = function()
  {
    if(!this._enable)
    {
      throw new Error('macine is disabled!!!');
    }
      console.log('enabled...');
      setTimeout(onReady, 2000);
  };
}

// var coffeMachine = new CoffeMachine(10000);
// coffeMachine.setWaterAmount(1000);
// coffeMachine.run();

/*
Когда кофеварку выключают – текущая варка кофе должна останавливаться.
*/

function CoffeMachine(power)
{
  Machine.apply(this, arguments);

  var _waterAmount;

  this.setWaterAmount = function(amount)
  {
    _waterAmount = amount;
  };

  var parentDisable = this.disable;
  var timerID;

  this.disable = function()
  {
    parentDisable();
    console.log('stop macine!');
    clearTimeout(timerID);
  }

  function onReady()
  {
    console.log('Ready!!!');
  };

  this.run = function()
  {
    if(!this._enable)
    {
      throw new Error('macine is disabled!!!');
    }
      console.log('enabled...');
      timerID = setTimeout(onReady, 2000);
  };
}

// var coffeMachine = new CoffeMachine(10000);
// coffeMachine.setWaterAmount(1000);
// coffeMachine.enable();
// coffeMachine.run();
// coffeMachine.disable();


/*
Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
Приватное свойство food хранит массив еды.
Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
Если холодильник выключен, то добавить еду нельзя, будет ошибка.
Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
*/

function Fridge(power)
{
  Machine.apply(this, arguments);

  var _food = [];

  this.addFood = function()
  {
      if(!this._enable)
      {
        throw new Error('fridge is off!!!');
      }

      if(_food.length + arguments.length > this._power / 100)
      {
        throw new Error('fridge is not rubber!!!');
      }

      [].slice.call(arguments).forEach(function(item)
      {
        _food.push(item);
      });
  };

  this.getFood = function()
  {
    return _food.slice();
  }

  this.print = function()
  {
    console.log(_food);
  };

}

// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен

// //создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.print();
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");
//
// var fridgeFood = fridge.getFood();
// console.log( fridgeFood ); // котлета, сок, варенье
//
// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");
//
// console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

/*
Добавьте в холодильник методы:
Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
Публичный метод removeFood(item), который удаляет еду item из холодильника.
*/

function Fridge(power)
{
  Machine.apply(this, arguments);

  var _food = [];

  this.addFood = function()
  {
      if(!this._enable)
      {
        throw new Error('fridge is off!!!');
      }

      if(_food.length + arguments.length > this._power / 100)
      {
        throw new Error('fridge is not rubber!!!');
      }

      [].slice.call(arguments).forEach(function(item)
      {
        _food.push(item);
      });
  };

  this.getFood = function()
  {
    return _food.slice();
  }

  this.print = function()
  {
    console.log(_food);
  };

  this.filterFood = function(filterFunc)
  {
    return _food.filter(filterFunc);
  };

  this.removeFood = function(food)
  {
    _food = _food.filter(function(item) {return item !== food;});
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2

/*
Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.
*/


function Fridge(power)
{
  Machine.apply(this, arguments);

  var _food = [];

  var parentDisable = this.disable;
  this.disable = function()
  {
      if(_food.length)
      {
        throw new Error('fridge not empty');
      }
      parentDisable();
  };

  this.addFood = function()
  {
      if(!this._enable)
      {
        throw new Error('fridge is off!!!');
      }

      if(_food.length + arguments.length > this._power / 100)
      {
        throw new Error('fridge is not rubber!!!');
      }

      [].slice.call(arguments).forEach(function(item)
      {
        _food.push(item);
      });
  };

  this.getFood = function()
  {
    return _food.slice();
  }

  this.print = function()
  {
    console.log(_food);
  };

  this.filterFood = function(filterFunc)
  {
    return _food.filter(filterFunc);
  };

  this.removeFood = function(food)
  {
    _food = _food.filter(function(item) {return item !== food;});
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда

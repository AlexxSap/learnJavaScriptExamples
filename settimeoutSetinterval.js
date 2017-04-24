/*
Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.

P.S. Функция должна использовать setInterval.
*/

var integer = 0;

var id = setInterval(function()
{
  if(integer == 20)
  {
      clearInterval(id);
  }
  else
  {
      console.log(++integer);
  }
}, 100);

/*
Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, но с использованием рекурсивного setTimeout вместо setInterval.
*/


var integer = 0;

var id = setTimeout(function func()
{
  if(integer == 20)
  {
    clearTimeout(id);
  }
  else
  {
    console.log(++integer);
    id = setTimeout(func, 100);
  }
}, 100);

/*
Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.
*/

function delay(f, ms)
{
  return function()
  {
    var saveThis = this;
    var saveArgs = arguments;
    setTimeout(function(){f.apply(saveThis, saveArgs);}, ms);
  }
}

function print()
{
  console.log(arguments);
}

var f = delay(print, 1000);
f('12333', 44, '---');

/*
Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще, чем раз в ms миллисекунд.
«Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.
*/

function debounce(f, ms)
{
  var flag = true;

  return function()
  {
    if(flag)
    {
      flag = false;
      f.apply(this, arguments);
      setTimeout(function(){flag = true}, ms);
    }
    else
    {
        console.log('ignore for ' + [].slice.call(arguments));
    }
  }
}

function print()
{
   console.log(arguments);
};

var f = debounce(print, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3, 4) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(43, 5) }, 1100); // выполнится
setTimeout( function() { f('4443sdf') }, 1500); // игнор

/*
Напишите функцию throttle(f, ms) – «тормозилку», которая возвращает обёртку, передающую вызов f не чаще, чем раз в ms миллисекунд.
У этой функции должно быть важное существенное отличие от debounce: если игнорируемый вызов оказался последним, т.е. после него до окончания задержки ничего нет – то он выполнится.
*/

function throttle(f, ms)
{
  var flag = true;
  var context;
  var args;

  return function()
  {
    if(flag)
    {
      flag = false;
      f.apply(this, arguments);
      setTimeout(function()
      {
        flag = true;
        if(context)
        {
          f.apply(context, args);
          context = null;
          args = null;
        }
      }, ms);
    }
    else
    {
      context = this;
      args = arguments;
    }
  };
}

var f = function(a)
 {
  console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется

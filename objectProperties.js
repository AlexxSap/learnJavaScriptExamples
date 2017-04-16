
/*
Создайте функцию isEmpty(obj),
 которая возвращает true,
 если в объекте нет свойств и false – если хоть одно свойство есть.
*/

function isEmpty(obj)
{
  for(var key in obj)
  {
    return false;
  }
    return true;
}

var empty = {};
console.log(isEmpty(empty));

var notEmpty = {name: 'Вася'};
console.log(isEmpty(notEmpty));

console.log('-----------------------------------------');

/*
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
*/

function sum(obj)
{
  var result = 0;
  for(var key in obj)
  {
      result += +obj[key];
  }
  return result;
}

var salaries = {'Вася': 100, 'Петя': 10, 'Игнат': 1};
console.log(sum(salaries));

/*
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника,
у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».
*/

function maxSum(obj)
{
  if(isEmpty(obj))
  {
    return 'нет сотрудников';
  }
  else
  {
      var maxName = '';
      var maxVal = 0;

      for(var name in obj)
      {
        if(obj[name] > maxVal)
        {
          maxVal = obj[name];
          maxName = name;
        }
      }
      return maxName;
  }
}

var salaries = {'Вася': 100,'Петя': 33,'Маша': 666};
var empty = {};

console.log(maxSum(salaries));
console.log(maxSum(empty));

console.log('-----------------------------------------');

/*
Создайте функцию multiplyNumeric, которая получает объект
 и умножает все численные свойства на 2.
*/
function isNumber(value)
{
  var num = parseFloat(value);
  return !isNaN(num) && isFinite(num);
}

function multiplyNumeric(obj)
{
  for(var key in obj)
  {
    if(isNumber(obj[key]))
    {
      obj[key] *= 2;
    }
  }

  return obj;
}


var object = {width: 100, height: 333, name: 'вася'};
console.log(object);
console.log(multiplyNumeric(object));

var object = {width: null, height: 333, name: 'вася'};
console.log(object);
console.log(multiplyNumeric(object));

var object = {width: undefined, height: 333, name: 'вася'};
console.log(object);
console.log(multiplyNumeric(object));

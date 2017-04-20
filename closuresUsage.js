/*
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
*/

function sum(a)
{
  return function(b)
  {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

/*
Создание объекта: var buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
+
Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:
*/

function makeBuffer()
{
  var accString = '';
  function f(str)
  {
     if(str === undefined)
     {
       return accString;
     }
     else
     {
        accString += str;
     }
  };

  f.clear = function()
  {
      accString = '';
  };

  return f;
}

var buffer = makeBuffer();
buffer('ехали ');
buffer('медведи ');
buffer('на велосипеде');

console.log(buffer());
buffer.clear();
buffer('уоттаквот');
console.log(buffer());

/*
Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.
*/

var users =
[
  {
    name:     'Степан',
    surName:  'Сморковичев',
    age:       666
  },
  {
    name:     'Вася',
    surName:  'Задов',
    age:       88
  },
  {
    name:     'Тарас',
    surName:  'Водолаз',
    age:       11
  }
];

function byField(field)
{
  return function(a, b)
  {
    return a[field] > b[field] ;
  };
}

users.sort(byField('age'));
console.log(users);

users.sort(byField('surName'));
console.log(users);

/*
Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
*/

var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func)
{
  return arr.filter(func);
}

function inBetween(a, b)
{
  return function(item)
  {
    return item >= a && item <= b;
  }
}

function inArray(eArray)
{
  return function(item)
  {
    return eArray.indexOf(item) !== -1;
  }
}

console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2

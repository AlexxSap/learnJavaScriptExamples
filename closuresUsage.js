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

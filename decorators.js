/*
Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.
В этой задаче можно считать, что у функции f ровно один аргумент.
*/

function makeLogging(f, log)
{
  return function(x)
  {
    log.push(x);
    return f.call(this, x);
  }
}

function work(x)
{
  console.log('x = ' + x);
}

var log = [];
work = makeLogging(work, log);

work(1);
work(2);

console.log(log);

/*
Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
*/

function makeLogging(f, log)
{
  return function()
  {
    log.push(arguments);
    return f.apply(this, arguments);
  }
}

function work2()
{
  console.log(arguments);
}

var log = [];
work2 = makeLogging(work2, log);

work2(1, 2, 4);
work2('Жанна', 'мыла', 'раму');
work2(function(a, b){return a + b;});

/*
Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.

В этой задаче функция f имеет только один аргумент, и он является числом.

При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.
*/

function makeCaching(f)
{
  var cache = [];
  return function(x)
  {
      if(!cache[x])
      {
        console.log('cache ' + x);
        cache[x] = f(x);
      }

      return cache[x];
  }
}

function f(x)
{
  return Math.random() * x;
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение

/*
Есть функция sum, которая суммирует все элементы массива:
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
*/

function sumArgs1()
{
    var arr = [].slice.call(arguments); // ненужное копирование
    return arr.reduce(function(a, b) {return a + b;} );
}

function sumArgs2()
{
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b){return a + b;});
}

function sumArgs3()
{
  return [].reduce.call(arguments, function(a, b) {return a + b;});
}

console.log(sumArgs1(1,4,7,0));
console.log(sumArgs2(1,4,7,0));
console.log(sumArgs3(1,4,7,0));

/*
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
*/

function applyAll(func)
{
  return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(Math.max, 22,3,4,5,9));

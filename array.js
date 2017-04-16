/*
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods.
*/

function getLast(array)
{
  return array[array.length - 1];
}

var goods = ['one', 'two', 'three'];
var emptyGoods = [];

console.log(getLast(goods));
console.log(getLast(emptyGoods));

/*
У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
*/

function addLast(array, element)
{
  array.push(element);
  return array;
}

console.log(addLast(goods, 'Компьютер'));

/*
Получить случайное значение из массива
*/

function getRandom(array)
{
  return array[Math.floor(Math.random() * array.length)];
}

var array = ["Яблоко", "Апельсин", "Груша", "Лимон"];
console.log(getRandom(array));


/*
оздайте функцию find(arr, value), которая ищет в массиве arr значение value
и возвращает его номер, если найдено, или -1, если не найдено.
*/

function find(array, value)
{
  return array.indexOf(value);
}

var array = ["Яблоко", "Апельсин", "Груша", "Лимон"];
console.log(find(array, "Апельсин"));
console.log(find(array, "Хреньделёк"));

/*
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr
и возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
*/

function isNumber(value)
{
  var num = parseFloat(value);
  return !isNaN(num) && isFinite(num);
}

function filterRange(arr, a, b)
{
  var newArray = [];
  for(var arrayValue in array)
  {
    if(isNumber(arrayValue))
    {
      var number = +arrayValue;
      if(number <= b && number >= a)
      {
        newArray.push(arrayValue);
      }
    }
  }
  return newArray;
}

var array = ['Вася', 3, 1, -1, 'Петя', 0, 88, -22];
console.log(filterRange(array, -30, 20));
console.log(filterRange(array, 100, 120));
console.log(filterRange(array, 0, 3));

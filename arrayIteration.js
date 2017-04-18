/*
Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
*/

function mapLength(item)
{
  return item.length;
}
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(mapLength);

console.log(arrLength);

/*
На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.
*/

function subArraySum(previousValue, currentItem)
{
    return previousValue + currentItem;
}

function accSum(item, i, arr)
{
    return arr.slice(0, i + 1).reduce(subArraySum);
}

function getSums(arr)
{
  return arr.map(accSum);
}

var arr = [1,2,3,4,5]
var newArr = getSums(arr);
console.log(newArr);

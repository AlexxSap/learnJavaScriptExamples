/*
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом. Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет.
*/

function addClass(obj, cls)
{
  var classes = obj.className ? obj.className.split(' ') : [];
  for(var index = 0; index < classes.length; ++ index)
  {
    if(classes[index] == cls)
    {
      return obj;
    }
  }
  classes.push(cls);
  obj.className = classes.join(' ');
  return obj;
}

var obj  =
{
  className: "это какая-то хрень"
};

console.log(addClass(obj, "ваще"));
console.log(addClass(obj, "хрень"));

/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.
*/

function camelize(str)
{
    var lines = str ? str.split('-'):[];

    for(var index = 1; index < lines.length; ++index)
    {
      lines[index] = lines[index].charAt(0).toUpperCase() + lines[index].slice(1);
    }

    return lines.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("webkit"));

/*
У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами. Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть. Функция должна корректно обрабатывать дублирование класса в строке.
*/

function removeClass(obj, cls)
{
  var classes = obj.className ? obj.className.split(' ') : [];

  for(var index = 0; index < classes.length; ++index)
  {
    if(classes[index] == cls)
    {
      classes.splice(index, 1);
      index--;
    }
  }

  obj.className = classes.join(' ');
  return obj;
}

var obj  =
{
  className: "это хрень какая-то хрень ваще"
};

console.log(removeClass(obj, "ваще"));
console.log(removeClass(obj, "хрень"));


/*
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.
*/

function filterRangeInPlace(arr, a, b)
{
  for(var index = 0; index < arr.length; ++index)
  {
    var value = +arr[index];
    if(value < a || value > b)
    {
      arr.splice(index, 1);
      index--;
    }
  }
}

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // массив изменился: остались [3, 1]

/*
Как отсортировать массив чисел в обратном порядке?
*/

function mySort(a, b)
{
  return (+a < +b);
}

var arr = [5, 2, 1, -10, 8];
arr.sort(mySort)
console.log(arr); // 8, 5, 2, 1, -10

/*
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.
*/

var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();

console.log(arr);
console.log(arrSorted);

/*
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
*/


function randSort(a, b)
{
  return Math.random() - 0.5;
}

var arr = [1, 2, 3, 4, 5];

arr.sort(randSort);
console.log(arr);


/*
Напишите код, который отсортирует массив объектов people по полю age
*/

function ageSort(a, b)
{
  return +a.age > +b.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
people.sort(ageSort);
console.log(people);

/*
Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
*/

function printListLoop(lst)
{
  var temp = lst;
  var str = [];

  while(temp)
  {
    str.push(temp.value);
    temp = temp.next;
  }

  console.log(str);
}

function printListReq(lst)
{
  console.log(lst.value);
  if(lst.next)
  {
    printListReq(lst.next)
  }
}

function printReverseListReq(lst)
{
  if(lst.next)
  {
    printListReq(lst.next)
  }
  console.log(lst.value);
}

function printReverseListLoop(lst)
{
  var temp = lst;
  var str = [];

  while(temp)
  {
    str.unshift(temp.value);
    temp = temp.next;
  }

  console.log(str);
}

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 }

printListLoop(list);
printListReq(list);
printReverseListReq(list);
printReverseListLoop(list);

/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/

function aclean(arr)
{
  var resultArray = [];
  var storage = [];
  for(var index = 0; index < arr.length; ++index)
  {
    var tempStr = arr[index].toLowerCase().split('').sort().join('');
    if(storage.indexOf(tempStr) === -1)
    {
      storage.push(tempStr);
      resultArray.push(arr[index]);
    }
  }

  return resultArray;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(aclean(arr));

/*
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

function unique(arr)
{
    var unqObject = {};
    for(var index = 0; index < arr.length; ++index)
    {
      unqObject[arr[index]] = '';
    }

    return Object.keys(unqObject);
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"];

console.log(unique(strings)); // кришна, харе, 8-()

/*
Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

Как объект Date.
Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
Как число секунд с 01.01.1970.
Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.
*/

function formatDate(date)
{
  // console.log(typeof date);
  if({}.toString.call(date).slice(8, -1) == 'Date')
  {
    var option = {year: '2-digit', month: '2-digit', day: '2-digit' };
    return date.toLocaleString('rus', option);
  }
  else if((typeof date) == 'string')
  {
    var dateArr = date.split('-');
    return formatDate(new Date(dateArr[0], dateArr[1] - 1, dateArr[2]));
  }
  else if((typeof date) == 'number')
  {
    return formatDate(new Date(date * 1000));
  }
  else if(Array.isArray(date))
  {
      return formatDate(new Date(date[0], date[1], date[2]));
  }
}

console.log(formatDate('2011-10-02')); // 02.10.11
console.log(formatDate(1234567890)); // 14.02.09
console.log(formatDate([2014, 0, 1])); // 01.01.14
console.log(formatDate(new Date(2014, 0, 1))); // 01.01.14

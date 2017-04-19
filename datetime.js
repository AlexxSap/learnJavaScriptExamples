/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
*/

var date = new Date(2012, 1, 20, 3, 12);
console.log(date.toLocaleString('rus'));

/*
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
*/

function getWeekDay(date)
{
  return ['вс','пн','вт','ср','чт','пт','сб'] [date.getDay()];
}

var date = new Date(2017, 3, 19);
console.log(getWeekDay(date));

/*
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
*/

function getLocalDay(date)
{
  if(date.getDay() === 0) return 7;
  return date.getDay();
}

var date = new Date(2017, 3, 19);
console.log(getLocalDay(date));

var date = new Date(2017, 3, 23);
console.log(getLocalDay(date));

/*
Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
*/

function getDateAgo(date, days)
{
  var newdate = new Date(date);
  newdate.setDate(date.getDate() - days);
  return newdate.getDate();
}

var date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 365)); // 2, (2 января 2014)

/*
Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
Параметры:
year – 4-значный год, например 2012.
month – месяц от 0 до 11.
Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month)
{
  var date = new Date(year, month + 1, 1);
  date.setDate(date.getDate() - 1);
  return date.getDate();
}

console.log(getLastDayOfMonth(2017, 3));
console.log(getLastDayOfMonth(2012, 1));

/*
Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
*/

function getSecondsToday()
{
  var currentDate = new Date();
  var currentStart = new Date();
  currentStart.setHours(0,0,0,0);

  return Math.floor((currentDate - currentStart) / 1000);
}

console.log(getSecondsToday());

/*
Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
*/

function getSecondsToTomorrow()
{
  var today = new Date();
  var tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  return Math.floor((tomorrow - today) / 1000);
}

console.log(getSecondsToTomorrow());

/*
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг
*/

function formatTo2Digit(str)
{
  console.log(str.length);
  if(str.length == 1)
  {
    return ('0' + str);
  }
  if(str.length > 2)
  {
      return str.slice(-2);
  }

  return str;
}

function formatDate(date)
{
  return formatTo2Digit(date.getDate().toString()) + '.'
    + formatTo2Digit((date.getMonth() + 1).toString()) + '.'
    + formatTo2Digit(date.getFullYear().toString()) ;
}

console.log(formatDate(new Date));
console.log(formatDate(new Date(2017, 3, 5, 2, 5, 5)));

/*
Добавить в конструктор Article:
Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.
Пусть вызов Article.showStats() выводит то и другое.
*/

function Article()
{
  Article.counter++;
  Article.time = new Date();

  Article.showStats = function()
  {
    console.log("Всего:" + Article.counter + ", Последняя: " + Article.time);
  };
}
Article.counter = 0;

new Article();
new Article();
Article.showStats();

new Article();
Article.showStats();

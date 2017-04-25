/*
Напишите конструктор User для создания объектов:
С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.
*/

function User()
{
  var firstName_;
  var surname_;

  Object.defineProperties(this,
    {
      firstName:
      {
        set: function(str){firstName_ = str;}
      },
      surname:
      {
        set: function(str){surname_ = str;}
      }
    });

    this.getFullName = function()
    {
      return firstName_ + ' ' + surname_;
    };
}

var user = new User();
user.firstName = 'Вася'
user.surname = 'Задов';

console.log(user.getFullName());

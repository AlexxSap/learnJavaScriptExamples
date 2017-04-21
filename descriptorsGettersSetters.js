/*
Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName. Имя и фамилия всегда разделяются пробелом.
Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:
*/

function User(fullName)
{
  this.fullName = fullName;

  function getFirst(fullName)
  {
    return fullName.split(' ')[0];
  };

  function getLast(fullName)
  {
    return fullName.split(' ')[1];
  };

  Object.defineProperties(this, {
    firstName:
    {
      get: function()
      {
          return getFirst(this.fullName);
      },
      set: function(name)
      {
        this.fullName = name + ' ' +  getLast(this.fullName);
      }
    },
    lastName:
    {
      get: function()
      {
          return getLast(this.fullName);
      },
      set: function(name)
      {
        this.fullName = firstName + ' ' + getFirst(this.fullName);
      }
    }
  });
};

var usr = new User("Василий Задов");
console.log(usr.fullName);
console.log(usr.firstName);
console.log(usr.lastName);

usr.firstName = "Тарас";
console.log(usr.fullName);

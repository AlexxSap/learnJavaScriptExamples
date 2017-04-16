/*
    Создайте пустой объект user.
    Добавьте свойство name со значением Вася.
    Добавьте свойство surname со значением Петров.
    Поменяйте значение name на Сергей.
    Удалите свойство name из объекта.
*/

var user = {};
user.name = 'Вася';
user.surname = 'Петров';

console.log(user);

user.name = 'Сергей';

console.log(user);

delete user.name;

console.log(user);

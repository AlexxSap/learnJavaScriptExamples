/*
Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.
*/

// function func()
// {
//   console.log('some text');
// };
//
// Function.prototype.defer = function(ms)
// {
//   setTimeout(this, ms);
// }
//
// console.log("start");
// func.defer('some text');

/*
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
*/

function func(text)
{
  console.log(text);
}

Function.prototype.defer = function(ms)
{
  var _self = this;
  return function()
  {
    var context = this;
    var args = arguments;
    setTimeout(function()
    {
      _self.apply(context, args);
    }, ms);
  };
}

console.log('start');
func.defer(1000)('some text');

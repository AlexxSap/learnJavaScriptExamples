/*
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
*/

function Calculator()
{
    this.read = function(A, B)
    {
      this.a = A;
      this.b = B;
    };

    this.sum = function()
    {
      return this.a + this.b;
    };

    this.mul = function()
    {
      return this.a * this.b;
    };
}

var calculator = new Calculator();
calculator.read(5, 10);

console.log(calculator.sum());
console.log(calculator.mul());

/*
Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
Более формально, объект должен:
Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.
*/

function Accumulator(initValue)
{
  this.value = initValue;

  this.read = function(val)
  {
    this.value += +val;
  };

  this.printValue = function()
  {
    console.log('value = ' + this.value);
  }
}

var acc = new Accumulator(1);
acc.read(4);
acc.read("4");
acc.printValue();

/*
Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
Эта задача состоит из двух частей, которые можно решать одна за другой.
Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
Поддержка скобок и сложных математических выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
*/

function Calculator2()
{
  this.lib =
  {
      '+' : function(a, b){ return a + b;},
      '-' : function(a, b){ return a - b;}
  };

  function trim(str)
  {
    return str
    .split(' ')
    .filter(function(item) { return item != '';})
    .join(' ');
  };

  this.addMethod = function(opName, func)
  {
      this.lib[opName] = func;
  };

  this.calculate = function(str)
  {
    str = trim(str);
    var index = str.indexOf(' ');
    this.first = +str.slice(0, index);
    str =  str.slice(index + 1) ;

    index = str.indexOf(' ');
    this.operation = str.slice(0, index);
    str =  str.slice(index + 1);

    this.second = +str;

    if(this.lib[this.operation])
    {
      return this.lib[this.operation](this.first, this.second);
    }
    else
    {
      return 'not supported operation ' + this.operation ;
    }
  };
}

var calc = new Calculator2();

console.log(calc.calculate('3 + 2'));
console.log(calc.calculate(' 100  +  111 '));
console.log(calc.calculate(' 100  -  111 '));

console.log(calc.calculate(' 2  *  1131 '));
calc.addMethod('*', function(a, b){return a * b;});
console.log(calc.calculate(' 2  *  1131 '));

calc.addMethod('pow', function(a, b){return Math.pow(a, b);});
console.log(calc.calculate(' 2  pow  13 '));

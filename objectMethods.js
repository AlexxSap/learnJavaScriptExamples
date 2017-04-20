/*
Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
*/

// вариант 1
function makeCalculator()
{
  function f()
  {
    var a = 0;
    var b = 0;
  }

  f.readA = function(A)
  {
    this.a = A;
  }

  f.readB = function(B)
  {
    this.b = B;
  };

  f.mul = function()
  {
    return this.a * this.b;
  };

  f.sum = function()
  {
    return this.a + this.b;
  };

  return f;
}

var calculator = makeCalculator();

calculator.readA(100);
calculator.readB(15);

console.log(calculator.mul());
console.log(calculator.sum());

calculator.readA(30);

console.log(calculator.mul());
console.log(calculator.sum());


// вариант 2

var calculator =
{
  read: function(a, b)
  {
    this.a = a;
    this.b = b;
  },

  sum: function()
  {
    return this.a + this.b;
  },

  mul: function()
  {
    return this.a * this.b;
  }
};

calculator.read(10, 23);

console.log(calculator.sum());
console.log(calculator.mul());


/*
Есть объект «лестница» ladder.
*/

var ladder =
{
  step: 0,
  up: function()
  {
    this.step++;
  },
  down: function()
  {
    this.step--;
  },
  showStep: function()
  {
    console.log(this.step);
  }
};

ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep()

/*
Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так ladder.up().up().down().up().down().showStep(); // 1
*/

var ladder =
{
  step: 0,
  up: function()
  {
    this.step++;
    return this;
  },
  down: function()
  {
    this.step--;
    return this;
  },
  showStep: function()
  {
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().up().down().showStep();

/*
Превратите объект leader из примера ниже в JSON:
После этого прочитайте получившуюся строку обратно в объект.
*/

var leader =
{
  name: "Монти Бернс",
  age: 104
};

var jString = JSON.stringify(leader, "", 2);
console.log(jString);
var newLeader = JSON.parse(jString);
console.log(newLeader);

/*
Превратите объект team из примера ниже в JSON:
*/

var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

leader.soldier = soldier;
soldier.leader = leader;

// console.log(soldier.leader);

var team = [leader, soldier];

function objectArrayToJson(arr)
{
  var objectArray = [];

  for(var index = 0; index < arr.length; index++)
  {
    if(arr[index].leader)
    {
      objectArray[index] = arr[index].leader.name;
    }
    else if(arr[index].soldier)
    {
      objectArray[index] = arr[index].soldier.name;
    }
  }

  var str = JSON.stringify(objectArray);
  str += JSON.stringify(arr, function(key, value)
  {
    if(key == 'leader' || key == 'soldier')
    {
      return  objectArray.indexOf(value.name);
    }
    else
    {
      return value;
    }
  }, 2);

  return str;
}

console.log(objectArrayToJson(team));

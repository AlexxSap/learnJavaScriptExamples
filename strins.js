function ucFirst(str)
{
    return str?str[0].toUpperCase() + str.slice(1):undefined;
}

console.log(ucFirst('qwer'));
console.log(ucFirst(''));

console.log('---------------------------------------');

function checkSpam(str, noiseWord)
{
  if(!noiseWord)
  {
    return false;
  }
  return str.toLowerCase().indexOf(noiseWord.toLowerCase()) !== -1;
}

console.log(checkSpam('buy this sheat', 'buy'));
console.log(checkSpam('', 'buy'));
console.log(checkSpam('buy this sheat', ''));

console.log('---------------------------------------');

function truncate(str, maxLenth)
{
  if(str.length > maxLenth)
  {
    return str.slice(0, maxLenth - 3) + '...';
  }
  return str;
}

console.log(truncate('some large string', 10));
console.log(truncate('some large string', 100));

console.log('---------------------------------------');

function extractCurrencyValue(str)
{
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

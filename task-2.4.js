const formatString = function(string) {
  const arr1 = string.split('');
      
    if (arr1.length <= 40){
      return string;
    }
    else {
    const arr2 = arr1.slice(0, 39,);
    arr2.push('...')
   
    const newString = arr2.join('');
    console.log(newString);
    }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка